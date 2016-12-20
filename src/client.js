/**
 * Created by perceval on 11/12/2016.
 */

const MongoParser = require('../src/index').MongoParser;
const treeify = require('treeify');
const _ = require('lodash');

const KEYS = {
    backspace: 8,
    tab: 9,
    enter: 13,
    escape: 27,
    space: 32,
    up: 38,
    down: 40,
    left: 37,
    right: 39,
    delete: 46,
    comma: 188
};

angular.module('app', []);
angular.module('app').filter('tree', function() {
   return obj => treeify.asTree(obj, true);
});

class MainController {
    constructor($scope) {
        this.input = "ask == 5 AND mid == 6";
        this.mongoParser = new MongoParser({
            parsed: [{
                match: (t) => t.symbol == "AND",
                class_names: (e) => 'group-operator'
            }],
            error: {
                message: (e) => 'Expected\xA0:\xA0/',// + e.expected.join(',\xA0'),
                class_names: (e) => 'err ge-tooltip-error' + (e.text == "<EOF>" ? ' eof': '')
            }
        });
        this.parse = this.parse.bind(this);
    }

    parse(raw) {
        console.log("INPUT", '"' + raw + '"');
        this.output = this.mongoParser.parse(this.input);
        return this.output.highlights;
    }
}
angular.module('app').controller('MainController', MainController);

function getCaret(element) {
    var caretOffset = 0;
    var doc = document;
    var win = doc.defaultView || doc.parentWindow;
    var sel;
    if (typeof win.getSelection != "undefined") {
        sel = win.getSelection();
        if (sel.rangeCount > 0) {
            var range = win.getSelection().getRangeAt(0);
            var preCaretRange = range.cloneRange();
            preCaretRange.selectNodeContents(element);
            preCaretRange.setEnd(range.endContainer, range.endOffset);
            caretOffset = preCaretRange.toString().length;
        }
    }
    else
        return null;
    return caretOffset;
}
function findElement(e, pos, done) {
    var acc = 0;
    if (e.nodeName === "#text") {
        if (e.nodeValue && e.nodeValue.length <= pos) {
            acc += e.nodeValue.length;
        }
        else {
            return [pos, e, true];
        }
    }
    var last_not_empty = null;
    for (var i=0; i<e.childNodes.length; i++) {
        var c = e.childNodes[i];
        var res = findElement(c, pos - acc);
        if (res[0] > 0)
            last_not_empty = res;
        acc += res[0];
        var finished = res[2]
        if (finished) {
            return res;
        }
    }
    return last_not_empty ? last_not_empty : [acc, e, false];
}
function setCaret(el, pos) {
    var res = findElement(el, pos);
    var element = res[1];
    var offset = res[0];
    if (element) {
        var range = document.createRange();
        var sel = window.getSelection();
        range.setStart(element, offset);
        range.collapse(true);
        sel.removeAllRanges();
        sel.addRange(range);
        if (!element.focus)
            element.parentNode.focus();
        else
            element.focus();
    }
}

angular.module('app').run([
    "$templateCache",
    function($templateCache) {
        $templateCache.put('grammar-editor.html',
            `<div class="ge-host" transclude-append><div class = "form-control ge-input" contenteditable rows="5"></div></div>`
        );
    }
]);



angular.module('app').directive("grammarEditor", ['$timeout', 'utils', function($timeout, utils) {
    return {
        restrict: 'E',
        templateUrl: 'grammar-editor.html',
        replace: false,
        transclude: true,
        scope: {
            text: '=ngModel',
            parseAction: '=parse'
        },
        controller: function ($scope) {
            $scope.events = utils.simplePubSub();

            this.registerAutocomplete = function() {
                return {
                    on: function(name, handler) {
                        $scope.events.on(name, handler, true);
                        return this;
                    },
                    replace_content: function(text, begin, end) {
                        text = ($scope.text.substr(begin-1, 1) == " ") ? text : ' ' + text;
                        console.log("replacing", begin, end, text, $scope.text.substr(begin, end-begin+1));
                        $scope.text = utils.spliceSlice($scope.text, begin, end-begin+1, text);
                        $scope.caret = begin+text.length+1;
                        $scope.$apply();
                        console.log(text, begin, end, $scope.text);
                    }
                };
            }
        },
        link: function(scope, root_element, attrs) {
            var events = scope.events;
            var element = angular.element(angular.element(root_element.children()[0]).children()[0]);
            scope.highlights = [];
            scope.caret = 0;
            scope.text = scope.text || "";

            var readCaret = function() {
                var new_value = getCaret(element[0]);
                if (new_value != scope.caret) {
                    scope.caret = new_value;
                    return true;
                }
                return false;
            };

            var readView = function() {
                var new_value = element[0].textContent.replace(/\xA0/g," ");
                var caret_change = readCaret();
                if (new_value != scope.text) {
                    scope.text = new_value;
                    return true;
                }
                return caret_change;
            };

            var updateHighlights = function() {
                const prev_hide_at_caret = document.getElementsByClassName('hide-at-caret');
                for (let j=0; j<prev_hide_at_caret.length; j++) {
                    let c = prev_hide_at_caret[j];
                    c.className = c.className.replace(/(?:^|\s)hide-at-caret(?!\S)/g, '');
                }

                let has_suggestions = false;
                _.each(scope.highlights, (h, i) => {
                    const is_at_caret = (h.begin <= scope.caret && scope.caret <= h.end + 1);

                    if (is_at_caret) {
                        console.log("caret at ", i);
                        var caret_element = angular.element(document.getElementById('ge-err-' + i));
                        caret_element[0].className += ' hide-at-caret';
                        if (h.suggestions) {
                            has_suggestions = true;
                            events.trigger('update-suggestions', {
                                suggestions: h.suggestions,
                                caret_element: caret_element,
                                begin: h.begin,
                                end: h.end,
                            });
                        }
                    }

                });
                if (! has_suggestions)
                    events.trigger('hide-suggestions');

            };

            var render = function() {
                var a = scope.text.replace(/ /g,'\xA0').split('').map(i => [i]).concat([[]]);
                if (scope.highlights) {
                    _.each(scope.highlights, (h, i) => {
                        var attrs = {
                            "class": '',// + (h.begin == a.length-1) ? 'eof' : '',
                            "id": "ge-err-"+i
                        };
                        attrs["class"] += ' ' + h.class_names;
                        if (h.message) {
                            attrs["tooltip"] = h.message;
                            attrs["class"] += ' ' + 'ge-tooltip';
                        }
                        a[h.begin].splice(0, 0, "<span " + _.map(attrs, (v, k) => k+'='+'"'+v+'"').join(' ') + '>');
                        a[h.end].splice(a[h.end].length, 0, "</span>");
                    });
                }

                var text_to_show = _.flatten(a, false).join('');
                console.log("SHOW", text_to_show);
                element.html(text_to_show);
                setCaret(element[0], scope.caret);
                updateHighlights();
            };

            scope.$watch('text', function() {
                scope.highlights = scope.parseAction(scope.text);
                render();
            });

            scope.$watch('[text, caret]', function(new_values, old_values) {
                if (new_values[0] != old_values[0])
                    return; // Other watcher is taking care of everything
                updateHighlights();
            });

            // Event listeners

            scope.eventHandlers = {
                element: {
                    keydown: function ($event) {
                        events.trigger('keydown', $event);
                    },
                    keyup: function ($event) {
                        events.trigger('keyup', $event);
                    },
                    focus: function ($event) {
                        events.trigger('focus', $event);
                    },
                    blur: function ($event) {
                        events.trigger('blur', $event);
                    },
                    paste: function ($event) {
                        events.trigger('paste', $event);
                    },
                    input: function ($event) {
                        events.trigger('input', $event);
                    }
                }
            };

            _.forOwn(scope.eventHandlers.element, (fn, event_name) => {
                element.on(event_name, fn);
            });

            events.on('keydown blur paste input', () => {
               if (readView())
                   scope.$apply();
            });

            events.on('keyup click', ($event) => {
                const key = $event.keyCode;
                if (key == KEYS.right || key == KEYS.left || !key) {
                    if (readCaret())
                       scope.$apply();
                }
            });
        }
    };
}]);

angular.module('app').directive('transcludeAppend', function() {
    return function(scope, element, attrs, ctrl, transcludeFn) {
        transcludeFn(function(clone) {
            element.append(clone);
        });
    };
});

angular.module('app').directive("geAutocomplete", ['$timeout', 'utils', function($timeout, utils) {
    return {
        restrict: 'E',
        require: '^grammarEditor',
        template: `
            <ul class="dropdown-menu" ng-style = "suggestion_style">
                <li ng-repeat="suggestion in suggestions">
                    <a ng-class="getSuggestionClass(suggestion, $index)">{{suggestion}}</a>
                </li>
            </ul>`,
        scope: true,
        replace: true,
        transclude: true,
        controller: function ($scope) {
            $scope.events = utils.simplePubSub();
        },
        link: function(scope, root_element, attrs, geCtrl) {
            var grammarEditor = geCtrl.registerAutocomplete();

            scope.suggestions = [];
            scope.active_suggestion_index = 0;
            scope.begin = null;
            scope.end = null;

            scope.getSuggestionClass = function(item, $index) {
                console.log($index, scope.active_suggestion_index);
                return {
                    'selected': $index == scope.active_suggestion_index
                };
            };

            grammarEditor.on('update-suggestions', function(event) {
                console.log("SUGGESTIONS", event);
                scope.suggestions = event.suggestions;
                var position = {
                    left: event.caret_element.prop('offsetLeft'),
                    top: event.caret_element.prop('offsetTop') + event.caret_element[0].offsetHeight
                };
                scope.begin = event.begin;
                scope.end = event.end;

                scope.suggestion_style = {
                    top: position.top + 'px',
                    left: position.left + 'px'
                };
            });

            grammarEditor.on('hide-suggestions', function(event) {
                scope.suggestions = [];
                scope.suggestion_style = {
                    display: 'none'
                };
            });
            grammarEditor.on('keydown', function($event) {
                const key = $event.keyCode;
                if (key == KEYS.down) {
                    scope.active_suggestion_index = (scope.active_suggestion_index + 1 || 0) % scope.suggestions.length;
                    scope.$apply();
                }
                else if (key == KEYS.up) {
                    scope.active_suggestion_index = (scope.active_suggestion_index - 1 || 0) % scope.suggestions.length;
                    scope.$apply();
                }
                else if (key == KEYS.enter)
                    grammarEditor.replace_content(scope.suggestions[scope.active_suggestion_index], scope.begin, scope.end);
                else {
                    return;
                }
                $event.preventDefault();
                $event.stopImmediatePropagation();
            });
        }
    };
}]);
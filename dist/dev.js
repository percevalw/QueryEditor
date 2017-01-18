'use strict';

/**
 * Created by perceval on 11/12/2016.
 */

var MongoParser = require('../src/index').MongoParser;
var treeify = require('treeify');

var main = function main(input) {
    var mongo_parser = new MongoParser({
        parsed: [{
            match: function match(t) {
                return t.symbol == "AND";
            },
            class_names: function class_names(e) {
                return 'group-operator';
            }
        }],
        error: {
            message: function message(e) {
                return 'Expected\xA0:\xA0/';
            }, // + e.expected.join(',\xA0'),
            class_names: function class_names(e) {
                return 'err ge-tooltip-error' + (e.text == "<EOF>" ? ' eof' : '');
            }
        }
    });
    var output = mongo_parser.parse(input);

    console.log(treeify.asTree(output, true));
};

main("ask == 5 AND mid == 6 AND trades IN 5,6");
"use strict";

// region INCLUDES

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var antlr4 = require('antlr4/index');
var GrammarLexer = require('../gen/GrammarLexer');
var GrammarParser = require('../gen/GrammarParser');
var Trees = require('antlr4/tree/Trees').Trees;
var RuleContext = require('antlr4/RuleContext');
var Utils = require('antlr4/Utils');
var util = require('util');
var ErrorListener = require('antlr4/error/ErrorListener').ErrorListener;
var _ = require('lodash');
// endregion INCLUDES

// region ParserErrorListener Definition

function ParserErrorListener() {
    ErrorListener.call(this);
    this.errors = [];
    return this;
}

ParserErrorListener.prototype = Object.create(ErrorListener.prototype);
ParserErrorListener.prototype.constructor = ParserErrorListener;

ParserErrorListener.prototype.syntaxError = function (recognizer, offendingSymbol, line, column, msg, e) {
    console.log(recognizer);
    var expected_tokens = recognizer._errHandler.getExpectedTokens(recognizer);
    var expected_tokens_names = [];

    for (var i = 0; i < expected_tokens.intervals.length; i++) {
        var v = expected_tokens.intervals[i];
        for (var j = v.start; j < v.stop; j++) {
            expected_tokens_names.push(expected_tokens.elementName(recognizer.literalNames, recognizer.symbolicNames, j));
        }
    }

    var t = recognizer.getCurrentToken();
    var text = recognizer.getTokenErrorDisplay(t);
    text = text.substr(1, text.length - 2);
    this.errors.push({
        expected: expected_tokens_names,
        text: text,
        begin: t.start,
        end: text == "<EOF>" ? t.start : t.stop
    });
};

ParserErrorListener.prototype.reset = function () {
    this.errors = [];
};

ParserErrorListener.INSTANCE = new ParserErrorListener();
// endregion

var AstMongoTransformer = function () {
    function AstMongoTransformer() {
        _classCallCheck(this, AstMongoTransformer);

        this.operatorToMongo = this.operatorToMongo.bind(this);
        this.literalToMongo = this.literalToMongo.bind(this);
        this.arrayToMongo = this.arrayToMongo.bind(this);
        this.criteriaToMongo = this.criteriaToMongo.bind(this);
        this.queryToMongo = this.queryToMongo.bind(this);
        this.process = this.process.bind(this);

        this.highlights = [];
    }

    _createClass(AstMongoTransformer, [{
        key: 'operatorToMongo',
        value: function operatorToMongo(operator) {
            return {
                '==': '$eq',
                '>=': '$gte',
                '<=': '$lte',
                '<': '$lt',
                '>': '$gt',
                'AND': '$and',
                'IN': '$in',
                'OR': '$or'
            }[operator.text];
        }
    }, {
        key: 'literalToMongo',
        value: function literalToMongo(literal) {
            if (literal.children[0].symbol == 'NUMBER') return parseInt(literal.children[0].text);else if (literal.children[0].symbol == 'STRING') return literal.children[0].text.substr(1, literal.children[0].text.length - 2);
        }
    }, {
        key: 'arrayToMongo',
        value: function arrayToMongo(array) {
            return array.children.filter(function (c) {
                return c.rule == 'literal';
            }).map(this.literalToMongo);
        }
    }, {
        key: 'criteriaToMongo',
        value: function criteriaToMongo(criteria) {
            if (criteria.children[2].rule == 'literal') {
                return _defineProperty({}, criteria.children[0].text, _defineProperty({}, this.operatorToMongo(criteria.children[1]), this.literalToMongo(criteria.children[2])));
            } else {
                return _defineProperty({}, criteria.children[0].text, _defineProperty({}, this.operatorToMongo(criteria.children[1]), this.arrayToMongo(criteria.children[2])));
            }
        }
    }, {
        key: 'queryToMongo',
        value: function queryToMongo(query) {
            var _this = this;

            var group_operator = null;
            console.log("QUERY", query);
            if (query.children.length == 1) return this.criteriaToMongo(query.children[0]);else if (query.children.length == 3) group_operator = query.children[1];else if (query.children.length == 5) group_operator = query.children[2];
            var transformed = query.children.filter(function (c) {
                return c.rule == 'query' || c.rule == 'criteria';
            }).map(function (c) {
                return c.rule == 'query' ? _this.queryToMongo(c) : _this.criteriaToMongo(c);
            });
            return _defineProperty({}, this.operatorToMongo(group_operator), transformed);
        }
    }, {
        key: 'astToJSON',
        value: function astToJSON(tree, ruleNames, recognizer) {
            var _this2 = this;

            ruleNames = ruleNames || null;
            recognizer = recognizer ? recognizer : tree ? tree.parser : null;
            if (recognizer) {
                ruleNames = recognizer.ruleNames;
            }

            var s = Trees.getNodeText(tree, ruleNames);

            var res = {};
            if (tree instanceof RuleContext.RuleContext) {
                var altNumber = tree.getAltNumber();
                if (altNumber != RuleContext.INVALID_ALT_NUMBER) {
                    res.rule = ruleNames[tree.ruleIndex] + ":" + altNumber;
                }
                res.rule = ruleNames[tree.ruleIndex];
            } else if (tree.symbol) {
                res.symbol = recognizer.literalNames[tree.symbol.type] || recognizer.symbolicNames[tree.symbol.type]; //.toString(recognizer.literalNames, recognizer.symbolicNames))
                res.text = tree.symbol.text;
                res.begin = tree.symbol.start;
                res.end = tree.symbol.stop;

                if (res.symbol) this.tokens.push(res);
            }
            res.children = Trees.getChildren(tree).map(function (c) {
                return _this2.astToJSON(c, ruleNames, recognizer);
            });
            return res;
        }
    }, {
        key: 'process',
        value: function process(antlr_tree, no_query) {
            this.tokens = [];
            var ast = this.astToJSON(antlr_tree);
            return {
                ast: no_query ? null : this.queryToMongo(ast.children[0]),
                tokens: this.tokens
            };
        }
    }]);

    return AstMongoTransformer;
}();

var MongoParser = function () {
    function MongoParser(syntax) {
        _classCallCheck(this, MongoParser);

        this.get_suggestions = this.get_suggestions.bind(this);
        this.apply_syntax = this.apply_syntax.bind(this);
        this.syntax = syntax;
        this.symbol_token_mapping = {
            'LIT_VAR': ['name', 'size', 'color', 'price'],
            'ENS_VAR_SINGULAR': ['part', 'friend'],
            'ENS_VAR_PLURAL': ['parts', 'friends'],
            'LIT_OPERATOR': ['==', '>=', '<='],
            'ENS_OPERATOR': ['in', 'not in'],
            '(': [],
            ')': [],
            '<EOF>': []
        };
    }

    _createClass(MongoParser, [{
        key: 'get_suggestions',
        value: function get_suggestions(expected, existing) {
            var _this3 = this;

            console.log("EXPECTED", expected);
            var suggestions = _.flatten(expected.map(function (t) {
                var symbol_suggestions = _this3.symbol_token_mapping[t] || t;
                return symbol_suggestions || [];
            }), true);
            var filtered = suggestions.filter(function (suggestion) {
                console.log("EXISINTG", suggestion, existing);
                return suggestion.substr(0, existing.length) == existing;
            });
            if (filtered.length == 0) {
                return suggestions;
            }
            return filtered;
        }
    }, {
        key: 'apply_syntax',
        value: function apply_syntax(tokens, errors) {
            var _this4 = this;

            var res = {};
            if (this.syntax.parsed) tokens.forEach(function (t) {
                var class_names = _this4.syntax.parsed.filter(function (s) {
                    return s.match(t);
                }).map(function (s) {
                    return s.class_names(t);
                });
                res[t.begin + '-' + t.end] = {
                    begin: t.begin,
                    end: t.end,
                    class_names: class_names.join(' ')
                };
            });
            errors.forEach(function (e) {
                res[e.begin + '-' + e.end] = {
                    begin: e.begin,
                    end: e.end,
                    class_names: _this4.syntax.error.class_names(e),
                    suggestions: _this4.get_suggestions(e.expected, e.text),
                    message: _this4.syntax.error.message(e)
                };
            });
            console.log(res);
            return _.values(res);
        }
    }, {
        key: 'parse',
        value: function parse(input) {
            console.log("PARSER INPUT", input);
            var error_listener = new ParserErrorListener();
            var chars = new antlr4.InputStream(input);
            var lexer = new GrammarLexer.GrammarLexer(chars);
            var tokens = new antlr4.CommonTokenStream(lexer);
            var parser = new GrammarParser.GrammarParser(tokens);
            parser.literalNames = parser.literalNames.map(function (n) {
                return !n ? null : n.substr(1, n.length - 2);
            });
            parser.removeErrorListeners();
            parser.addErrorListener(error_listener);

            parser.buildParseTrees = true;
            var tree = parser.main();

            var visitor_res = ast_mongo_transformer.process(tree, error_listener.errors.length > 0);
            console.log("ERROR", error_listener.errors);
            var errors = error_listener.errors;
            return {
                mongo_query: visitor_res.ast,
                highlights: this.apply_syntax(visitor_res.tokens, errors)
            };
        }
    }]);

    return MongoParser;
}();

var ast_mongo_transformer = new AstMongoTransformer();

module.exports = { MongoParser: MongoParser };
//# sourceMappingURL=dev.js.map

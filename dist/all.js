/**
 * Created by perceval on 11/12/2016.
 */
"use strict";
'use strict';

/**
 * Created by perceval on 11/12/2016.
 */

var main = require('../src/index').main;

main();
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// region INCLUDES
var antlr4 = require('antlr4/index');
var GrammarLexer = require('../gen/GrammarLexer');
var GrammarParser = require('../gen/GrammarParser');
var Trees = require('antlr4/tree/Trees').Trees;
var RuleContext = require('antlr4/RuleContext');
var Utils = require('antlr4/Utils');
var util = require('util');
var ErrorListener = require('antlr4/error/ErrorListener').ErrorListener;
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
    console.log(offendingSymbol);
    console.log(recognizer.literalNames);
    console.log("expected", expected_tokens_names, "instead of", text, "between", t.start, "and", t.stop);
    this.errors.push({
        expected: expected_tokens_names,
        text: text,
        begin: Math.min(t.start, t.stop),
        end: Math.max(t.start, t.stop)
    });
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
            }[operator];
        }
    }, {
        key: 'literalToMongo',
        value: function literalToMongo(literal) {
            if (literal.children[0].symbol == 'NUMBER') return parseInt(literal.children[0].text);else if (literal.children[0].symbol == 'STRING') ;
            return literal.children[0].text.substr(1, literal.children[0].text.length - 2);
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
                return _defineProperty({}, criteria.children[0].text, _defineProperty({}, this.operatorToMongo(criteria.children[1].text), this.literalToMongo(criteria.children[2])));
            } else {
                return _defineProperty({}, criteria.children[0].text, _defineProperty({}, this.operatorToMongo(criteria.children[1].text), this.arrayToMongo(criteria.children[2])));
            }
        }
    }, {
        key: 'queryToMongo',
        value: function queryToMongo(query) {
            var group_operator = null;
            if (query.children.length == 1) return this.criteriaToMongo(query.children[0]);else if (query.children.length == 3) group_operator = query.children[1].text;else if (query.children.length == 5) group_operator = query.children[2].text;

            return _defineProperty({}, this.operatorToMongo(group_operator), query.children.filter(function (c) {
                return c.rule == 'query';
            }).map(this.queryToMongo));
        }
    }, {
        key: 'astToJSON',
        value: function astToJSON(tree, ruleNames, recognizer) {
            var _this = this;

            ruleNames = ruleNames || null;
            recognizer = recognizer ? recognizer : tree ? tree.parser : null;
            if (recognizer) {
                ruleNames = recognizer.ruleNames;
            }

            var s = Trees.getNodeText(tree, ruleNames);
            //    console.log("TREE", util.inspect(tree, {depth: 1}));

            s = Utils.escapeWhitespace(s, false);
            var c = tree.getChildCount();
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
            }
            res.children = Trees.getChildren(tree).map(function (c) {
                return _this.astToJSON(c, ruleNames, recognizer);
            });
            return res;
        }
    }, {
        key: 'process',
        value: function process(antlr_tree) {
            var ast = this.astToJSON(antlr_tree);
            return this.queryToMongo(ast.children[0]);
        }
    }]);

    return AstMongoTransformer;
}();

var ast_mongo_transformer = new AstMongoTransformer();

var main = function main() {
    var input = 'ask == "test" AND trades ON 5,6 AND mod == 3';
    console.log(new Date());
    console.log("INPUT : '" + input + "'");
    console.log("=============================");
    var chars = new antlr4.InputStream(input);
    var lexer = new GrammarLexer.GrammarLexer(chars);
    var tokens = new antlr4.CommonTokenStream(lexer);
    var parser = new GrammarParser.GrammarParser(tokens);
    parser.literalNames = parser.literalNames.map(function (n) {
        return !n ? null : n.substr(1, n.length - 2);
    });
    parser.removeErrorListeners();
    parser.addErrorListener(ParserErrorListener.INSTANCE);

    parser.buildParseTrees = true;
    var tree = parser.main();
    var output = ast_mongo_transformer.process(tree);
    //console.log("Parsed: "+ util.inspect(tree));

    var treeify = require('treeify');
    console.log(treeify.asTree(output, true));
    console.log(treeify.asTree(ParserErrorListener.INSTANCE.errors, true));

    console.log(JSON.stringify(ast_mongo_transformer.process(tree), null, 2));
};

main();

exports.default = { main: main };
//# sourceMappingURL=all.js.map

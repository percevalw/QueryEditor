"use strict";

// region INCLUDES
var antlr4 = require('antlr4/index');
var GrammarLexer = require('../gen/GrammarLexer');
var GrammarParser = require('../gen/GrammarParser');
var Trees = require('antlr4/tree/Trees').Trees;
var RuleContext = require('antlr4/RuleContext');
var Utils = require('antlr4/Utils');
var util = require('util');
var ErrorListener = require('antlr4/error/ErrorListener').ErrorListener;
var treeify = require('treeify');
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

ParserErrorListener.prototype.syntaxError = function(recognizer, offendingSymbol, line, column, msg, e) {
    var expected_tokens = recognizer._errHandler.getExpectedTokens(recognizer);
    var expected_tokens_names = [];

    for (var i = 0; i < expected_tokens.intervals.length; i++) {
        var v = expected_tokens.intervals[i];
        for (var j = v.start; j < v.stop; j++) {
            expected_tokens_names.push(expected_tokens.elementName(recognizer.literalNames, recognizer.symbolicNames, j));
        }
    }

    var t = recognizer.getCurrentToken();
    let text = recognizer.getTokenErrorDisplay(t);
    text = text.substr(1, text.length - 2);
    this.errors.push({
        expected: expected_tokens_names,
        text: text,
        begin: t.start,
        end: (text == "<EOF>") ? t.start : t.stop
    });
};

ParserErrorListener.prototype.reset = function() {
    this.errors = [];
}

ParserErrorListener.INSTANCE = new ParserErrorListener();
// endregion

class AstMongoTransformer {
    constructor() {
        this.operatorToMongo = this.operatorToMongo.bind(this);
        this.literalToMongo = this.literalToMongo.bind(this);
        this.arrayToMongo = this.arrayToMongo.bind(this);
        this.criteriaToMongo = this.criteriaToMongo.bind(this);
        this.queryToMongo = this.queryToMongo.bind(this);
        this.process = this.process.bind(this);

        this.highlights = [];
    }

    operatorToMongo(operator) {
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

    literalToMongo(literal) {
        if (literal.children[0].symbol == 'NUMBER')
            return parseInt(literal.children[0].text)
        else if (literal.children[0].symbol == 'STRING');
        return literal.children[0].text.substr(1, literal.children[0].text.length - 2);
    }

    arrayToMongo(array) {
        return array.children.filter(c => c.rule == 'literal').map(this.literalToMongo);
    }

    criteriaToMongo(criteria) {
        if (criteria.children[2].rule == 'literal') {
            return {
                [criteria.children[0].text]: {
                    [this.operatorToMongo(criteria.children[1].text)]: this.literalToMongo(criteria.children[2])
                }
            }
        }
        else {
            return {
                [criteria.children[0].text]: {
                    [this.operatorToMongo(criteria.children[1].text)]: this.arrayToMongo(criteria.children[2])
                }
            }
        }

    }

    queryToMongo(query) {
        let group_operator = null;
        if (query.children.length == 1)
            return this.criteriaToMongo(query.children[0]);
        else if (query.children.length == 3)
            group_operator = query.children[1];
        else if (query.children.length == 5)
            group_operator = query.children[2];
        return {
            [this.operatorToMongo(group_operator)]: query.children.filter(c => c.rule == 'query').map(this.queryToMongo)
        };
    }

    astToJSON(tree, ruleNames, recognizer) {
        ruleNames = ruleNames || null;
        recognizer = recognizer ? recognizer : (tree ? tree.parser : null);
        if(recognizer) {
            ruleNames = recognizer.ruleNames;
        }

        var s = Trees.getNodeText(tree, ruleNames);

        var res = {};
        if (tree instanceof RuleContext.RuleContext) {
            var altNumber = tree.getAltNumber();
            if ( altNumber!=RuleContext.INVALID_ALT_NUMBER ) {
                res.rule = ruleNames[tree.ruleIndex]+":"+altNumber;
            }
            res.rule = ruleNames[tree.ruleIndex];
        }
        else if (tree.symbol) {
            res.symbol = recognizer.literalNames[tree.symbol.type] || recognizer.symbolicNames[tree.symbol.type];//.toString(recognizer.literalNames, recognizer.symbolicNames))
            res.text = tree.symbol.text;
            res.begin = tree.symbol.start;
            res.end = tree.symbol.stop;

            if (res.symbol)
                this.tokens.push(res);
        }
        res.children= Trees.getChildren(tree).map(c => this.astToJSON(c, ruleNames, recognizer));
        return res;
    };

    process(antlr_tree, no_query) {
        this.tokens = [];
        const ast = this.astToJSON(antlr_tree);
        return {
            ast: no_query ? null : this.queryToMongo(ast.children[0]),
            tokens: this.tokens
        }
    }
}

class MongoParser {
    constructor(syntax) {
        this.get_suggestions = this.get_suggestions.bind(this);
        this.syntax = syntax;
        this.symbol_token_mapping = {
            'AND': ['AND'],
            'OR': ['OR'],
            'LIT_VAR': ['ask', 'mid', 'bid'],
            'ENS_VAR': ['trades', 'traders'],
            'LIT_OPERATOR': ['==', '>=', '<='],
            'ENS_OPERATOR': ['IN', 'NOT IN']
        }
    }

    get_suggestions(expected, existing) {
        console.log("EXPECTED", expected)
        const suggestions = _.flatten(expected.map(t => (this.symbol_token_mapping[t] || [])), true);
        const filtered = suggestions.filter(suggestion => {
            console.log("EXISINTG", suggestion, existing);
            return (suggestion.substr(0, existing.length) == existing);
        });
        if (filtered.length == 0) {
            return suggestions;
        }
        return filtered;
    }

    apply_syntax(tokens, errors) {
        const res = {};
        if (this.syntax.parsed)
            tokens.forEach(t => {
                var class_names = this.syntax.parsed.filter(s => {
                    return s.match(t);
                }).map(s => s.class_names(t));
                res[t.begin + '-' + t.end] = {
                    begin: t.begin,
                    end: t.end,
                    class_names: class_names.join(' ')
                }
            });
        errors.forEach(e => {
            res[e.begin + '-' + e.end] = {
                begin: e.begin,
                end: e.end,
                class_names: this.syntax.error.class_names(e),
                suggestions: this.get_suggestions(e.expected, e.text),
                message: this.syntax.error.message(e)
            }
        });
        console.log(res);
        return _.values(res);
    }

    parse(input) {
        console.log("PARSER INPUT", input);
        var error_listener = new ParserErrorListener();
        var chars = new antlr4.InputStream(input);
        var lexer = new GrammarLexer.GrammarLexer(chars);
        var tokens  = new antlr4.CommonTokenStream(lexer);
        var parser = new GrammarParser.GrammarParser(tokens);
        parser.literalNames = parser.literalNames.map(n => !n ? null : n.substr(1, n.length - 2));
        parser.removeErrorListeners();
        parser.addErrorListener(error_listener);

        parser.buildParseTrees = true;
        var tree = parser.main();

        const visitor_res = ast_mongo_transformer.process(tree, error_listener.errors.length>0);
        console.log("ERROR", error_listener.errors);
        const errors = error_listener.errors;
        return {
            mongo_query: visitor_res.ast,
            highlights: this.apply_syntax(visitor_res.tokens, errors)
        }
    }
}

const ast_mongo_transformer = new AstMongoTransformer();

const main = function(input) {
    const mongo_parser = new MongoParser();
    const output = mongo_parser.parse(input);

    console.log(treeify.asTree(output, true));
};

module.exports = {main: main, MongoParser: MongoParser};
"use strict";

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

/**
 * Created by perceval on 03/12/2016.
 */

var templates = {
    "test": {
        name: "Test"
    },
    "essai": {
        name: "Test"
    }
};

var json = {
    $and: [{
        "test": 1,
        "essai": 2
    }]
};

var StateMachine = function StateMachine(initial, transitions) {
    _classCallCheck(this, StateMachine);

    this.initial = initial;
};

//# sourceMappingURL=index-compiled.js.map
'use strict';

var antlr4 = require('antlr4/index');
var GrammarLexer = require('../gen/GrammarLexer');
var GrammarParser = require('../gen/GrammarParser');
var util = require('util');

var ErrorListener = require('antlr4/error/ErrorListener').ErrorListener;
function ParserErrorListener() {
    ErrorListener.call(this);
    this.partialLastToken = null;
    this.errors = [];
    return this;
}

ParserErrorListener.prototype = Object.create(ErrorListener.prototype);
ParserErrorListener.prototype.constructor = ParserErrorListener;

ParserErrorListener.prototype.syntaxError = function (recognizer, offendingSymbol, line, column, msg, e) {
    this.errors.push(arguments);

    var expected_tokens = recognizer._errHandler.getExpectedTokens(recognizer);
    var expected_string = expected_tokens.toString(recognizer.literalNames, recognizer.symbolicNames);

    console.log("EXPECTED", expected_string);

    this.partialLastToken = null;
    var typeAssistTokens = ["Fruits", "Count"];
    var parser = recognizer._ctx.parser,
        tokens = parser.getTokenStream().tokens;

    var t = recognizer.getCurrentToken();
    console.log("currentToken", t);
    console.log("tokenErrorDisplay", recognizer.getTokenErrorDisplay(t));

    // last token is always "fake" EOF token
    if (tokens.length > 1) {
        var lastToken = tokens[tokens.length - 2];

        if (true) {
            //typeAssistTokens.indexOf(expected_string) >= 0) {
            this.partialLastToken = lastToken.text;
            console.log("PARTIAL", this.partialLastToken);
        }
    }
};

ParserErrorListener.INSTANCE = new ParserErrorListener();

function LexerErrorListener() {
    ErrorListener.call(this);
    this.partialLastToken = null;
    this.errors = [];
    return this;
}

LexerErrorListener.prototype = Object.create(ErrorListener.prototype);
LexerErrorListener.prototype.constructor = LexerErrorListener;

LexerErrorListener.prototype.syntaxError = function (recognizer, offendingSymbol, line, column, msg, e) {
    this.errors.push(arguments);

    var start = recognizer._tokenStartCharIndex;
    var stop = recognizer._input.index;
    var text = recognizer._input.getText(start, stop);
    console.log("LEXER", text);
};

LexerErrorListener.INSTANCE = new LexerErrorListener();

var input = 'trades IN "test",5';
console.log(new Date());
console.log("INPUT : '" + input + "'");
console.log("=============================");
var chars = new antlr4.InputStream(input);
var lexer = new GrammarLexer.GrammarLexer(chars);
var tokens = new antlr4.CommonTokenStream(lexer);
var parser = new GrammarParser.GrammarParser(tokens);
parser.removeErrorListeners();
parser.addErrorListener(ParserErrorListener.INSTANCE);
lexer.removeErrorListeners();
lexer.addErrorListener(LexerErrorListener.INSTANCE);

parser.buildParseTrees = true;
var tree = parser.query();
//console.log("Parsed: "+ util.inspect(tree));
var children = tree.toStringTree(parser.ruleNames);
console.log(children);
//# sourceMappingURL=all.js.map

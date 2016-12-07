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
var NumbersLexer = require('../gen/NumbersLexer');
var NumbersParser = require('../gen/NumbersParser');
var util = require('util');

var ErrorListener = require('antlr4/error/ErrorListener').ErrorListener;
function TestGrammarErrorListener() {
    ErrorListener.call(this);
    this.partialLastToken = null;
    this.errors = [];
    return this;
}

TestGrammarErrorListener.prototype = Object.create(ErrorListener.prototype);
TestGrammarErrorListener.prototype.constructor = TestGrammarErrorListener;

TestGrammarErrorListener.prototype.syntaxError = function (recognizer, offendingSymbol, line, column, msg, e) {
    this.errors.push(arguments);

    console.log(offendingSymbol);

    this.partialLastToken = null;
    var typeAssistTokens = ["Fruits"];
    var parser = recognizer._ctx.parser,
        tokens = parser.getTokenStream().tokens;

    // last token is always "fake" EOF token
    if (tokens.length > 1) {
        var lastToken = tokens[tokens.length - 2],
            tokenType = parser.symbolicNames[lastToken.type];

        this.tokenType = tokenType;
        console.log("tokenType", tokenType);
        if (typeAssistTokens.indexOf(tokenType) >= 0) {
            this.partialLastToken = lastToken.text;
            console.log(this.partialLastToken);
        }
    }
};

TestGrammarErrorListener.INSTANCE = new TestGrammarErrorListener();

var input = 'count ';
var chars = new antlr4.InputStream(input);
var lexer = new NumbersLexer.NumbersLexer(chars);
var tokens = new antlr4.CommonTokenStream(lexer);
var parser = new NumbersParser.NumbersParser(tokens);
parser.removeErrorListeners();
parser.addErrorListener(TestGrammarErrorListener.INSTANCE);

parser.buildParseTrees = true;
var tree = parser.query();
//console.log("Parsed: "+ util.inspect(tree));
var children = tree.toStringTree(["query", 'countRule', 'fruitRule']);
console.log(children);
//# sourceMappingURL=all.js.map

// Generated from /Users/perceval/WebstormProjects/mongoQueryEditor/src/Grammar.g4 by ANTLR 4.5.3
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by GrammarParser.
function GrammarListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

GrammarListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
GrammarListener.prototype.constructor = GrammarListener;

// Enter a parse tree produced by GrammarParser#main.
GrammarListener.prototype.enterMain = function(ctx) {
};

// Exit a parse tree produced by GrammarParser#main.
GrammarListener.prototype.exitMain = function(ctx) {
};


// Enter a parse tree produced by GrammarParser#query.
GrammarListener.prototype.enterQuery = function(ctx) {
};

// Exit a parse tree produced by GrammarParser#query.
GrammarListener.prototype.exitQuery = function(ctx) {
};


// Enter a parse tree produced by GrammarParser#criteria.
GrammarListener.prototype.enterCriteria = function(ctx) {
};

// Exit a parse tree produced by GrammarParser#criteria.
GrammarListener.prototype.exitCriteria = function(ctx) {
};


// Enter a parse tree produced by GrammarParser#value.
GrammarListener.prototype.enterValue = function(ctx) {
};

// Exit a parse tree produced by GrammarParser#value.
GrammarListener.prototype.exitValue = function(ctx) {
};


// Enter a parse tree produced by GrammarParser#array.
GrammarListener.prototype.enterArray = function(ctx) {
};

// Exit a parse tree produced by GrammarParser#array.
GrammarListener.prototype.exitArray = function(ctx) {
};


// Enter a parse tree produced by GrammarParser#literal.
GrammarListener.prototype.enterLiteral = function(ctx) {
};

// Exit a parse tree produced by GrammarParser#literal.
GrammarListener.prototype.exitLiteral = function(ctx) {
};



exports.GrammarListener = GrammarListener;
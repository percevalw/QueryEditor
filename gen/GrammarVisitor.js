// Generated from /Users/perceval/WebstormProjects/mongoQueryEditor/src/Grammar.g4 by ANTLR 4.5.3
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by GrammarParser.

function GrammarVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

GrammarVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
GrammarVisitor.prototype.constructor = GrammarVisitor;

// Visit a parse tree produced by GrammarParser#main.
GrammarVisitor.prototype.visitMain = function(ctx) {
};


// Visit a parse tree produced by GrammarParser#query.
GrammarVisitor.prototype.visitQuery = function(ctx) {
};


// Visit a parse tree produced by GrammarParser#criteria.
GrammarVisitor.prototype.visitCriteria = function(ctx) {
};


// Visit a parse tree produced by GrammarParser#value.
GrammarVisitor.prototype.visitValue = function(ctx) {
};


// Visit a parse tree produced by GrammarParser#array.
GrammarVisitor.prototype.visitArray = function(ctx) {
};


// Visit a parse tree produced by GrammarParser#literal.
GrammarVisitor.prototype.visitLiteral = function(ctx) {
};



exports.GrammarVisitor = GrammarVisitor;
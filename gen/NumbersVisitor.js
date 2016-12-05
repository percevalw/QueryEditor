// Generated from /Users/perceval/WebstormProjects/mongoQueryEditor/src/Numbers.g4 by ANTLR 4.5.3
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by NumbersParser.

function NumbersVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

NumbersVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
NumbersVisitor.prototype.constructor = NumbersVisitor;

// Visit a parse tree produced by NumbersParser#parse.
NumbersVisitor.prototype.visitParse = function(ctx) {
};


// Visit a parse tree produced by NumbersParser#atom.
NumbersVisitor.prototype.visitAtom = function(ctx) {
};


// Visit a parse tree produced by NumbersParser#low.
NumbersVisitor.prototype.visitLow = function(ctx) {
};


// Visit a parse tree produced by NumbersParser#high.
NumbersVisitor.prototype.visitHigh = function(ctx) {
};



exports.NumbersVisitor = NumbersVisitor;
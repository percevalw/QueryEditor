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

// Visit a parse tree produced by NumbersParser#query.
NumbersVisitor.prototype.visitQuery = function(ctx) {
};


// Visit a parse tree produced by NumbersParser#countRule.
NumbersVisitor.prototype.visitCountRule = function(ctx) {
};


// Visit a parse tree produced by NumbersParser#fruitRule.
NumbersVisitor.prototype.visitFruitRule = function(ctx) {
};



exports.NumbersVisitor = NumbersVisitor;
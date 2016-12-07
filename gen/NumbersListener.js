// Generated from /Users/perceval/WebstormProjects/mongoQueryEditor/src/Numbers.g4 by ANTLR 4.5.3
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by NumbersParser.
function NumbersListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

NumbersListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
NumbersListener.prototype.constructor = NumbersListener;

// Enter a parse tree produced by NumbersParser#query.
NumbersListener.prototype.enterQuery = function(ctx) {
};

// Exit a parse tree produced by NumbersParser#query.
NumbersListener.prototype.exitQuery = function(ctx) {
};


// Enter a parse tree produced by NumbersParser#countRule.
NumbersListener.prototype.enterCountRule = function(ctx) {
};

// Exit a parse tree produced by NumbersParser#countRule.
NumbersListener.prototype.exitCountRule = function(ctx) {
};


// Enter a parse tree produced by NumbersParser#fruitRule.
NumbersListener.prototype.enterFruitRule = function(ctx) {
};

// Exit a parse tree produced by NumbersParser#fruitRule.
NumbersListener.prototype.exitFruitRule = function(ctx) {
};



exports.NumbersListener = NumbersListener;
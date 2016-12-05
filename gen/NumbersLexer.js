// Generated from /Users/perceval/WebstormProjects/mongoQueryEditor/src/Numbers.g4 by ANTLR 4.5.3
// jshint ignore: start
var antlr4 = require('antlr4/index');


var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u0002\u0005\u001c\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0003\u0002\u0003\u0002\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0005\u0003\u0016\n\u0003\u0003\u0004\u0003\u0004\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0002\u0002\u0006\u0003\u0003\u0005\u0004",
    "\u0007\u0002\t\u0005\u0003\u0002\u0003\u0005\u0002\u000b\f\u000f\u000f",
    "\"\"\u001c\u0002\u0003\u0003\u0002\u0002\u0002\u0002\u0005\u0003\u0002",
    "\u0002\u0002\u0002\t\u0003\u0002\u0002\u0002\u0003\u000b\u0003\u0002",
    "\u0002\u0002\u0005\u0015\u0003\u0002\u0002\u0002\u0007\u0017\u0003\u0002",
    "\u0002\u0002\t\u0019\u0003\u0002\u0002\u0002\u000b\f\u0007.\u0002\u0002",
    "\f\u0004\u0003\u0002\u0002\u0002\r\u000e\u0005\u0007\u0004\u0002\u000e",
    "\u000f\u0005\u0007\u0004\u0002\u000f\u0010\u0005\u0007\u0004\u0002\u0010",
    "\u0016\u0003\u0002\u0002\u0002\u0011\u0012\u0005\u0007\u0004\u0002\u0012",
    "\u0013\u0005\u0007\u0004\u0002\u0013\u0016\u0003\u0002\u0002\u0002\u0014",
    "\u0016\u0005\u0007\u0004\u0002\u0015\r\u0003\u0002\u0002\u0002\u0015",
    "\u0011\u0003\u0002\u0002\u0002\u0015\u0014\u0003\u0002\u0002\u0002\u0016",
    "\u0006\u0003\u0002\u0002\u0002\u0017\u0018\u00042;\u0002\u0018\b\u0003",
    "\u0002\u0002\u0002\u0019\u001a\t\u0002\u0002\u0002\u001a\u001b\b\u0005",
    "\u0002\u0002\u001b\n\u0003\u0002\u0002\u0002\u0004\u0002\u0015\u0003",
    "\u0003\u0005\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function NumbersLexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

NumbersLexer.prototype = Object.create(antlr4.Lexer.prototype);
NumbersLexer.prototype.constructor = NumbersLexer;

NumbersLexer.EOF = antlr4.Token.EOF;
NumbersLexer.T__0 = 1;
NumbersLexer.Number = 2;
NumbersLexer.WhiteSpace = 3;


NumbersLexer.modeNames = [ "DEFAULT_MODE" ];

NumbersLexer.literalNames = [ null, "','" ];

NumbersLexer.symbolicNames = [ null, null, "Number", "WhiteSpace" ];

NumbersLexer.ruleNames = [ "T__0", "Number", "Digit", "WhiteSpace" ];

NumbersLexer.grammarFileName = "Numbers.g4";


NumbersLexer.prototype.action = function(localctx, ruleIndex, actionIndex) {
	switch (ruleIndex) {
	case 3:
		this.WhiteSpace_action(localctx, actionIndex);
		break;
	default:
		throw "No registered action for:" + ruleIndex;
	}
};

NumbersLexer.prototype.WhiteSpace_action = function(localctx , actionIndex) {
	switch (actionIndex) {
	case 0:
		skip();
		break;
	default:
		throw "No registered action for:" + actionIndex;
	}
};


exports.NumbersLexer = NumbersLexer;


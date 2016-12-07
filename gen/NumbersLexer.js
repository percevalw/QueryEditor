// Generated from /Users/perceval/WebstormProjects/mongoQueryEditor/src/Numbers.g4 by ANTLR 4.5.3
// jshint ignore: start
var antlr4 = require('antlr4/index');


var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u0002\u0005\u0018\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003",
    "\u0002\u0003\u0002\u0003\u0003\u0006\u0003\u0011\n\u0003\r\u0003\u000e",
    "\u0003\u0012\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0002\u0002",
    "\u0005\u0003\u0003\u0005\u0004\u0007\u0005\u0003\u0002\t\u0004\u0002",
    "EEee\u0004\u0002QQqq\u0004\u0002WWww\u0004\u0002PPpp\u0004\u0002VVv",
    "v\u0005\u00022;C\\c|\u0004\u0002^^uu\u0018\u0002\u0003\u0003\u0002\u0002",
    "\u0002\u0002\u0005\u0003\u0002\u0002\u0002\u0002\u0007\u0003\u0002\u0002",
    "\u0002\u0003\t\u0003\u0002\u0002\u0002\u0005\u0010\u0003\u0002\u0002",
    "\u0002\u0007\u0014\u0003\u0002\u0002\u0002\t\n\t\u0002\u0002\u0002\n",
    "\u000b\t\u0003\u0002\u0002\u000b\f\t\u0004\u0002\u0002\f\r\t\u0005\u0002",
    "\u0002\r\u000e\t\u0006\u0002\u0002\u000e\u0004\u0003\u0002\u0002\u0002",
    "\u000f\u0011\t\u0007\u0002\u0002\u0010\u000f\u0003\u0002\u0002\u0002",
    "\u0011\u0012\u0003\u0002\u0002\u0002\u0012\u0010\u0003\u0002\u0002\u0002",
    "\u0012\u0013\u0003\u0002\u0002\u0002\u0013\u0006\u0003\u0002\u0002\u0002",
    "\u0014\u0015\t\b\u0002\u0002\u0015\u0016\u0003\u0002\u0002\u0002\u0016",
    "\u0017\b\u0004\u0002\u0002\u0017\b\u0003\u0002\u0002\u0002\u0004\u0002",
    "\u0012\u0003\b\u0002\u0002"].join("");


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
NumbersLexer.Count = 1;
NumbersLexer.Fruits = 2;
NumbersLexer.WS = 3;


NumbersLexer.modeNames = [ "DEFAULT_MODE" ];

NumbersLexer.literalNames = [  ];

NumbersLexer.symbolicNames = [ null, "Count", "Fruits", "WS" ];

NumbersLexer.ruleNames = [ "Count", "Fruits", "WS" ];

NumbersLexer.grammarFileName = "Numbers.g4";



exports.NumbersLexer = NumbersLexer;


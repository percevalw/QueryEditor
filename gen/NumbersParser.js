// Generated from /Users/perceval/WebstormProjects/mongoQueryEditor/src/Numbers.g4 by ANTLR 4.5.3
// jshint ignore: start
var antlr4 = require('antlr4/index');
var NumbersListener = require('./NumbersListener').NumbersListener;
var NumbersVisitor = require('./NumbersVisitor').NumbersVisitor;

var grammarFileName = "Numbers.g4";

var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u0003\u0005\u0011\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0003",
    "\u0003\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0002\u0002\u0005\u0002",
    "\u0004\u0006\u0002\u0002\r\u0002\b\u0003\u0002\u0002\u0002\u0004\f\u0003",
    "\u0002\u0002\u0002\u0006\u000e\u0003\u0002\u0002\u0002\b\t\u0005\u0004",
    "\u0003\u0002\t\n\u0005\u0006\u0004\u0002\n\u000b\u0007\u0002\u0002\u0003",
    "\u000b\u0003\u0003\u0002\u0002\u0002\f\r\u0007\u0003\u0002\u0002\r\u0005",
    "\u0003\u0002\u0002\u0002\u000e\u000f\u0007\u0004\u0002\u0002\u000f\u0007",
    "\u0003\u0002\u0002\u0002\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [  ];

var symbolicNames = [ null, "Count", "Fruits", "WS" ];

var ruleNames =  [ "query", "countRule", "fruitRule" ];

function NumbersParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

NumbersParser.prototype = Object.create(antlr4.Parser.prototype);
NumbersParser.prototype.constructor = NumbersParser;

Object.defineProperty(NumbersParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

NumbersParser.EOF = antlr4.Token.EOF;
NumbersParser.Count = 1;
NumbersParser.Fruits = 2;
NumbersParser.WS = 3;

NumbersParser.RULE_query = 0;
NumbersParser.RULE_countRule = 1;
NumbersParser.RULE_fruitRule = 2;

function QueryContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = NumbersParser.RULE_query;
    return this;
}

QueryContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
QueryContext.prototype.constructor = QueryContext;

QueryContext.prototype.countRule = function() {
    return this.getTypedRuleContext(CountRuleContext,0);
};

QueryContext.prototype.fruitRule = function() {
    return this.getTypedRuleContext(FruitRuleContext,0);
};

QueryContext.prototype.EOF = function() {
    return this.getToken(NumbersParser.EOF, 0);
};

QueryContext.prototype.enterRule = function(listener) {
    if(listener instanceof NumbersListener ) {
        listener.enterQuery(this);
	}
};

QueryContext.prototype.exitRule = function(listener) {
    if(listener instanceof NumbersListener ) {
        listener.exitQuery(this);
	}
};

QueryContext.prototype.accept = function(visitor) {
    if ( visitor instanceof NumbersVisitor ) {
        return visitor.visitQuery(this);
    } else {
        return visitor.visitChildren(this);
    }
};




NumbersParser.QueryContext = QueryContext;

NumbersParser.prototype.query = function() {

    var localctx = new QueryContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, NumbersParser.RULE_query);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 6;
        this.countRule();
        this.state = 7;
        this.fruitRule();
        this.state = 8;
        this.match(NumbersParser.EOF);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function CountRuleContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = NumbersParser.RULE_countRule;
    return this;
}

CountRuleContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CountRuleContext.prototype.constructor = CountRuleContext;

CountRuleContext.prototype.Count = function() {
    return this.getToken(NumbersParser.Count, 0);
};

CountRuleContext.prototype.enterRule = function(listener) {
    if(listener instanceof NumbersListener ) {
        listener.enterCountRule(this);
	}
};

CountRuleContext.prototype.exitRule = function(listener) {
    if(listener instanceof NumbersListener ) {
        listener.exitCountRule(this);
	}
};

CountRuleContext.prototype.accept = function(visitor) {
    if ( visitor instanceof NumbersVisitor ) {
        return visitor.visitCountRule(this);
    } else {
        return visitor.visitChildren(this);
    }
};




NumbersParser.CountRuleContext = CountRuleContext;

NumbersParser.prototype.countRule = function() {

    var localctx = new CountRuleContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, NumbersParser.RULE_countRule);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 10;
        this.match(NumbersParser.Count);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function FruitRuleContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = NumbersParser.RULE_fruitRule;
    return this;
}

FruitRuleContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FruitRuleContext.prototype.constructor = FruitRuleContext;

FruitRuleContext.prototype.Fruits = function() {
    return this.getToken(NumbersParser.Fruits, 0);
};

FruitRuleContext.prototype.enterRule = function(listener) {
    if(listener instanceof NumbersListener ) {
        listener.enterFruitRule(this);
	}
};

FruitRuleContext.prototype.exitRule = function(listener) {
    if(listener instanceof NumbersListener ) {
        listener.exitFruitRule(this);
	}
};

FruitRuleContext.prototype.accept = function(visitor) {
    if ( visitor instanceof NumbersVisitor ) {
        return visitor.visitFruitRule(this);
    } else {
        return visitor.visitChildren(this);
    }
};




NumbersParser.FruitRuleContext = FruitRuleContext;

NumbersParser.prototype.fruitRule = function() {

    var localctx = new FruitRuleContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, NumbersParser.RULE_fruitRule);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 12;
        this.match(NumbersParser.Fruits);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


exports.NumbersParser = NumbersParser;

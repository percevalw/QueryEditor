// Generated from /Users/perceval/WebstormProjects/mongoQueryEditor/src/Numbers.g4 by ANTLR 4.5.3
// jshint ignore: start
var antlr4 = require('antlr4/index');
var NumbersListener = require('./NumbersListener').NumbersListener;
var NumbersVisitor = require('./NumbersVisitor').NumbersVisitor;

var grammarFileName = "Numbers.g4";

var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u0003\u0005\"\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0003\u0002\u0003\u0002\u0003\u0002\u0007",
    "\u0002\u000e\n\u0002\f\u0002\u000e\u0002\u0011\u000b\u0002\u0003\u0002",
    "\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0005\u0003\u001b\n\u0003\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0002\u0002\u0006\u0002\u0004",
    "\u0006\b\u0002\u0002\u001f\u0002\n\u0003\u0002\u0002\u0002\u0004\u001a",
    "\u0003\u0002\u0002\u0002\u0006\u001c\u0003\u0002\u0002\u0002\b\u001f",
    "\u0003\u0002\u0002\u0002\n\u000f\u0005\u0004\u0003\u0002\u000b\f\u0007",
    "\u0003\u0002\u0002\f\u000e\u0005\u0004\u0003\u0002\r\u000b\u0003\u0002",
    "\u0002\u0002\u000e\u0011\u0003\u0002\u0002\u0002\u000f\r\u0003\u0002",
    "\u0002\u0002\u000f\u0010\u0003\u0002\u0002\u0002\u0010\u0012\u0003\u0002",
    "\u0002\u0002\u0011\u000f\u0003\u0002\u0002\u0002\u0012\u0013\u0007\u0002",
    "\u0002\u0003\u0013\u0003\u0003\u0002\u0002\u0002\u0014\u0015\u0005\u0006",
    "\u0004\u0002\u0015\u0016\b\u0003\u0001\u0002\u0016\u001b\u0003\u0002",
    "\u0002\u0002\u0017\u0018\u0005\b\u0005\u0002\u0018\u0019\b\u0003\u0001",
    "\u0002\u0019\u001b\u0003\u0002\u0002\u0002\u001a\u0014\u0003\u0002\u0002",
    "\u0002\u001a\u0017\u0003\u0002\u0002\u0002\u001b\u0005\u0003\u0002\u0002",
    "\u0002\u001c\u001d\u0006\u0004\u0002\u0002\u001d\u001e\u0007\u0004\u0002",
    "\u0002\u001e\u0007\u0003\u0002\u0002\u0002\u001f \u0007\u0004\u0002",
    "\u0002 \t\u0003\u0002\u0002\u0002\u0004\u000f\u001a"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "','" ];

var symbolicNames = [ null, null, "Number", "WhiteSpace" ];

var ruleNames =  [ "parse", "atom", "low", "high" ];

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
NumbersParser.T__0 = 1;
NumbersParser.Number = 2;
NumbersParser.WhiteSpace = 3;

NumbersParser.RULE_parse = 0;
NumbersParser.RULE_atom = 1;
NumbersParser.RULE_low = 2;
NumbersParser.RULE_high = 3;

function ParseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = NumbersParser.RULE_parse;
    return this;
}

ParseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ParseContext.prototype.constructor = ParseContext;

ParseContext.prototype.atom = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(AtomContext);
    } else {
        return this.getTypedRuleContext(AtomContext,i);
    }
};

ParseContext.prototype.EOF = function() {
    return this.getToken(NumbersParser.EOF, 0);
};

ParseContext.prototype.enterRule = function(listener) {
    if(listener instanceof NumbersListener ) {
        listener.enterParse(this);
	}
};

ParseContext.prototype.exitRule = function(listener) {
    if(listener instanceof NumbersListener ) {
        listener.exitParse(this);
	}
};

ParseContext.prototype.accept = function(visitor) {
    if ( visitor instanceof NumbersVisitor ) {
        return visitor.visitParse(this);
    } else {
        return visitor.visitChildren(this);
    }
};




NumbersParser.ParseContext = ParseContext;

NumbersParser.prototype.parse = function() {

    var localctx = new ParseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, NumbersParser.RULE_parse);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 8;
        this.atom();
        this.state = 13;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===NumbersParser.T__0) {
            this.state = 9;
            this.match(NumbersParser.T__0);
            this.state = 10;
            this.atom();
            this.state = 15;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 16;
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

function AtomContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = NumbersParser.RULE_atom;
    this._low = null; // LowContext
    this._high = null; // HighContext
    return this;
}

AtomContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AtomContext.prototype.constructor = AtomContext;

AtomContext.prototype.low = function() {
    return this.getTypedRuleContext(LowContext,0);
};

AtomContext.prototype.high = function() {
    return this.getTypedRuleContext(HighContext,0);
};

AtomContext.prototype.enterRule = function(listener) {
    if(listener instanceof NumbersListener ) {
        listener.enterAtom(this);
	}
};

AtomContext.prototype.exitRule = function(listener) {
    if(listener instanceof NumbersListener ) {
        listener.exitAtom(this);
	}
};

AtomContext.prototype.accept = function(visitor) {
    if ( visitor instanceof NumbersVisitor ) {
        return visitor.visitAtom(this);
    } else {
        return visitor.visitChildren(this);
    }
};




NumbersParser.AtomContext = AtomContext;

NumbersParser.prototype.atom = function() {

    var localctx = new AtomContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, NumbersParser.RULE_atom);
    try {
        this.state = 24;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 18;
            localctx._low = this.low();
            console.log("low  = " + (localctx._low===null ? null : this._input.getText(new antlr4.Interval(localctx._low.start,localctx._low.stop))))
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 21;
            localctx._high = this.high();
            console.log("high = " + (localctx._high===null ? null : this._input.getText(new antlr4.Interval(localctx._high.start,localctx._high.stop))))
            break;

        }
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

function LowContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = NumbersParser.RULE_low;
    return this;
}

LowContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LowContext.prototype.constructor = LowContext;

LowContext.prototype.Number = function() {
    return this.getToken(NumbersParser.Number, 0);
};

LowContext.prototype.enterRule = function(listener) {
    if(listener instanceof NumbersListener ) {
        listener.enterLow(this);
	}
};

LowContext.prototype.exitRule = function(listener) {
    if(listener instanceof NumbersListener ) {
        listener.exitLow(this);
	}
};

LowContext.prototype.accept = function(visitor) {
    if ( visitor instanceof NumbersVisitor ) {
        return visitor.visitLow(this);
    } else {
        return visitor.visitChildren(this);
    }
};




NumbersParser.LowContext = LowContext;

NumbersParser.prototype.low = function() {

    var localctx = new LowContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, NumbersParser.RULE_low);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 26;
        if (!( console.log(this._input.LT(1).text) && parseInt(this._input.LT(1).text) <= 500)) {
            throw new antlr4.error.FailedPredicateException(this, "console.log(this._input.LT(1).text) && parseInt(this._input.LT(1).text) <= 500");
        }
        this.state = 27;
        this.match(NumbersParser.Number);
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

function HighContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = NumbersParser.RULE_high;
    return this;
}

HighContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
HighContext.prototype.constructor = HighContext;

HighContext.prototype.Number = function() {
    return this.getToken(NumbersParser.Number, 0);
};

HighContext.prototype.enterRule = function(listener) {
    if(listener instanceof NumbersListener ) {
        listener.enterHigh(this);
	}
};

HighContext.prototype.exitRule = function(listener) {
    if(listener instanceof NumbersListener ) {
        listener.exitHigh(this);
	}
};

HighContext.prototype.accept = function(visitor) {
    if ( visitor instanceof NumbersVisitor ) {
        return visitor.visitHigh(this);
    } else {
        return visitor.visitChildren(this);
    }
};




NumbersParser.HighContext = HighContext;

NumbersParser.prototype.high = function() {

    var localctx = new HighContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, NumbersParser.RULE_high);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 29;
        this.match(NumbersParser.Number);
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


NumbersParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 2:
			return this.low_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

NumbersParser.prototype.low_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return console.log(this._input.LT(1).text) && parseInt(this._input.LT(1).text) <= 500;
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.NumbersParser = NumbersParser;

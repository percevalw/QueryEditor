// Generated from /Users/perceval/WebstormProjects/mongoQueryEditor/src/Grammar.g4 by ANTLR 4.5.3
// jshint ignore: start
var antlr4 = require('antlr4/index');
var GrammarListener = require('./GrammarListener').GrammarListener;
var GrammarVisitor = require('./GrammarVisitor').GrammarVisitor;

var grammarFileName = "Grammar.g4";

var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u0003\u000f0\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0003\u0002\u0003\u0002",
    "\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002",
    "\u0003\u0002\u0003\u0002\u0005\u0002\u0017\n\u0002\u0005\u0002\u0019",
    "\n\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0005\u0003!\n\u0003\u0003\u0004\u0003\u0004\u0005\u0004",
    "%\n\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0006\u0005*\n\u0005\r",
    "\u0005\u000e\u0005+\u0003\u0006\u0003\u0006\u0003\u0006\u0002\u0002",
    "\u0007\u0002\u0004\u0006\b\n\u0002\u0003\u0003\u0002\f\r0\u0002\u0018",
    "\u0003\u0002\u0002\u0002\u0004 \u0003\u0002\u0002\u0002\u0006$\u0003",
    "\u0002\u0002\u0002\b&\u0003\u0002\u0002\u0002\n-\u0003\u0002\u0002\u0002",
    "\f\r\u0007\u0003\u0002\u0002\r\u000e\u0005\u0004\u0003\u0002\u000e\u000f",
    "\u0007\u0004\u0002\u0002\u000f\u0019\u0003\u0002\u0002\u0002\u0010\u0016",
    "\u0005\u0004\u0003\u0002\u0011\u0012\u0007\u0005\u0002\u0002\u0012\u0017",
    "\u0005\u0004\u0003\u0002\u0013\u0014\u0007\u0006\u0002\u0002\u0014\u0017",
    "\u0005\u0004\u0003\u0002\u0015\u0017\u0003\u0002\u0002\u0002\u0016\u0011",
    "\u0003\u0002\u0002\u0002\u0016\u0013\u0003\u0002\u0002\u0002\u0016\u0015",
    "\u0003\u0002\u0002\u0002\u0017\u0019\u0003\u0002\u0002\u0002\u0018\f",
    "\u0003\u0002\u0002\u0002\u0018\u0010\u0003\u0002\u0002\u0002\u0019\u0003",
    "\u0003\u0002\u0002\u0002\u001a\u001b\u0007\t\u0002\u0002\u001b\u001c",
    "\u0007\n\u0002\u0002\u001c!\u0005\n\u0006\u0002\u001d\u001e\u0007\b",
    "\u0002\u0002\u001e\u001f\u0007\u000b\u0002\u0002\u001f!\u0005\b\u0005",
    "\u0002 \u001a\u0003\u0002\u0002\u0002 \u001d\u0003\u0002\u0002\u0002",
    "!\u0005\u0003\u0002\u0002\u0002\"%\u0005\n\u0006\u0002#%\u0005\b\u0005",
    "\u0002$\"\u0003\u0002\u0002\u0002$#\u0003\u0002\u0002\u0002%\u0007\u0003",
    "\u0002\u0002\u0002&)\u0005\n\u0006\u0002\'(\u0007\u0007\u0002\u0002",
    "(*\u0005\n\u0006\u0002)\'\u0003\u0002\u0002\u0002*+\u0003\u0002\u0002",
    "\u0002+)\u0003\u0002\u0002\u0002+,\u0003\u0002\u0002\u0002,\t\u0003",
    "\u0002\u0002\u0002-.\t\u0002\u0002\u0002.\u000b\u0003\u0002\u0002\u0002",
    "\u0007\u0016\u0018 $+"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'('", "')'", "'AND'", "'OR'", "','" ];

var symbolicNames = [ null, null, null, null, null, null, "ENS_VAR", "LIT_VAR", 
                      "LIT_OPERATOR", "ENS_OPERATOR", "STRING", "NUMBER", 
                      "WORD", "WS" ];

var ruleNames =  [ "query", "criteria", "value", "array", "literal" ];

function GrammarParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

GrammarParser.prototype = Object.create(antlr4.Parser.prototype);
GrammarParser.prototype.constructor = GrammarParser;

Object.defineProperty(GrammarParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

GrammarParser.EOF = antlr4.Token.EOF;
GrammarParser.T__0 = 1;
GrammarParser.T__1 = 2;
GrammarParser.T__2 = 3;
GrammarParser.T__3 = 4;
GrammarParser.T__4 = 5;
GrammarParser.ENS_VAR = 6;
GrammarParser.LIT_VAR = 7;
GrammarParser.LIT_OPERATOR = 8;
GrammarParser.ENS_OPERATOR = 9;
GrammarParser.STRING = 10;
GrammarParser.NUMBER = 11;
GrammarParser.WORD = 12;
GrammarParser.WS = 13;

GrammarParser.RULE_query = 0;
GrammarParser.RULE_criteria = 1;
GrammarParser.RULE_value = 2;
GrammarParser.RULE_array = 3;
GrammarParser.RULE_literal = 4;

function QueryContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GrammarParser.RULE_query;
    return this;
}

QueryContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
QueryContext.prototype.constructor = QueryContext;

QueryContext.prototype.criteria = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(CriteriaContext);
    } else {
        return this.getTypedRuleContext(CriteriaContext,i);
    }
};

QueryContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterQuery(this);
	}
};

QueryContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitQuery(this);
	}
};

QueryContext.prototype.accept = function(visitor) {
    if ( visitor instanceof GrammarVisitor ) {
        return visitor.visitQuery(this);
    } else {
        return visitor.visitChildren(this);
    }
};




GrammarParser.QueryContext = QueryContext;

GrammarParser.prototype.query = function() {

    var localctx = new QueryContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, GrammarParser.RULE_query);
    try {
        this.state = 22;
        switch(this._input.LA(1)) {
        case GrammarParser.T__0:
            this.enterOuterAlt(localctx, 1);
            this.state = 10;
            this.match(GrammarParser.T__0);
            this.state = 11;
            this.criteria();
            this.state = 12;
            this.match(GrammarParser.T__1);
            break;
        case GrammarParser.ENS_VAR:
        case GrammarParser.LIT_VAR:
            this.enterOuterAlt(localctx, 2);
            this.state = 14;
            this.criteria();
            this.state = 20;
            switch(this._input.LA(1)) {
            case GrammarParser.T__2:
                this.state = 15;
                this.match(GrammarParser.T__2);
                this.state = 16;
                this.criteria();
                break;
            case GrammarParser.T__3:
                this.state = 17;
                this.match(GrammarParser.T__3);
                this.state = 18;
                this.criteria();
                break;
            case GrammarParser.EOF:
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
            }
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
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

function CriteriaContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GrammarParser.RULE_criteria;
    return this;
}

CriteriaContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CriteriaContext.prototype.constructor = CriteriaContext;

CriteriaContext.prototype.LIT_VAR = function() {
    return this.getToken(GrammarParser.LIT_VAR, 0);
};

CriteriaContext.prototype.LIT_OPERATOR = function() {
    return this.getToken(GrammarParser.LIT_OPERATOR, 0);
};

CriteriaContext.prototype.literal = function() {
    return this.getTypedRuleContext(LiteralContext,0);
};

CriteriaContext.prototype.ENS_VAR = function() {
    return this.getToken(GrammarParser.ENS_VAR, 0);
};

CriteriaContext.prototype.ENS_OPERATOR = function() {
    return this.getToken(GrammarParser.ENS_OPERATOR, 0);
};

CriteriaContext.prototype.array = function() {
    return this.getTypedRuleContext(ArrayContext,0);
};

CriteriaContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterCriteria(this);
	}
};

CriteriaContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitCriteria(this);
	}
};

CriteriaContext.prototype.accept = function(visitor) {
    if ( visitor instanceof GrammarVisitor ) {
        return visitor.visitCriteria(this);
    } else {
        return visitor.visitChildren(this);
    }
};




GrammarParser.CriteriaContext = CriteriaContext;

GrammarParser.prototype.criteria = function() {

    var localctx = new CriteriaContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, GrammarParser.RULE_criteria);
    try {
        this.state = 30;
        switch(this._input.LA(1)) {
        case GrammarParser.LIT_VAR:
            this.enterOuterAlt(localctx, 1);
            this.state = 24;
            this.match(GrammarParser.LIT_VAR);
            this.state = 25;
            this.match(GrammarParser.LIT_OPERATOR);
            this.state = 26;
            this.literal();
            break;
        case GrammarParser.ENS_VAR:
            this.enterOuterAlt(localctx, 2);
            this.state = 27;
            this.match(GrammarParser.ENS_VAR);
            this.state = 28;
            this.match(GrammarParser.ENS_OPERATOR);
            this.state = 29;
            this.array();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
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

function ValueContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GrammarParser.RULE_value;
    return this;
}

ValueContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ValueContext.prototype.constructor = ValueContext;

ValueContext.prototype.literal = function() {
    return this.getTypedRuleContext(LiteralContext,0);
};

ValueContext.prototype.array = function() {
    return this.getTypedRuleContext(ArrayContext,0);
};

ValueContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterValue(this);
	}
};

ValueContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitValue(this);
	}
};

ValueContext.prototype.accept = function(visitor) {
    if ( visitor instanceof GrammarVisitor ) {
        return visitor.visitValue(this);
    } else {
        return visitor.visitChildren(this);
    }
};




GrammarParser.ValueContext = ValueContext;

GrammarParser.prototype.value = function() {

    var localctx = new ValueContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, GrammarParser.RULE_value);
    try {
        this.state = 34;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 32;
            this.literal();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 33;
            this.array();
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

function ArrayContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GrammarParser.RULE_array;
    return this;
}

ArrayContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ArrayContext.prototype.constructor = ArrayContext;

ArrayContext.prototype.literal = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(LiteralContext);
    } else {
        return this.getTypedRuleContext(LiteralContext,i);
    }
};

ArrayContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterArray(this);
	}
};

ArrayContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitArray(this);
	}
};

ArrayContext.prototype.accept = function(visitor) {
    if ( visitor instanceof GrammarVisitor ) {
        return visitor.visitArray(this);
    } else {
        return visitor.visitChildren(this);
    }
};




GrammarParser.ArrayContext = ArrayContext;

GrammarParser.prototype.array = function() {

    var localctx = new ArrayContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, GrammarParser.RULE_array);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 36;
        this.literal();
        this.state = 39; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 37;
            this.match(GrammarParser.T__4);
            this.state = 38;
            this.literal();
            this.state = 41; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===GrammarParser.T__4);
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

function LiteralContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GrammarParser.RULE_literal;
    return this;
}

LiteralContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LiteralContext.prototype.constructor = LiteralContext;

LiteralContext.prototype.STRING = function() {
    return this.getToken(GrammarParser.STRING, 0);
};

LiteralContext.prototype.NUMBER = function() {
    return this.getToken(GrammarParser.NUMBER, 0);
};

LiteralContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterLiteral(this);
	}
};

LiteralContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitLiteral(this);
	}
};

LiteralContext.prototype.accept = function(visitor) {
    if ( visitor instanceof GrammarVisitor ) {
        return visitor.visitLiteral(this);
    } else {
        return visitor.visitChildren(this);
    }
};




GrammarParser.LiteralContext = LiteralContext;

GrammarParser.prototype.literal = function() {

    var localctx = new LiteralContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, GrammarParser.RULE_literal);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 43;
        _la = this._input.LA(1);
        if(!(_la===GrammarParser.STRING || _la===GrammarParser.NUMBER)) {
        this._errHandler.recoverInline(this);
        }
        else {
            this.consume();
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


exports.GrammarParser = GrammarParser;

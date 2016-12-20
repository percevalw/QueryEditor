// Generated from /Users/perceval/WebstormProjects/mongoQueryEditor/src/Grammar.g4 by ANTLR 4.5.3
// jshint ignore: start
var antlr4 = require('antlr4/index');
var GrammarListener = require('./GrammarListener').GrammarListener;
var GrammarVisitor = require('./GrammarVisitor').GrammarVisitor;

var grammarFileName = "Grammar.g4";

var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u0003\u0010B\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0003",
    "\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0005\u0002\u0013\n\u0002",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0005\u0003\u001b\n\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0005\u0003\"\n\u0003\u0007\u0003$\n\u0003\f\u0003",
    "\u000e\u0003\'\u000b\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0005\u0004-\n\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0005",
    "\u00042\n\u0004\u0003\u0005\u0003\u0005\u0005\u00056\n\u0005\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0007\u0006;\n\u0006\f\u0006\u000e\u0006>\u000b",
    "\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0002\u0003\u0004\b\u0002",
    "\u0004\u0006\b\n\f\u0002\u0003\u0003\u0002\f\rC\u0002\u0012\u0003\u0002",
    "\u0002\u0002\u0004\u001a\u0003\u0002\u0002\u0002\u00061\u0003\u0002",
    "\u0002\u0002\b5\u0003\u0002\u0002\u0002\n7\u0003\u0002\u0002\u0002\f",
    "?\u0003\u0002\u0002\u0002\u000e\u0013\u0003\u0002\u0002\u0002\u000f",
    "\u0010\u0005\u0004\u0003\u0002\u0010\u0011\u0007\u0002\u0002\u0003\u0011",
    "\u0013\u0003\u0002\u0002\u0002\u0012\u000e\u0003\u0002\u0002\u0002\u0012",
    "\u000f\u0003\u0002\u0002\u0002\u0013\u0003\u0003\u0002\u0002\u0002\u0014",
    "\u0015\b\u0003\u0001\u0002\u0015\u0016\u0007\u0003\u0002\u0002\u0016",
    "\u0017\u0005\u0004\u0003\u0002\u0017\u0018\u0007\u0004\u0002\u0002\u0018",
    "\u001b\u0003\u0002\u0002\u0002\u0019\u001b\u0005\u0006\u0004\u0002\u001a",
    "\u0014\u0003\u0002\u0002\u0002\u001a\u0019\u0003\u0002\u0002\u0002\u001b",
    "%\u0003\u0002\u0002\u0002\u001c!\f\u0004\u0002\u0002\u001d\u001e\u0007",
    "\u0005\u0002\u0002\u001e\"\u0005\u0004\u0003\u0002\u001f \u0007\u0006",
    "\u0002\u0002 \"\u0005\u0004\u0003\u0002!\u001d\u0003\u0002\u0002\u0002",
    "!\u001f\u0003\u0002\u0002\u0002\"$\u0003\u0002\u0002\u0002#\u001c\u0003",
    "\u0002\u0002\u0002$\'\u0003\u0002\u0002\u0002%#\u0003\u0002\u0002\u0002",
    "%&\u0003\u0002\u0002\u0002&\u0005\u0003\u0002\u0002\u0002\'%\u0003\u0002",
    "\u0002\u0002()\u0007\t\u0002\u0002),\u0007\n\u0002\u0002*-\u0005\f\u0007",
    "\u0002+-\u0007\t\u0002\u0002,*\u0003\u0002\u0002\u0002,+\u0003\u0002",
    "\u0002\u0002-2\u0003\u0002\u0002\u0002./\u0007\b\u0002\u0002/0\u0007",
    "\u000b\u0002\u000202\u0005\n\u0006\u00021(\u0003\u0002\u0002\u00021",
    ".\u0003\u0002\u0002\u00022\u0007\u0003\u0002\u0002\u000236\u0005\f\u0007",
    "\u000246\u0005\n\u0006\u000253\u0003\u0002\u0002\u000254\u0003\u0002",
    "\u0002\u00026\t\u0003\u0002\u0002\u00027<\u0005\f\u0007\u000289\u0007",
    "\u0007\u0002\u00029;\u0005\f\u0007\u0002:8\u0003\u0002\u0002\u0002;",
    ">\u0003\u0002\u0002\u0002<:\u0003\u0002\u0002\u0002<=\u0003\u0002\u0002",
    "\u0002=\u000b\u0003\u0002\u0002\u0002><\u0003\u0002\u0002\u0002?@\t",
    "\u0002\u0002\u0002@\r\u0003\u0002\u0002\u0002\n\u0012\u001a!%,15<"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'('", "')'", "'AND'", "'OR'", "','" ];

var symbolicNames = [ null, null, null, null, null, null, "ENS_VAR", "LIT_VAR", 
                      "LIT_OPERATOR", "ENS_OPERATOR", "STRING", "NUMBER", 
                      "ENTITY", "CHAR", "WS" ];

var ruleNames =  [ "main", "query", "criteria", "value", "array", "literal" ];

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
GrammarParser.ENTITY = 12;
GrammarParser.CHAR = 13;
GrammarParser.WS = 14;

GrammarParser.RULE_main = 0;
GrammarParser.RULE_query = 1;
GrammarParser.RULE_criteria = 2;
GrammarParser.RULE_value = 3;
GrammarParser.RULE_array = 4;
GrammarParser.RULE_literal = 5;

function MainContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GrammarParser.RULE_main;
    return this;
}

MainContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MainContext.prototype.constructor = MainContext;

MainContext.prototype.query = function() {
    return this.getTypedRuleContext(QueryContext,0);
};

MainContext.prototype.EOF = function() {
    return this.getToken(GrammarParser.EOF, 0);
};

MainContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterMain(this);
	}
};

MainContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitMain(this);
	}
};

MainContext.prototype.accept = function(visitor) {
    if ( visitor instanceof GrammarVisitor ) {
        return visitor.visitMain(this);
    } else {
        return visitor.visitChildren(this);
    }
};




GrammarParser.MainContext = MainContext;

GrammarParser.prototype.main = function() {

    var localctx = new MainContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, GrammarParser.RULE_main);
    try {
        this.state = 16;
        switch(this._input.LA(1)) {
        case GrammarParser.EOF:
            this.enterOuterAlt(localctx, 1);

            break;
        case GrammarParser.T__0:
        case GrammarParser.ENS_VAR:
        case GrammarParser.LIT_VAR:
            this.enterOuterAlt(localctx, 2);
            this.state = 13;
            this.query(0);
            this.state = 14;
            this.match(GrammarParser.EOF);
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

QueryContext.prototype.query = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(QueryContext);
    } else {
        return this.getTypedRuleContext(QueryContext,i);
    }
};

QueryContext.prototype.criteria = function() {
    return this.getTypedRuleContext(CriteriaContext,0);
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



GrammarParser.prototype.query = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new QueryContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 2;
    this.enterRecursionRule(localctx, 2, GrammarParser.RULE_query, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 24;
        switch(this._input.LA(1)) {
        case GrammarParser.T__0:
            this.state = 19;
            this.match(GrammarParser.T__0);
            this.state = 20;
            this.query(0);
            this.state = 21;
            this.match(GrammarParser.T__1);
            break;
        case GrammarParser.ENS_VAR:
        case GrammarParser.LIT_VAR:
            this.state = 23;
            this.criteria();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 35;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,3,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                localctx = new QueryContext(this, _parentctx, _parentState);
                this.pushNewRecursionContext(localctx, _startState, GrammarParser.RULE_query);
                this.state = 26;
                if (!( this.precpred(this._ctx, 2))) {
                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                }
                this.state = 31;
                switch(this._input.LA(1)) {
                case GrammarParser.T__2:
                    this.state = 27;
                    this.match(GrammarParser.T__2);
                    this.state = 28;
                    this.query(0);
                    break;
                case GrammarParser.T__3:
                    this.state = 29;
                    this.match(GrammarParser.T__3);
                    this.state = 30;
                    this.query(0);
                    break;
                default:
                    throw new antlr4.error.NoViableAltException(this);
                } 
            }
            this.state = 37;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,3,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
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

CriteriaContext.prototype.LIT_VAR = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(GrammarParser.LIT_VAR);
    } else {
        return this.getToken(GrammarParser.LIT_VAR, i);
    }
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
    this.enterRule(localctx, 4, GrammarParser.RULE_criteria);
    try {
        this.state = 47;
        switch(this._input.LA(1)) {
        case GrammarParser.LIT_VAR:
            this.enterOuterAlt(localctx, 1);
            this.state = 38;
            this.match(GrammarParser.LIT_VAR);
            this.state = 39;
            this.match(GrammarParser.LIT_OPERATOR);
            this.state = 42;
            switch(this._input.LA(1)) {
            case GrammarParser.STRING:
            case GrammarParser.NUMBER:
                this.state = 40;
                this.literal();
                break;
            case GrammarParser.LIT_VAR:
                this.state = 41;
                this.match(GrammarParser.LIT_VAR);
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
            }
            break;
        case GrammarParser.ENS_VAR:
            this.enterOuterAlt(localctx, 2);
            this.state = 44;
            this.match(GrammarParser.ENS_VAR);
            this.state = 45;
            this.match(GrammarParser.ENS_OPERATOR);
            this.state = 46;
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
    this.enterRule(localctx, 6, GrammarParser.RULE_value);
    try {
        this.state = 51;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 49;
            this.literal();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 50;
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
    this.enterRule(localctx, 8, GrammarParser.RULE_array);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 53;
        this.literal();
        this.state = 58;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,7,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 54;
                this.match(GrammarParser.T__4);
                this.state = 55;
                this.literal(); 
            }
            this.state = 60;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,7,this._ctx);
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
    this.enterRule(localctx, 10, GrammarParser.RULE_literal);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 61;
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


GrammarParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 1:
			return this.query_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

GrammarParser.prototype.query_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 2);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.GrammarParser = GrammarParser;

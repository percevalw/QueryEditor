// Generated from /Users/perceval/WebstormProjects/mongoQueryEditor/src/Grammar.g4 by ANTLR 4.5.3
// jshint ignore: start
var antlr4 = require('antlr4/index');
var GrammarListener = require('./GrammarListener').GrammarListener;
var GrammarVisitor = require('./GrammarVisitor').GrammarVisitor;

var grammarFileName = "Grammar.g4";

var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u0003\u0013Q\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0003\u0002\u0003\u0002\u0003\u0002\u0003",
    "\u0002\u0005\u0002\u0019\n\u0002\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0005\u0003%\n\u0003\u0005\u0003\'\n\u0003\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0005\u0004-\n\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0005\u00043\n\u0004\u0003\u0004",
    "\u0005\u00046\n\u0004\u0003\u0005\u0003\u0005\u0005\u0005:\n\u0005\u0003",
    "\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0003\b\u0003\b\u0005\bE\n\b\u0003\t\u0003\t\u0003\t\u0007\t",
    "J\n\t\f\t\u000e\tM\u000b\t\u0003\n\u0003\n\u0003\n\u0002\u0002\u000b",
    "\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0002\u0003\u0003\u0002\u000f",
    "\u0010Q\u0002\u0018\u0003\u0002\u0002\u0002\u0004&\u0003\u0002\u0002",
    "\u0002\u00065\u0003\u0002\u0002\u0002\b9\u0003\u0002\u0002\u0002\n;",
    "\u0003\u0002\u0002\u0002\f?\u0003\u0002\u0002\u0002\u000eD\u0003\u0002",
    "\u0002\u0002\u0010F\u0003\u0002\u0002\u0002\u0012N\u0003\u0002\u0002",
    "\u0002\u0014\u0019\u0003\u0002\u0002\u0002\u0015\u0016\u0005\u0004\u0003",
    "\u0002\u0016\u0017\u0007\u0002\u0002\u0003\u0017\u0019\u0003\u0002\u0002",
    "\u0002\u0018\u0014\u0003\u0002\u0002\u0002\u0018\u0015\u0003\u0002\u0002",
    "\u0002\u0019\u0003\u0003\u0002\u0002\u0002\u001a\u001b\u0007\u0003\u0002",
    "\u0002\u001b\u001c\u0005\u0004\u0003\u0002\u001c\u001d\u0007\u0004\u0002",
    "\u0002\u001d\'\u0003\u0002\u0002\u0002\u001e$\u0005\u0006\u0004\u0002",
    "\u001f \u0007\u0005\u0002\u0002 %\u0005\u0004\u0003\u0002!\"\u0007\u0006",
    "\u0002\u0002\"%\u0005\u0004\u0003\u0002#%\u0003\u0002\u0002\u0002$\u001f",
    "\u0003\u0002\u0002\u0002$!\u0003\u0002\u0002\u0002$#\u0003\u0002\u0002",
    "\u0002%\'\u0003\u0002\u0002\u0002&\u001a\u0003\u0002\u0002\u0002&\u001e",
    "\u0003\u0002\u0002\u0002\'\u0005\u0003\u0002\u0002\u0002()\u0007\r\u0002",
    "\u0002),\u0007\u000e\u0002\u0002*-\u0005\u0012\n\u0002+-\u0007\r\u0002",
    "\u0002,*\u0003\u0002\u0002\u0002,+\u0003\u0002\u0002\u0002-6\u0003\u0002",
    "\u0002\u0002./\u0007\u0007\u0002\u0002/3\u0007\u000b\u0002\u000201\u0007",
    "\b\u0002\u000213\u0007\f\u0002\u00022.\u0003\u0002\u0002\u000220\u0003",
    "\u0002\u0002\u000234\u0003\u0002\u0002\u000246\u0005\b\u0005\u00025",
    "(\u0003\u0002\u0002\u000252\u0003\u0002\u0002\u00026\u0007\u0003\u0002",
    "\u0002\u00027:\u0005\n\u0006\u00028:\u0005\f\u0007\u000297\u0003\u0002",
    "\u0002\u000298\u0003\u0002\u0002\u0002:\t\u0003\u0002\u0002\u0002;<",
    "\u0006\u0006\u0002\u0002<=\u0007\n\u0002\u0002=>\u0005\u0006\u0004\u0002",
    ">\u000b\u0003\u0002\u0002\u0002?@\u0007\u000e\u0002\u0002@A\u0005\u0010",
    "\t\u0002A\r\u0003\u0002\u0002\u0002BE\u0005\u0012\n\u0002CE\u0005\u0010",
    "\t\u0002DB\u0003\u0002\u0002\u0002DC\u0003\u0002\u0002\u0002E\u000f",
    "\u0003\u0002\u0002\u0002FK\u0005\u0012\n\u0002GH\u0007\t\u0002\u0002",
    "HJ\u0005\u0012\n\u0002IG\u0003\u0002\u0002\u0002JM\u0003\u0002\u0002",
    "\u0002KI\u0003\u0002\u0002\u0002KL\u0003\u0002\u0002\u0002L\u0011\u0003",
    "\u0002\u0002\u0002MK\u0003\u0002\u0002\u0002NO\t\u0002\u0002\u0002O",
    "\u0013\u0003\u0002\u0002\u0002\u000b\u0018$&,259DK"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'('", "')'", "'and'", "'or'", "'one'", "'all'", 
                     "','", "'must have'" ];

var symbolicNames = [ null, null, null, null, null, null, null, null, "MUST_HAVE", 
                      "ENS_VAR_SINGULAR", "ENS_VAR_PLURAL", "LIT_VAR", "LIT_OPERATOR", 
                      "STRING", "NUMBER", "ENTITY", "CHAR", "WS" ];

var ruleNames =  [ "main", "query", "criteria", "part_criteria", "must_have_criteria", 
                   "normal_criteria", "value", "array", "literal" ];

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
GrammarParser.T__5 = 6;
GrammarParser.T__6 = 7;
GrammarParser.MUST_HAVE = 8;
GrammarParser.ENS_VAR_SINGULAR = 9;
GrammarParser.ENS_VAR_PLURAL = 10;
GrammarParser.LIT_VAR = 11;
GrammarParser.LIT_OPERATOR = 12;
GrammarParser.STRING = 13;
GrammarParser.NUMBER = 14;
GrammarParser.ENTITY = 15;
GrammarParser.CHAR = 16;
GrammarParser.WS = 17;

GrammarParser.RULE_main = 0;
GrammarParser.RULE_query = 1;
GrammarParser.RULE_criteria = 2;
GrammarParser.RULE_part_criteria = 3;
GrammarParser.RULE_must_have_criteria = 4;
GrammarParser.RULE_normal_criteria = 5;
GrammarParser.RULE_value = 6;
GrammarParser.RULE_array = 7;
GrammarParser.RULE_literal = 8;

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
        this.state = 22;
        switch(this._input.LA(1)) {
        case GrammarParser.EOF:
            this.enterOuterAlt(localctx, 1);

            break;
        case GrammarParser.T__0:
        case GrammarParser.T__4:
        case GrammarParser.T__5:
        case GrammarParser.LIT_VAR:
            this.enterOuterAlt(localctx, 2);
            this.state = 19;
            this.query();
            this.state = 20;
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

QueryContext.prototype.query = function() {
    return this.getTypedRuleContext(QueryContext,0);
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




GrammarParser.QueryContext = QueryContext;

GrammarParser.prototype.query = function() {

    var localctx = new QueryContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, GrammarParser.RULE_query);
    try {
        this.state = 36;
        switch(this._input.LA(1)) {
        case GrammarParser.T__0:
            this.enterOuterAlt(localctx, 1);
            this.state = 24;
            this.match(GrammarParser.T__0);
            this.state = 25;
            this.query();
            this.state = 26;
            this.match(GrammarParser.T__1);
            break;
        case GrammarParser.T__4:
        case GrammarParser.T__5:
        case GrammarParser.LIT_VAR:
            this.enterOuterAlt(localctx, 2);
            this.state = 28;
            this.criteria();
            this.state = 34;
            switch(this._input.LA(1)) {
            case GrammarParser.T__2:
                this.state = 29;
                this.match(GrammarParser.T__2);
                this.state = 30;
                this.query();
                break;
            case GrammarParser.T__3:
                this.state = 31;
                this.match(GrammarParser.T__3);
                this.state = 32;
                this.query();
                break;
            case GrammarParser.EOF:
            case GrammarParser.T__1:
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

CriteriaContext.prototype.part_criteria = function() {
    return this.getTypedRuleContext(Part_criteriaContext,0);
};

CriteriaContext.prototype.ENS_VAR_SINGULAR = function() {
    return this.getToken(GrammarParser.ENS_VAR_SINGULAR, 0);
};

CriteriaContext.prototype.ENS_VAR_PLURAL = function() {
    return this.getToken(GrammarParser.ENS_VAR_PLURAL, 0);
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
        this.state = 51;
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
        case GrammarParser.T__4:
        case GrammarParser.T__5:
            this.enterOuterAlt(localctx, 2);
            this.state = 48;
            switch(this._input.LA(1)) {
            case GrammarParser.T__4:
                this.state = 44;
                this.match(GrammarParser.T__4);
                this.state = 45;
                this.match(GrammarParser.ENS_VAR_SINGULAR);
                break;
            case GrammarParser.T__5:
                this.state = 46;
                this.match(GrammarParser.T__5);
                this.state = 47;
                this.match(GrammarParser.ENS_VAR_PLURAL);
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
            }
            this.state = 50;
            this.part_criteria();
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

function Part_criteriaContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GrammarParser.RULE_part_criteria;
    return this;
}

Part_criteriaContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Part_criteriaContext.prototype.constructor = Part_criteriaContext;

Part_criteriaContext.prototype.must_have_criteria = function() {
    return this.getTypedRuleContext(Must_have_criteriaContext,0);
};

Part_criteriaContext.prototype.normal_criteria = function() {
    return this.getTypedRuleContext(Normal_criteriaContext,0);
};

Part_criteriaContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterPart_criteria(this);
	}
};

Part_criteriaContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitPart_criteria(this);
	}
};

Part_criteriaContext.prototype.accept = function(visitor) {
    if ( visitor instanceof GrammarVisitor ) {
        return visitor.visitPart_criteria(this);
    } else {
        return visitor.visitChildren(this);
    }
};




GrammarParser.Part_criteriaContext = Part_criteriaContext;

GrammarParser.prototype.part_criteria = function() {

    var localctx = new Part_criteriaContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, GrammarParser.RULE_part_criteria);
    try {
        this.state = 55;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 53;
            this.must_have_criteria();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 54;
            this.normal_criteria();
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

function Must_have_criteriaContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GrammarParser.RULE_must_have_criteria;
    return this;
}

Must_have_criteriaContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Must_have_criteriaContext.prototype.constructor = Must_have_criteriaContext;

Must_have_criteriaContext.prototype.MUST_HAVE = function() {
    return this.getToken(GrammarParser.MUST_HAVE, 0);
};

Must_have_criteriaContext.prototype.criteria = function() {
    return this.getTypedRuleContext(CriteriaContext,0);
};

Must_have_criteriaContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterMust_have_criteria(this);
	}
};

Must_have_criteriaContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitMust_have_criteria(this);
	}
};

Must_have_criteriaContext.prototype.accept = function(visitor) {
    if ( visitor instanceof GrammarVisitor ) {
        return visitor.visitMust_have_criteria(this);
    } else {
        return visitor.visitChildren(this);
    }
};




GrammarParser.Must_have_criteriaContext = Must_have_criteriaContext;

GrammarParser.prototype.must_have_criteria = function() {

    var localctx = new Must_have_criteriaContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, GrammarParser.RULE_must_have_criteria);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 57;
        if (!( 0 == 1)) {
            throw new antlr4.error.FailedPredicateException(this, "0 == 1");
        }

        this.state = 58;
        this.match(GrammarParser.MUST_HAVE);
        this.state = 59;
        this.criteria();
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

function Normal_criteriaContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GrammarParser.RULE_normal_criteria;
    return this;
}

Normal_criteriaContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Normal_criteriaContext.prototype.constructor = Normal_criteriaContext;

Normal_criteriaContext.prototype.LIT_OPERATOR = function() {
    return this.getToken(GrammarParser.LIT_OPERATOR, 0);
};

Normal_criteriaContext.prototype.array = function() {
    return this.getTypedRuleContext(ArrayContext,0);
};

Normal_criteriaContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterNormal_criteria(this);
	}
};

Normal_criteriaContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitNormal_criteria(this);
	}
};

Normal_criteriaContext.prototype.accept = function(visitor) {
    if ( visitor instanceof GrammarVisitor ) {
        return visitor.visitNormal_criteria(this);
    } else {
        return visitor.visitChildren(this);
    }
};




GrammarParser.Normal_criteriaContext = Normal_criteriaContext;

GrammarParser.prototype.normal_criteria = function() {

    var localctx = new Normal_criteriaContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, GrammarParser.RULE_normal_criteria);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 61;
        this.match(GrammarParser.LIT_OPERATOR);
        this.state = 62;
        this.array();
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
    this.enterRule(localctx, 12, GrammarParser.RULE_value);
    try {
        this.state = 66;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 64;
            this.literal();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 65;
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
    this.enterRule(localctx, 14, GrammarParser.RULE_array);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 68;
        this.literal();
        this.state = 73;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===GrammarParser.T__6) {
            this.state = 69;
            this.match(GrammarParser.T__6);
            this.state = 70;
            this.literal();
            this.state = 75;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
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
    this.enterRule(localctx, 16, GrammarParser.RULE_literal);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 76;
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
	case 4:
			return this.must_have_criteria_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

GrammarParser.prototype.must_have_criteria_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return 0 == 1;
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.GrammarParser = GrammarParser;

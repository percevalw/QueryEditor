// Generated from /Users/perceval/WebstormProjects/mongoQueryEditor/src/Grammar.g4 by ANTLR 4.5.3
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class GrammarLexer extends Lexer {
	static { RuntimeMetaData.checkVersion("4.5.3", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, T__2=3, T__3=4, T__4=5, ENS_VAR=6, LIT_VAR=7, LIT_OPERATOR=8, 
		ENS_OPERATOR=9, STRING=10, NUMBER=11, WORD=12, WS=13;
	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	public static final String[] ruleNames = {
		"T__0", "T__1", "T__2", "T__3", "T__4", "ENS_VAR", "LIT_VAR", "LIT_OPERATOR", 
		"ENS_OPERATOR", "STRING", "NUMBER", "ESC", "UNICODE", "HEX", "INT", "EXP", 
		"WORD", "WS"
	};

	private static final String[] _LITERAL_NAMES = {
		null, "'('", "')'", "'AND'", "'OR'", "','"
	};
	private static final String[] _SYMBOLIC_NAMES = {
		null, null, null, null, null, null, "ENS_VAR", "LIT_VAR", "LIT_OPERATOR", 
		"ENS_OPERATOR", "STRING", "NUMBER", "WORD", "WS"
	};
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}


	public GrammarLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "Grammar.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public String[] getModeNames() { return modeNames; }

	@Override
	public ATN getATN() { return _ATN; }

	public static final String _serializedATN =
		"\3\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd\2\17\u00ac\b\1\4\2"+
		"\t\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4"+
		"\13\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22"+
		"\t\22\4\23\t\23\3\2\3\2\3\3\3\3\3\4\3\4\3\4\3\4\3\5\3\5\3\5\3\6\3\6\3"+
		"\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\5\7B\n\7\3\b\3\b\3"+
		"\b\3\b\3\b\3\b\3\b\3\b\3\b\5\bM\n\b\3\t\3\t\3\t\3\t\3\t\3\t\5\tU\n\t\3"+
		"\n\3\n\3\n\3\n\3\n\3\n\3\n\3\n\5\n_\n\n\3\13\3\13\3\13\7\13d\n\13\f\13"+
		"\16\13g\13\13\3\13\3\13\3\f\5\fl\n\f\3\f\3\f\3\f\6\fq\n\f\r\f\16\fr\3"+
		"\f\5\fv\n\f\3\f\5\fy\n\f\3\f\3\f\3\f\3\f\5\f\177\n\f\3\f\5\f\u0082\n\f"+
		"\3\r\3\r\3\r\5\r\u0087\n\r\3\16\3\16\3\16\3\16\3\16\3\16\3\17\3\17\3\20"+
		"\3\20\3\20\7\20\u0094\n\20\f\20\16\20\u0097\13\20\5\20\u0099\n\20\3\21"+
		"\3\21\5\21\u009d\n\21\3\21\3\21\3\22\6\22\u00a2\n\22\r\22\16\22\u00a3"+
		"\3\23\6\23\u00a7\n\23\r\23\16\23\u00a8\3\23\3\23\2\2\24\3\3\5\4\7\5\t"+
		"\6\13\7\r\b\17\t\21\n\23\13\25\f\27\r\31\2\33\2\35\2\37\2!\2#\16%\17\3"+
		"\2\13\4\2$$^^\3\2\62;\n\2$$\61\61^^ddhhppttvv\5\2\62;CHch\3\2\63;\4\2"+
		"GGgg\4\2--//\5\2\62;C\\c|\5\2\13\f\17\17\"\"\u00bb\2\3\3\2\2\2\2\5\3\2"+
		"\2\2\2\7\3\2\2\2\2\t\3\2\2\2\2\13\3\2\2\2\2\r\3\2\2\2\2\17\3\2\2\2\2\21"+
		"\3\2\2\2\2\23\3\2\2\2\2\25\3\2\2\2\2\27\3\2\2\2\2#\3\2\2\2\2%\3\2\2\2"+
		"\3\'\3\2\2\2\5)\3\2\2\2\7+\3\2\2\2\t/\3\2\2\2\13\62\3\2\2\2\rA\3\2\2\2"+
		"\17L\3\2\2\2\21T\3\2\2\2\23^\3\2\2\2\25`\3\2\2\2\27\u0081\3\2\2\2\31\u0083"+
		"\3\2\2\2\33\u0088\3\2\2\2\35\u008e\3\2\2\2\37\u0098\3\2\2\2!\u009a\3\2"+
		"\2\2#\u00a1\3\2\2\2%\u00a6\3\2\2\2\'(\7*\2\2(\4\3\2\2\2)*\7+\2\2*\6\3"+
		"\2\2\2+,\7C\2\2,-\7P\2\2-.\7F\2\2.\b\3\2\2\2/\60\7Q\2\2\60\61\7T\2\2\61"+
		"\n\3\2\2\2\62\63\7.\2\2\63\f\3\2\2\2\64\65\7v\2\2\65\66\7t\2\2\66\67\7"+
		"c\2\2\678\7f\2\289\7g\2\29:\7t\2\2:B\7u\2\2;<\7v\2\2<=\7t\2\2=>\7c\2\2"+
		">?\7f\2\2?@\7g\2\2@B\7u\2\2A\64\3\2\2\2A;\3\2\2\2B\16\3\2\2\2CD\7o\2\2"+
		"DE\7k\2\2EM\7f\2\2FG\7c\2\2GH\7u\2\2HM\7m\2\2IJ\7d\2\2JK\7k\2\2KM\7f\2"+
		"\2LC\3\2\2\2LF\3\2\2\2LI\3\2\2\2M\20\3\2\2\2NO\7?\2\2OU\7?\2\2PQ\7?\2"+
		"\2QU\7>\2\2RS\7?\2\2SU\7@\2\2TN\3\2\2\2TP\3\2\2\2TR\3\2\2\2U\22\3\2\2"+
		"\2VW\7K\2\2W_\7P\2\2XY\7P\2\2YZ\7Q\2\2Z[\7V\2\2[\\\7\"\2\2\\]\7K\2\2]"+
		"_\7P\2\2^V\3\2\2\2^X\3\2\2\2_\24\3\2\2\2`e\7$\2\2ad\5\31\r\2bd\n\2\2\2"+
		"ca\3\2\2\2cb\3\2\2\2dg\3\2\2\2ec\3\2\2\2ef\3\2\2\2fh\3\2\2\2ge\3\2\2\2"+
		"hi\7$\2\2i\26\3\2\2\2jl\7/\2\2kj\3\2\2\2kl\3\2\2\2lm\3\2\2\2mn\5\37\20"+
		"\2np\7\60\2\2oq\t\3\2\2po\3\2\2\2qr\3\2\2\2rp\3\2\2\2rs\3\2\2\2su\3\2"+
		"\2\2tv\5!\21\2ut\3\2\2\2uv\3\2\2\2v\u0082\3\2\2\2wy\7/\2\2xw\3\2\2\2x"+
		"y\3\2\2\2yz\3\2\2\2z{\5\37\20\2{|\5!\21\2|\u0082\3\2\2\2}\177\7/\2\2~"+
		"}\3\2\2\2~\177\3\2\2\2\177\u0080\3\2\2\2\u0080\u0082\5\37\20\2\u0081k"+
		"\3\2\2\2\u0081x\3\2\2\2\u0081~\3\2\2\2\u0082\30\3\2\2\2\u0083\u0086\7"+
		"^\2\2\u0084\u0087\t\4\2\2\u0085\u0087\5\33\16\2\u0086\u0084\3\2\2\2\u0086"+
		"\u0085\3\2\2\2\u0087\32\3\2\2\2\u0088\u0089\7w\2\2\u0089\u008a\5\35\17"+
		"\2\u008a\u008b\5\35\17\2\u008b\u008c\5\35\17\2\u008c\u008d\5\35\17\2\u008d"+
		"\34\3\2\2\2\u008e\u008f\t\5\2\2\u008f\36\3\2\2\2\u0090\u0099\7\62\2\2"+
		"\u0091\u0095\t\6\2\2\u0092\u0094\t\3\2\2\u0093\u0092\3\2\2\2\u0094\u0097"+
		"\3\2\2\2\u0095\u0093\3\2\2\2\u0095\u0096\3\2\2\2\u0096\u0099\3\2\2\2\u0097"+
		"\u0095\3\2\2\2\u0098\u0090\3\2\2\2\u0098\u0091\3\2\2\2\u0099 \3\2\2\2"+
		"\u009a\u009c\t\7\2\2\u009b\u009d\t\b\2\2\u009c\u009b\3\2\2\2\u009c\u009d"+
		"\3\2\2\2\u009d\u009e\3\2\2\2\u009e\u009f\5\37\20\2\u009f\"\3\2\2\2\u00a0"+
		"\u00a2\t\t\2\2\u00a1\u00a0\3\2\2\2\u00a2\u00a3\3\2\2\2\u00a3\u00a1\3\2"+
		"\2\2\u00a3\u00a4\3\2\2\2\u00a4$\3\2\2\2\u00a5\u00a7\t\n\2\2\u00a6\u00a5"+
		"\3\2\2\2\u00a7\u00a8\3\2\2\2\u00a8\u00a6\3\2\2\2\u00a8\u00a9\3\2\2\2\u00a9"+
		"\u00aa\3\2\2\2\u00aa\u00ab\b\23\2\2\u00ab&\3\2\2\2\25\2ALT^cekrux~\u0081"+
		"\u0086\u0095\u0098\u009c\u00a3\u00a8\3\b\2\2";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}
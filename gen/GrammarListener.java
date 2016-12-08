// Generated from /Users/perceval/WebstormProjects/mongoQueryEditor/src/Grammar.g4 by ANTLR 4.5.3
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link GrammarParser}.
 */
public interface GrammarListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link GrammarParser#query}.
	 * @param ctx the parse tree
	 */
	void enterQuery(GrammarParser.QueryContext ctx);
	/**
	 * Exit a parse tree produced by {@link GrammarParser#query}.
	 * @param ctx the parse tree
	 */
	void exitQuery(GrammarParser.QueryContext ctx);
	/**
	 * Enter a parse tree produced by {@link GrammarParser#criteria}.
	 * @param ctx the parse tree
	 */
	void enterCriteria(GrammarParser.CriteriaContext ctx);
	/**
	 * Exit a parse tree produced by {@link GrammarParser#criteria}.
	 * @param ctx the parse tree
	 */
	void exitCriteria(GrammarParser.CriteriaContext ctx);
	/**
	 * Enter a parse tree produced by {@link GrammarParser#value}.
	 * @param ctx the parse tree
	 */
	void enterValue(GrammarParser.ValueContext ctx);
	/**
	 * Exit a parse tree produced by {@link GrammarParser#value}.
	 * @param ctx the parse tree
	 */
	void exitValue(GrammarParser.ValueContext ctx);
	/**
	 * Enter a parse tree produced by {@link GrammarParser#array}.
	 * @param ctx the parse tree
	 */
	void enterArray(GrammarParser.ArrayContext ctx);
	/**
	 * Exit a parse tree produced by {@link GrammarParser#array}.
	 * @param ctx the parse tree
	 */
	void exitArray(GrammarParser.ArrayContext ctx);
	/**
	 * Enter a parse tree produced by {@link GrammarParser#literal}.
	 * @param ctx the parse tree
	 */
	void enterLiteral(GrammarParser.LiteralContext ctx);
	/**
	 * Exit a parse tree produced by {@link GrammarParser#literal}.
	 * @param ctx the parse tree
	 */
	void exitLiteral(GrammarParser.LiteralContext ctx);
}
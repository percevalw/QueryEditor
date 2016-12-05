"use strict";

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

/**
 * Created by perceval on 03/12/2016.
 */

var templates = {
    "test": {
        name: "Test"
    },
    "essai": {
        name: "Test"
    }
};

var json = {
    $and: [{
        "test": 1,
        "essai": 2
    }]
};

var StateMachine = function StateMachine(initial, transitions) {
    _classCallCheck(this, StateMachine);

    this.initial = initial;
};

//# sourceMappingURL=index-compiled.js.map
'use strict';

var antlr4 = require('antlr4/index');
var NumbersLexer = require('../gen/NumbersLexer');
var NumbersParser = require('../gen/NumbersParser');
var input = "128,100,900,200";
var chars = new antlr4.InputStream(input);
var lexer = new NumbersLexer.NumbersLexer(chars);
var tokens = new antlr4.CommonTokenStream(lexer);
var parser = new NumbersParser.NumbersParser(tokens);
parser.buildParseTrees = true;
var tree = parser.parse();
console.log("Parsed: " + tree);
//# sourceMappingURL=all.js.map

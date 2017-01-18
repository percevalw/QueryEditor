/**
 * Created by perceval on 11/12/2016.
 */

const MongoParser = require('../src/index').MongoParser;
var treeify = require('treeify');

const main = function(input) {
    const mongo_parser = new MongoParser({
        parsed: [{
            match: (t) => t.symbol == "AND",
            class_names: (e) => 'group-operator'
        }],
        error: {
            message: (e) => 'Expected\xA0:\xA0/',// + e.expected.join(',\xA0'),
            class_names: (e) => 'err ge-tooltip-error' + (e.text == "<EOF>" ? ' eof': '')
        }
    });
    const output = mongo_parser.parse(input);

    console.log(treeify.asTree(output, true));
};

main("ask == 5 AND mid == 6 AND trades IN 5,6");

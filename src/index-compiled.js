"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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
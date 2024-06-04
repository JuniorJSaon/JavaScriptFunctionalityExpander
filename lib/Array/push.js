// this code simply explains how the push function works

// console.log("modifying...");

Array.prototype.push2 = function() {
    'use strict';
    let len = this.length;
    for (let i = 0; i < arguments.length; i++) {        // you literally need to know what `arguments` and `this` keyword is
        this[len] = arguments[i];
        len++;
    }
    return this;
}

console.info("`push.js` loaded");
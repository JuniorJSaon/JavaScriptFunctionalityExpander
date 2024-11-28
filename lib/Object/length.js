// Returns total length of Object using keys 

Object.prototype.length = function () {
     return Object.keys(this).length;
};

/*
     // Example:
     let obj = {a: 1, b: 0};
     console.log(obj.length());    // Output: 2
*/
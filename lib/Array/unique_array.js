// Cleans array from duplicates

Array.prototype.unique = function() {
     return [... new Set(this)];
}   
/*
     // Usage:
     let arr = [1,1,0,0,0,1];
     console.log(arr.unique());    // Output: [1, 0]
*/
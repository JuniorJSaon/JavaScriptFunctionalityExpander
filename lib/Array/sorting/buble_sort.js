/*
     This code adds 2 funcitons to Array.prototype which sort array using bublesorting style
     !! WARNING - sorting works only on chars (by asci codes) and numbers
*/

(() => {
     function swap(arr, i, j) {
          // Swap elements at index i and j
          [arr[i], arr[j]] = [arr[j], arr[i]];
     }

     // buble sorting array without return value (working on original array)
     Array.prototype.bsort = function() {
          let n = this.length;
          for (let i = 0; i < n - 1; i++) {
               for (let j = 0; j < n - i - 1; j++) {
                    if (this[j] > this[j + 1]) {
                         swap(this, j, j + 1); // Swap elements at j and j + 1
                    }
               }
          }
     }
     // buble sorting array with return the results (working on copy array)
     Array.prototype.bsort_wr = function() {
          let arr = this;
          let n = arr.length;
          for (let i = 0; i < n - 1; i++) {
               for (let j = 0; j < n - i - 1; j++) {
                    if (arr[j] > arr[j + 1]) {
                         swap(arr, j, j + 1); // Swap elements at j and j + 1
                    }
               }
          }
          return arr;
     }
})();

/*
     // Usage
     // int
     let arr = [5, 3, 8, 4, 2];
     let arr2 = arr.bsort_wr();
     console.log(arr); // Output: [2, 3, 4, 5, 8]
     arr.bsort();
     console.log(arr); // Output: [2, 3, 4, 5, 8]
     // chars
     let a = "qwerty".split('');
     Console: Array(6) [ "e", "q", "r", "t", "w", "y" ]
*/
String.prototype.convertToAsciArr = function () {      // this function convert a string to asci numbers (returns array)  
    return this.split("")
        .map((char) => {
            return char.charCodeAt(0);
        });
};

Array.prototype.convertAsciToStr = function () {         // this function convert a asci array to normal string (returns string)  
    return this.join(' ').split(" ")
        .map((asci) => {
            return String.fromCharCode(asci);
        }).join('');
}

console.info("`asci-arr.js` loaded");

/*
    //   example usage
    
    let str = "this is String";
    
    str = str.convertToAsciArr();
    console.log(str);       // output: "116 104 105 115 32 105 115 32 83 116 114 105 110 103"

    str = str.convertAsciToStr();
    console.log(str);       // output: "this is String"
*/
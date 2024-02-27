String.prototype.convertStrToAscii = function () {      // this function convert a string to asci numbers (returns string)  
    return this.split("")
    .map((char) => {
        return char.charCodeAt(0);
    })
    .join(" ");
};

String.prototype.convertAsciiToStr = function () {      // this function convert a asci string to normal string (returns string)  
    return this.split(' ').map((asci) => {
        return String.fromCharCode(asci);
    })
    .join("");
}

console.info("`asci-str.js` loaded");

/*
    //   example usage
    
    let str = "this is String";
    
    str = str.convertStrToAscii();
    console.log(str);       // output: "116 104 105 115 32 105 115 32 83 116 114 105 110 103"

    str = str.convertAsciiToStr();
    console.log(str);       // output: "this is String"
*/
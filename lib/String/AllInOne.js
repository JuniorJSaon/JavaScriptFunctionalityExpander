(() => {
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

    console.info("`AllInOne.js` loaded");
}) ();

/*
    //   example usage

    let str = "sample string";

    str = str.convertToAsciArr();
    console.log(str);       // output: Array(13) [ 115, 97, 109, 112, 108, 101, 32, 115, 116, 114, … ]

    str = str.convertAsciToStr();
    console.log(str);       // output: "sample string"

    str = str.convertStrToAscii();
    console.log(str);       // output: "115 97 109 112 108 101 32 115 116 114 105 110 103"

    str.convertAsciiToStr();
    console.log(str);       // output: "sample string"
*/
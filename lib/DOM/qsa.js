/*
    this script adds the same `querySelectorAll`
    function to the `document` object and each HTML element,
    only with the shortened name `qsa`
*/ 

((doc) => {
    doc.qsa = document.querySelectorAll.bind(doc);

    Element.prototype.qsa = function(item) {
        return this.querySelectorAll(item);
    }
}) (document);

/*
    //   example usage
    
    let body = document.body;

    let paragraph = body.qsa("p");      // paragraph is NodeList that have all p tags from body

    paragraph.forEach(element => {
        console.log(element.textContent);       
    }); 

    // ...
*/

console.info("`qsa.js` loaded");
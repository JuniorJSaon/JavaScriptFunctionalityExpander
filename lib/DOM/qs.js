/*
    this script adds the same `querySelector`
    function to the `document` object and each HTML element,
    only with the shortened name `qs`
*/ 

((doc) => {
    doc.qs = doc.querySelector.bind(doc);

    Element.prototype.qs = function(item) {
        return this.querySelector(item);
    }
}) (document);

/*
    //   example usage
    
    let body = document.qs("body");

    let paragraph = body.qs("p");

    // ...
*/

console.info("`qs.js` loaded");
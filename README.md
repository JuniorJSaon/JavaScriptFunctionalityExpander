# JavaScriptFunctionalityExpander

This repository is a `JavaScript` manual where i explain some functionality and language mechanics. In
some cases i use **MonkeyPatching** technique which i described below.

> use *https://raw.githubusercontent.com/* to import scripts from my [library](./lib/)

examples: 

```javascript 
import "https://raw.githubusercontent.com/SirFiJay/JavaScriptFunctionalityExpander/lib/Array/push.js"
```
or

```html
<script src="https://raw.githubusercontent.com/SirFiJay/JavaScriptFunctionalityExpander/lib/Array/push.js"></script>
```

# MonekeyPatching

Monkeypatching in JavaScript refers to the practice of modifying or extending the functionality of built-in classes, objects, or methods in JavaScript at runtime. This means changing behaviors, adding new methods, or modifying existing ones of standard built-in objects like Array, String, or even JavaScript's core objects like Object itself, without altering the source code of the original classes or objects.

Here's an example to illustrate monkeypatching:

```javascript
// Original behavior
console.log("Hello, world!".toUpperCase());  // Outputs: "HELLO, WORLD!"

// Monkeypatch the String object to introduce a new method
String.prototype.toLowercasePlus = function() {
    return this.toLowerCase() + "!";
};

// New behavior
console.log("Hello, World!".toLowercasePlus());  // Outputs: "hello, world!!"
```
In the example above, the String prototype is modified by adding a new method called toLowercasePlus. This method is now available to all instances of strings within the context of this JavaScript execution.

While monkeypatching can be useful for adding functionality or fixing bugs quickly, it's generally considered a bad practice for several reasons:

**Maintainability**: Changes made through monkeypatching can make the codebase harder to understand and maintain, especially for new developers who might not be aware of the modifications.

**Compatibility**: Updates to the JavaScript language or conflicts with third-party libraries can break monkeypatched code if they modify the same objects or methods.

**Debugging**: Diagnosing issues can become more complicated since the source of the behavior may not be apparent from the original code or documentation.

Therefore, it's typically recommended to avoid monkeypatching in production code and instead look for alternative solutions like extending classes properly, using composition, or employing other design patterns.
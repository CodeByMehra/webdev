/*
===========================================
📌 Node.js Modules & module.exports
===========================================

1️⃣ What is a Module?
- In Node.js, each file is treated as a separate module.
- Modules allow you to organize code into reusable pieces.

-------------------------------------------
2️⃣ module.exports
-------------------------------------------
- `module.exports` is the object that a module returns when it is required in another file.
- By default, every file has its own `module.exports`.

Example: Export a function
-------------------------------------------
math.js
-------------------------------------------
function add(a, b) {
    return a + b;
}

// Export the function
module.exports = add;

-------------------------------------------
3️⃣ Importing a Module
-------------------------------------------
- Use `require()` to import a module.

Example:
-------------------------------------------
app.js
-------------------------------------------
const add = require('./math');

console.log(add(5, 10)); // Output: 15

-------------------------------------------
4️⃣ Exporting Multiple Items
-------------------------------------------
- You can export an object containing multiple functions/variables.

Example:
-------------------------------------------
math.js
-------------------------------------------
function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

// Export multiple functions
module.exports = { add, multiply };

-------------------------------------------
app.js
-------------------------------------------
const math = require('./math');

console.log(math.add(5, 10));      // Output: 15
console.log(math.multiply(5, 10)); // Output: 50

-------------------------------------------
5️⃣ Alternative: exports shorthand
-------------------------------------------
- You can also use `exports` instead of `module.exports` for simpler exports.

Example:
-------------------------------------------
greet.js
-------------------------------------------
exports.sayHello = function(name) {
    return `Hello, ${name}!`;
};

-------------------------------------------
app.js
-------------------------------------------
const greet = require('./greet');

console.log(greet.sayHello('Vishal')); // Output: Hello, Vishal!
-------------------------------------------
⚠️ Note:
- If you assign a new object to `exports` directly, it won’t work. Use `module.exports` instead:
  ❌ exports = { add, multiply };  // ❌ Won't work
  ✅ module.exports = { add, multiply };  // ✅ Works

*/


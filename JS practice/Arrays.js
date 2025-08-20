// 1. ✅ Check if a variable is an array
Array.isArray(arr); // Returns true if 'arr' is an array

// Example:
let fruits = ['apple', 'banana'];
console.log(Array.isArray(fruits)); // true

//-----------------------------------------------------

// 2. 📏 Length of an array
arr.length // Tells you how many items are in the array

// Example:
console.log(fruits.length); // 2

//-----------------------------------------------------

// 3. 🔁 Common Array Methods

// 🔹 push(): Add item to end
// 🔹 pop(): Remove item from end
fruits.push('mango'); // ['apple', 'banana', 'mango']
fruits.pop();         // ['apple', 'banana']

// 🔹 shift(): Remove first item
// 🔹 unshift(): Add item to start
fruits.shift();       // ['banana']
fruits.unshift('grape'); // ['grape', 'banana']

// 🔹 splice(): Add or remove items at a position
// Syntax: array.splice(startIndex, deleteCount, item1, item2...)
fruits.splice(1, 0, 'orange'); // ['grape', 'orange', 'banana']

// 🔹 toString(): Convert array to string
console.log(fruits.toString()); // "grape,orange,banana"

// 🔹 sort(): Sort items alphabetically or numerically
fruits.sort(); // ['banana', 'grape', 'orange']

// 🔹 valueOf(): Returns the array itself (rarely used directly)
console.log(fruits.valueOf()); // ['banana', 'grape', 'orange']

//-----------------------------------------------------

// 4. 📌 Arrays use references (like objects)
let a = [1, 2, 3];
let b = a; // Both 'a' and 'b' refer to the same array
b.push(4);
console.log(a); // [1, 2, 3, 4]

//-----------------------------------------------------

// 5. 🧩 Destructuring arrays
// Extracting values into variables easily

const [first, second] = ['car', 'bike', 'bus'];
console.log(first);  // 'car'
console.log(second); // 'bike'

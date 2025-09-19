let  n = 5;

for(let i=0; i<n; i++){
    console.log(`Heyy ${i}`);
}


/*
===========================================
📌 Node.js Quick Notes (VS Code Friendly)
===========================================

1️⃣ What is Node.js?
- Node.js is a JavaScript runtime built on Chrome's V8 engine.
- Lets you run JS outside the browser (server-side).

-------------------------------------------
2️⃣ Running a Node.js File
-------------------------------------------
$ node filename.js

Example:
$ node hello.js

-------------------------------------------
3️⃣ process Object
-------------------------------------------
- 'process' is a global object in Node.js.
- It gives information and control over the Node.js process.

Common properties:
- process.pid        → Current process ID
- process.version    → Node.js version
- process.platform   → Platform (win32, linux, darwin)
- process.cwd()      → Current working directory
- process.env        → Environment variables

-------------------------------------------
4️⃣ process.argv (Command Line Arguments)
-------------------------------------------
- process.argv is an array containing command line arguments.
- First element  (argv[0]) = Path to node executable
- Second element (argv[1]) = Path to your script file
- From argv[2] onwards → User-provided arguments

Example:
-------------------------------------------
test.js
-------------------------------------------
console.log(process.argv);

Run:
$ node test.js hello world 123

Output:
[
  'C:\\Program Files\\nodejs\\node.exe',
  'C:\\path\\to\\test.js',
  'hello',
  'world',
  '123'
]

-------------------------------------------
5️⃣ Using process.argv in Real Example
-------------------------------------------

Example: Add 2 numbers from CLI
-------------------------------------------
add.js
-------------------------------------------
const num1 = parseInt(process.argv[2]);
const num2 = parseInt(process.argv[3]);

console.log(`Sum = ${num1 + num2}`);

Run:
$ node add.js 5 10
Output: Sum = 15

-------------------------------------------
6️⃣ process.exit()
-------------------------------------------
- Ends the Node.js process.
- Useful for error handling.

Example:
-------------------------------------------
if (process.argv.length < 4) {
  console.log("Usage: node add.js num1 num2");
  process.exit(1); // exit with error code
}
*/


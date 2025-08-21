// ===============================
// JavaScript Timer Examples
// ===============================

// --- 1. setTimeout ---
// Runs once after a specified delay
console.log("Start setTimeout");

const timeoutId = setTimeout(() => {
  console.log("Executed after 2 seconds");
}, 2000);

// Cancel the timeout after 1 second
setTimeout(() => {
  clearTimeout(timeoutId);
  console.log("Timeout canceled before execution");
}, 1000);


// --- 2. setInterval ---
// Runs repeatedly at a specified interval
console.log("Start setInterval");

let count = 0;
const intervalId = setInterval(() => {
  count++;
  console.log(`Interval execution #${count}`);

  if (count >= 5) {
    clearInterval(intervalId); // Stop after 5 runs
    console.log("Interval cleared after 5 executions");
  }
}, 1000);


// --- 3. Recursive setTimeout (Controlled Repetition)
// Alternative to setInterval for better control
function repeatWithDelay() {
  setTimeout(() => {
    console.log("Controlled repeat with delay");
    repeatWithDelay(); // call itself
  }, 3000);
}

// Start controlled repeating execution
// repeatWithDelay(); // Uncomment to run

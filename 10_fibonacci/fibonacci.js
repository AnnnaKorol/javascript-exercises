const fibonacci = function (n) {
  // Base cases
  if (n == 0) {
    return 0;
  } else if (n < 0) {
    return "OOPS"; // For n = 0
  } else if (n == 1) {
    return 1; // For n = 1
  } else {
    // Recursive case
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
};
//   Example usage:
//   console.log(fibonacci(5)); // Output: 5 (the 5th Fibonacci number)

// Do not edit below this line
module.exports = fibonacci;

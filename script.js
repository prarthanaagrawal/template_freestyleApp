// Create a function to handle the addition of two numbers
function addNumbers() {
  // Retrieve the values entered by the user from the input fields
  const firstNumber = document.getElementById("firstNumber").value;
  const secondNumber = document.getElementById("secondNumber").value;

  // Call the back-end interface to pass the two numbers
  const sum = backendInterface(firstNumber, secondNumber);

  // Receive the sum from the back-end interface
  // Display the sum in the result display area
  document.getElementById("result").textContent = `Sum: ${sum}`;
}

// Create a mock back-end interface to calculate the sum of two numbers
function backendInterface(num1, num2) {
  return parseInt(num1) + parseInt(num2);
}

// Attach the addNumbers function to a button click event
document.getElementById("calculateButton").addEventListener("click", addNumbers);

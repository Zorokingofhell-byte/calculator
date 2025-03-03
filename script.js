// Function to update the display
function updateDisplay(value) {
  document.getElementById('output').textContent = value;
}

// Function to append numbers or operators to the screen
function appendToScreen(value) {
  let currentDisplay = document.getElementById('output').textContent;

  // Prevent starting with a decimal point
  if (value === '.' && currentDisplay.includes('.')) return;

  if (currentDisplay === '0') {
    if (value !== '.') {
      updateDisplay(value);
    }
  } else {
    updateDisplay(currentDisplay + value);
  }
}

// Function to clear the screen
function clearScreen() {
  updateDisplay('0');
}

// Function to delete the last character
function deleteLast() {
  let currentDisplay = document.getElementById('output').textContent;
  if (currentDisplay.length === 1) {
    updateDisplay('0');
  } else {
    updateDisplay(currentDisplay.slice(0, -1));
  }
}

// Function to calculate the result
function calculate() {
  let currentDisplay = document.getElementById('output').textContent;

  // Evaluate the expression
  try {
    let result = eval(currentDisplay);
    updateDisplay(result.toString());
  } catch (error) {
    updateDisplay('Error');
  }
}

function isCardNumberValid(number) {
  // Only accept this exact card number (no dashes)
  return number === '1234123412341234';
}

function displayError(msg) {
  const errorElement = document.querySelector('.errorMsg');
  errorElement.innerHTML = msg.replace(/\n/g, '<br>');
  errorElement.style.color = 'red';
}

function submitHandler(event) {
  event.preventDefault();
  
  // Clear previous errors
  displayError('');

  // Get the card number input, strip dashes/spaces
  const cardInput = event.target.querySelector('#card-number');
  let cardValue = cardInput.value.replace(/[-\s]/g, '');

  let errorMsg = '';

  // Check if card number is numeric
  if (!/^\d+$/.test(cardValue)) {
    errorMsg += 'Card number is not a valid number\n';
  } else if (!isCardNumberValid(cardValue)) {
    errorMsg += 'Card number is not a valid card number\n';
  }

  if (errorMsg !== '') {
    displayError(errorMsg);
    return false; // prevent submission
  }

  // If no errors, you can submit the form here or do other logic
  alert('Payment submitted successfully!');
  return true;
}

// Correct selector for your form ID
document.querySelector('#card-form').addEventListener('submit', submitHandler);

// Function to handle form submission and show an alert
  function sendMessage() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Perform form validation (you can add more validation as needed)
    if (name === '' || email === '' || message === '') {
      alert('Please fill in all the fields before submitting.');
      return;
    }

    // Display a confirmation alert
    alert(`Thank you, ${name}! Your message has been sent.`);
  }

  // Add event listener to the "Send Message" button
  const sendButton = document.querySelector('button[type="submit"]');
  sendButton.addEventListener('click', sendMessage);
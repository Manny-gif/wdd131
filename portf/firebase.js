
// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANdVEODx9FERSYIX8jrjdI5Xy7ayofDek",
  authDomain: "port-28889158-e2929.firebaseapp.com",
  databaseURL: "https://port-28889158-e2929-default-rtdb.firebaseio.com",
  projectId: "port-28889158-e2929",
  storageBucket: "port-28889158-e2929.firebasestorage.app",
  messagingSenderId: "985506470467",
  appId: "1:985506470467:web:dbddc87f7f8487f1b392f6"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

// Get a reference to the form and form message element
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

// Handle form submission
contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Get user input
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // Push data to Firebase
  database.ref("messages").push({
    name: name,
    email: email,
    message: message,
  })
  .then(() => {
    // Success message
    formMessage.textContent = "Your message has been sent!";
    contactForm.reset();
  })
  .catch((error) => {
    // Error message
    formMessage.textContent = "An error occurred: " + error.message;
  });
});

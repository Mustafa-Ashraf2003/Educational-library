// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// استيراد إعدادات firebase من ملف config.js
import firebaseConfig from "./config.js";

// Initialize Firebase
let app;
let auth;

try {
  app = initializeApp(firebaseConfig);
  auth = getAuth(app);
  console.log("Firebase initialized successfully");
} catch (error) {
  console.error("Error initializing Firebase:", error);
}

// submit button
const submit = document.getElementById("sub_n1");
submit.addEventListener("click", function (event) {
  event.preventDefault();
  console.log("Register button clicked");
  register_f();
});

function register_f() {
  try {
    const email = document.getElementById("ema").value;
    const password = document.getElementById("pwd2").value;
    const rePassword = document.getElementById("re_pwd").value;
    const age = document.getElementById("n_age").value;

    console.log("Registration attempt with email:", email);

    // Validate all fields are filled
    if (!email || !password || !rePassword || !age) {
      alert("Please fill in all fields");
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address");
      return;
    }

    // Validate password length
    if (password.length < 6) {
      alert("Password must be at least 6 characters long");
      return;
    }

    // Validate passwords match
    if (password !== rePassword) {
      alert("Passwords do not match");
      return;
    }

    // Validate age is a valid date
    if (!age) {
      alert("Please enter a valid date of birth");
      return;
    }

    console.log("Starting Firebase registration...");

    // Create user with Firebase
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up successfully
        const user = userCredential.user;
        console.log("User registered successfully:", user);
        alert("Account created successfully!");
        window.location.href = "grand.html";
      })
      .catch((error) => {
        console.error("Firebase registration error:", error);
        let errorMessage = "Registration failed: ";

        switch (error.code) {
          case "auth/email-already-in-use":
            errorMessage += "This email is already registered";
            break;
          case "auth/invalid-email":
            errorMessage += "Invalid email format";
            break;
          case "auth/operation-not-allowed":
            errorMessage += "Email/password accounts are not enabled";
            break;
          case "auth/weak-password":
            errorMessage += "Password is too weak";
            break;
          default:
            errorMessage += error.message;
        }

        alert(errorMessage);
      });
  } catch (error) {
    console.error("Unexpected error during registration:", error);
    alert("An unexpected error occurred. Please try again.");
  }
}

function valid_f() {
  var paw1 = document.getElementById("pwd2").value;
  var re1 = document.getElementById("re_pwd").value;
  if (paw1 != re1) {
    alert("password must be same");
  }
}

function agg_valid() {
  var ag1 = document.getElementById("n_age").value;
  if (!/^[0-9]+$/.test(ag1)) {
    alert("Not valid");
  }
}

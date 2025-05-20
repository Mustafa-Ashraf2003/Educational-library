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
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Add welcome message styles
const style = document.createElement("style");
style.textContent = `
  .welcome-message {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(255, 255, 255, 0.95);
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
    text-align: center;
    animation: welcomeAnimation 1.5s ease-out;
    z-index: 1000;
  }

  .welcome-content h2 {
    color: #2c3e50;
    margin-bottom: 1rem;
    font-size: 2rem;
  }

  .welcome-content p {
    color: #7f8c8d;
    font-size: 1.2rem;
  }

  @keyframes welcomeAnimation {
    0% {
      opacity: 0;
      transform: translate(-50%, -60%);
    }
    100% {
      opacity: 1;
      transform: translate(-50%, -50%);
    }
  }

  @keyframes fadeOut {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);

// ربط الزر بالدالة بعد تحميل الصفحة
window.addEventListener("DOMContentLoaded", () => {
  const submitBtn = document.getElementById("sub_n1");
  if (submitBtn) {
    submitBtn.addEventListener("click", registerUser);
  }
});

function registerUser(event) {
  event.preventDefault();

  const email = document.getElementById("ema").value;
  const password = document.getElementById("pwd2").value;
  const confirmPassword = document.getElementById("re_pwd").value;
  const age = document.getElementById("n_age").value;

  // Validate all fields
  if (!email || !password || !confirmPassword || !age) {
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
  if (password !== confirmPassword) {
    alert("Passwords do not match");
    return;
  }

  // Validate age
  if (!age) {
    alert("Please enter a valid date of birth");
    return;
  }

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Get the first part of the email (before @)
      const email = userCredential.user.email;
      const username = email.split("@")[0];

      // Create welcome message element
      const welcomeDiv = document.createElement("div");
      welcomeDiv.className = "welcome-message";
      welcomeDiv.innerHTML = `
        <div class="welcome-content">
          <h2>مرحباً بك ${username}</h2>
          <p>تم إنشاء حسابك بنجاح</p>
        </div>
      `;
      document.body.appendChild(welcomeDiv);

      // Remove welcome message after 3 seconds and redirect
      setTimeout(() => {
        welcomeDiv.style.animation = "fadeOut 0.5s ease-out forwards";
        setTimeout(() => {
          window.location.href = "category.html";
        }, 500);
      }, 3000);
    })
    .catch((error) => {
      let errorMessage = "Registration failed: ";
      switch (error.code) {
        case "auth/email-already-in-use":
          errorMessage += "Email is already registered.";
          break;
        case "auth/invalid-email":
          errorMessage += "Invalid email format.";
          break;
        case "auth/weak-password":
          errorMessage += "Password should be at least 6 characters.";
          break;
        default:
          errorMessage += error.message;
      }
      alert(errorMessage);
    });
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

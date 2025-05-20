import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";
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
  const btn = document.querySelector(".sizn_f");
  if (btn) {
    btn.addEventListener("click", myfun);
  }
});

function myfun(event) {
  event.preventDefault();
  var email = document.getElementById("f_name").value;
  var password = document.getElementById("n_pwd").value;

  if (email.length == 0 || password.length == 0) {
    alert("Some fields are empty!");
  } else if (email == "admin" && password == "admin") {
    alert("Login Successful");
    window.location.href = "./dashboard.html";
  } else {
    signInWithEmailAndPassword(auth, email, password)
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
            <p>في مكتبتنا التعليمية</p>
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
        let errorMessage = "Login failed: ";
        switch (error.code) {
          case "auth/user-not-found":
            errorMessage += "User not found. Please check your email.";
            break;
          case "auth/wrong-password":
            errorMessage += "Incorrect password.";
            break;
          case "auth/invalid-email":
            errorMessage += "Invalid email format.";
            break;
          default:
            errorMessage += error.message;
        }
        alert(errorMessage);
      });
  }
}

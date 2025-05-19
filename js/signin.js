import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";
import firebaseConfig from "./config.js";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

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
        alert("Logging in...");
        window.location.href = "grand.html";
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

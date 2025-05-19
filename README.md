# 📚 Central Library Website - University of Sadat City

This is a fully responsive website project for the **Central Library at University of Sadat City**. It allows students, researchers, and faculty to explore book categories, search the library collection, and contact the library staff. The website is built using HTML, CSS, and JavaScript.

---

## 📌 Features

- 🔍 **Search functionality** for books
- 🧭 **Navigation bar** with Home, About Us, Contact, Categories
- 📂 **Book categories** (Tech, Science, Mathematics, All)
- 📖 **About section** detailing the mission and services of the library
- 📬 **Contact form** for inquiries
- ❓ **FAQ section** with expandable answers
- 🔐 **Login and Register pages**
- 📼 Embedded media (video/audio support)

---

## 💻 Technologies Used

- HTML5
- CSS3
- JavaScript
- Responsive design with media queries

---

## 📁 Project Structure

```
├── index.html            # Main homepage
├── aboutus.html
├── book.html
├── category.html
├── dashboard.html
├── grand.html
├── login.html
├── register.html
├── search.html
├── css/                  # CSS files
├── js/                   # JavaScript files
├── responsive/           # Responsive-specific CSS
├── images/               # Project images
├── category/             # Category-related pages
├── A.mp4                 # Video file
├── thanks.wav            # Audio file
└── README.md             # Project documentation
```

---

## 🚀 Live Demo

👉 [Click here to view the demo](https://mustafa-ashraf2003.github.io/Educational-library/)  

---

## 📸 Screenshots

### 🔸 Homepage

![Homepage Screenshot](./images/home/Screenshot%202025-05-19%20042441.png)

---

## 📞 Contact

For inquiries or support, use the contact form on the website or reach out via university support channels.

---

## 🏷️ License

This project is for educational use only. All rights reserved © 2025 - University of Sadat City.

## إعداد ملف Firebase config.js

1. **Don't upload your real data to GitHub!**
2. You'll find the `js/config.example.js` file as an example.
3. Copy the file and rename it to `js/config.js`.
4. Place your Firebase project data in this file.
5. Ensure that the `js/config.js` file is located in `.gitignore` and will not be uploaded to GitHub.

Example:

```js
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
};
export default firebaseConfig;
```

const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector (".container");
const sign_in_btn2 = document.querySelector("#sign-in-btn2");
const sign_up_btn2 = document.querySelector("#sign-up-btn2");

sign_up_btn.addEventListener("click",() =>{
    container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click",() =>{
    container.classList.remove("sign-up-mode");
});

sign_up_btn2.addEventListener("click",() =>{
    container.classList.add("sign-up-mode2");
});

sign_in_btn2.addEventListener("click",() =>{
    container.classList.remove("sign-up-mode2");
});

document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    // var role = document.getElementById("role").value;
    
    // Check if values already exist in local storage
    var storedUsername = localStorage.getItem("username");
    var storedPassword = localStorage.getItem("password");
    // var storedRole = localStorage.getItem("role");
    
     // Split stored values into arrays
     var usernames = storedUsername ? storedUsername.split(",") : [];
     
     // Check if the username already exists
     if (usernames.includes(username)) {
         alert("Username already exists. Please choose a different one.");
         return;
     }

    // If values exist, append new values to them
    if (storedUsername && storedPassword) {
        storedUsername += "," + username;
        storedPassword += "," + password;
        // storedRole += "," + role;
    } else { // Otherwise, set new values
        storedUsername = username;
        storedPassword = password;
        // storedRole = role;
    }

    // Push updated values to local storage
    localStorage.setItem("username", storedUsername);
    localStorage.setItem("password", storedPassword);
    // localStorage.setItem("role", storedRole);
    
    alert("Registration successful!");
    document.getElementById("registrationForm").reset();
    window.location.href = "login.html";
});

// document.getElementById("loginForm").addEventListener("submit", function(event) {
//     event.preventDefault();
//     var storedUsername = localStorage.getItem("username");
//     var storedPassword = localStorage.getItem("password");
//     var storedRole = localStorage.getItem("role");
//     var username = document.getElementById("loginUsername").value;
//     var password = document.getElementById("loginPassword").value;

//     // Split stored values into arrays
//     var usernames = storedUsername.split(",");
//     var passwords = storedPassword.split(",");
//     var roles = storedRole.split(",");

//     // Check if provided credentials match any stored credentials
//     var matchIndex = usernames.findIndex((u, index) => u === username && passwords[index] === password);

//     if (matchIndex !== -1) {
//         // Store username and password in session storage
//         sessionStorage.setItem("loggedInUsername", username);
//         sessionStorage.setItem("loggedInPassword", password);
        
//         if (roles[matchIndex] === "admin") {
//             window.location.href = "admin_dashboard.html";
//         } else {
//             window.location.href = "userdashboard.html";
//         }
//     } else {
//         alert("Invalid username or password. Please try again.");
//     }
//     document.getElementById("loginForm").reset();
// });

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var storedUsername = localStorage.getItem("username");
    var storedPassword = localStorage.getItem("password");
   
    var username = document.getElementById("loginUsername").value;
    var password = document.getElementById("loginPassword").value;

    // Split stored values into arrays
    var usernames = storedUsername.split(",");
    var passwords = storedPassword.split(",");

    // Check if the provided credentials match any stored credentials
    var matchIndex = usernames.findIndex((u, index) => u === username && passwords[index] === password);

    // Check if the provided credentials match admin credentials
    var isAdmin = username === "admin" && password === "admin1234";

    if (isAdmin) {
        // Direct admin to admin dashboard
        window.location.href = "admin_dashboard.html";
    } else if (matchIndex !== -1) {
        // Store username and password in session storage
        sessionStorage.setItem("loggedInUsername", username);
        sessionStorage.setItem("loggedInPassword", password);
        
        // Direct user to user dashboard
        window.location.href = "userdashboard.html";
    } else {
        // Credentials not found
        alert("Invalid username or password. Please try again.");
    }
    document.getElementById("loginForm").reset();
});



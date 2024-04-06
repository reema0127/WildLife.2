function logout() {
    // Perform logout functionality here, such as redirecting to a logout page or clearing session data.
    window.location.href = "login.html";
    alert("Logged out successfully!");
}
// Retrieve username and password from session storage
var loggedInUsername = sessionStorage.getItem("loggedInUsername");
var loggedInPassword = sessionStorage.getItem("loggedInPassword");

// Display username and password
document.getElementById("loggedInUsername").textContent = loggedInUsername;
document.getElementById("loggedInPassword").textContent = loggedInPassword;
document.addEventListener("DOMContentLoaded", function() { 
    // Gets the subscriptions list element
    const subscriptionsList = document.getElementById('subscriptionsList'); 

    // Retrieve subscriptions from localStorage and display them
    //// Function to display subscriptions
    function displaySubscriptions() { 
        // Clears the existing content of subscriptions list
        subscriptionsList.innerHTML = ''; 
        // Gets subscriptions from local storage
        const storedSubscriptions = localStorage.getItem('newsletterSubscriptions'); 
        // Checks if subscriptions exist in local storage
        if (storedSubscriptions) { 
            // Parses the subscriptions from JSON
            const subscriptions = JSON.parse(storedSubscriptions); 
            // Iterates through each subscription email
            subscriptions.forEach(function(email) { 
                // Creates a list item element
                const listItem = document.createElement('li'); 
                // Sets the text content of the list item to the email
                listItem.textContent = email; 
                // Appends the list item to the subscriptions list
                subscriptionsList.appendChild(listItem); 
            });
        }
    }
    // Calls the function to initially display subscriptions
    displaySubscriptions(); 
});

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


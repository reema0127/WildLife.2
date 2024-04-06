document.addEventListener("DOMContentLoaded", function() { 
    const emailInput = document.getElementById('emailInput'); 
    const subscribeForm = document.getElementById('subscribeForm');
    const overlay = document.getElementById('overlayfooter');
    const popup = document.getElementById('popupfooter');

    subscribeForm.addEventListener('submit', function(event) { 
        event.preventDefault(); 
        const email = emailInput.value.trim(); 
        if (email) {
            let subscriptions = JSON.parse(localStorage.getItem('newsletterSubscriptions')) || []; 
            subscriptions.push(email); 
            localStorage.setItem('newsletterSubscriptions', JSON.stringify(subscriptions)); 
            emailInput.value = ''; 
            showPopup(); // Show the popup on successful subscription
        }
    });

    function showPopup() {
        overlay.classList.remove('hidden');
        popup.classList.remove('hidden');
    }

    function closePopup() {
        overlay.classList.add('hidden');
        popup.classList.add('hidden');
    }

    window.closePopup = closePopup; // Expose closePopup function globally
});

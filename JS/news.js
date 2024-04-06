


//menu

const menu = document.querySelector(".menu");
const openMenubtn = document.querySelector(".open-menu-btn");
const closeMenubtn = document.querySelector(".close-menu-btn");

[openMenubtn, closeMenubtn].forEach((btn) => {
    btn.addEventListener("click",() =>{
        menu.classList.toggle("open");
        menu.style.transition = "transform 0.5s ease";
    });
});

menu.addEventListener("transitioned" , function(){
    this.removeAttribute("style");
});

menu.querySelectorAll(".dropdown").forEach((dropdown) => {
    dropdown.addEventListener("mouseenter", function() {
        this.classList.add("active");
    });
    
    dropdown.addEventListener("mouseleave", function() {
        this.classList.remove("active");
    });
});

//footer


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


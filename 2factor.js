document.getElementById("2fa-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Simulate successful activation of 2FA
    document.getElementById("confirmation-message").classList.remove("hidden");
});

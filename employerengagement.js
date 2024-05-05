document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("inviteForm");
    const message = document.getElementById("message");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        
        const selectedOptions = Array.from(form.companies.options)
            .filter(option => option.selected)
            .map(option => option.text);

        if (selectedOptions.length === 0) {
            message.textContent = "Please select at least one company.";
        } else {
            message.textContent = `Invitations sent to: ${selectedOptions.join(", ")}.`;
            form.reset();
        }
    });
});

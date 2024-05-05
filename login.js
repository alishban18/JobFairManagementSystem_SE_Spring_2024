document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("login-form");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); 

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        if (username === "" || password === "") {
            alert("Please fill in all fields.");
            return;
        }


        console.log("Username:", username);
        console.log("Password:", password);

        form.reset();
    });
});

document.addEventListener("DOMContentLoaded", function() {

    const form = document.getElementById("registration-form");

    form.addEventListener("submit", function(event) {

        event.preventDefault();

        const formData = new FormData(form);

        const jsonData = {};
        formData.forEach((value, key) => {
            jsonData[key] = value;
        });

        console.log(jsonData);
    });
});

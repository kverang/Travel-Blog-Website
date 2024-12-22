document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contactForm");

    form.addEventListener("submit", function(event) {
        const inputs = form.querySelectorAll("input, textarea");
        let isValid = true;

        inputs.forEach(function(input) {
            if (input.type !== "submit" && input.value.trim() === "") {
                isValid = false;
                input.style.border = "2px solid red"; 
            } else {
                input.style.border = "";
            }
        });

        if (!isValid) {
            event.preventDefault();
            alert("Please fill out all fields.");
        }
    });
});
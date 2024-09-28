document.querySelector("form").addEventListener("submit", function(event) {
    var emailInput = document.querySelector("input[type='email']");
    if (!emailInput.value) {
        alert("Please enter a valid email.");
        event.preventDefault(); // Prevent form from submitting if empty
    }
});

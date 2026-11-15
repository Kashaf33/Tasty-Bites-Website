Added Javascript Functionality
let form = document.getElementById("bookingForm");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value;

    document.getElementById("message").textContent =
        "Thank you " + name + "! Your table has been booked.";

    form.reset();

});


// Select Form
let form = document.getElementById("studentForm");

// Form Submit Event
form.addEventListener("submit", function(event) {

    event.preventDefault();

    // Get Input Values
    let name = document.getElementById("name").value;
    let roll = document.getElementById("roll").value;
    let email = document.getElementById("email").value;

    // Display Student Information
    document.getElementById("result").innerHTML =
        "Registration Successful!<br><br>" +
        "Name: " + name + "<br>" +
        "Roll Number: " + roll + "<br>" +
        "Email: " + email;

});

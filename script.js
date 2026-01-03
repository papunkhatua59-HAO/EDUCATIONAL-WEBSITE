function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var error = document.getElementById("error");

    if (name === "" || email === "" || message === "") {
        error.innerHTML = "All fields are required";
        error.style.color = "red";
        return false;
    }

    error.innerHTML = "Form submitted successfully";
    error.style.color = "green";
    return false;
}

function toggleMode() {
    document.body.classList.toggle("dark");

    var btn = document.getElementById("modeBtn");

    if (document.body.classList.contains("dark")) {
        btn.innerHTML = "☀️";
    } else {
        btn.innerHTML = "🌙";
    }
}
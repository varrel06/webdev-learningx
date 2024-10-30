$(document).ready(function() {
    $('#loginForm2').submit(function(e) {
        e.preventDefault();
        const username = $('#username2').val();
        const password = $('#password2').val();

        if (username === "admin" && password === "1234") {
            $('#statusMessage').text("Login successful!");
        } else {
            $('#statusMessage').text("Invalid username or password.");
        }
    });
});

$(document).ready(function() {
    $('#loginForm1').submit(function(e) {
        e.preventDefault();
        const username = $('#username').val();
        const password = $('#password').val();

        if (username === "user" && password === "pass") {
            $('#message').text("Login successful!");
        } else {
            $('#message').text("Invalid username or password.");
        }
    });
});

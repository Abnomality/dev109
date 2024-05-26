function validateForm() {
    let valid = true;

    // Clear previous error messages
    document.getElementById("fname").innerHTML = "";
    document.getElementById("lname").innerHTML = "";
    document.getElementById("emailError").innerHTML = "";
    document.getElementById("phoneError").innerHTML = "";
    document.getElementById("usernameError").innerHTML = "";
    document.getElementById("passwordError").innerHTML = "";
    document.getElementById("addressError").innerHTML = "";
    document.getElementById("cityError").innerHTML = "";
    document.getElementById("stateError").innerHTML = "";
    document.getElementById("countryError").innerHTML = "";
    document.getElementById("zipcodeError").innerHTML = "";

    // First Name validation
    let firstname = document.getElementById("FirstName").value;
    if (!firstname.match(/^[a-zA-Z]{1,20}$/)) {
        document.getElementById("fname").innerHTML = "First name is required and must be 1-20 alphabetical characters.";
        valid = false;
    }

    // Last Name validation
    let lastname = document.getElementById("LastName").value;
    if (!lastname.match(/^[a-zA-Z]{1,50}$/)) {
        document.getElementById("lname").innerHTML = "Last name is required and must be 1-50 alphabetical characters.";
        valid = false;
    }

    // Email validation
    let email = document.getElementById("Email").value;
    let atpos = email.indexOf("@");
    let dotpos = email.lastIndexOf(".");
    if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= email.length) {
        document.getElementById("emailError").innerHTML = "Invalid email address.";
        valid = false;
    }

    // Phone validation
    let phone = document.getElementById("Phone").value;
    if (!phone.match(/^\d{1,15}$/)) {
        document.getElementById("phoneError").innerHTML = "Phone number is required and must be numerical with a maximum of 15 digits.";
        valid = false;
    }

    // Username validation
    let username = document.getElementById("Username").value;
    if (username.length === 0) { // Check if username has at least 1 character
        document.getElementById("usernameError").innerHTML = "Username is required.";
        valid = false;
    } else if (username.length > 12) { // Check maximum length of 12 characters
        document.getElementById("usernameError").innerHTML = "Username must be a maximum of 12 characters.";
        valid = false;
    }

    // Password validation
    let password = document.getElementById("Password").value;
    if (!password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{1,7}$/)) {
        document.getElementById("passwordError").innerHTML = "Password is required, must be a maximum of 7 characters, and include at least 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character.";
        valid = false;
    }

    // Address validation
    let address = document.getElementById("Address").value;
    if (address === "") {
        document.getElementById("addressError").innerHTML = "Address is required.";
        valid = false;
    }

    // City validation
    let city = document.getElementById("City").value;
    if (city === "") {
        document.getElementById("cityError").innerHTML = "City is required.";
        valid = false;
    }

    // State validation
    let state = document.getElementById("State").value;
    if (state === "") {
        document.getElementById("stateError").innerHTML = "State is required.";
        valid = false;
    }

    // Country validation
    let country = document.getElementById("Country").value;
    if (country === "") {
        document.getElementById("countryError").innerHTML = "Country is required.";
        valid = false;
    }

    // Zip Code validation (if country is USA)
    let zipcode = document.getElementById("ZipCode").value;
    if (country === "USA" && !zipcode.match(/^\d{5}$/)) {
        document.getElementById("zipcodeError").innerHTML = "Zip code is required and must be 5 digits.";
        valid = false;
    }

    // Prevent form submission if validation fails
    if (!valid) {
        document.getElementById("errorMessages").innerHTML = "<p><strong>Error Submitting — See Above</strong></p>";
        return false;
    }

    return true;
}

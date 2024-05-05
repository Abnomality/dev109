// Prompt the user for a number between 0 and 10
var number = parseInt(prompt("Enter a number between 0 and 10:")); // Ensure it's parsed as an integer

// Check if the input is valid
if (isNaN(number) || number < 0 || number > 10) {
    alert("Please enter a valid number between 0 and 10.");
} else {
    // Initialize the message with the table heading
    var msg = "<h2>Multiplication Table for " + number + "</h2>";

    // Generate the multiplication table
    for (var i = 1; i <= 10; i++) {
        msg += number + " x " + i + " = " + (number * i) + "<br>";
    }

    // Display the multiplication table in the blackboard section
    document.getElementById("blackboard").innerHTML = msg;
}

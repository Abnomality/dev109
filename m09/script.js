document.addEventListener("DOMContentLoaded", () => {
    var mybutton = document.querySelector("#clearButton");
    var colorPicker = document.querySelector("#colorPicker");
    var sizePicker = document.querySelector("#sizePicker");

    mybutton.addEventListener("click", function(event) {
        var elements = document.getElementsByClassName("dot");
        while (elements.length > 0) {
            elements[0].parentNode.removeChild(elements[0]);
        }

        // Stop the propagation of events
        event.stopPropagation();
    });

    addEventListener("click", function(event) {
        // Do not draw a dot if the clear button is clicked
        if (event.target === mybutton) return;

        var dot = document.createElement("div");
        dot.className = "dot";
        dot.style.width = dot.style.height = sizePicker.value + "px";
        dot.style.background = colorPicker.value;

        // Adjust the dot position to center it at the click location
        dot.style.left = (event.pageX - sizePicker.value / 2) + "px";
        dot.style.top = (event.pageY - sizePicker.value / 2) + "px";

        document.body.appendChild(dot);
    });
});

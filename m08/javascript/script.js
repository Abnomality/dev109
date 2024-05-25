function addItem() {
    // Get the input value
    var newItem = document.getElementById('itemInput').value;
    
    // Create a new list item
    var newEl = document.createElement('li');
    var newText = document.createTextNode(newItem);
    newEl.appendChild(newText);

    // Find the ul element and append the new list item
    var position = document.getElementById('todo');
    position.appendChild(newEl);

    // Clear the input box
    document.getElementById('itemInput').value = '';
}

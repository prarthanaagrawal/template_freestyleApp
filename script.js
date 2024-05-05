// Add event listeners to the form elements
document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('addNumbersForm');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        var num1 = parseInt(document.getElementById('num1').value);
        var num2 = parseInt(document.getElementById('num2').value);
        addNumbers(num1, num2);
    });
});

// Function to add the two numbers together
function addNumbers(num1, num2) {
    fetch('/add', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            num1: num1,
            num2: num2
        })
    })
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        var result = data.result;
        document.getElementById('result').textContent = result;
    })
    .catch(function(error) {
        console.log('Error:', error);
    });
}
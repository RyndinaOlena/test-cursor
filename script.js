const display = document.getElementById('display');

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculateResult() {
    try {
        // Replace percentage symbol with /100 for calculation
        let expression = display.value.replace(/%/g, '/100');
        // Use Function constructor for safer evaluation than eval()
        // Still, be cautious with user input if this were a real-world app with more complex needs.
        const result = new Function('return ' + expression)();
        if (isNaN(result) || !isFinite(result)) {
            display.value = 'Error';
        } else {
            display.value = result;
        }
    } catch (error) {
        display.value = 'Error';
    }
}
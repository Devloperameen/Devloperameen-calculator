// Select the input box (where numbers and results will appear)
let input = document.getElementById("inputBox");

// Select all <button> elements
let buttons = document.querySelectorAll("button");

// String to keep track of user input (like "7+5*2")
let string = "";

// Convert NodeList (buttons) into an Array so we can use array methods
let arr = Array.from(buttons);

// Loop through every button and listen for clicks
arr.forEach(button => {
    button.addEventListener('click', (e) => {

        // CASE 1: "=" button → calculate result
        if (e.target.innerHTML == '=') {
            try {
                string = eval(string); // evaluate the math expression
                input.value = string;  // display result
            } catch (error) {
                input.value = "Error"; // show error if invalid input
                string = "";
            }
        }

        // CASE 2: "AC" button → clear all
        else if (e.target.innerHTML == 'AC') {
            string = "";             // reset string
            input.value = string;    // clear display
        }

        // CASE 3: "DEL" button → delete last character
        else if (e.target.innerHTML == 'DEL') {
            string = string.substring(0, string.length - 1); // remove last char
            input.value = string;
        }

        // CASE 4: Any number or operator → add to expression
        else {
            string += e.target.innerHTML; // append value
            input.value = string;         // update display
        }
    });
});

// In this block we are getting all element by using a shortcut.
// If we pass an ID we are getting an element, otherwise a nodelist
// (I've decided not to use iife in this script, since we don't have any other js files
// in the project and won't pollute the global variables or functions and we don't need to
// module our code)

let el = function(element) {
    if (element.charAt(0) === "#") {
        return document.querySelector(element);
    }
    return document.querySelectorAll(element);
};

// Getting all our elements and put them into variable.
// Using let from ES6 sintax instead of var.
// I've added a clear variable that reference el('#clear')
// to keep everything consistent

let viewer = el('#viewer'), // The screen where number or error message is displayed
    equals = el('#equals'), // Equal button
    nums = el('.num'), // List of numbers
    ops = el('.ops'), // List of operators
    clear = el('#clear'), // Clear button
    theNum = '', // Current number
    oldNum = '', // First number
    resultNum, // Result
    operator; // Declaring operator for later usage

// Starting building out functions
// The first function is getting the clicked data-number.
// if the result was displayed, the number resets, othervwise
// we adding a digit to a previous number and display it to the viewer
// I also added some funcionality to the clear button here.
// Ex. Macbook calculator sets clear from AC to C when num is typed
let setNum = function() {
    if (resultNum) {
        theNum = this.getAttribute('data-num');
        resultNum = '';
        clear.textContent = 'AC';
    } else {
        theNum += this.getAttribute('data-num');
        clear.textContent = 'C';
    }
    viewer.innerHTML = theNum;
};
// Second function. When the operator button is clicked, we pass number
// to oldNum and save operator
let moveNum = function() {
    oldNum = theNum;
    theNum = "";
    operator = this.getAttribute('data-ops');
    equals.setAttribute('data-result', '');
};
// This function performs the operations.
// We using parseFloat to convert a string input into the numbers
// I've added multiply and divide cases
let displayNum = function() {
    oldNum = parseFloat(oldNum);
    theNum = parseFloat(theNum);
    switch (operator) {
        case "plus":
            resultNum = oldNum + theNum;
            break;
        case "minus":
            resultNum = oldNum - theNum;
            break;
        case "multiply":
            resultNum = oldNum * theNum;
            break;
        case "divide":
            resultNum = oldNum / theNum;
            break;
// If equal is pressed without an operator,
// keep number and continue
        default:
            resultNum = theNum;
    }


// Error case when NaN or Infinity returned
// If result is not a number; set off by, eg, double-clicking operators
// If result is infinity, set off by dividing by zero
// I've decided to change an error message to more user-friendly one, that
//doesn't scare users off and deleted broken class since we already have an
//error message
    if (!isFinite(resultNum)) {
        if (isNaN(resultNum)) {
            resultNum = "Something went wrong! Please try again!";
        } else {
            resultNum = "Sorry, can't divide by 0. Try something else instead :)";
        }
    }
// Displaying results of our operations

    viewer.innerHTML = resultNum;
    equals.setAttribute("data-result", resultNum);

// Setting old number to zero but keeping the result
    oldNum = 0;
    theNum = resultNum;
};

// A function for when the clear button is pressed.
// Clear everything and set clear button to AC
let clearAll = function() {
    oldNum = "";
    theNum = "";
    viewer.innerHTML = "0";
    equals.setAttribute("data-result", resultNum);
    clear.textContent = 'AC';
};

// Hook up the event listeners

// Add click event to numbers
for (let i = 0, l = nums.length; i < l; i++) {
    nums[i].onclick = setNum;
}
// Add click event to operators
for (let i = 0, l = ops.length; i < l; i++) {
    ops[i].onclick = moveNum;
}
// Add click event to equal sign
equals.onclick = displayNum;

// Add click event to clear button
clear.onclick = clearAll;

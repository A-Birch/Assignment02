/*eslint-env browser*/

/* Larger or Smaller?
Create an application that accepts two integers within two separate prompts. Then, display only the larger of the two within the browser window. Don’t forget to handle the fact that the two could be equal. */


// ----------- LARGE OR SMALLER? --------------

//GLOBAL VARIABLES

var firstInteger;
var secondInteger;

//COLLECT VALUES FROM USER

firstInteger = parseInt(window.prompt("Enter first integer: "), 10);
secondInteger = parseInt(window.prompt("Enter second integer: "), 10);

//Compare integers and display only the larger of the two, or both if they are equal.

if (firstInteger > secondInteger) {
    window.document.write("The first integer is large than the second. The first integer was: " + firstInteger);
    
} else if (firstInteger === secondInteger) {
    window.document.write("Both integers is equal: " + firstInteger + " = " + secondInteger);
} else {
    window.document.write("The second integer is large than the first. The second integer was: " + secondInteger);
}
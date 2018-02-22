/*eslint-env browser*/

/*Countdown

Write an application that counts down to 0 based on the number that a user passes into a prompt. If the number is 10, it should count down from 10 to 0. If the number is 100, it should count down from 100 to 0 and so on.  */

var count, i;

count = parseInt(window.prompt("Enter the number of iterations"), 10);

for (i = 0; i <= count; count--) {
    window.document.write(count + "<br>");
} 

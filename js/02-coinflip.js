/*eslint-env browser*/

// ----------- The “Coin Flip” Game --------------

//GLOBAL VARIABLES

var coinFlip;
coinFlip = Math.round(Math.random());
window.console.log(coinFlip);

choice = window.prompt("Enter heads or tails: ");
var choice;



if (choice === 'heads') {     
    choice = true;           //Heads = true
    } else {
    choice = false;           //Tails = false         
    }
window.console.log(choice);


//Modified the evaluation of the expression in my conditional so that it now checks for a Boolean result.

if (+choice === coinFlip && choice === true) {
    window.alert("The flip was heads and you chose heads...you win!");
} else if (+choice !== coinFlip && choice === false) {
    window.alert("The flip was heads but you chose tails...you lose!");
} else if (+choice !== coinFlip) {
    window.alert("The flip was tails but you chose heads...you lose!");
} else {
    window.alert("The flip was tails and you chose tails...you win!");
}

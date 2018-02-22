/*eslint-env browser*/

// ----------- The “Coin Flip Streak” Game --------------

var coinFlip;

do {
    coinFlip = Math.round(Math.random());
    window.console.log(coinFlip);
    if (coinFlip === 1) {
        window.console.log("Tails");  //Tails = 1
    } else {
        window.console.log("Heads");  //Heads = 0
    }
} while (coinFlip === 0);
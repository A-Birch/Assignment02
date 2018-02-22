/*eslint-env browser*/

// ----------- The “Coin Flip” Game Redux --------------


var coinFlip;
var i;

for (i = 1; i < 10; i += 1) {
    coinFlip = Math.round(Math.random());
    window.console.log(coinFlip);
    if (coinFlip === 1) {
        window.console.log("Tails");  //Tails = 1
    } else {
        window.console.log("Heads");  //Heads = 0
    }
}
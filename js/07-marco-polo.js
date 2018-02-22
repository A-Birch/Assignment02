/*eslint-env browser*/

// ----------- Marco! Polo! --------------

var i;

for (i = 1; i <= 100; i++) {
    if (i%3 == 0 && i%5 == 0) {
        window.console.log("Marco! Polo!");     //for multiples of both 3 and 5, print "Marco! Polo!"
    } else if (i%3 == 0) {                      //for multiples of 3, print "Marco!"
        window.console.log("Marco!"); 
    } else if (i%5 == 0) {                      //for multiples of 5, print "Polo!"
        window.console.log("Polo!"); 
    } else {
        window.console.log(i);
    }
}
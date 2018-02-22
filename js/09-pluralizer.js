/*eslint-env browser*/

/*The Pluralizer

Write an application that prompts the user for two items: a noun and a number. The application should then evaluate the entries and write out into the browser window the number and pluralized form, like "5 cats" or "1 dog". Make sure to have the application handle a few collective nouns like "sheep" and "geese". */

//“moose,” “sheep” and “shrimp”, "geese"

var noun;
var number;

noun = window.prompt("Enter a noun:");
number = window.prompt("Enter a number:");

if (number === '1' || noun === 'moose' || noun === 'sheep' || noun === 'shrimp' || noun === 'geese') {
    window.document.write(number + " " + noun + "<br>");
} else {
    window.document.write(number + " " + noun + "s")
}

    
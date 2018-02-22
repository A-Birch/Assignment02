/*eslint-env browser*/

/* Looping a Triangle
Write a loop that displays the following triangle within a console window:
#
##
###
####
#####
######
#######
*/

// ----------- Looping a Triangle --------------

var note = '';
var i;

for (i = 0; i < 7; i += 1) {
  window.console.log(note += '#');
}

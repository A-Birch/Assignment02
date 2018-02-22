/*eslint-env browser*/

// ----------- Gradebook --------------

var students = ['Ursula', 'Paul', 'Henry', 'Tabitha', 'Lucy'];
var studentGrade = [];
var averagePoints;
averagePoints = 0;
var i;
var tab = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";

for (i = 0; i <=4; i++) {
    studentGrade[i] = parseInt(window.prompt("Enter the point for " + students[i] + ": "), 10);
    window.console.log(students[i] + ": " + studentGrade[i]);
    if (isNaN(studentGrade[i]) || studentGrade[i] > 100 || studentGrade[i] < 0) {
    window.alert("Either grade was not a number or grade was greater then 100. Try again.");
    i--; 
    }
}

window.document.write("Student(s)" + tab + "Grade" + "<br>"+"-------------------------<br>");
for (i in students) {
    if (studentGrade[i] >= 90 && studentGrade[i] <= 100) {
        window.document.write(students[i] + tab + tab + tab + " A<br>");
    } else if (studentGrade[i] >= 80) {
        window.document.write(students[i] + tab + tab + tab + " B<br>");
    } else if (studentGrade[i] >= 70) {
        window.document.write(students[i] + tab + tab + tab + " C<br>");
    } else if (studentGrade[i] >= 60) {
        window.document.write(students[i] + tab + tab + tab + " D<br>");
    } else {
        window.document.write(students[i] + tab + tab + tab + " F<br>");
    } 
    averagePoints += studentGrade[i];
}
window.console.log(averagePoints);
window.document.write("-------------------------<br>");
window.document.write("Average Points: " + tab + averagePoints/5);
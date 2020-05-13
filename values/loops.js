//var students = [ /*..*/ ];
/*
for (let i = 0; i < students.length; i++) {
    greetStudent(students[i]);
}

for (let student of students) {
    greetStudent(student);
}

//console.log(students);
*/
//var students = [ /*..*/ ];
/*
while (students.length > 0) {
    let student = students.pop(); //pop() method that takes a value out
    greetStudents(student);
}
*/

var students = ["Edgar", "Claudia", "Jeremiah"];

while (students.length > 0) {
    let student = students.shift(); // shift takes the array from the beginning
    //let student = students.pop(); //pop() is taking from the end to the beginning
    console.log(`Hello, ${student}!`);
}
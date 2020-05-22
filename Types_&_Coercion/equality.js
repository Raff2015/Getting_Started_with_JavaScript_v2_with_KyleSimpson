/*
== allows coercion(types are different)
=== disallows coercion(types are the same)
*/

var studentName1 = "Frank";
var studentName2 = `${studentName1}`; // No Coercion for line 6 and 7

var workshopEnrollment1 = 16;
var workshopEnrollment2 = workshopEnrollment1 + 0;

studentName1 == studentName2; // True because types are already the same (String)
console.log(studentName1 == studentName2);

studentName1 === studentName2; // True because types are already the same (String)
console.log(studentName1 === studentName2);

workshopEnrollment1 == workshopEnrollment2; // True because types are already the same (Number)
console.log(workshopEnrollment1 == workshopEnrollment2);

workshopEnrollment1 === workshopEnrollment2; // True because types are already the same  (Number)
console.log(workshopEnrollment1 === workshopEnrollment2);
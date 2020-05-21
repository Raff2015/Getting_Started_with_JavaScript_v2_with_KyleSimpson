/*
== allows coercion(types are different)
=== disallows coercion(types are the same)
*/

var studentName1 = "Frank";
var studentName2 = `${studentName1}`; // No Coercion for line 6 and 7

var workshopEnrollment1 = 16;
var workshopEnrollment2 = workshopEnrollment1 + 0;

studentName1 == studentName2;
studentName1 === studentName2;

workshopEnrollment1 == workshopEnrollment2;
workshopEnrollment1 === workshopEnrollment2;
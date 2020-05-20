/*Type coercion is the process of converting value 
from one type to another (such as string to number, 
    object to boolean, and so on). Any type, be it 
    primitive or an object, is a valid subject for 
    type coercion. To recall, primitives are: number, 
    string, boolean, null, undefined + Symbol 
    (added in ES6).
    
    Number + Number = Number
    Number + String = String
    String + Number = String
    String + String = String
    
    */


var msg1 = "There are ";
var numStudents = 16;
var msg2 = " students.";
console.log(msg1 + numStudents + msg2);
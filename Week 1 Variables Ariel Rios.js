

// Week 1 - Variables

// In the following exercises, you will need to place your code or answer underneath each
// exercise prompt.

// First try answering these without using references or looking up any information.
// Then, check your answer by using references and/or running your code. 
// You can run your JS code using the Chrome or Firefox Developer tools, or by using Node.js.
// Feel free to update your answers if you got them wrong at first -- this exercise is for your own learning.
// But make sure you understand why the correct answer is right.

// Data Types and Variables

// Exercise 1. Simply declare a variable named 'emptyVariable'

var emptyVariable;


// Exercise 2. Declare a variable called 'myName'

var myName;


// Exercise 3. Assign your name as the value for 'myName'

var myName = "Ariel Renee Rios Marquez";

// Exercise 4. Declare a variable called dreamDestination and give it the value
// of what your dream vacation destination is.

var dreamDestination = "the carribbean";

// Exercise 5. Make the following variables and assignments
// - a variable called num1 with a value greater than 1 and less than 10
// - a variable called num2 with a value of greater than or equal to 1 and less
// than or equal to 10

var num1 = Math.random() * 10;
var num2 = Math.floor(Math.random() * 10)+1;


// Exercise 6. Write a comment below explaining the difference between the rules
// for num1 and num2 from Exercise 5. What numbers would be valid values for 
// num2 but not num1?
//

Variable num1 asks that the value generated never meet 10 and always be more than 1.
Variable num2, however, permits the value to be exactly 1 or 10. For this reason we 
use Math.floor to round to nearest bottom integer, and add 1 so it fits with the 1-10 scope.

// Exercise 7. Now we will try some addition.
// a. Assign the the values of 4 and 6 to num1 and num2, respectively.
// b. Make a new variable called 'theSum', and use 'num1' and
// 'num2' to assign its value using the "+" operator.

var num1 = 4
var num2 = 6

var theSum = num1 + num2

// Exercise 8. Now we will try some multiplication.
// Make a new variable called 'theProduct', multiply num1 and num2 and assign
// the resulting value to 'theProduct'.

var theProduct = num1 * num2

// Exercise 9.
// Make a new variable called 'statement' and using 'myName' and
// 'dreamDestination' and the concatenation method of your choice, make the
// value of statement to be:
// "Hi, my name is <your name>, and I can't wait to visit <your destination>!"

var statement = " Hi, my name is " + myName + ", and I can't wait to visit " + dreamDestination + "! "

// *NOTE* For the following exercises, put your answers in the line below
// the description of each exercise. For example, below a prompt, you may see:
// var myAnswerForExercise10 = ;
// If your answer is "foo", then fill in the line to be:
// var myAnswerForExercise10 = "foo";

// Exercise 10. What is the data type of the value stored in 'dreamDestination',
// place your answer in the quotes below:

var myAnswerForExercise10 = "string";

// Exercise 11. What is the data type of the value stored in 'product',
// place your answer in the quotes below:

var myAnswerForExercise11 = "number";

// Exercise 12. What do you think the value of emptyVariable is?
// Place your answer below:

var myAnswerForExercise12 = undefined;

// Exercise 13. If
var A = "R";
var B = 1;
var C = 4;
var D = "D";

// What is the value of B + C
var myAnswerForExercise13 = 5;

// Exercise 14 What is the value of
// A + "n" + D
var myAnswerForExercise14 = "RND" ;

// Exercise 15 What is the value of
// A + B * 2 + D + C / 2:
var myAnswerForExercise15 = "R2D2" ;
"R" + (1*2) + "D" + (4/2)
"R" + 2 + "D" + 2

// Exercise 16 What is the value of A * B
var myAnswerForExercise16 = NaN;

// Exercise 17 What is the value of true || false
var myAnswerForExercise17 = true;

// Exercise 18 What is the value of 1 === "1"
var myAnswerForExercise18 = false ;

// Exercise 19 What is the value of 1 == "1"
var myAnswerForExercise19 = true;

// Exercise 20 What is the value of 1 < 1
var myAnswerForExercise20 = false;

// Exercise 21 What is the value of 1 < 2 < 3
var myAnswerForExercise21 = true;

// Exercise 22 What is the value of 2 < 1 < 3
var myAnswerForExercise22 = true;

// Congrats, you made it to the end!
// Did you find this easy or hard? If you used references, which ones helped you? 
// Please answer in a comment below.
On parts I needed a refresher, I did find myself visiting W3schools and/or Mozilla.

// Email your file to the course staff, 
// or commit your file to GitHub and email us a link.
// Week 2 - Loops

// In the following exercises, you will need to place your code or answer underneath each
// exercise prompt.

// First try answering these without using references or looking up any information.
// Then, check your answer by using references and/or running your code. 
// You can run your JS code using the Chrome or Firefox Developer tools, or by using Node.js.
// Feel free to update your answers if you got them wrong at first -- this exercise is for your own learning.
// But make sure you understand why the correct answer is right.

// Exercise 1. Write a 'while' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).
var i = 0, result = "";
    while (i++ < 5) {
     result += i + " ";
}
console.log(result);

// Exercise 2. Write a 'do while' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).
var i = 0, result = "" ;
do {
  i += 1;
  result += i;
} while (i < 5);
console.log(result);

// Exercise 3. Write a 'for' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).
for (let i = 1; i <= 5; i++) {
    console.log(i);
  }

// Exercise 4. Now we want a loop that prints the integers 
// counting DOWN from 10 to 1 (inclusive). Write three loops that do this, to practice
// writing loops in all 3 ways -- as a 'while', 'do while', and 'for' loop.
var i = 10;
  while (i > 0) {
console.log(i--);
}

var i = 10, result = " ";
do {
  i = i - 1;
  result += i;
} while (i > 0);
console.log(result);


for (i = 10; i > 0; i-=1) {
    console.log(i);
    }
// Exercise 5. Write a loop that prints the integers from 7 to 27. Write this 
// loop in all 3 ways -- as a 'while', 'do while', and 'for' loop.

/*do while loop */ var i = 27, result = "  ";
do {
  i = i - 1;
  result += i + " ";
} while (i > 7);
console.log(result);

/* while loop */var i = 27;
  while (i >= 7) {
console.log(i--);
}

/* for while loop */ for (i = 27; i >= 7; i-=1) {
    console.log(i);
    }

// Exercise 6. Write a loop that prints numbers between 0 and 100, counting by tens.
// I.e. it will print 10, then 20, then 30, etc. 
// Write this loop in all 3 ways -- as a 'while', 'do while', and 'for' loop.

var i = 0, result = "" ;
while (i < 100) {
  i += 10;
  result += i + " ";
}
console.log(result);

var i = 0, result = "" ;
do {
  i += 10;
  result += i + " ";
} while (i < 100);
console.log(result);

for (i = 0; i <= 100; i+=10) {
    console.log(i);
    }


// Exercise 7. Add a comment as to why the following loop is an infinite loop (will 
// run without ever stopping). Then fix the loop so that it stops when
// counterFour is equal to -100.

let counterFour = 1;
while (counterFour < 2) {
    console.log('HELP ME!')
    counterFour--;
}

There is no set condition to be reached that will terminate the loop once reached. We can fix that with a break.

let counterFour = 1;
while (counterFour < 2) {
    console.log('HELP ME!');
    counterFour--;
if (counterFour === -100) {
    console.log("Loop ends here.");
    break;
  }
}


// Exercise 8. Make a variable that contains your favorite integer. Write a loop 
// (your choice which type) that prints the integers from 0 to that number.

var = 27 , result = "" ;
while (i < 27) {
  i += 1;
  result += i + " ";
}



// Exercise 9. Make a variable that contains your favorite integer (this time make sure it's 
// less than 100). Write a loop (your choice which type) that prints the integers from 0 to 100.
// Next to each number it should print "not my favorite number". But next to your favorite
// number it should print "my favorite number!". Example output (if your favorite number was 2):
// 0 not my favorite number
// 1 not my favorite number
// 2 my favorite number!
// 3 not my favorite number
// ...
// (Hint - use an if statement in your loop)


// Exercise 10. In some of the exercises above, we had you write all 3 types of loops, for practice.
// But in real life, how would you decide which type of loop to use? You might not have an
// exact answer, but spend a few minutes thinking about the different types of loops and/or 
// doing some research and write down your thoughts in a comment below:
//


// Exercise 11. Now we'll practice using nested loops (a loop inside another loop)!
// Update the nested loops below to so that for each value of outsideCounter,
// the inside loop will show a countdown

/*
counting down from 0
*********************************** 
counting down from 1
inside 1
*********************************** 
counting down from 2
inside 2
inside 1
*********************************** 
counting down from 3
inside 3
inside 2
inside 1
*********************************** 
*/

for (let outsideCounter = 0; outsideCounter <= 3; ???) {
  console.log("counting down from", outsideCounter);
  for (let insideCounter = outsideCounter; ???; ???) {
      console.log("inside", ???);
  }
  console.log("***********************************")
}


// Congrats, you made it to the end!
// Did you find this easy or hard? If you used references, which ones helped you? 
// Please answer in a comment below.
//

// Email your file to us or commit your file to GitHub and email us a link.

<!-- JS and the DOM -->

<!-- 
READ THIS FIRST!
This file is an HTML file. You'll put your JS code for the exercises in a <scipt> tag at the bottom of this file.
Open this file in Google Chrome by opening Chrome, typing command-O, and selecting this file.
Or in Chrome you can use the menu bar by doing File -> Open.
As you add JS code to the file, you can refresh the page and see your code take effect.
You can also type your JS code in the Console tab of Chrome Developer Tools to see it take effect.
Note: Usually you would put your HTML and JS in separate files, but for simplicity we're 
putting them in the same file for this exercise.
Read through the HTML code given, then scroll down to the exercises below.
Type your JavaScript code for each exercise below each exercise description.
For this exercise, don't change the HTML code given.
-->

<html>
<body>
	Animals:
	<ol id="ol1">
		<li>Frog</li>
		<li>Dog</li>
		<li>Bunny</li>
	</ol>

	<div id="id1">
		<p>This is the text in div id1</p>
		<p>Hope you enjoy my HTML</p>
	</div>

	<p id="id2">Here's some text in a paragraph</p>

	<div class="myClass">
		I love learning about HTML and JavaScript
	</div>

	<p class="myClass">
		Coding is fun
	</p>

	<button id="button1">Button 1</button>
	<br/><br/>
	<button id="button2">Button 2</button>
</body>

<script type="text/javascript">
// Exercise 1: Select the element with id "id2" and change the text inside it to "Here's some new text"
 	
	document.getElementById("id2").innerHTML = "Here's some new text" ;
 
 
// Exercise 2: Select the element with id "id1" and make the text inside it green.

	document.getElementById("id1").style.color = "green" ;

// Exercise 3: Select the elements that have the class "myClass". console.log the output.

	console.log(classElements = document.querySelectorAll(".myClass"));

	let classElementsText = [];
		for ( var i =0; i < classElements.length ; i++ ) {
			classElementsText.push( classElements[i].textContent ) ;
   				 console.log( classElementsText ) ;
		}
	
// Exercise 4: Select the children of the element with id "id1". console.log the output.

	console.log(document.getElementById("id1").children) ;
		
		for ( var i = 0 ; i < id1.children.length ; i++ ) {
			console.log( id1.children[i] ) ;   
		}    

// Exercise 5: Select all list items on the page. console.log the output.

	console.log(document.getElementById('ol1').children) ;

		for ( var i = 0 ; i < ol1.children.length ; i++ ) {
			console.log( ol1.children[i]) ;   
		}    

// Exercise 6: Use JavaScript to find the *number* of list items on the page. console.log the output.

	console.log( document.getElementsByTagName("li").length ) ;

// Exercise 7: Using JavaScript, create a list item and add it to the end of the ordered list.

	var nuListItem = document.createElement ("li") ;
		nuListItem.innerHTML = "Lion" ;
			document.getElementById ( "ol1" ).appendChild ( nuListItem ) ;

// Exercise 8: Using JavaScript, make it so that when button1 is clicked, 
// an alert pops up saying "Hi from Techtonica".

	document.getElementById("button1").onclick = function() {alert ("Hi from Techtonica") } ;

// Exercise 9: In your own words, write a few sentences explaining what the DOM is. Write your answer in a comment below:

	Document Object Model (DOM) allows you to change structural objects, style objects, and content objects.

//***BONUS***
// The next two exercises combine the DOM with other JavaScript you've learned. Try them for an extra challenge!
// Exercise 10: Select the elements with the class "myClass" and update the text inside each of them to end with "!"
// Hint: To operate on multiple elements, you can use a loop.

	var myClassExc = document.getElementsByClassName ( "myClass" ) ;
		for ( var i of myClassExc ){
			i.textContent = i.textContent + "!" ;
		}

// Exercise 11: Make it so when the button2 is clicked, 
// the children of the element with id "id1" each have their text replaced with a random number 1-100
// How was this exercise (easy, hard, fun, confusing)?
// What references did you use to help?
// Please put your answers in a comment below:

	function randomNum() {
  		var id1Children = document.getElementById( "id1" ).children ;
			for ( var i of id1Children ) {
				i.innerHTML = Math.floor(Math.random() * (101 - 1));
			}
	}
		document.getElementById("button2").onclick = randomNum ;

//
</script>

</html>


// Congrats, you made it to the end!
// Did you find this easy or hard? If you used references, which ones helped you? 
// Please answer in a comment below.

    // This was hard, and def used references. A lot of the same ones: W3schools is a fave,
    // along with stack oveflow, MDN (?), etc.
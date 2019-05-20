/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/***
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.
  Add the `citation` property to at least one object in the array.
  Add the `year` property to at least one object in the array.
  Use console.log() to log your array of quotes to the console.
***/
var quotes =[
  {
	quote: "'Hello World!'",
	source:"-first code to be written"
},
  {
	quote:"'Hello everybody '",
	source: " -Doctor Nick"
},

  {
	quote:"'No valid plans for the future can be made by those who have no capacity for living now.'",
	source: " -Alan Watts"
},

  {
    quote:"'Trying to define yourself is like trying to bite your own teeth. '" ,
    source:" -Alan Watts"
  },
  {
    quote:"'Never pretend to a love which you do not actually feel, for love is not ours to command. '",
    source: " -Alan Watts"
  },
  {
    quote:"'There are no limitations, unless you create them yourselves. Anything is possible. You are only limited by your imagination'",
   source:" -Dolores Cannon"
  },
  {
   quote:"'Just as putting a gender on a being limits in some way the way we think about the being. By putting any kind of label on anything, we limit it.'",
   source:"- Dolores Cannon"
  }
];



/***
  Create the `getRandomQuote` function to:
   - Create a variable to store a random number
   - Cse the random number to `return` a random quote object from the `quotes` array.
***/
function getRandomQuote() {
  var randomQuote = Math.floor(Math.random() * quotes.length);
  return quotes[randomQuote];
}


function printQuote() {
var theQuote = getRandomQuote()

var htmlString = "<p class='quote'>" + theQuote + "</p>";

htmlString += "<p class='source'>" + theQuote.quotes"</p>";

if ("citation" in theQuote) {
  htmlString += "<p class='citation'>" + theQuote.citation + "</p>";
}
if ("date" in theQuote) {
  htmlString += "<p class='year'>" + theQuote.date + "</p>";
}
document.getElementById('quote-box').innerHTML = htmlString;
/***
  Create the `printQuote` function to:
   - Call the `getRandomQuote` function and assign it to a variable.-
   - Create a variable for the HTML string and set it equal to an empty string.-
   - Use the HTML template in the instructions or the markup in the index.html file, AND
     the random quote vairable to build your HTML string.-
   - Add the quote and source section to the HTML string.-
   - Use an if statement to check for the citation property before adding it to the HTML string.-
   - Use an if statement to check for the year property before adding it to the HTML string.-
   - Don't forget to close that final `p` tag.-
   - Set the `innerHTML` of the `quote-box` div to the HTML string.
***/
}


/***
  When the "Show another quote" button is clicked, the event listener
  below will be triggered, and it will call, or "invoke", the `printQuote`
  function. So do not make any changes to the line of code below this
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.

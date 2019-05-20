/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/*My array of Quotes*/
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
 },
{
 quote: "I love Team Treehouse!",
 source:"Nikita Savelev"
}
];



/*The getRandomQuote function*/
function getRandomQuote() {
  var randomQuote = Math.floor(Math.random() * quotes.length);
  return quotes[randomQuote];
}

/*printquote function with "creating a quote" structure*/
function printQuote() {
var theQuote = getRandomQuote()

var htmlString = "<p class='quote'>" + theQuote.quote + "</p>";

htmlString += "<p class='source'>" + theQuote.source"</p>";

if ("citation" in theQuote) {
  htmlString += "<p class='citation'>" + theQuote.citation + "</p>";
}
if ("date" in theQuote) {
  htmlString += "<p class='year'>" + theQuote.date + "</p>";
}
document.getElementById('quote-box').innerHTML = htmlString;

}


/*Event listener attached to the 'show another quote' button*/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.

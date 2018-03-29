/* global $*/ // added to handle coding in AWS Cloud 9

/* Steps:
1) in the JS, You will have to create an article Object for each reddit article 
2) in the HTML, you will have to create a unique button id in for each articles up and down vote, and a unique id for the Div where you will inser the article... ie article2Tally
3) in the JS you will have to reference those unique button ids, and insert the score to the div id you used in step 2.
4) repeat for each reddit article
5) Uncomment one article and build it out gradually.
*/
///////////////////////////////////////////
// create article object 
var article = Object();

//each reddit article has a tally
article.tally =0;

// make a function to increase the tally
article.upVote= function(){
  this.tally+=1;
}

// function for down vote, can we have negative values?
article.downVote= function(){
  this.tally-=1;
}

// default populate all reviews with the starting tally
var start = "<input id=qty class=\"redScore\" value=\"" + article.tally + "\"/>";
console.log(start);
///////////////////////////////////////////

// default score for article 1
$('#article1Tally').append(start)


// handle a click on the like for Article 1
$('#up').on('click', function(){
  //upVote
  article.upVote();
  // prep stuff to inject: use what was provided by you in the html, so insert an input field populated with value of article.tally
  
  //<input id="qty" value="0" />
  
  // note you have to use \" to insert a " in a string
  var html="<input id=qty class=\"redScore\" value=\"" + article.tally + "\"/>";
  
  // remove the last review score
  $('#article1Tally').empty()
  console.log(html);
  
  // add the new review score to the div
  $('#article1Tally').append(html)
})

// handle down click for article 1
$('#down').on('click', function(){
    //downVote
    article.downVote();
  // then prep this for injection
  var html="<input id=qty class=\"redScore\" value=\"" + article.tally + "\"/>";

  // remove the last review score
  $('#article1Tally').empty()

  // add the new review score to the div
  $('#article1Tally').append(html)
})
////////////////////////////////////////

// now create your 2nd article object
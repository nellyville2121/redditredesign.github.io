
// create article object
var vote = Object;{

}

//each reddit article has a tally
article.tally =0;

// make a function to increase the tally
article.upVote= function(){
  this.tally+=1;
}

article.downVote= function(){
  this.tally-=1;
}

// default populate all reviews with the starting tally
var start = "<P>" + vote.tally + "</P>";
console.log(start);
$('#vote').append(start)

// handle a click on the like
$('#up').on('click', function(){
  //upVote
  article.upVote();
$('#down').on('click', function(){
    //downVote
    article.downVote();
  // then prep this for injection
  var html="<P>" + vote.tally + "</P>";

  // remove the last review
  $('#upVote').empty()

  // add the new review
  $('#downVote').append(html)
})

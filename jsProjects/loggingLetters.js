var sentence = "I love learning software development"

for (var i=0; i < sentence.length; i++){
  if(sentence[i] !== " "){
    console.log(sentence[i]);
  }
}
/*confirm("Do you like cake?");
alert("This is a message");
prompt('What is your favorite band?');*/

// Check to see if the user likes cake
var likesCake = confirm("Do you like cake?");
// If the user likes cake,
// Ask for their favorite cake
if (likesCake) {
    var favoriteCake = prompt("What is your favorite cake?");
    // Alert them that their favorite cake is
    // whatever they inputted
    // from the prompt() function
    alert("Your favorite cake is: " + favoriteCake);
} else {
    // If the user doesn't like cake, show an alert that the cake is a lie
    alert("The cake is a lie anyhow.");
}

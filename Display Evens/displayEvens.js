
function clearErrors() {
    for (var loopCounter = 0;
        loopCounter < document.forms["evens"].elements.length;
        loopCounter++) {
        if (document.forms["evens"].elements[loopCounter]
           .parentElement.className.indexOf("has-") != -1) {

            document.forms["evens"].elements[loopCounter]
               .parentElement.className = "form-group";
        }
    }
}
function findEvens(){
  clearErrors();
  var min = Number(document.forms["evens"]["min"].value);
  var max= Number(document.forms["evens"]["max"].value);
  var step = Number(document.forms["evens"]["step"].value);

  if (min == "" || isNaN(min)) {
      alert("First Number must be filled in with a number.");
      document.forms["evens"]["min"]
         .parentElement.className = "form-group has-error";
      document.forms["evens"]["min"].focus();
      return false;
  }

    if (max == "" || isNaN(max)) {
        alert("Second Number must be filled in with a number.");
        document.forms["evens"]["max"]
           .parentElement.className = "form-group has-error";
        document.forms["evens"]["max"].focus();
        return false;
    }

      if (min >= max) {
          alert("First Number must be less than Second Number.");
          document.forms["evens"]["min"]
             .parentElement.className = "form-group has-error";
          document.forms["evens"]["min"].focus();
          return false;
      }
      if (step == "" || isNaN(step)) {
          alert("Step must be filled in with a number.");
          document.forms["evens"]["step"]
             .parentElement.className = "form-group has-error";
          document.forms["evens"]["step"].focus();
          return false;
      }
      document.getElementById("results").innerText += "Here are the even numbers between " +
      min + " and " + max + " by " + step +"\'s\n";
  for(var i = min; i<=max; i+=step){
	if(i%2==0){

    document.getElementById("results").innerText += i + "\n";

  }

}

return false;
}
function resetForm(){
  clearErrors();
  document.forms["evens"]["min"].value="";
  document.forms["evens"]["max"].value="";
  document.getElementById("results").innerText="";
}

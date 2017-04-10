function findVolume(){

var x = document.forms["sphere"]["radius"].value;
var y = 3.14 * 1.333 * x*x*x;

if(x == "" || isNaN(x)){
  alert("You must enter a number value for the radius!")
  document.forms["sphere"]["radius"].parentElement.className = "form-group has-error";
  document.forms["sphere"]["radius"].focus();
}


console.log(y);
document.forms["sphere"]["volume"].value = y;

return false;
}

function reset(){

  document.forms["sphere"]["radius"].value = "";
  document.forms["sphere"]["volume"].value = "";
}

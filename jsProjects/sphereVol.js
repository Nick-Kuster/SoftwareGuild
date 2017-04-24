function findVolume(){


var x = document.forms["sphere"]["radius"].value;
var y = 3.14 * 1.333 * x*x*x;

if(x == "" || isNaN(x)){
  alert("You must enter a number value for the radius or the volume!")
  document.forms["sphere"]["radius"].parentElement.className = "form-group has-error";
  document.forms["sphere"]["radius"].focus();}

document.forms["sphere"]["volume"].value = y;

return false;

}
function findRadius(){

var a = document.forms["sphere"]["volume"].value;
var b = Math.cbrt(a/4.19);

if(a == "" || isNaN(a)){
  alert("You must enter a number value for the radius or the volume!")
  document.forms["sphere"]["volume"].parentElement.className = "form-group has-error";
  document.forms["sphere"]["volume"].focus();}

document.forms["sphere"]["radius"].value = b;

return false;
}
function reset(){

  document.forms["sphere"]["radius"].value = "";
  document.forms["sphere"]["volume"].value = "";
}

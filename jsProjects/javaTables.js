function changeTable(){

var table = document.getElementById("myTable");
var last = table.rows.length;
var row = table.insertRow(last);
var cell1 = row.insertCell(0);
var cell2 = row.insertCell(1);
var cell3 = row.insertCell(2);
var fn = document.getElementById("firstName").value;
var ln= document.getElementById("lastName").value;
var age= document.getElementById("age").value;
cell1.innerHTML= fn;
cell2.innerHTML= ln;
cell3.innerHTML= age;
document.getElementById("firstName").value = " ";
document.getElementById("lastName").value = " ";
document.getElementById("age").value = " ";
}

function changeColor(){
var tab = document.getElementById("myTable").rows;


for(var i= 0; i < tab.length; i++)

if(i%2==0){
  tab[i].style.backgroundColor="#9999FF";
}else{
  tab[i].style.backgroundColor="#9966FF";
}

}

function resetTable(){
var x = document.getElementById("myTable").rows;
var y = document.getElementById("myTable");
for(var i=0; i< x.length;i++){
  x[i].style.backgroundColor="white";
}

}

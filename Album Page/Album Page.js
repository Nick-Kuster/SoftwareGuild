function changeImage(){
document.getElementById("img").innerHTML="<img src=\'./images/SimpsonsMoe.jpg\' onclick=\'return changeImageBack()\' class=\'img-circle\'>";

}

function changeImageBack(){
  document.getElementById("img").innerHTML="<img src=\'./images/TinCans.jpg\' onclick=\'return changeImage()\' class=\'img-circle\'>";
}

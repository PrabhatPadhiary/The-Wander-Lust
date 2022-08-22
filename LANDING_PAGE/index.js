var toggleStatus = 1;
function toggleMenu(){
  if (toggleStatus == 1){
    //document.getElementById('navigation').style.display = "none";
    document.getElementById('navigation').style.right = "-110px";
    toggleStatus = 0;
  }
  else if (toggleStatus == 0) {
    //document.getElementById('navigation').style.display = "block";
    document.getElementById('navigation').style.right = "40px";
    toggleStatus = 1;
  }
}
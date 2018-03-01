//Shows menu tab
function myFunction() {
  var x = documnet.getElementById("topNavBar");
  if (x.className === "topNav") {
    x.className += " responsive";
  } else {
    x.className = "topNav";
  }
}

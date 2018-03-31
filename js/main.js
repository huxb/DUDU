'use strict';

window.onload = function(e) {
    //Set footer skirt to show footer
    var footer = document.getElementById("foot");
    var footOffHeight = footer.offsetHeight;
    var footHeight = footOffHeight + 5 + "px";
    var contentSkirt = document.getElementById("contentSkirt");
    contentSkirt.style.minHeight = footHeight;
}


//calls content
$(function(){
    var pathname = window.location.pathname;
    $("#content").load("home"+".html");
});
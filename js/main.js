"use strict";

//Load contact
$.getScript("js/contact.js");

//Load skirt
$.getScript("js/skirt.js");

//calls content
$(function() {
    var pathname = window.location.pathname;
    $("#content").load("home" + ".html");
});

window.onload = function(e) {
};


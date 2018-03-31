'use strict';

//Contact information
var contactEmail = "zhaoqiian@hotmail.com";
var contactPhone = "6877 0509";
var contactLocationStreet = "925 Bukit Timah Road";
var contactLocationUnit = "#08-13";
var contactLocationPO = "Singapore 589640";

//Social information
var facebook = "";
var twitter = "";
var google = "";
var rss = "";

window.onload = function(e) {
    //Set Links
        //Set Email
        $(".emailUs").children("a").attr("href","mailto:"+contactEmail);
        $(".emailUs").children("a").children("span").text(contactEmail);

        //Set Phone
        var contactPhoneArray = contactPhone.split(' ');
        var callPhone = "";
        while(contactPhoneArray.length) {
            callPhone = contactPhoneArray.pop() + callPhone;
        }
        $(".callUs").children("a").attr("href","tel:+65"+callPhone);
        $(".callUs").children("a").children("span").text("+(65) "+contactPhone);

        //Set Location
        var contactLocationStreetArray = contactLocationStreet.split(' ');
        var contactLocationPOArray = contactLocationPO.split(' ');
        var googleLocation = "";
        while(contactLocationPOArray.length) {
            googleLocation = contactLocationPOArray.pop() + " " + googleLocation;
        }
        while(contactLocationStreetArray.length) {
            googleLocation = contactLocationStreetArray.pop() + " " + googleLocation;
        }
        $(".locateUs").children("a").attr("href","http://maps.google.com/?q="+googleLocation);
        $(".locateUs").children("a").html(contactLocationStreet+'<br>'+contactLocationUnit+'<br>'+contactLocationPO);

        //Set Social
        $("#facebook").attr("href",facebook);
        $("#twitter").attr("href",twitter);
        $("#google").attr("href",google);
        $("#rss").attr("href",rss);



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
"use strict";

//Load contact info
$.getJSON("json/contact.json", function(data) {
  //Set Links
  //Set Email
  var contact = data.contact;
  var contactEmail = contact.email;
  $(".emailUs")
    .children("a")
    .attr("href", "mailto:" + contactEmail);
  $(".emailUs")
    .children("a")
    .children("span")
    .text(contactEmail);

  //Set Phone
  var contactPhone = contact.phone;
  var contactPhoneArray = contactPhone.split(" ");
  var callPhone = "";
  while (contactPhoneArray.length) {
    callPhone = contactPhoneArray.pop() + callPhone;
  }
  $(".callUs")
    .children("a")
    .attr("href", "tel:+65" + callPhone);
  $(".callUs")
    .children("a")
    .children("span")
    .text("+(65) " + contactPhone);

  //Set Location
  var location = data.location;
  var locationStreet = location.street;
  var locationUnit = location.unit;
  var locationPO = location.po;
  var locationStreetArray = locationStreet.split(" ");
  var locationPOArray = locationPO.split(" ");
  var googleLocation = "";
  while (locationPOArray.length) {
    googleLocation = locationPOArray.pop() + " " + googleLocation;
  }
  while (locationStreetArray.length) {
    googleLocation = locationStreetArray.pop() + " " + googleLocation;
  }
  $(".locateUs")
    .children("a")
    .attr("href", "http://maps.google.com/?q=" + googleLocation);
  $(".locateUs")
    .children("a")
    .html(locationStreet + "<br>" + locationUnit + "<br>" + locationPO);

  //Set Social
  var social = data.social;
  var facebook = social.facebook;
  var twitter = social.twitter;
  var google = social.google;
  var rss = social.rss;
  $("#facebook").attr("href", facebook);
  $("#twitter").attr("href", twitter);
  $("#google").attr("href", google);
  $("#rss").attr("href", rss);
});

(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.Bike = function(a,b,c,d) {
  this.manufacturer = a;
  this.model = b;
  this.bikeLocation = c;
  this.serial = d;
};

// Bike.prototype.foo = function() {
//
// }

},{}],2:[function(require,module,exports){
var Bike = require('../js/back-end.js').Bike;

var apiKey = "";

// var url = "https://bikeindex.org:443/api/v2/bikes_search/stolen?page=1&colors=" + colors + "&proximity=" + city + "&access_token=api key";

// $.get(url).then(function(response){
//   $('.results').text("These are the " + frame_colors + " bikes in " + stolen_location + " that match your search criteria.");
// }).fail(function(error){
//   $('.results').text(error.responseJSON.message);
//   });
// });
$(document).ready(function() {
 // event.preventDefault();
$('#locateBike').click(function(){
  var city = $('#bikeLoc').val();
  var colors = $('#bikeColor').val();
  // $('#bikeLoc').val('');
  // $('#bikeColor').val('');
    console.log(city);
    var bikes = [];
    $.get("https://bikeindex.org:443/api/v2/bikes_search/stolen?page=1&colors=" + colors + "&proximity=" + city + "&access_token=api_key").then(function(response){
      console.log(response);
    $('#results').append("<h2>These are the " + colors + " bikes in " + city + " that match your search criteria.</h2>");

    response.bikes.forEach(function(bikeFromAPI){
      bikes.push(new Bike(bikeFromAPI.manufacturer_name, bikeFromAPI.frame_model, bikeFromAPI.stolen_location, bikeFromAPI.serial));
    });

    bikes.forEach(function(bikeToDisplay) {
      $('#results').append("<li>" + "Manufacturer: " + bikeToDisplay.manufacturer + ", " + "model: " + bikeToDisplay.model + ", " + bikeToDisplay.bikeLocation + ", " + "serial number: " + bikeToDisplay.serial + "</li>")
    });

  });
  });
});

// .fail(function(error){
//   $('.results').text(error.responseJSON.message);
//   });

},{"../js/back-end.js":1}]},{},[2]);

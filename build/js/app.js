(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var apiKey = "";

// var url = "https://bikeindex.org:443/api/v2/bikes_search/stolen?page=1&colors=" + colors + "&proximity=" + city + "&access_token=api key";

// $.get(url).then(function(response){
//   $('.results').text("These are the " + frame_colors + " bikes in " + stolen_location + " that match your search criteria.");
// }).fail(function(error){
//   $('.results').text(error.responseJSON.message);
//   });
// });
$(document).ready(function() {
 event.preventDefault();
$('#locateBike').click(function(){
  var city = $('#bikeLoc').val();
  var colors = $('#bikeColor').val();
  // $('#bikeLoc').val('');
  // $('#bikeColor').val('');
    $.get("https://bikeindex.org:443/api/v2/bikes_search/stolen?page=1&colors=" + colors + "&proximity=" + city + "&access_token=api_key").then(function(response){
    $('#results').append("These are the " + response.bikes.frame_colors + " bikes in " + response.bikes.stolen_location + " that match your search criteria.");
  });
  });
});

// .fail(function(error){
//   $('.results').text(error.responseJSON.message);
//   });

},{}]},{},[1]);

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

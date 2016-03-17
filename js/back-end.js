

exports.displayBikeInfo = function(colors, city){
  $('#results').empty();
  $.get("https://bikeindex.org:443/api/v2/bikes_search/stolen?page=1&colors=" + colors + "&proximity=" + city + "&access_token=api_key").then(function(response){
    $('#results').append("<h2>These are the " + colors + " bikes in " + city + " that match your search criteria.</h2>");

    response.bikes.forEach(function(bike){
      $('#results').append("<li>" + "Manufacturer: " + bike.manufacturer_name + ", " + "model: " + bike.frame_model + ", " + bike.stolen_location + ", " + "serial number: " + bike.serial + "</li>");
    });
  }).fail(function(error){
    $('.results').text(error.responseJSON.message);
  });
};


// for(var i=0; i<response.bikes.length; i++) {
//   $('#results').append("<li>" + "Manufacturer: " + response.bikes[i].manufacturer_name + ", " + "model: " + response.bikes[i].frame_model + ", " + response.bikes[i].stolen_location + ", " + "serial number: " + response.bikes[i].serial + "</li>");
// }

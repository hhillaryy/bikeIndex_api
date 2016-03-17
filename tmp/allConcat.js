var displayBikeInfo = require('./../js/back-end.js').displayBikeInfo;
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
    displayBikeInfo(colors, city);
    $('#bikeLoc').val('');
    $('#bikeColor').val('');
  });
});

// Document Ready
$(document).ready(function(){

    // Get Geolocation 

      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
        $("#location").html("<b>latitude:</b> " + position.coords.latitude + "<br><b>longitude:</b> " + position.coords.longitude);
        });
    }

	// Function to get Pexel Image and set as background
	function pexelsGet(){
	  
	  var authkey = "563492ad6f91700001000001be480b819db8420a648ce3420de38bf3";
	  var pexelURL = "http://api.pexels.com/v1/search?query=" + rapper;

	  $.ajax({
	    	Authorization: authkey,
	     	url: queryURL,
	    	method: "GET"
	      })

	  	.done(function(response) {

	  	// Check the console log
	  	console.log(response)

        });
    }
});
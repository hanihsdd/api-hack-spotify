/***********************************************
Endpoint:
GET https://api.spotify.com/v1/search

Required
q = artist:searchTerm
type = album

************************************************/

//Doc Ready

//On Submit of Form
	//store #search-term.val() as variable
	//getRequest(searchTerm)



$(document).ready(function(){

	//focus on text input
	$("#search-term").focus()

	$("form").submit(function (event){
		event.preventDefault();

		var searchTerm = $("#search-term").val().trim();
		getRequest(searchTerm);

		//show search results text and value
		$(".user-area p").show();
		$(".query").text(searchTerm);
	}); // end submit

}); // end ready


//getRequest(searchTerm)
function getRequest(searchTerm) {
	var request = $.ajax({
		url: "https://api.spotify.com/v1/search",
		method: "GET",
		data: {
			q: "artist:"+searchTerm,
			type: "album",
			limit: 18
		},
		dataType: "json",
	});

	request.done(function(response) {

		var albums = response.albums.items;
		console.log(albums);

		var print = "";

		$.each(albums, function( i, album ){

			var albumName = album.name;
			var albumImage = album.images[1].url;
			var spotifyLink = album.external_urls.spotify;

			print += "<li class='result'><a href='" + spotifyLink + "' targer='_blank'><img src='" + albumImage +"' alt='" + albumName + "'><p class='caption'>"+ albumName +"</p></a></li>";
		}); //end each
		
		$(".results").html(print);

	});// end .done

	request.fail(function( jqXHR, textStatus ){
		console.log("Request failed: " + textStatus)
	}); // end. fail


	//.ajax(url, settings_object)
		//settings_object to include all api parameters
		//if done - run showRequest
		//if fail - showError
}//end getRequest()


//showRequest(response)
	//var print = "";
		//.each(array_or_object, callback(index, value))
		//print each value
	//print html



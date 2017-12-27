$(function(){

});

function searchMe(){
	$('#app').empty();
	var ness = $('#searchBox').val();
	var onett = $('input[name=searchType]:checked').val();
	var requestMe = "http://localhost:8080/?type=" + onett + "&search=" + ness;
	var returnMe;
	
	var settings = {
	  "async": true,
	  "crossDomain": true,
	  "url": requestMe,
	  "method": "GET",
	}

	$.ajax(settings).done(function (response) {
		console.log(response);
		returnMe = response;
		
		var data = []
		switch(onett){
			case "track":
				$("#app").append('<div id="appendable"></div>')
				for(i=0; i<returnMe.tracks.items.length; i++){
					imgs = null;
					if(returnMe.tracks.items[i].album.images[0] != undefined){
						imgs = returnMe.tracks.items[i].album.images[0].url;
					}
					cmStr = "createMap('" + returnMe.tracks.items[i].name + "', '" + returnMe.tracks.items[i].artists[0].name + "', '" + returnMe.tracks.items[i].album.name + "', '" + imgs + "', '" + returnMe.tracks.items[i].id + "')";
					$("#appendable").append('<a href="#"><div class="appendEntry" onclick="' + cmStr + '"><div class="row"><div class="col-xs-4"><img class="spotImg" src="' + imgs + '" /></div><div class="col-xs-8"><p class="midP whiteP">' + returnMe.tracks.items[i].name + '</p><p class="infoP whiteP">' + returnMe.tracks.items[i].artists[0].name + '</p></div></div></div></a>');
				}
				break;
			case "artist":
				$("#app").append('<div id="appendable"></div>')
				for(i=0; i<returnMe.artists.items.length; i++){
					imgs = null;
					if(returnMe.artists.items[i].images[0] != undefined){
						imgs = returnMe.artists.items[i].images[0].url;
					}else{
						imgs = "res/img/default-profile-picture.svg"
					}
					cmStr = "createMap(null, '" + returnMe.artists.items[i].name + "', null, '" + imgs + "', '" + returnMe.artists.items[i].id + "')";
					$("#appendable").append('<a href="#"><div class="appendEntry" onclick="' + cmStr + '"><div class="row"><div class="col-xs-4"><img class="spotImg" src="' + imgs + '" /></div><div class="col-xs-8"><p class="midP whiteP">' + returnMe.artists.items[i].name + '</p></div></div></div></a>');
				}
				break;
			case "album":
				$("#app").append('<div id="appendable"></div>')
				for(i=0; i<returnMe.albums.items.length; i++){
					imgs = null;
					if(returnMe.albums.items[i].images[0] != undefined){
						imgs = returnMe.albums.items[i].images[0].url;
					}
					cmStr = "createMap(null, '" + returnMe.albums.items[i].artists[0].name + "', '" + returnMe.albums.items[i].name + "', '" + imgs + "', '" + returnMe.albums.items[i].id + "')";
					$("#appendable").append('<a href="#"><div class="appendEntry" onclick="' + cmStr + '"><div class="row"><div class="col-xs-4"><img class="spotImg" src="' + imgs + '" /></div><div class="col-xs-8"><p class="midP whiteP">' + returnMe.albums.items[i].name + '</p><p class="infoP whiteP">' + returnMe.albums.items[i].artists[0].name + '</p></div></div></div></a>');
				}
				break;
		}

		/* var test = returnMe.tracks.items[0].id;
		$("#appendable").empty();
		$("#appendable").append('<iframe src="https://open.spotify.com/embed?uri=spotify:track:'+test+'" width="250" height="80"></iframe>'); */
	});
	
}

function createMap(t, ar, al, img, id){
	var ge = null;
	ge = getGenre(ar);
	
	console.log(id);
}

function getGenre(fourside){
	
	
}
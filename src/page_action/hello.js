//alert("This is youtube");


/*
chrome.extension.sendMessage({instruction: "getYTid"}, function(response) {
	//alert(response.url);
	$.getJSON('https://noembed.com/embed', {format: 'json', url: response.url}, function (data) {
  		if (data.author_name){
  			history.pushState(null, null, response.url + "/channel=" + data.author_name + "/");
  		}
    	
	});
});
*/

$(document).ready(function () {
  	$.getJSON('https://noembed.com/embed', {format: 'json', url: location.href}, function (data) {
  		if (data.author_name){
  			history.pushState(null, null, location.href + "/channel=" + data.author_name + "/");
  		}
    });
});


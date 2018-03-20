<<<<<<< HEAD
/*
chrome.extension.sendMessage({instruction: "getYTid"}, function(response) {
	//alert(response.url);
	$.getJSON('https://noembed.com/embed', {format: 'json', url: response.url}, function (data) {
=======

$.getJSON('https://noembed.com/embed', {format: 'json', url: location.href}, function (data) {
>>>>>>> 94e37f0709e8dea5b749fa72d425bdf80b7dace0
  		if (data.author_name){
			  history.replaceState(null, null, location.href + "/channel=" + data.author_name + "/");
			  document.addEventListener('spfdone', function() {
				
			}); 
			  //history.pushState(null, null, "https://www.youtube.com/watch?v=JDJDeuJbiKc/channel=Marques%20Brownlee");
		}
	});

<<<<<<< HEAD
//$(document).ready(function () {
//window.onload = function() {

//}
//});

// window.addEventListener("load", function(event) {
//    alert("Finish Loading");
    
//  });

function changeURL(){
  $.getJSON('https://noembed.com/embed', {format: 'json', url: location.href}, function (data) {
        if (data.author_name){
          history.replaceState(null, null, location.href + "&channel=" + data.author_name);
        }
  });
}
/*
function setIntervalX(callback, delay, repetitions) {
    var x = 0;
    var intervalID = window.setInterval(function () {

       callback();

       if (++x === repetitions) {
           window.clearInterval(intervalID);
       }
    }, delay);
}
*/
changeURL();
//setIntervalX(changeURL, 100, 20);



document.addEventListener('transitionend', function(e) {
    if (e.target.id === 'progress'){
      changeURL();
    }
});

=======
	document.addEventListener('transitionend', function(e) {
		if (e.target.id === 'progress')
			// do stuff
			$.getJSON('https://noembed.com/embed', {format: 'json', url: location.href}, function (data) {
  		if (data.author_name){
			  history.replaceState(null, null, location.href + "/channel=" + data.author_name + "/");
			  document.addEventListener('spfdone', function() {
				
			}); 
			  //history.pushState(null, null, "https://www.youtube.com/watch?v=JDJDeuJbiKc/channel=Marques%20Brownlee");
		}
	});
	});
	
>>>>>>> 94e37f0709e8dea5b749fa72d425bdf80b7dace0


$.getJSON('https://noembed.com/embed', {format: 'json', url: location.href}, function (data) {
  		if (data.author_name){
			  history.replaceState(null, null, location.href + "/channel=" + data.author_name + "/");
			  document.addEventListener('spfdone', function() {
				
			}); 
			  //history.pushState(null, null, "https://www.youtube.com/watch?v=JDJDeuJbiKc/channel=Marques%20Brownlee");
		}
	});

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
	

function sanitize(str) {
	return str.replace(/ /g, "%20");
}



window.onload = function() {
	var url = document.getElementById("url");

	var whitelist = document.getElementById("whitelist");
	whitelist.addEventListener("click", function(){
		chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  			chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello"}, function(response) {
  				if (response.url) {
  					url.innerHTML = "@@||youtube.com/*&channel=" + sanitize(response.url) + "^$document";
  					document.execCommand("Copy");
  				} else {
  					url.innerHTML = "Choose a video first!"
  				} 			
  			});
		});
	})

	document.addEventListener('copy', function(e) {
		var textToPutOnClipboard = url.innerHTML;
		textToPutOnClipboard = textToPutOnClipboard.replace(/&amp;/g, '&');
	  	e.clipboardData.setData('text/plain', textToPutOnClipboard);
	  	e.preventDefault();
	});
}


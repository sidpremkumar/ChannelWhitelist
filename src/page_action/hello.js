function changeURL(){
  $.getJSON('https://noembed.com/embed', {format: 'json', url: location.href}, function (data) {
        if (data.author_name){
          history.replaceState(null, null, "watch?v=" + YouTubeGetID(location.href) + "&channel=" + data.author_name);
        }
  });
}

changeURL();
setTimeout(changeURL, 2000);

document.addEventListener('transitionend', function(e) {
    if (e.target.id === 'progress'){
      changeURL();
    }
});

	

function changeURL(){
  $.getJSON('https://noembed.com/embed', {format: 'json', url: location.href}, function (data) {
        if (data.author_name){
          history.replaceState(null, null, location.href + "&channel=" + data.author_name);
        }
  });
}

changeURL();

document.addEventListener('transitionend', function(e) {
    if (e.target.id === 'progress'){
      changeURL();
    }
});

	

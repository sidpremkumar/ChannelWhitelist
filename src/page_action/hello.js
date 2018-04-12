function changeURL(){
  $.getJSON('https://noembed.com/embed', {format: 'json', url: location.href}, function (data) {
        if (data.author_name){
          if (!window.location.href.includes("#")){
              window.location.href = "https://www.youtube.com/" + "watch?v=" + YouTubeGetID(location.href) + "&channel=" + data.author_name + "#loaded";

          }
        }
  });
}

changeURL();

document.addEventListener('transitionend', function(e) {
    if (e.target.id === 'progress'){
      changeURL();
    }
});



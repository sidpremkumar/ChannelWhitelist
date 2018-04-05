function changeURL(){
  $.getJSON('https://noembed.com/embed', {format: 'json', url: location.href}, function (data) {
        if (data.author_name){
          //history.replaceState(null, null, "watch?v=" + YouTubeGetID(location.href) + "&channel=" + data.author_name);
          window.location.href += "&channel=" + data.author_name + "#loaded";
        }
  });
}

function reload()
{
  location.reload();
}
/*
(function(history){
    var pushState = history.pushState;
    history.pushState = function(state) {
        if (typeof history.onpushstate == "function") {
            history.onpushstate({state: state});
        }
        // whatever else you want to do
        // maybe call onhashchange e.handler
        return pushState.apply(history, arguments);
    }
})(window.history);


window.onpopstate = history.onpushstate = function(e) {
    i++;
    $('#location').text(window.location.href);
    $('#msg').text('History changed ' + i  +
                   ' times (State object: ' +
                   JSON.stringify(e.state) + ')');
};
*/

 

changeURL();

//window.onload = reload();
//setTimeout(changeURL, 1000);
//reload();

document.addEventListener('transitionend', function(e) {
    if (e.target.id === 'progress'){
      location.reload();
    }
});



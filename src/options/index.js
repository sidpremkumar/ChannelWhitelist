document.getElementById("clickme").onclick = function(){
myFunction()
};

function myFunction() {
    var copyText = document.getElementById("myInput");
    copyText.select();
    document.execCommand("Copy");
    //alert("Copied the text: " + copyText.value);
  }
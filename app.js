

function ready(fn) {
  if (document.readyState != 'loading'){
      fn();
    } else {
      document.addEventListener('DOMContentLoaded', fn);
    }
}

function getData(cb){
    var request = new XMLHttpRequest();
    request.open('GET', 'data.json');

    request.onload = function() {
        if (request.status >= 200 && request.status < 400) {
            // Success!
            var data = JSON.parse(request.responseText);
            if(!!cb) cb(data);
        } else {
            // We reached our target server, but it returned an error
        }
    };

    request.onerror = function() {
    // There was a connection error of some sort
    };

    request.send();
}

ready(function(){
    getData(function(data){
        var dt = JSON.stringify(data, null, 4);
        document.getElementById("content").innerHTML = "<code>"+ dt +"</code>";
    });
});




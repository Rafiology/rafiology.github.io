var Request = new XMLHttpRequest();
Request.open('GET','js/data.json')
Request.onload = function () {
    console.log(Request.responseText);
}

Request.send();

function init() {
    loadJSON(function(response) {
      // Parse JSON string into object
      var actual_JSON = JSON.parse(response);
      console.log(actual_JSON);
    });
  }
var container = document.querySelector(".json-containter");
var buttonClick = document.querySelectorAll(".btn");
var number = 0;

buttonClick.forEach(function(buttonClick) {
    buttonClick.addEventListener("click",  function() {
        var Request = new XMLHttpRequest();
        Request.open('GET','https://rafiology.github.io/js/data.json')
        Request.onload = function () {
        var Data = JSON.parse(Request.responseText);   
        console.log(Data[number]);
        
        container.innerHTML = "<h1>" + Data[number].kraj + "</h1>" +
            "<p>" + Data[number].opis + "</p>";
        for (var i = 0; i < Data[number].potrawy.length; i++) {
            container.innerHTML += "<li>" + Data[number].potrawy[i] + "</li>";
            }
        };
        Request.send();
    });
});


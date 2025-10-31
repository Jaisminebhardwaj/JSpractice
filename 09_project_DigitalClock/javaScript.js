const clock = document.getElementById("clock");
// document.querySelector('#clock');

//setInterval(function, milliseconds) (method that controls the event)

setInterval(function(){
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();

},1000);
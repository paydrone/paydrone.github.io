// Landing Page
// Change Pictures / Animate

var darken = "linear-gradient( rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2) ),";
var i = 0;
var toload = 2;
var clearTimer;


document.addEventListener('DOMContentLoaded', function() {
    main();
}, false);




document.onkeyup = function myFunction() {
  switch (event.keyCode) {
    case 37: // Left Key
      i = i-2;
      changeBG();
      clearInterval(clearTimer);
      clearTimer = setInterval(changeBG, 3000 );
      break;
    case 39: // Right Key
      i++;
      changeBG();
      clearInterval(clearTimer);
      clearTimer = setInterval(changeBG, 3000 );
      break;
    }
}

function main() {
  changeBG();
  clearTimer = setInterval(changeBG, 3000 );
}

function changeBG() {

  //console.log("BEFORE: i = ",i,", toload = ",toload);

  if (i === 15) {
    toload = 1;
    i = 0;
  }
  if ( i < 0 ) {
    i = 15;
    toload = 1;
  }
  else {
    i++;
    toload = i+1;
  }

  if (toload >= 16) {
    toload = 1;
    i = 0;
  }

  //console.log("AFTER: i = ",i,", toload = ",toload);

  <!-- // Preloads next image -->
  var preload = document.getElementById("preloader");
  preload.src = 'landing_pictures/'+(toload).toString()+'.jpg';

  <!-- // Darkens and changes background -->
  var element = document.getElementById("background");
  element.style.background = darken + "url(landing_pictures/"+i.toString()+".jpg) no-repeat center center fixed";
  element.style.backgroundSize = "cover";
}


// function for play and pause btn .
// it switches the icon for every click .

function playPause(){
    var playPause = ["fas fa-play","fas fa-pause"];
    var icon = document.querySelector('i');

   if(icon.className === playPause[0]){
      icon.className = playPause[1];
   }else{
      icon.className = playPause[0];
   }
}

// Styling the button and it's icon .

var button = document.querySelector('button');
var i = document.querySelector('i');
  button.style.padding = '15px 39px';
  button.style.cursor = 'pointer';
  button.style.borderRadius = '5px';
  i.style.fontSize = '30px';
  
  // End .
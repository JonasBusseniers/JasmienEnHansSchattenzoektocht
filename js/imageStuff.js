var checkingLocationIndex;
window.onload = function () {
var imageGrid =     document.getElementById("imageGrid")

for( i = 0; i < locations.length; i++){
var location = locations[i];
var divNode = document.createElement("div");
var imgNode = document.createElement("img");
divNode.id = location.id;
if(location.found){
divNode.style.borderColor = "lime";
}
imgNode.setAttribute("onclick","enlargeImage(" + i + ")");
imgNode.className  = "template";
imgNode.src = location.image;
divNode.appendChild(imgNode);
imageGrid.appendChild(divNode);
}
setTimeout(function(){ imageGrid.style.backgroundImage = bgImg; }, 2000);
checkWin();
    }

function enlargeImage(i){
var location = locations[i];
document.getElementById("overlayImage").src = location.image;
document.getElementById("locationChecker").setAttribute("onclick","checkImageLocation(" + i + ",event)");
document.getElementById("locationChecker").style.display = "block";
document.getElementById("imageOverlay").style.display = "block";
}

function closeImageOverlay(){
document.getElementById("imageOverlay").style.display = "none";
}

function checkImageLocation(i, event){
event.stopPropagation();
var location = locations[i];
checkingLocationIndex = i;
atLocation(location.coords.lat,location.coords.long, areWeAtImage)

}

function areWeAtImage(weAre){
if(weAre){
var location = locations[checkingLocationIndex];
location.found = true;
window.localStorage.setItem(stageId, JSON.stringify(locations));
document.getElementById(location.id).style.borderColor = "lime";
document.getElementById(location.id).firstChild.setAttribute("style","opacity:0.5; -moz-opacity:0.5; filter:alpha(opacity=50)");
checkWin();
document.getElementById("locationChecker").style.display = "none";
document.getElementById("overlayImage").src = "images/correct.jpg";

checkOrder(checkingLocationIndex);
} else{
displayWrong();
}
}

function checkOrder(x){
 if(order){
 for (i = 0; i < order.length; i++) {
 var ref = order[i];

  if(ref == x){
break;
  }
 if(!locations[order[i]].found){
 alert("Opgelet, je had vóór deze foto al een andere foto gevonden moeten hebben!");
 };

 }

 }
}

function displayWrong(){
document.getElementById("locationChecker").style.display = "none";
document.getElementById("overlayImage").src = "images/wrong.jpg";
}

function checkWin(){
var won = true;
for( i = 0; i < locations.length; i++){
var location = locations[i];
if(!location.found){
won = false;
}
}
if(won){
setTimeout('displayWon()',1000);
}
}

function displayWon(){
closeImageOverlay();
document.getElementById("completedStage").style.display = "block";
for(p = 0; p < 11; p++){
command = "fadeLocations(" + (10-p).toString() + ")";
setTimeout(command,p * 500);
}
}

function fadeLocations(o){
for( i = 0; i < locations.length; i++){
var location = locations[i];
document.getElementById(location.id).setAttribute("style","opacity:" + o/10 + "; -moz-opacity:" + o/10 + "; filter:alpha(opacity=" + o*10 + ")");
}
}


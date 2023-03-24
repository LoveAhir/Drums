
// Dtecting Button Press

for(var i =0; i<document.querySelectorAll(".drum").length ; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",respondtoClick);
}

function respondtoClick(){
    this.style.color ="white";
    var audio;
    var buttonVariable = this.innerHTML;
    makeSound(buttonVariable);
    buttonAnimation(buttonVariable);
}  

// Sound based on key and button parameter

function makeSound(key){
    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            var kickbass = new Audio("sounds/kick-bass.mp3");
            kickbass.play();
            break;
        default: console.log("Invalid Input");
    }
}

// Animation

function buttonAnimation(currentKey){
    var activebutton = document.querySelector("."+currentKey);
    activebutton.classList.add("pressed");
    setTimeout(function(){activebutton.classList.remove("pressed");}, 100);
}

// Detecting Key Press

document.addEventListener("keypress",OnkeyPress);

function OnkeyPress(event){
    makeSound(event.key);
    buttonAnimation(event.key);
}
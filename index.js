for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        //        var audio = new Audio("sounds/tom-1.mp3");
        //        audio.play();
        var myButton = this.innerHTML;
        makeSound(myButton);
        animate(myButton);
    });

}

document.addEventListener("keypress", function (e) {
    //alert("key pressed");
    console.log(e.key);
    //alert(e.key);
    makeSound(e.key);
    animate(e.key);
});


function animate(element) {
    //first way 
    /*for (var i = 0 ; i<document.querySelectorAll(".drum").length;i++){
        document.querySelectorAll(".drum")[i].classList.remove("pressed");        
    }*/
    //second way
    var myElement = document.querySelector("." + element);
    myElement.classList.add("pressed");
    setTimeout(function () {
        myElement.classList.remove("pressed")
    }, 100);
}

function makeSound(key) {
    switch (key) {
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;

        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;

        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;

        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;

        case "j":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;

        case "k":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        default:
            console.log("default case ");
    }
}
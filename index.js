document.querySelectorAll(".bounce")[i].addEventListener("mouseDown", function() {

  var buttonInnerHTML = this.innerHTML;

  makeSound(buttonInnerHTML);

  buttonAnimation(buttonInnerHTML);

});

}

document.addEventListener("keypress", function(event) {

makeSound(event.key);

buttonAnimation(event.key);

});

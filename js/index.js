var slidePointer = 1;
showSlides(slidePointer);
    

function plusSlides(num) {
    showSlides(slidePointer += num);
}
function showSlides(num) {
    var i;
    var rotatingSlides = document.getElementsByClassName("promoBlock");
    if (num > rotatingSlides.length) {slidePointer = 1}
    if (num < 1) {slidePointer = rotatingSlides.length}
    for (i = 0; i < rotatingSlides.length; i++) {
        rotatingSlides[i].style.display = "none";
    }
    rotatingSlides[slidePointer-1].style.display = "block";
}

var cookieChoice = document.cookie;
alert(cookieChoice);
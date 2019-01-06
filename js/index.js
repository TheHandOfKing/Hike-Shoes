var allCookieStates = ["United States", "America Latina", "Canada", "Mexico", "Puerto Rico","BELGIUM", "BULGARIA", "ČESKÁ", "SERBIA", "DANMARK", "DEUTSCHLAND", "ΕΛΛΑΔΑ", "ESPAÑA", "FINLAND", "FRANCE", "IRELAND", "ISRAEL", "ITALIA","Aegiptus", "Morroco", "Tunisia", "Rest of Africa","Argentina", "Uruguay", "Chile", "Brasil", "America Latina","中国大陆", "台灣", "日本", "대한민국", "ประเทศไทย", "India","Australia", "New Zealand", "Other Countries"];
//Stuff for cookies
for(i=0; allCookieStates.length;i++){
    if(document.cookie === allCookieStates[i]){
        alert(document.cookie);
    }
}
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

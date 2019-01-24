var localHolder = document.getElementById("placeHolderForCookies");
var allStates =["United States", "America Latina", "Canada", "Mexico", "Puerto Rico","BELGIUM", "BULGARIA", "ČESKÁ", "SERBIA", "DANMARK", "DEUTSCHLAND", "ΕΛΛΑΔΑ", "ESPAÑA", "FINLAND", "FRANCE", "IRELAND", "ISRAEL", "ITALIA","Aegiptus", "Morroco", "Tunisia", "Rest of Africa","Argentina", "Uruguay", "Chile", "Brasil", "America Latina","中国大陆", "台灣", "日本", "대한민국", "ประเทศไทย", "India","Australia", "New Zealand"];
for(state in allStates){
    var localGetter = localStorage.getItem("state")
    if(localGetter == allStates[state]){
        localHolder.innerHTML = "You are from  " + localGetter;
        document.title = "Mike and Hike " + localGetter;
    }
    else if(localGetter === "Rest of Africa"){
        document.title = "Hike Official Central Africa";
        localHolder.innerHTML = "You are from  Central Africa";
    }
}
if(localStorage.length == 0){
    window.location.replace("hikeLangSelect.html")
}
//Code above is just an example of a local storage use, i've done this just to ease up on further projects
//It's a small piece of code that i really like

let storageClear = document.getElementById("storageClear");
storageClear.addEventListener("click", function(){
    localStorage.clear();
});
//Also added a way to clear storage 


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

//Creation of images stuff//
var slides1 = document.getElementsByClassName("classImage1"); //Getting class specific slides to work
var slides2 = document.getElementsByClassName("classImage2");
var slides3 = document.getElementsByClassName("classImage3");
var getDivs = document.getElementsByClassName("shoesImages"); //Get shoes by cl name
var contents = document.getElementById("contents");
for(i=0; i<9; i++){
    var creation = document.createElement("DIV");
    if(i<3){
    creation.className += "shoesImages "+ "img"+[i] + " " + "classImage1";
    }
    else if(i<6 && i>=3){
    creation.className += "shoesImages "+ "img"+[i] + " " + "classImage2";
    }
    else if(i<9 && i>=6){
    creation.className += "shoesImages "+ "img"+[i] + " " + "classImage3";
    }
    contents.appendChild(creation);
}
//AutomaticSlideshow
var slideIndex = 0;
function firstSet(){
    var slideGetter1 = document.getElementsByClassName("classImage1");
    for(i=0; i<slideGetter1.length; i++){
        slideGetter1[i].style.display = "none";
    }
    slideIndex++
    if(slideIndex > slideGetter1.length){slideIndex = 1}
    slideGetter1[slideIndex-1].style.display = "block";
    setTimeout(firstSet,1800);
}

function secondSet(){
    var slideGetter2 = document.getElementsByClassName("classImage2");
    for(i=0; i<slideGetter2.length; i++){
        slideGetter2[i].style.display = "none";
    }
    slideIndex++
    if(slideIndex > slideGetter2.length){slideIndex = 1}
    slideGetter2[slideIndex-1].style.display = "block";
    setTimeout(secondSet,3600);
}

function thirdSet(){
    var slideGetter3 = document.getElementsByClassName("classImage3");
    for(i=0; i<slideGetter3.length; i++){
        slideGetter3[i].style.display = "none";
    }
    slideIndex++
    if(slideIndex > slideGetter3.length){slideIndex = 1}
    slideGetter3[slideIndex-1].style.display = "block";
    setTimeout(thirdSet,2700);
}

firstSet();
secondSet();
thirdSet();
//Read the note
//Part for footer NOTE: I have came across an idea to make just one js extention for this part of code and make everything cleaner, but it came to me at the end of the whole site making thing, and i consider it to be a hassle//
var classHolder = document.getElementById("biggerPart");
for(i=0; i<3; i++){
    var newClasses = document.createElement("DIV");
    newClasses.className += "letterContent";
    classHolder.appendChild(newClasses);
}

var firstClass = ["GIFT CARDS","FIND A STORE","SIGN UP FOR EMAIL","BECOME A MEMBER","STUDENT DISCOUNT","SITE FEEDBACK"];
var classGet = document.getElementsByClassName("letterContent");
for(i=0; i<firstClass.length; i++){
    classGet[0].innerHTML += "<p>" + firstClass[i] + "</p>"; 
}

var secondClass = ["ABOUT NIKE","News","Careers","Investors","Sustainable Innovation", "UK Tax"]; 
for(i=0; i<secondClass.length; i++){
    classGet[1].innerHTML += "<p>" + secondClass[i] + "</p>"; 
}

var thirdClass = ["GET HELP","Shipping and Delivery","ReturnsPayment", "Options"];
for(i=0; i<thirdClass.length; i++){
    classGet[2].innerHTML += "<p>" + thirdClass[i] + "</p>"; 
}

//Login sector
var spanClose = document.getElementsByClassName('closingSpan')[0]
var otherLoginClose = document.getElementsByClassName('closingSpan')[1]
spanClose.addEventListener('click', closeLogin)
otherLoginClose.addEventListener('click', closeLogin)
function closeLogin(){
    var loginContent = document.getElementById("loginContent")
    loginContent.setAttribute("style", "display:none")
    var bgGet = document.getElementById("loginModal")
    bgGet.setAttribute("style", "display:none")
}//x function close done

//setup for login
var getLoginButton = document.getElementsByClassName('loginSpan')[0]
getLoginButton.addEventListener('click', function(){
    alert("Unfortunatley we dont support this option yet, but you're family so hey, hop in !")
    closeLogin()
})
var getLogin = document.getElementById("loginWindow")
var getRegister = document.getElementById("register")
$(document).ready(function() {
    $(getLogin).click(function(event){
        event.preventDefault();
        $("#loginModal").fadeIn();
        $("#loginContent").fadeIn();
        $("#registerContent").css("display", "none");
      });

    $(getRegister).click(function(){
        $("#loginModal").fadeIn();
        $("#registerContent").fadeIn();
    });
    var regeExEmail =/^\w+([\.-]\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    var usernameRegex = /^([a-zA-Z]{3,16})$/
    //Minimum eight characters, at least one letter and one number:
    var passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
    $('#testName').on('keypress keydown keyup',function(){
        if (!$(this).val().match(usernameRegex)) {
            $('#paraUName').removeClass('hidden');
            $('#paraUName').show();
        }
      else{
           $('#paraUName').addClass('hidden');
          }
    });
    $('#testPassword').on('keypress keydown keyup',function(){
        if (!$(this).val().match(passwordRegex)) {
            $('#paraPass').removeClass('hidden');
            $('#paraPass').show();
        }
      else{
           $('#paraPass').addClass('hidden');
          }
    });
    $('#emailReg').on('keypress keydown keyup',function(){
        if (!$(this).val().match(regeExEmail)) {
            $('#paraEmail').removeClass('hidden');
            $('#paraEmail').show();
        }
      else{
           $('#paraEmail').addClass('hidden');
          }
    });
});
//Register setup wih regexes, similar to upper code, also some content creation done via js, i got the idea to write everything in jquery so it's in the upper part, wish i'd make up mi mind
var selectGet = document.getElementById("someCountries")
for(country in allStates){
    selectGet.innerHTML += `<option> ${allStates[country]} </option>`
}
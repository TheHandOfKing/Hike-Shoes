var localHolder = document.getElementById("placeHolderForCookies");
var allStates =["United States", "America Latina", "Canada", "Mexico", "Puerto Rico","BELGIUM", "BULGARIA", "ČESKÁ", "SERBIA", "DANMARK", "DEUTSCHLAND", "ΕΛΛΑΔΑ", "ESPAÑA", "FINLAND", "FRANCE", "IRELAND", "ISRAEL", "ITALIA","Aegiptus", "Morroco", "Tunisia", "Rest of AfricaRest of Afr","Argentina", "Uruguay", "Chile", "Brasil", "America Latina","中国大陆", "台灣", "日本", "대한민국", "ประเทศไทย", "India","Australia", "New Zealand"];
var localGetter = localStorage.getItem("state");
if(localGetter === "Rest of Africa"){
    document.title = "Hike Official Central Africa";
    localHolder.innerHTML = "You are from  Central Africa";
}
else{
    for(state in allStates){
        if(localGetter == allStates[state]){
            localHolder.innerHTML = "You are from  " + localGetter;
            document.title = "Mike and Hike " + localGetter;
            break;
        }
    }   
}


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

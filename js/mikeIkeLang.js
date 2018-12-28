var spanInto = document.getElementById("spanSelect");
var regionDesc = ["North America", "Europe", "Africa", "South America", "Asia", "Australia"]; //Self descriptive
var is_country = ["is_AmericaN", "is_Europe", "is_Africa", "is_AmericaS", "is_Asia", "is_Australia"];//For map position
var countryClass = document.getElementsByClassName("spanLanguage");// For making of a span class
//Array groups for languages
var AmericaNorth = ["United States", "America Latina", "Canada", "Mexico", "Puerto Rico"];
var Europe = ["BELGIUM", "BULGARIA", "ČESKÁ", "SERBIA", "DANMARK", "DEUTSCHLAND", "ΕΛΛΑΔΑ", "ESPAÑA", "FINLAND", "FRANCE", "IRELAND", "ISRAEL", "ITALIA"];
var Africa = ["Aegiptus", "Morroco", "Tunisia", "Rest of Africa"];
var AmericaSouth = ["Argentina", "Uruguay", "Chile", "Brasil", "America Latina"];
var Asia = ["中国大陆", "台灣", "日本", "대한민국", "ประเทศไทย", "India"];
var Australia = ["Australia", "New Zealand", "Other Countries"];
//End of array group
for(i=0; i<6; i++)  //To make 6 span tags
{
    var spanMake = document.createElement("SPAN");
    spanMake.className += "spanLanguage" + " " + is_country[i]; //Adds another the is_<country name> to place the coordinates
    spanInto.appendChild(spanMake);
}
for(i=0; i< countryClass.length; i++){
    countryClass[i].innerHTML += "<p>" + regionDesc[i] + "</p>"; // These are the regions below the world map
    countryClass[i].setAttribute("data-country-name", regionDesc[i]);
    countryClass[i].addEventListener("click", forHrAndOther); //Event listener for hr tag and the other language groups
    //Which will be used to prompt the user to a site, but depending on what group the user chose some things, words or images
    //will be different
}




function forHrAndOther(event){
    var hrDisplay = document.getElementsByTagName("HR")[0];
    hrDisplay.style.transition = "opacity .3s linear"; //I made a naming mistake here, the noDisplay has attributes to display the tag not delete it//
    hrDisplay.style.opacity = "1";
    var checkup = event.target;
    var countryName = checkup.getAttribute("data-country-name");
    var countrySet = document.getElementById("countrySet");
    var movingLine = document.getElementById("movingLine");
    countrySet.innerHTML = "";
    movingLine.style.opacity = "1";
    if(countryName === "North America"){
        for(i=0; i< AmericaNorth.length; i++){
            countrySet.innerHTML += "<li class= \"li"+ i +"\"><p>" + AmericaNorth[i] + "</p></li>";
        }
        for(i=0; i<countryClass.length;i++){
            countryClass[i].style.border = "1px solid rgb(197, 197, 197)";
        }
        checkup.style.border = "2px solid black";
        movingLine.style.transition = "left .5s linear";
        movingLine.style.left = "446px";
    }
    else if(countryName === "Europe"){
        for(i=0; i < Europe.length; i++){ 
            countrySet.innerHTML += "<li class= \"li"+ i +"\"><p>" + Europe[i] + "</p></li>";
        }
        for(i=0; i<countryClass.length;i++){
            countryClass[i].style.border = "1px solid rgb(197, 197, 197)";
        }
        checkup.style.border = "2px solid black";
        movingLine.style.transition = "left .5s linear";
        movingLine.style.left = "630px";
    }
    else if(countryName === "Africa"){
        for(i=0; i < Africa.length; i++){
            countrySet.innerHTML += "<li class= \"li"+ i +"\"><p>" + Africa[i] + "</p></li>";
        }
        for(i=0; i<countryClass.length;i++){
            countryClass[i].style.border = "1px solid rgb(197, 197, 197)";
        }
        checkup.style.border = "2px solid black";
        movingLine.style.transition = "left .5s linear";
        movingLine.style.left = "816px";
    }
    else if(countryName === "South America"){
        for(i=0; i < AmericaSouth.length; i++){
            countrySet.innerHTML += "<li class= \"li"+ i +"\"><p>" + AmericaSouth[i] + "</p></li>";
        }
        for(i=0; i<countryClass.length;i++){
            countryClass[i].style.border = "1px solid rgb(197, 197, 197)";
        }
        checkup.style.border = "2px solid black";
        movingLine.style.transition = "left .5s linear";
        movingLine.style.left = "1002px";
    }
    else if(countryName === "Asia"){
        for(i=0; i < Asia.length; i++){
            countrySet.innerHTML += "<li class= \"li"+ i +"\"><p>" + Asia[i] + "</p></li>";
        }
        for(i=0; i<countryClass.length;i++){
            countryClass[i].style.border = "1px solid rgb(197, 197, 197)";
        }
        checkup.style.border = "2px solid black";
        movingLine.style.transition = "left .5s linear";
        movingLine.style.left = "1190px";
    }
    else if(countryName === "Australia"){
        for(i=0; i < Australia.length; i++){
            countrySet.innerHTML += "<li class= \"li"+ i +"\"><p>" + Australia[i] + "</p></li>";
        }
        for(i=0; i<countryClass.length;i++){
            countryClass[i].style.border = "1px solid rgb(197, 197, 197)";
        }
        checkup.style.border = "2px solid black";
        movingLine.style.transition = "left .5s linear";
        movingLine.style.left = "1376px";
    }
}

// Some jquery code needed for the page to work as it's toe to toe original //

$( document ).ready(function() {

});
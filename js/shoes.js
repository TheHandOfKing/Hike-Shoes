var localHolder = document.getElementById("placeHolderForCookies");
var allStates =["United States", "America Latina", "Canada", "Mexico", "Puerto Rico","BELGIUM", "BULGARIA", "ČESKÁ", "SERBIA", "DANMARK", "DEUTSCHLAND", "ΕΛΛΑΔΑ", "ESPAÑA", "FINLAND", "FRANCE", "IRELAND", "ISRAEL", "ITALIA","Aegiptus", "Morroco", "Tunisia", "Rest of Africa","Argentina", "Uruguay", "Chile", "Brasil", "America Latina","中国大陆", "台灣", "日本", "대한민국", "ประเทศไทย", "India","Australia", "New Zealand", "Other Countries"];
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
    else if(localGetter === "Other Countries"){
        document.title = "Hike Official Oceania";
        localHolder.innerHTML = "You are from  Oceania";
    }
}
//Code above is just an example of a local storage use, i've done this just to ease up on further projects
//It's a small piece of code that i really like

let storageClear = document.getElementById("storageClear");
storageClear.addEventListener("click", function(){
    localStorage.clear();
});

var classHolder = document.getElementById("biggerPart");
for(i=0; i<3; i++){
    let newClasses = document.createElement("DIV");
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
//Shoe creation and buying stuff
var classShoeGet = document.getElementsByClassName("shoeHolder");
for(i = 0; i<4; i++){
    var shoes = document.createElement("DIV");
    shoes.className += "products" + " "  + "shoe"+[i]
    classShoeGet[0].appendChild(shoes)
    var imageSet = document.getElementsByClassName("products")
    var image = document.createElement("IMG")
    image.src = "images/shoe"+[i] +".jpg"
    image.alt = "shoe"+[i]
    imageSet[i].appendChild(image);
    image.className += "image" + " " + "shoe"+[i]
}

//image specific for loop
for(i = 0; i<4; i++){
    var shoes = document.createElement("DIV");
    shoes.className += "products" + " " + "flop"+[i] + " " + "flip"
    classShoeGet[1].appendChild(shoes);
    var imageSet = document.getElementsByClassName("flip")
    var image = document.createElement("IMG")
    image.src = "images/flop"+[i] +".jpg"
    image.alt = "flop"+[i]
    imageSet[i].appendChild(image);
    image.className += "image" + " " + "flip"+[i]
}

var shoeFlopsGet = document.getElementsByClassName("products");
for(i =0; i< shoeFlopsGet.length; i++){
    let spanCreate = document.createElement("SPAN");
    spanCreate.className += "price";
    shoeFlopsGet[i].appendChild(spanCreate); 
}
var shoeData= ["AirJordan", "Nike Zoom Kobe 3s", "Kyrie 5s", "LeBron","Cleveland Flops", "Laker Flops", "Houston Flops", "San Antonio Flip Flops"]
var prices = [199, 219, 138, 97, 38, 54, 37, 70];
var priceGet = document.getElementsByClassName("price");
for(i = 0; i< priceGet.length; i++){
    priceGet[i].innerHTML += `
        <p>The price is: &nbsp &nbsp</p><p class="item-price">€${prices[i]}</p>
    `;
    var pClass = document.getElementsByClassName("item-price")
    pClass[i].setAttribute("data-shoes", shoeData[i])
}
//Cart creation

var removeGet = document.getElementsByClassName("buttonRemove");
//makes button remove remove stuff
for( i = 0; i<removeGet.length; i++){
    var button = removeGet[i];
    button.addEventListener('click', removeItems) //event listener to know when we remove and update total price
}

var inputQty = document.getElementsByClassName('cart-input') //follows the change on inputs qty with eListener
for( i = 0; i<inputQty.length; i++){
    var input = inputQty[i]
    input.addEventListener("change", inputChange)
}
function removeItems(event){ // remove items on click, eazy peazy
    var buttonClicked = event.target;
    buttonClicked.parentElement.parentElement.remove();
    cartTotalUpdate();
}

function inputChange(event){ //Chechks for number change on input
    var inputValue = event.target
    if(isNaN(inputValue.value) || inputValue.value <= 0){
        inputValue.value = 1 
    }
    cartTotalUpdate()
}

function cartTotalUpdate(){ // updates the total cart value once remove is clicked
    var allItems = document.getElementsByClassName("cartItems")[0];
    var itemRows = allItems.getElementsByClassName("oneRow");
    var total = 0
    for( i = 0; i<itemRows.length; i++){
        var cartRow = itemRows[i]
        var cartPrice = cartRow.getElementsByClassName("price-cart")[0]
        var cartQuantity = cartRow.getElementsByClassName("cart-input")[0]
        var price = parseFloat(cartPrice.innerText.replace('€', ""))
        var quantity = cartQuantity.value
        total = total + (price * quantity)
    }
    total = Math.round(total * 100) / 100
    document.getElementsByClassName("cartTotalPrice")[0].innerText = "€" + total
}
//Event listener for span
var addToCart = document.getElementsByClassName("item-price")
for( i = 0; i<addToCart.length; i++){
    var spanPrice = addToCart[i]
    spanPrice.addEventListener('click', addToCartFunction)
}

function addToCartFunction(event){
    var click = event.target
    var imageSearcher = click.parentElement.parentElement
    var title = click.getAttribute("data-shoes")
    var price = click.innerText
    var imageSource = imageSearcher.getElementsByClassName("image")[0].src
    addItemToCart(title, price, imageSource)
    cartTotalUpdate()
}

function addItemToCart(title, price, imageSource){
    var newCartRow = document.createElement("DIV")
    newCartRow.classList.add('oneRow')
    var cartItemsGetter = document.getElementsByClassName("cartItems")[0]
    var cartNames = document.getElementsByClassName("itemName")
    console.log(cartNames)
    for (cart in cartNames){
        if(cartNames[cart].innerText == title){
            alert("You have added excess items of this type")
            return
        }
    }
    var cartRowContent = `
    <div class="cartItemPart image-cart">
    <img src="${imageSource}" alt="">
    <span class="itemName">${title}</span>
    </div>
        <span class="cartItemPart price-cart">${price}</span>
<div class="cartItemPart quantity-cart">
    <input type="number" class="cart-input" value="1">
    <button class="buttonRemove">REMOVE</button>
</div>
`;
    newCartRow.innerHTML = cartRowContent
    cartItemsGetter.append(newCartRow)
    newCartRow.getElementsByClassName("buttonRemove")[0].addEventListener('click', removeItems)
    newCartRow.getElementsByClassName("cart-input")[0].addEventListener('change', inputChange)
}

document.getElementsByClassName("buttonPurchase")[0].addEventListener('click', purchaseSim)

function purchaseSim(){
    alert('Thank you for your purchase')
    var cartItemsDel = document.getElementsByClassName('cartItems')[0]
    while(cartItemsDel.hasChildNodes()){
        cartItemsDel.removeChild(cartItemsDel.firstChild)
    }
    cartTotalUpdate()
}
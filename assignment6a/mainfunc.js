//set var for size grid
var tinyButton = document.getElementById('light');

//check for highlight, remove from elements, reset to selection
if(tinyButton) {
  tinyButton.addEventListener('click', function(e){
       var nodes = tinyButton.children;
       for(var i = 0; i < nodes.length; i++){
           if(nodes[i].classList.contains("highlightbutton")){
               nodes[i].className = "";
           }
       }
       if(e.target.id === "button1" || e.target.id === "button2" || e.target.id === "button3" || e.target.id === "button4" ){
           e.target.className = "highlightbutton";
     }
   })
 };

//set variable for color choices on details page
var colorButton = document.getElementById('colorgrid');

//check for click on color buttons, change styles to highlight
if(colorButton) {
  colorButton.addEventListener('click', function(e){
       var nodes = colorButton.children;
       for(var i = 0; i < nodes.length; i++){
               nodes[i].className = "detailcolors"+(i+1);
       }
       if(e.target.id === "detailcolorselect1" || e.target.id === "detailcolorselect2" || e.target.id === "detailcolorselect3" || e.target.id === "detailcolorselect4" ){
           var x = e.target.id;
           e.target.className = "highlightcolorbutton"+x[x.length-1];
     }
   })
 };

//set variables for cart counter
var cartText = document.getElementById('cartButton');
var myCartCount = document.getElementById('cartcount');
var qtyCount = 0 //parseInt(document.getElementById('qty').value, 1);

//update add to cart button on click, change cart counter
if(cartText) {

  function changeCartText(){
    if(cartText.innerHTML == 'Add to Cart') {
      cartText.innerHTML = "Added!";
      qtyCount++;
      myCartCount.innerHTML = qtyCount;
      sessionStorage.setItem("qtyCount", qtyCount);
    }
    else {
      cartText.innerHTML = "Add to Cart";
    }
  }
}

//make sure cart counter is consistent across screens
if(myCartCount) {
  myCartCount.innerHTML = sessionStorage.getItem("qtyCount");
}

//update cart counter when items are removed from cart
if(document.getElementById("card1")) {
  var x = document.getElementById("card1");
  var myCartCount = document.getElementById('cartcount');
  x.addEventListener('click', function(){

      var y = parseInt(sessionStorage.getItem("qtyCount"));
      console.log(y);

      x.parentElement.parentElement.style.display = "none";

      myCartCount.innerHTML = y-1;
      sessionStorage.setItem("qtyCount", myCartCount.innerHTML);
    });
}

if(document.getElementById("card2")) {
  var x = document.getElementById("card2");
  var myCartCount = document.getElementById('cartcount');
  x.addEventListener('click', function(){

      var y = parseInt(sessionStorage.getItem("qtyCount"));
      console.log(y);

      x.parentElement.parentElement.style.display = "none";

      myCartCount.innerHTML = y-1;
      sessionStorage.setItem("qtyCount", myCartCount.innerHTML);
    });
}

//when adding to cart, check for values when add button is clicked
//access local storage and store the items
//check storage later and pull info into cart page

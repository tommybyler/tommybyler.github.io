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

var colorButton = document.getElementById('colorgrid');

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

var cartText = document.getElementById('cartButton');
var myCartCount = document.getElementById('cartcount');
var qtyCount = 0 //parseInt(document.getElementById('qty').value, 1);

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

if(myCartCount) {
  myCartCount.innerHTML = sessionStorage.getItem("qtyCount");
}

if(document.getElementById("card1")) {
  var x = document.getElementById("card1");

  x.addEventListener('click', function(){
    // alert("11111");
      console.log(x.parentElement);
      x.parentElement.parentElement.style.display = "none";
    });
}

if(document.getElementById("card2")) {
  var x = document.getElementById("card2");
  var myCartCount = document.getElementById('cartcount');

  x.addEventListener('click', function(){
    // alert("11111");
      console.log(x.parentElement);
      x.parentElement.parentElement.style.display = "none";
      console.log(myCartCount)
      console.log(sessionStorage.getItem("qtyCount"))
      myCartCount.innerHTML = sessionStorage.getItem("qtyCount")--;
      sessionStorage.setItem("qtyCount", myCartCount.innerHTML);
    });
}

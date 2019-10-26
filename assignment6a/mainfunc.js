var tinyButton = document.getElementById('light');

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

var colorButton = document.getElementById('colorGrid');

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
var myCartCount = document.getElementById('cartCount');
var qtyCount = parseInt(document.getElementById('qty').value, 1);

function changeCartText(){
  if(cartText.innerHTML == 'Add to Cart') {
    cartText.innerHTML = "Added!";
    myCartCount.innerHTML = qtyCount;
  }
  else {
    cartText.innerHTML = "Add to Cart";
  }
}

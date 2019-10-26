var tinyButton = document.getElementById('light');

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
});

var colorButton = document.getElementById('colorGrid');

colorButton.addEventListener('click', function(e){
       var nodes = colorButton.children;
       for(var i = 0; i < nodes.length; i++){
           if(nodes[i].classList.contains("highlightcolorbutton[i]")) {
               nodes[i].className = "";
           }
       }
       if(e.target.id === "detailcolorselect1" || e.target.id === "detailcolorselect2" || e.target.id === "detailcolorselect3" || e.target.id === "detailcolorselect4" ){
           e.target.className = "highlightcolorbutton[i]";
     }
});

var cartText = document.getElementById('cartButton');
var myCartCount = document.getElementById('cartCount');
var incrementer = 0

function changeCartText(){
  if(cartText.innerHTML == 'Add to Cart') {
    cartText.innerHTML = "Added!";
    incrementer++;
    myCartCount.innerHTML = incrementer;
  }
  else {
    cartText.innerHTML = "Add to Cart";
  }
}

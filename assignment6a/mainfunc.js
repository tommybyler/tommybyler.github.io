var tinyButton = document.getElementById('light');
tinyButton.addEventListener('click', function(e){
       var nodes = tinyButton.children;
       for(var i = 0; i < nodes.length; i++){
           if(nodes[i].classList.contains("highlightbutton")){
               nodes[i].className = "";
           }
       }
       e.target.className = "highlightbutton";
       console.log(e.target);
});

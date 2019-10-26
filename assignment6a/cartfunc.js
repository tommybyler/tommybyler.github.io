var x = document.getElementById("card1");

x.addEventListener('click', function(){
  // alert("11111");
    console.log(x.parentElement);
    x.parentElement.parentElement.style.display = "none";
});

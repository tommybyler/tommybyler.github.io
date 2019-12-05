var hamburgOpen = false
if (hamburgOpen == false) {
  var hamburgOpen = true;
  $(document).ready(function(){
    $("#hamburgerOpen").click(function(){
      $("#mySidebar").animate({left: '20px'});
      $("#sidebarTwo").animate({left: '10px'});
      $("#sidebarThree").animate({left: '0px'});
    });
  });
} else {
  $(document).ready(function(){
    $(".burgCloser").click(function(){
      $("#mySidebar").animate({left: '-400px'});
      $("#sidebarTwo").animate({left: '-400px'});
      $("#sidebarThree").animate({left: '-400px'});
    });
  });
}

$(document).ready(function(){
  $("#dropdownBtn").click(function(){
    $("#myDropdown").slideToggle("slow");
  });
});

var typed5 = new Typed('#typed5', {
  strings: ['hamburger', 'bento', 'döner', 'kebab'],
  typeSpeed: 35,
  backSpeed: 30,
  cursorChar: '__',
  shuffle: true,
  smartBackspace: false,
  loop: true
});

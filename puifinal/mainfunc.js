var hamburgOpen = false
var kebabOpen = false

// open/close hamburger menu on left
$(document).ready(function(){
  $("#hamburgerOpen").click(function(){
    // if hamburgOpen == false (menu is closed)
    if (hamburgOpen == false) {
      // open menu & set hamburgOpen to true
      hamburgOpen = true;
      $("#mySidebar").animate({left: '20px'});
      $("#sidebarTwo").animate({left: '10px'});
      $("#sidebarThree").animate({left: '0px'});
    } else {
      // else close menu & set hamburgOpen to false
      hamburgOpen = false;
      $("#mySidebar").animate({left: '-400px'});
      $("#sidebarTwo").animate({left: '-400px'});
      $("#sidebarThree").animate({left: '-400px'});
    }
  });
});

// open/close kebab menu on right
$(document).ready(function(){
  $("#kebabOpen").click(function(){
    // if kebabOpen == false (menu is closed)
    if (kebabOpen == false) {
      // then open menu & set kebabOpen to true
      kebabOpen = true;
      $("#kebabMenu").animate({left: '-420px'});
      $("#kebabMenuTwo").animate({left: '-410px'});
      $("#kebabMenuThree").animate({left: '-400px'});
    } else {
      // else close menu & set kebabOpen to false
      kebabOpen = false;
      $("#kebabMenu").animate({right: '400px'});
      $("#kebabMenuTwo").animate({right: '400px'});
      $("#kebabMenuThree").animate({right: '400px'});
    }
  });
});

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

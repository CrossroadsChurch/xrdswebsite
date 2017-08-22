// 
// Handling menu events
// 


//
// components/nav.js
//

$(window).on("load resize",function(e) {
  
  //var menuToggle = document.getElementById("#sidenav");

  $("#sidenav").addClass("navhidden")
  
  var menuToggle = $(".menuiconimg").unbind();
  
 // $("#sidenav").slideToggle();
  
  console.log("what is going on here")


  // var menuToggle = $("#menuiconimg").unbind();
  // // $("#js-centered-navigation-menu").removeClass("show");
  // $("#mobilemenu").removeClass("showmenu");

  // menuToggle.on("click", function(e) {
  //   e.preventDefault();
  //   $("#mobilemenu").slideToggle(function(){
  //     if($("#mobilemenu").is(":hidden")) {
  //       $("#mobilemenu").removeAttr("style");
  //     }
  //   });
  // });
  
  menuToggle.on("click", function(e) {
    e.preventDefault();
    
    console.log("menuToggle.on click")
    
    $("#sidenav").slideToggle(function() {
      console.log("slideToggle")
      // $("#sidenav").addClass("navhidden")
    })
    
  })
}); 


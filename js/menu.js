// 
// Handling menu events
// 

$(window).on("load resize",function(e) {
  
  $("#sidenav").addClass("navhidden")
  
  var menuToggle = $(".menuiconimg").unbind();

  
  menuToggle.on("click", function(e) {
    e.preventDefault();
    
    console.log("menuToggle.on click")
    
    $("#sidenav").slideToggle(function() {
      console.log("slideToggle")
    })
    
  })
}); 


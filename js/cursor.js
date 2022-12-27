// scroll aos effect
AOS.init();
// Cursor page move and link hover
$(window).mousemove(function(e) {     
  $(".cursor").css({
    left: e.pageX,
    top: e.pageY
  })    
})

$(".cursor-link")
.on("mouseenter", function() {   
$('.cursor').addClass("active")   
})
.on("mouseleave", function() {    
$('.cursor').removeClass("active")    
})

$(".cursor-link-portfolio-1")
.on("mouseenter", function() {   
$('.cursor').addClass("cusor-image")   
})
.on("mouseleave", function() {    
$('.cursor').removeClass("cusor-image")    
})

$(".cursor-link-portfolio-2")
.on("mouseenter", function() {   
$('.cursor').addClass("cusor-image")   
})
.on("mouseleave", function() {    
$('.cursor').removeClass("cusor-image")    
})

$(".cursor-link-portfolio-3")
.on("mouseenter", function() {   
$('.cursor').addClass("cusor-image")   
})
.on("mouseleave", function() {    
$('.cursor').removeClass("cusor-image")    
})

$(".cursor-link-portfolio-4")
.on("mouseenter", function() {   
$('.cursor').addClass("cusor-image")   
})
.on("mouseleave", function() {    
$('.cursor').removeClass("cusor-image")    
})

$(".cursor-link-portfolio-5")
.on("mouseenter", function() {   
$('.cursor').addClass("cusor-image")   
})
.on("mouseleave", function() {    
$('.cursor').removeClass("cusor-image")    
})
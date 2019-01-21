
function main() {

(function () {
   'use strict';

	// Hide .navbar first
	$(".navbar").hide();
	
	// Fade in .navbar
	$(function () {
		$(window).scroll(function () {
            // set distance user needs to scroll before we fadeIn navbar
			if ($(this).scrollTop() > 200) {
				$('.navbar').fadeIn();
			} else {
				$('.navbar').fadeOut();
			}
		});

	
	});
	
	// Preloader */
	  	$(window).load(function() {

   	// will first fade out the loading animation 
    	$("#status").fadeOut("slow"); 

    	// will fade out the whole DIV that covers the website. 
    	$("#preloader").delay(500).fadeOut("slow").remove();      

  	}) 

   

    

 
	
	

  // jQuery Parallax
  function initParallax() {
    $('#intro').parallax("100%", 0.3);
    $('#services').parallax("100%", 0.3);
    $('#aboutimg').parallax("100%", 0.3);	
    $('#testimonials').parallax("100%", 0.1);

  }
  initParallax();

  	

}());


}
main();
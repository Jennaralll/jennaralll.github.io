$(document).ready(function(){

	$("#bgcolor_button").click(function(){
		var back = ["pink","white","Thistle", "#99ddff", "#ffff99"];
 		var rand = back[Math.floor(Math.random() * back.length)];
		$("body").css('background',rand);
	});

	$("#color_button").click(function(){
		var back = ["pink","white","Thistle", "#99ddff", "#ffff99"];
 		var rand = back[Math.floor(Math.random() * back.length)];
		$("p").css('background',rand);
	})

});

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}

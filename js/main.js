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

$(document).ready(function(){
	$('.food-slider').slick
	({
		autoplay:true,
		slidesToShow:3,
		slidesToScroll:1,
		prevArrow:".prev-btn",
		nextArrow:".next-btn",

		responsive:[
			{
				breakpoint:1055,
				settings:
				{
					slidesToShow:2,
				}
			},
			{
				breakpoint:862,
				settings:
				{
					slidesToShow:1,
				}
			}
		]

	});
	$('.nav-trigger').click(function(){
		$('.site-content-wrapper').toggleClass('scaled');
	})
});


 window.setInterval(function(){
 	var seconds=new Date();

var sec=seconds.getSeconds();
 	document.getElementById("hor").innerHTML=seconds.getHours();
	 	document.getElementById("min").innerHTML=seconds.getMinutes();
 	document.getElementById("sec").innerHTML=sec;

 });

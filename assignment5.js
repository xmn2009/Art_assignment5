/**
 * @author Mengna Xia
 */

$(document).ready(function(){
	
	//logo effort
	$("#logo").hover(
		function(){$(this).animate({height:"280", width:"280",transition: "width 0s, height 0s", opacity: "1"},"swing");}, // end of hanlerIn
		function(){$(this).animate({height:"250", width:"250", opacity: "0.8"});} //end of handlerOut
	);//end of hover
	
	// stagger show the paragraph
	$("#p1").animate(
		{opacity: 1},
		"slow",
		function(){$("#p2").animate(
		{opacity: 1},
		"slow",
		function(){	$("#p3").animate(
		{opacity: 1},
		"slow"
		);}//end of p3 animation
		);}//end of p2 animation
	);//end of p2 animation
	

	
	//sidebar ad rotate every 3s
	var ad = $("#sidebar .ad a");
	var currentAd = 0;
	var adInterval = setInterval(nextAd, 3000);
	
	function nextAd(){		
		//console.log(ad[currentAd]);
		
		//looping
		currentAd = (currentAd + 1) % ad.length;
		
		//set the <a> into <div> that shows Ads, set up animation		
		$("#sidebar .Showing").html(ad[currentAd]).animate(
			{opacity:1, top: "+=5"},
			1500,"swing",
			function(){$("#sidebar .Showing").animate(
			{opacity:0.2, top: "-=5"},
			1500);}
		);
	};
	

}); // end of ready

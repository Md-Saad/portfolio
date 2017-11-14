	$('.progressbar1').progressBar({
			shadow : false,
			percentage : true,
			animation : true,
	});
	$('.progressbar2').progressBar({
		shadow : false,
		percentage : true,
		animation : true,
		barColor : "#527AF9",
	});
  $("#owl-demo").owlCarousel({
 
      navigation : true, // Show next and prev buttons
      slideSpeed : 1000,
      paginationSpeed : 1000,
      singleItem:true,
	  autoPlay:true,
	  navigation:false,
	  pagination:true,
 
      // "singleItem:true" is a shortcut for:
      // items : 1, 
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false
 
  });
$(function() {



  /* = SVG img
  ----------------------------------------------- */
  var mySVGsToInject = document.querySelectorAll('img.inject-me');
  SVGInjector(mySVGsToInject);


  	/* = Css vars fixed for ie11
	----------------------------------------------- */
	cssVars({
	  //variables: { '--font-family': 'helvetica' },
	  // ----------
	  onlyLegacy: true,
	});

  /* = Swiper iDangerous
	----------------------------------------------- */
  var swiper = new Swiper('.swiper_arrows', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  var swiper = new Swiper('.swiper_hp', {
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
  });

  /* = Message
  ----------------------------------------------- */
  if ($('#message').length){
    $('body').addClass('has_message');
  }

	/* = Vidéos responsives
	----------------------------------------------- */
	$( ".text iframe" ).wrap( "<div class='video-container'></div>" );
	$( ".text object" ).wrap( "<div class='video-container'></div>" );
	$( ".text embed" ).wrap( "<div class='video-container'></div>" );


	/* = Menu responsive
	----------------------------------------------- */
    $('.show_menu_mobile, #fond_header').click(function(){
        $('nav#menu_mobile').toggleClass('show');
        $('.show_menu_mobile .icon').toggleClass('close');
      return false;
    });

});
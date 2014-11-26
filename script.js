function headerScrolled(){
  $('.header-nav').addClass('header-scrolled');
  $('.signup-header-btn').addClass('opacity-1');
}

function headerTop(){
  $('.header-nav').removeClass('header-scrolled');
  $('.signup-header-btn').removeClass('opacity-1');
}

window.onscroll = function(){
	document.documentElement.scrollTop || document.body.scrollTop > 488 ?
		headerScrolled()
		: headerTop();
}
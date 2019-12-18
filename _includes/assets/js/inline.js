if (window.netlifyIdentity) {
  window.netlifyIdentity.on("init", user => {
    if (!user) {
      window.netlifyIdentity.on("login", () => {
        document.location.href = "/admin/";
      });
    }
  });
}

$(document).ready(function(){
	$("html").addClass('js');

	// Open and close loop for main navigation on mobile.
	$("button.header-main__menu").click(function(){ // when user clicks on nav btn..
		if ($('.open-mobile').length) { // .. if nav is already open..
			$(".header-main").removeClass('open-mobile'); // .. remove the class..
			$('button.header-main__menu').attr("aria-expanded","false");
		}
		else { // .. if not ..
			$(".header-main").addClass('open-mobile'); // .. add the open on mobile class..
			$('button.header-main__menu').attr("aria-expanded","true");
		}
	});

	// Slick https://kenwheeler.github.io/slick/ - Home page carousel
	$('.carousel-block__home').slick({
		dots: true,
		arrows: true,
		infinite: true,
		speed: 800,
		fade: true,
		cssEase: 'linear',
		autoplay: true,
		autoplaySpeed: 8000,
	});
});
  
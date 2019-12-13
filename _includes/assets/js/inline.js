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
	// Open and close loop for main navigation on mobile.
	$(".header-main__menu").click(function(){ // when user clicks on nav btn..
		if ($('.open-mobile').length) { // .. if nav is already open..
			$(".header-main").removeClass('open-mobile'); // .. remove the class..
			$('.js-open-text').hide(); // .. hide 'closed' text..
			$('.js-closed-text').show(); // .. display 'open' text..
		}
		else { // .. if not ..
			$(".header-main").addClass('open-mobile'); // .. add the open on mobile class..
			$('.js-open-text').css('display','inline-block'); // .. display 'close' text..
			$('.js-closed-text').hide(); // .. hide 'open' text..
		}
	});
});
  
if (window.netlifyIdentity) {
  window.netlifyIdentity.on("init", user => {
    if (!user) {
      window.netlifyIdentity.on("login", () => {
        document.location.href = "/admin/";
      });
    }
  });
}





document.addEventListener('DOMContentLoaded', function(e) {
	if (getCookie('nlc_cookie_bar').length > 0) {
	  document.getElementById('cookie-bar-bottom').style.display = 'none';
	}
	document.getElementById('cookie-hide').addEventListener('click', function(e) {
	  createCookie('nlc_cookie_bar', true, 1);
	  document.getElementById('cookie-bar-bottom').style.display = 'none';
	})
});
  
  
  
  var createCookie = function(name, value, days) {
	var expires;
	if (days) {
	  var date = new Date();
	  date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
	  expires = "; expires=" + date.toGMTString();
	}
	else {
	  expires = "";
	}
	document.cookie = name + "=" + value + expires + "; path=/";
  }
  
  function getCookie(c_name) {
	if (document.cookie.length > 0) {
	  c_start = document.cookie.indexOf(c_name + "=");
	  if (c_start != -1) {
		c_start = c_start + c_name.length + 1;
		c_end = document.cookie.indexOf(";", c_start);
		if (c_end == -1) {
		  c_end = document.cookie.length;
		}
		return unescape(document.cookie.substring(c_start, c_end));
	  }
	}
	return "";
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

	// Meet the team show/hide functionality
    $(".team-block__item__readmore").click(function(){
		$(this).closest('.team-block__item').find('.team-block__item__bio').toggleClass('expand');

		var x = $(this).closest('.team-block__item').find('.team-block__item__readmore');

		if (x.text() == 'More') {
			x.text('Less');
		} else if (x.text() == 'Less') {
			x.text('More');
		}

		$(this).closest('.team-block__item').find('.team-block__item__readmore__img').toggleClass('rotate');
	});

	// The navigation is built dynamically, with the addition of one hardcoded li item which is the external link to the Medium blog. We need to reposition this nav item dynamically.
	div1 = jQuery('.main-nav li:nth-child(4)');
	div2 = jQuery('.main-nav li:nth-child(5)');
	
	tdiv1 = div1.clone();
	tdiv2 = div2.clone();
	
	if(!div2.is(':empty')){
		div1.replaceWith(tdiv2);
		div2.replaceWith(tdiv1);	  
	}

	// Cookie bar
	// $(".js-cookie-bar-close").click(function(){
	// 	$(".cookie-bar").hide();
	// });

});

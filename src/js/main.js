/////RESPONSIVE MENU ////////////
$(function() {
	var link = $(".menu-link");
	var linkActive = $(".menu-link_active");
	var menu = $(".menu");
	var nav = $(".menu a");
	
	link.on("click", function() {
		link.toggleClass('menu-link_active');
		menu.toggleClass('menu-active');
	});
	linkActive.on("click", function() {
		link.removeClass('menu-link_active');
	});
	nav.on("click", function() {
		menu.toggleClass('menu-active');
		link.toggleClass('menu-link_active');
	});

	////////NAVIGATION FIXED /////////
	    var headerH = $("#js-header").height(),
        navH = $("#nav").innerHeight();

    $(document).on("scroll", function() {

        var documentScroll = $(this).scrollTop();

        if(documentScroll > headerH) {
            $("#nav").addClass("fixed");

            $("#js-header").css({
                "paddingTop": navH
            });
        } else {
            $("#nav").removeClass("fixed");
            $("#js-header").removeAttr("style");
        }

    });















});

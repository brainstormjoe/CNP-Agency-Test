$(document).foundation()

var config = {
    sensitivity: 3, // number = sensitivity threshold (must be 1 or higher)    
    interval: 200, // number = milliseconds for onMouseOver polling interval    
    over: doOpen, // function = onMouseOver callback (REQUIRED)    
    timeout: 200, // number = milliseconds delay before onMouseOut    
    out: doClose // function = onMouseOut callback (REQUIRED)    
};

var windowsize = $(window).width();

$(document).ready(function() {

    $("ul.top-navigation.dropdown li").hoverIntent(config);

    $("ul.dropdown li ul li:has(ul)").find("a:first").append(" &raquo; ");

    bindSearch();
    bindMenu();

    if (windowsize < 640) {

        $(".ind3 .financial").detach().appendTo('.ind1');
        $(".ind3 .retail").detach().appendTo('.ind2');

    } else if (windowsize > 639) {

        $(".ind1 .financial").detach().appendTo('.ind3');
        $(".ind2 .retail").detach().appendTo('.ind3');
    }

    if (windowsize > 1215) {

        $("ul.navigation.dropdown li").hoverIntent(config);

    }

    $(window).resize(function() {

        windowsize = $(window).width();
        if (windowsize > 1215) {

            $('ul.navigation').show();
            $("li.has-children, li.has-children ul").removeClass("open");

        } else if ($(".medium-menu a").hasClass("closed") && $(".small-menu a").hasClass("closed")) {

            $('ul.navigation').hide();
        }

        if (windowsize < 1216) {

            $("ul.navigation.dropdown li").unbind();
            $("li.has-children ul").removeAttr("style");

        } else {

            $("ul.navigation.dropdown li").hoverIntent(config);
        }

        if (windowsize < 640) {

            $(".ind3 .financial").detach().appendTo('.ind1');
            $(".ind3 .retail").detach().appendTo('.ind2');
        } else if (windowsize > 639) {

            $(".ind1 .financial").detach().appendTo('.ind3');
            $(".ind2 .retail").detach().appendTo('.ind3');
        }


    });


    $("ul.dropdown>li").has("ul").addClass("has-children");


    $('.has-children a').click(function() {
        if ($(this).closest("li.has-children").hasClass("open") == true) {
            //close
            $(this).closest("li.has-children").removeClass("open");
            $(this).closest("li.has-children").find("ul").removeClass("open");

        } else {
            $(this).closest("li.has-children").addClass("open");
            $(this).closest("li.has-children").find("ul").addClass("open");

        }
    });

})



$('.contact-side-form').click(function() {
	
	$('.contact-side-input-form').animate({
        right: '0px'
    });
	
	$('.contact-side-form').animate({
		right:'423px'
	});
});

$('.cancel-form').click(function() {
	
	$('.contact-side-input-form').animate({
        right: '-460px'
    });
	
	$('.contact-side-form').animate({
		right:'-38px'
	});
});


function doOpen() {

    $(this).addClass("hover");
    $('ul:first', this).css('visibility', 'visible');
}

function doClose() {
    $(this).removeClass("hover");
    $('ul:first', this).css('visibility', 'hidden');
}

function bindMenu() {

    $('.medium-menu a, .small-menu a').click(function() {
        if ($(this).hasClass("closed")) {
            //open it
            openMenu();
        } else {
            closeMenu();
        }


    });

}

function closeMenu() {

    $('.medium-menu a, .small-menu a').addClass('closed');
    $('.medium-menu a, .small-menu a, .purple-bg').removeClass('open');
    $('ul.navigation').hide();
}

function openMenu() {

    $('.medium-menu a, .small-menu a').removeClass('closed');
    $('.medium-menu a, .small-menu a, .purple-bg').addClass('open');
    $('ul.navigation').show();

}
// Search
function bindSearch() {

    $('.search').click(function() {
        if ($(this).hasClass("closed")) {
            $(this).addClass('open');
            $(this).removeClass('closed');
            $('.search-box').show();
        } else {
            $(this).addClass('closed');
            $(this).removeClass('open');
            $('.search-box').hide();
        }


    });


}
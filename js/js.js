jQuery(document).ready(function($) {
    var prevPos = 0;
    var curPos = window.pageYOffset;
    var showToTop = -1;
    window.onscroll = function() {
        curPos = window.pageYOffset;

        var menu = $('.head-menu');
        if (prevPos < curPos) {
            menu.addClass('fixed-top');
        } else if (curPos == 0) {
            menu.removeClass('fixed-top');
        }
        if (curPos > 600) {
            //open
            $('.to-top').css({
                display: 'flex'
            });
        } else {

            //close
            $('.to-top').css({
                display: 'none'
            });

        }
        $('.odometer').each(function(index, el) {
            var odoValue = $(this).attr('data-value');
            $(this).html(odoValue);
        });
        // var oo = $('#odometer--1');
        // var o2 = $('#odometer--2');

        // 	var e1l = document.querySelector('.odometer--2');
        // 	setTimeout(function(){
        // 		console.log("asd");
        //     $('.odometer--2').html('1234');
        //     }, 0);

        // 	var el = document.querySelector('.odometer');
        // 		od = new Odometer({
        // 	  el: el,
        // 	  theme: 'digital'
        // 	});

        // 	//od.update(555);
        // 	var el_val = el.attr('data-value');
        // 	el.innerHTML = el_val;
    };

    var subMenuIsOpen = -1; //isClose
    var aniIn = 'bounceIn';
    var aniOut = 'bounceOut';
    var delayTime = 1000;
    $('.menu--btn').click(function(event) {
        var subMenu = $('.sub-menu--header');
        if (subMenuIsOpen == -1) {
            //isOpen
            var headMenuHeight = $('.head-menu').innerHeight();
            if (curPos == 0) {
                subMenu.css({
                    'margin-top': '80px'
                });
            }
            $(this).addClass('open');
            subMenu.css({
                height: 'calc(100vh - ' + headMenuHeight + 'px)',
                'margin-top': headMenuHeight+'px'
            }).addClass('d-block').removeClass(aniOut).addClass(aniIn).delay(delayTime).queue(function(next) {
                subMenuIsOpen = 0;
                next();
            });
        } else {
            //isClose

            $(this).removeClass('open');

            subMenu.removeClass(aniIn).addClass(aniOut).delay(delayTime).queue(function(next) {
                subMenuIsOpen = -1;
                subMenu.removeClass('d-block')
                next();
            });
        }
    });

    var menuItem = $('.menu-item__text');
    menuItem.click(function(event) {
    	var _w = $(window).width();
        if (_w > 768) {
            return false;
        }
        else if(_w <= 768 && _w > 600)
        {
        	$('.menu-item').removeClass('active');
	        $(this).parent().addClass('active');
        }
        else if(_w < 600){

        	$(this).parents('.menu-list').removeClass('active');
        	$('.menu-list-area').addClass('active').append( '<a class="btn--back"><i class="fa fa-angle-left" aria-hidden="true"></i></a>');
        }
        var clickItem = $(this).attr('href');

	        if ($(clickItem).hasClass('show')) {
	            return false;
	        } else {
	            $('.menu-item').removeClass('show');
	        }
    });

    

    $('.sliding').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    });

    $('.slide--logo').slick({
        slidesToShow: 6,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [{
                breakpoint: 1025,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('.to-top').click(function(event) {
        /* Act on the event */
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 1000, 'swing');
    });

});

$('.menu-list-area').on('click',".btn--back",function(event) {
    	$('.menu-list').addClass('active');
    	$('.menu-list-area').removeClass('active');

    });	
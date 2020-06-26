jQuery(document).ready(function($) {
	var prevPos = 0;
	var curPos = window.pageYOffset;
	var showToTop = -1;
	window.onscroll = function(){
		curPos = window.pageYOffset;

		var menu = $('.head-menu');
		if(prevPos < curPos)
		{
			menu.addClass('fixed-top');
		}
		else if(curPos == 0){
			menu.removeClass('fixed-top');
		}
		if(curPos > 600){
			//open
			$('.to-top').css({
				display: 'block'
			});
		}
		else{

			//close
			$('.to-top').css({
				display: 'none'
			});
			
		}
	};

	var subMenuIsOpen = -1;//isClose
	var aniIn = 'bounceIn';
	var aniOut = 'bounceOut';
	var delayTime = 1000;
	$('.menu--btn').click(function(event) {
		var subMenu = $('.sub-menu--header');
		if(subMenuIsOpen == -1){
			//isOpen
			
			var headMenuHeight = $('.head-menu').innerHeight();
			if($(window).width() > 768 && curPos == 0){
				subMenu.css({
					'margin-top': '5rem'
				});
			}
			$(this).addClass('open');
			subMenu.css({
				height: 'calc(100vh - '+headMenuHeight+'px)'
			}).addClass('d-block').removeClass(aniOut).addClass(aniIn).delay(delayTime).queue(function(next){
				subMenuIsOpen = 0;
				next();
			});
		}
		else{
			//isClose
			if($(window).width() > 768 && curPos == 0){
				subMenu.css({
					'margin-top': '4rem'
				});
			}
			$(this).removeClass('open');
			
			subMenu.removeClass(aniIn).addClass(aniOut).delay(delayTime).queue(function(next){
				subMenuIsOpen = -1;
				subMenu.removeClass('d-block')
				next();
			});
			
		}

	});

	var menuItem = $('.menu-item__text');
	menuItem.click(function(event) {
		if($(window).width() > 768){
			return false;
		}
		$('.menu-item').removeClass('active');
		$(this).parent().addClass('active');

		var clickItem = $(this).attr('href');
		
		if($(clickItem).hasClass('show')){
			return false;
		}
		else{
			$('.menu-item').removeClass('show');
		}
	});

	var _index = 1;
	var slideItem = $('.slide--item');
	var _slideRecall;
	
	var buttonLeft = $('.slide--btn-left');
	var buttonRight = $('.slide--btn-right');


  	$('.sliding').slick({
  		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
	});
	var _logoSlideItemCount = 5;
	if($(window).width()<764) {
		_logoSlideItemCount = 2;
	}
  	$('.slide--logo').slick({
		//slidesToShow: 
		slidesToShow: _logoSlideItemCount,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
	});
	// recallSlide(_index);
	// function recallSlide(ind) {
	// 	if(ind > slideItem.length){
	// 		_index = 1;
	// 	}
	// 	if(ind < slideItem.length){
	// 		_index = slideItem.length;
	// 	}
	//     // for (var i = 1; i <= slideItem.length; i++) { 
	//     //     if($('.slide--item:nth-child('+i+')').hasClass('active'))
	//     //     	{
	//     //     		$('.slide--item:nth-child('+i+')').addClass('slideOutLeft').delay(delayTime*.5).queue(function(next){
	// 				// 	$(this).removeClass('active').removeClass('slideOutLeft');
	// 				// 	var _i = ++_index;
	//     //     			if(_i > slideItem.length)
	//     //     			{
	//     //     				_index = 1;
	//     //     				_i = 1;
	//     //     			}
	// 	   //      		if(_i <= slideItem.length){
	// 	   //      			$('.slide--item:nth-child('+_index+')').addClass('active').addClass('slideInRight').delay(delayTime).queue(function(next){
	// 	   //      				$(this).removeClass('slideInRight');
	// 	   //      				next();
	// 	   //      			});
	// 	   //      		}
	// 	   //      			next();
	// 	   //      	});
	//     //     	break;
	//     //     }
	//     // }

	//     for(var i = 1; i <= slideItem.length; i++)
	//     {	
	//     	if(i == _index){
	//     		$('.slide--item:nth-child('+i+')').addClass('slideOutLeft').delay(delayTime*.5).queue(function(next){
	// 					$(this).removeClass('active').removeClass('slideOutLeft');
	// 					var _i = ++_index;
	//         			if(_i > slideItem.length)
	//         			{
	//         				_index = 1;
	//         				_i = 1;
	//         			}
	// 	        		if(_i <= slideItem.length){
	// 	        			$('.slide--item:nth-child('+_index+')').addClass('active').addClass('slideInRight').delay(delayTime).queue(function(next){
	// 	        				$(this).removeClass('slideInRight');
	// 	        				next();
	// 	        			});
	// 	        		}
	// 	        		next();
	// 	        	});
	//         	break;
	//     	}

	//     }
	//     slideRecall = setTimeout(recallSlide, 4000);
	// }
});

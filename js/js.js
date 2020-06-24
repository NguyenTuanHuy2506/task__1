jQuery(document).ready(function($) {
	var prevPos = 0;

	window.onscroll = function(){
		var curPos = window.pageYOffset;
		var menu = $('.head-menu');
		if(prevPos < curPos)
		{
			menu.addClass('fixed-top');
		}
		else if(curPos == 0){
			menu.removeClass('fixed-top');
		}
	};

	var subMenuIsOpen = -1;//isClose
	var aniIn = 'bounceIn';
	var aniOut = 'bounceOut';
	var delayTime = 1000;
	$('.menu--btn').click(function(event) {
		var subMenu = $('.sub-menu--header');
		console.log(subMenu);
		if(subMenuIsOpen == -1){
			//isOpen
			
			$(this).addClass('open');
			subMenu.addClass('d-block').removeClass(aniOut).addClass(aniIn).delay(delayTime).queue(function(next){
				subMenuIsOpen = 0;
				next();
			});
		}
		else{
			//isClose
			$(this).removeClass('open');
			
			subMenu.removeClass(aniIn).addClass(aniOut).delay(delayTime).queue(function(next){
				subMenuIsOpen = -1;
				subMenu.removeClass('d-block')
				next();
			});
			
		}

	});
});

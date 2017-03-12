$(function(){
	$('.lis').on('click',function(){
		var i = $(this).index();
		$('body').toggleClass('scroll');
		$('.lis').removeClass('active');
		$(this).addClass('active');
		$('.liss').removeClass('active').eq(i).addClass('active');
	});
	$('.h-list').on('click',function(){
		$('.zz').addClass('move').removeClass('moves');
	})
	$('.dian').on('click',function(){
		$('.zz').removeClass('move').addClass('moves');
	})
	$(window).scroll(function(){
		var sh=$(this).scrollTop()
		if(sh>524){
			$('.header').css({"background":"#f32d2d"})
		}
		if(sh<524){
			$('.header').css({"background":"linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0))"})
		}
	})
	})
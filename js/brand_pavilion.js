var mySwiper = new Swiper('.swiper-container', {
	// direction: 'horizontal', // 垂直切换选项
	//渐变
	spaceBetween: 30,
	effect: 'fade',
	loop: true, // 循环模式选项
	autoplay: true, //自动切换
	// 如果需要分页器
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},

	// 如果需要前进后退按钮
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
})
$('.moods_bottom span').click(function() {
	$('.none').css('display', 'block');
	$(this).css('display', 'none');
});
//header
var x = 0;

function move() {
	if (x > -900) {
		x--;
	} else {
		x = 400;
	}

	var move = x + 'px'
	// console.log(move)
	$('.move').css("left", move);
}
setInterval(move, 15)

// footer
$('.footer_b_middle span').click(function() {
	var flag = $('.footer_b_middle2').css('display')
	if (flag == 'none') {
		$('.footer_b_middle2').stop(true).fadeIn()
	} else {
		$('.footer_b_middle2').stop(true).fadeOut()
	}

})

$('.white_bottom span').click(function() {
	var flag = $('.white_bottom p').css('display')
	if (flag == 'none') {
		$('.white_bottom p').stop(true).fadeIn()
	} else {
		$('.white_bottom p').stop(true).fadeOut()
	}

})

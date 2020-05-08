//列表隐藏
$('#nav').mouseenter(function() {
	$('.list_nav ul').stop(true).slideDown();
})

$('#nav').mouseleave(function() {
	$('.list_nav ul').stop(true).slideUp();
})

// 小轮播图切换
$('.swiper2_box .txt1').click(function() {
	$(this).css({
		'color': '#666',
		'font-weight': '700'
	})
	$(this).siblings('div').css({
		'color': '#999',
		'font-weight': '500'
	})
	$('#swiper2_01 img').css('display', 'block');
	$('#swiper2_02 img').css('display', 'none');
	$('#swiper2_02').css('height', '0');
	$('#swiper2_01').css('height', '276px');
})

$('.swiper2_box .txt2').click(function() {
	$(this).css({
		'color': '#666',
		'font-weight': '700'
	})
	$(this).siblings('div').css({
		'color': '#999',
		'font-weight': '500'
	})
	$('#swiper2_02 img').css('display', 'block');
	$('#swiper2_01 img').css('display', 'none');
	$('#swiper2_01').css('height', '0');
	$('#swiper2_02').css('height', '276px');
})

//点击变色
$('.sort li').click(function() {
	$(this).css({
		'color': '#cc9952',
		'border-bottom': '3px solid #cc9952'
	})
	$(this).siblings('li').css({
		'color': '#898989',
		'border-bottom': 'none'
	})
})

// 固定定位
$(window).scroll(function() {
	//获取scroll
	var scrollTop = $(this).scrollTop();
	// console.log(scrollTop)
	if (scrollTop > 707) {
		$('.sort .nav').css({
			'position': 'fixed',
			'left':'50%',
			'margin-left': '-370px'
		})
	} else {
		$('.sort .nav').css({
			'position': 'absolute',
			'left':'0',
			'margin-left': '0px'
		});
	}
})

// 按价格排序
$("#sort_price").click(function() {
	var arr = [];
	$('.watch_box').each(function() {
		arr.push($(this));
	})
	// 数组排序
	arr.sort(function(a, b) {
		var a = parseInt($(a).find('strong').text().trim().slice(1));
		var b = parseInt($(b).find('strong').text().trim().slice(1));

		return a - b;
	});
	// console.log(arr)
	$('#sort_box').empty();
	for (let i = 0; i < arr.length; i++) {
		$('#sort_box').append(arr[i])

	}
})

//按销量排序
$("#sort_sales").click(function() {
	var arr = [];
	$('.watch_box').each(function() {
		arr.push($(this));
	})
	// 数组排序
	arr.sort(function(a, b) {
		var a = parseInt($(a).find('#sales').text().trim().slice(2));
		var b = parseInt($(b).find('#sales').text().trim().slice(2));
		return b - a;
	});
	// console.log(arr)
	$('#sort_box').empty();
	for (let i = 0; i < arr.length; i++) {
		$('#sort_box').append(arr[i])

	}
})

// 侧边栏
$('.oside_lf_one').click(function() {
	$('.ofixed').animate({
		right: '0px',
	});
})
$('.oside_del img').click(function() {
	$('.ofixed').animate({
		right: '-302px',
	});
})
$('.oside_lf_fave').click(function() {
	$('html,body').animate({
		scrollTop: 0
	});
});

// 更多选项
$('.search .more').click(function() {
	var flag = $('#more_dl').css('display');
	if (flag == 'none') {
		$('#more_dl').css('display', 'block');
	} else {
		$('#more_dl').css('display', 'none');
	}
})

// 多选颜色
$('.search dl span').click(function() {
	var color = $(this).css('background-color')

	if (color == 'rgb(204, 82, 82)') {
		$(this).css({
			'background-color': '#f0f0f0',
			'color': '#666'
		});
	} else {
		$(this).css({
			'background-color': '#cc5252',
			'color': 'white'
		});
	}
})

//单选功能
$('.search dl li').click(function() {
	var color = $(this).css('color')
	var Checkcolor = $(this).siblings('span').css('color')
	console.log(Checkcolor)
	console.log(color)
	if (Checkcolor == 'rgb(255, 255, 255)') {
		if (color == 'rgb(255, 255, 255)') {
			$(this).css({
				'background-color': 'white',
				'color': '#898989'
			});
		} else {
			$(this).css({
				'background-color': '#cc9952',
				'color': 'white'
			})
		}
	} else {
		$(this).css({
			'background-color': '#cc9952',
			'color': 'white'
		});
		$(this).siblings('li').css({
			'background-color': 'white',
			'color': '#898989'
		});
	}
})

// 更多选项
$('.search dl i').click(function () {
	$(this).siblings('.hidden').css('display','block')
	$(this).css('display','none')
})

// 在搜索框搜索'阿玛尼',出来商品列表
$('.search').click(function() {
	var search = $('.input').val();
	if (search == '阿玛尼') {
		$('.lead_search a').attr({
			href: 'Product.html'
		});
	}

});
// title字体lunbo
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

// fixed定位
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
// 轮播图
var bannerSwiper = new Swiper('.banner .swiper-container', {
	//渐变
	spaceBetween: 30,
	effect: 'fade',
	// direction: 'horizontal', // 垂直切换选项
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
//抢购区第一轮播图
var saleone_Swiper = new Swiper('.sale_swiper_one .swiper-container', {
	// direction: 'horizontal', // 垂直切换选项
	loop: true, // 循环模式选项
	autoplay: true, //自动切换
	// 如果需要前进后退按钮
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
})
//抢购区第二轮播图
var saletwo_Swiper = new Swiper('.sale_swiper_two .swiper-container', {
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
})
//本月爆款--轮播图
var hotSwiper = new Swiper('.Hot_swpier .swiper-container', {
	// direction: 'horizontal', // 垂直切换选项
	loop: true, // 循环模式选项

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
// 二手拍卖商品--轮播图
var auction_Swiper = new Swiper('.auction_swiper .swiper-container', {
	// direction: 'horizontal', // 垂直切换选项
	// loop: true, // 循环模式选项
	autoplay: true, //自动切换
	// 如果需要前进后退按钮
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
})
// 时尚腕表--轮播图
var fashionSwiper = new Swiper('.fashion_swpier .swiper-container', {
	// direction: 'horizontal', // 垂直切换选项
	loop: true, // 循环模式选项

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
// 排行榜--轮播图
var rankSwiper = new Swiper('.rank_swiper .swiper-container', {
	// direction: 'horizontal', // 垂直切换选项
	loop: true, // 循环模式选项
	// 如果需要前进后退按钮
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
})
//品牌馆--第一轮播图
var brand_swiper_oneSwiper = new Swiper('.brand_swiper_one .swiper-container', {
	// direction: 'horizontal', // 垂直切换选项
	loop: true, // 循环模式选项
	// 如果需要前进后退按钮
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
})
//品牌馆--第二轮播图
var brand_swiper_twoSwiper = new Swiper('.brand_swiper_two .swiper-container', {
	// direction: 'horizontal', // 垂直切换选项
	loop: true, // 循环模式选项
	autoplay: true,

})


//
function djs() {
	// sale 限时抢购倒计时
	var oSale = document.querySelector('.sale_time');
	//倒计时写法
	var future = new Date(2020, 2, 1, 17, 30);
	var past = new Date(1840, 0, 1);
	var now = new Date();
	//date对象之差
	var time = future - now;
	//秒
	var sec = parseInt(time / 1000 % 60);
	//分钟
	var min = parseInt(time / (1000 * 60) % 60);
	//小时
	var hour = parseInt(time / (1000 * 60 * 60) % 24);
	//天
	var day = parseInt(time / (1000 * 60 * 60 * 24));
	var str = '<span>距离本期结束</span>' + fix(day) + '<span>天</span>' + fix(hour) + '<span>时</span>' + fix(min) +
		'<span>分</span>' + fix(sec) + '<span>秒</span>';
	oSale.innerHTML = str;
}
setInterval(djs, 1);
//函数 修正10以内数字  10以内的
function fix(x) {
	if (x < 10) {
		return '0' + x;
	} else {
		return x;
	}
}
//<!-- 二手拍卖商品倒计时time1 -->
function time1() {
	var oAuctionTime1 = document.querySelector('.auction_time1');
	//倒计时写法   维护时在future里面调取时间
	var future = new Date(2020, 2, 13, 17, 50);
	var past = new Date(1840, 0, 1);
	var now = new Date();
	//date对象之差
	var time = future - now;
	//秒
	var sec = parseInt(time / 1000 % 60);
	//分钟
	var min = parseInt(time / (1000 * 60) % 60);
	//小时
	var hour = parseInt(time / (1000 * 60 * 60) % 24);
	//天
	var day = parseInt(time / (1000 * 60 * 60 * 24));
	var str = fix(hour) + '<span>:</span>' + fix(min) + '<span>:</span>' + fix(sec);
	oAuctionTime1.innerHTML = str;
}
setInterval(time1, 1);

function time2() {
	var oAuctionTime2 = document.querySelector('.time2');
	//倒计时写法
	var future = new Date(2020, 2, 24, 17, 10);
	var past = new Date(1840, 0, 1);
	var now = new Date();
	//date对象之差
	var time = future - now;
	//秒
	var sec = parseInt(time / 1000 % 60);
	//分钟
	var min = parseInt(time / (1000 * 60) % 60);
	//小时
	var hour = parseInt(time / (1000 * 60 * 60) % 24);
	//天
	var day = parseInt(time / (1000 * 60 * 60 * 24));
	var str = fix(hour) + '<span>:</span>' + fix(min) + '<span>:</span>' + fix(sec);
	oAuctionTime2.innerHTML = str;
}
setInterval(time2, 1);

function time3() {
	var oAuctionTime3 = document.querySelector('.time3');
	//倒计时写法
	var future = new Date(2020, 4, 15, 17, 00);
	var past = new Date(1840, 0, 1);
	var now = new Date();
	//date对象之差
	var time = future - now;
	//秒
	var sec = parseInt(time / 1000 % 60);
	//分钟
	var min = parseInt(time / (1000 * 60) % 60);
	//小时
	var hour = parseInt(time / (1000 * 60 * 60) % 24);
	//天
	var day = parseInt(time / (1000 * 60 * 60 * 24));
	var str = fix(hour) + '<span>:</span>' + fix(min) + '<span>:</span>' + fix(sec);
	oAuctionTime3.innerHTML = str;
}
setInterval(time3, 1);

function time4() {
	var oAuctionTime4 = document.querySelector('.time4');
	//倒计时写法
	var future = new Date(2020, 2, 19, 17, 50);
	var past = new Date(1840, 0, 1);
	var now = new Date();
	//date对象之差
	var time = future - now;
	//秒
	var sec = parseInt(time / 1000 % 60);
	//分钟
	var min = parseInt(time / (1000 * 60) % 60);
	//小时
	var hour = parseInt(time / (1000 * 60 * 60) % 24);
	//天
	var day = parseInt(time / (1000 * 60 * 60 * 24));
	var str = fix(hour) + '<span>:</span>' + fix(min) + '<span>:</span>' + fix(sec);
	oAuctionTime4.innerHTML = str;
}
setInterval(time4, 1);

function time5() {
	var oAuctionTime5 = document.querySelector('.time5');
	//倒计时写法
	var future = new Date(2020, 2, 12, 17, 50);
	var past = new Date(1840, 0, 1);
	var now = new Date();
	//date对象之差
	var time = future - now;
	//秒
	var sec = parseInt(time / 1000 % 60);
	//分钟
	var min = parseInt(time / (1000 * 60) % 60);
	//小时
	var hour = parseInt(time / (1000 * 60 * 60) % 24);
	//天
	var day = parseInt(time / (1000 * 60 * 60 * 24));
	var str = fix(hour) + '<span>:</span>' + fix(min) + '<span>:</span>' + fix(sec);
	oAuctionTime5.innerHTML = str;
}
setInterval(time5, 1);

function time6() {
	var oAuctionTime6 = document.querySelector('.time6');
	//倒计时写法
	var future = new Date(2020, 2, 1, 27, 50);
	var past = new Date(1840, 0, 1);
	var now = new Date();
	//date对象之差
	var time = future - now;
	//秒
	var sec = parseInt(time / 1000 % 60);
	//分钟
	var min = parseInt(time / (1000 * 60) % 60);
	//小时
	var hour = parseInt(time / (1000 * 60 * 60) % 24);
	//天
	var day = parseInt(time / (1000 * 60 * 60 * 24));
	var str = fix(hour) + '<span>:</span>' + fix(min) + '<span>:</span>' + fix(sec);
	oAuctionTime6.innerHTML = str;
}
setInterval(time6, 1);

function time7() {
	var oAuctionTime7 = document.querySelector('.time7');
	//倒计时写法
	var future = new Date(2020, 2, 15, 17, 50);
	var past = new Date(1840, 0, 1);
	var now = new Date();
	//date对象之差
	var time = future - now;
	//秒
	var sec = parseInt(time / 1000 % 60);
	//分钟
	var min = parseInt(time / (1000 * 60) % 60);
	//小时
	var hour = parseInt(time / (1000 * 60 * 60) % 24);
	//天
	var day = parseInt(time / (1000 * 60 * 60 * 24));
	var str = fix(hour) + '<span>:</span>' + fix(min) + '<span>:</span>' + fix(sec);
	oAuctionTime7.innerHTML = str;
}
setInterval(time7, 1);

function time8() {
	var oAuctionTime8 = document.querySelector('.time8');
	//倒计时写法
	var future = new Date(2020, 2, 19, 17, 50);
	var past = new Date(1840, 0, 1);
	var now = new Date();
	//date对象之差
	var time = future - now;
	//秒
	var sec = parseInt(time / 1000 % 60);
	//分钟
	var min = parseInt(time / (1000 * 60) % 60);
	//小时
	var hour = parseInt(time / (1000 * 60 * 60) % 24);
	//天
	var day = parseInt(time / (1000 * 60 * 60 * 24));
	var str = fix(hour) + '<span>:</span>' + fix(min) + '<span>:</span>' + fix(sec);
	oAuctionTime8.innerHTML = str;
}
setInterval(time8, 1);

// 选样式
$('.design').click(function() {
	$(this).siblings('.design').css('border', '1px solid #ddd');
	$(this).siblings('.design').css('padding', '4px 10px 4px 16px');
	$(this).css('border', '2px solid #666');
	$(this).css('padding', '3px 9px 3px 15px');
	$('.design').removeClass('on')
	$(this).addClass('on')
})
//数量
$('.buy_box .left').click(function() {
	var num = $('.buy_box .number').text().trim();
	if (num > 1) {
		num--;
	} else {
		num = 1;
	}
	$('.buy_box .number').text(num);
})

$('.buy_box .right').click(function() {
	var num = $('.buy_box .number').text().trim();
	if (num < 9) {
		num++;
	} else {
		num = 9;
		layer.msg('库存不足')
	}
	$('.buy_box .number').text(num);
})

$('.buy_box .number').focus(function() {
	$(this).text().trim();
})

$('.buy_box .number').blur(function() {
	var num = $('.buy_box .number').text().trim();
	if (num > 9) {
		layer.msg('库存不足')
		$('.buy_box .number').text('9');
	}
	if (num > 1 && num < 9) {
		$('.buy_box .number').text(num);
	} else {
		$('.buy_box .number').text(1);
	}
})

$('#cart').click(function() {
	layer.msg('成功加入购物车')
})

//店内搜索价格区间
$('.left_box .price input').on('focus', function() {
	$(this).text().trim();
})
//价格区间筛选文字??
$('.left_box .price input').on('blur', function() {
	var num = $(this).text();
	if (isNaN(num)) {
		$(this).text('');
	}
})
//列表颜色样式
$('.product_related li').click(function() {
	$(this).css({
		'border-bottom': '3px solid #333',
		color: '#333',
		'font-weight': '700'
	});
	$(this).siblings('li').css({
		'border-bottom': 'none',
		color: '#666',
		'font-weight': '500'
	});
})

//列表切换
$('.product_related li').click(function() {
	var x = $(this).index() + 1
	$('.right #box_' + x).css('display', 'block');
	$('.right #box_' + x).siblings('.box').css('display', 'none');
	$(window).scrollTop(1170)
})

//菜单置顶
$(window).scroll(function() {
	//获取scroll
	var scrollTop = $(this).scrollTop();
	// console.log(scrollTop)
	if (scrollTop > 1170) {
		$('.product_related .nav .fr').css('display', 'block');
		$('.product_related .nav').css({
			'position': 'fixed',
			'left': '50%',
			'marginLeft':'-370px'
		})
	} else {
		$('.product_related .nav .fr').css('display', 'none');
		$('.product_related .nav').css({
			'position': 'absolute',
			'left': '0px',
			'marginLeft':'0'
		});
	}
})
// cookie
var oCartBtn = document.querySelector("#cart");
var cart = getCookie("cart");
if (cart) {
	cart = JSON.parse(cart);
} else {
	cart = [];
}

oCartBtn.onclick = function() {
	var img = $(document).find('.Img').attr('src');
	var name = $('.title').text();
	var design = $(document).find('.design.on').find('span').text();
	var Money = $(document).find('.time .money').find('em').text();
	var number = $('.number').text()
	// console.log(price, name)
	for (var i = 0; i < cart.length; i++) {
		if (cart[i].name == name) {
			number -= 0;
			cart[i].number -= 0;
			cart[i].number += number;
			document.cookie = "cart=" + JSON.stringify(cart);
			return;
		}
	}
	var goods = {
		img: img,
		name: name,
		design: design,
		Money: Money,
		number: number,
	}
	cart.push(goods);
	document.cookie = "cart=" + JSON.stringify(cart);
}

function getCookie(cname) {
	var name = cname + "=";
	var ca = document.cookie.split(";");
	for (var i = 0; i < ca.length; i++) {
		var c = ca[i].trim();
		var arrC = c.split("=");
		if (arrC[0] == cname) {
			return arrC[1];
		}
	}
	return "";
}

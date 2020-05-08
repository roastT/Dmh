// 留言框
$('textarea').on('input', function() {
	//获取value
	var txt = $(this).val();
	//还剩多少个字要输入
	var rest = txt.length;
	if (rest <= 200) {
		$('small').text(rest + '/200')
		$('small').css("color", '#898989')
	} else {
		$('small').text('200/200')
		$('small').css("color", 'red')
	}

})

// 添加正则表达式
var reg = /^[1]([3-9])[0-9]{9}$/;
// 添加弹框内容
$(document).on("click", ".Newly_added", function() {
	layer.open({
		type: 1,
		title: '添加收货地址',
		area: ['782px', '513px'],
		content: '<div class = "Consignee"><div>(收货人)</div><input class="consignee_input input" type="text" placeholder="必填"></div><div class = "Consignee"><div>(手机号)</div><input class="Cell_phone_number_input input" type="text" placeholder="必填"></div><div class = "Consignee"><div>(所在地区)</div><div class="list"><select class="form-control" id="province2" data-province="---- 选择省 ----"></select><select class="form-control" id="city2" data-city="---- 选择市 ----"></select><select class="form-control" id="district2" data-district="---- 选择区 ----"></select></div></div><div class = "Consignee"><div>(详细地址)</div><input class="address_input input" type="text" placeholder="街道门牌"></div>',
		btn: ['取消', '保存并使用'],
		btn2: function() {
			var consignee_input = $('.consignee_input').val().trim();
			var Cell_phone_number_input = $('.Cell_phone_number_input').val().trim();
			var province2 = $('#province2').val();
			var city2 = $('#city2').val();
			var district2 = $('#district2').val();
			var address_input = $('.address_input').val().trim();
			if (!consignee_input || !Cell_phone_number_input || !province2 || !city2 || !district2 || !address_input) {
				layer.alert("所有选项均不能为空!");
				return false; //保持页面不跳转
			}
			var isValid = reg.test(Cell_phone_number_input);
			if (!isValid) {
				layer.alert('手机号码格式不正确!');
				return false;
			}
			var $li = $('<li class="Existing_address"><div class="consignee_text">' + consignee_input +
				'</div><div class="Cell_phone_number_text">' + Cell_phone_number_input +
				'</div><div class="clear"></div><br><div class="addr"><span>' + province2 +
				'</span>><span>' + city2 + '</span>><span>' + district2 + '</span></div><div class="address_text">' +
				address_input +'</div><div class="operation"><span class="edit">编辑</span><span class="del">删除</span></div></div>')
			$('.Already_existing').append($li)

		}
	});
	$('.list').distpicker();
})

// 修改弹窗内容
$(document).on('click', '.edit', function() {
	var consignee_text = $('.consignee_text').text();
	var Cell_phone_number_text = $('.Cell_phone_number_text').text();
	var province2_text = $('.province2_text').text();
	var city2_text = $('.city2_text').text();
	var district2_text = $('.district2_text').text();
	var address_text = $('.address_text').text();
	layer.open({
		type: 1,
		title: '添加收货地址',
		area: ['782px', '513px'],
		content: '<div class = "Consignee"><div>(收货人)</div><input class="consignee_input input" type="text" placeholder="必填" value="' +
			consignee_text +
			'"></div><div class = "Consignee"><div>(手机号)</div><input class="Cell_phone_number_input input" type="text" placeholder="必填" value="' +
			Cell_phone_number_text +
			'"></div><div class = "Consignee"><div>(所在地区)</div><div class="list"><select class="form-control" id="province2" data-province="---- 选择省 ----" value="' +
			province2_text + '"></select><select class="form-control" id="city2" data-city="---- 选择市 ----" value="' +
			city2_text + '"></select><select class="form-control" id="district2" data-district="---- 选择区 ----" value="' +
			district2_text +
			'"></select></div></div><div class = "Consignee"><div>(详细地址)</div><input class="address_input input" type="text" placeholder="街道门牌" value="' +
			address_text + '"></div>',
		btn: ['取消', '保存并使用'],
		btn2: function() {
			var consignee_input = $('.consignee_input').val();
			var Cell_phone_number_input = $('.Cell_phone_number_input').val();
			var province2 = $('#province2').val();
			var city2 = $('#city2').val();
			var district2 = $('#district2').val();
			var address_input = $('.address_input').val();
			consignee_input = consignee_input.trim();
			Cell_phone_number_input = Cell_phone_number_input.trim();
			address_input = address_input.trim();
			if (consignee_input == "" || Cell_phone_number_input == "" || address_input == "") {
				layer.alert("收货信息不完善，请完善收货信息！")
				return false;
			}
			var isValid = reg.test(Cell_phone_number_input);
			if (!isValid) {
				layer.alert('手机号码格式不正确!');
				return false;
			}
			var $div = $('<div class="consignee_text">' + consignee_input +
				'</div><div class="Cell_phone_number_text">' + Cell_phone_number_input +
				'</div><div><span class="province2_text">' + province2 +
				'</span>><span class="city2_text">' + city2 + '</span>><span class="district2_text">' + district2 +
				'</span></div><div class="address_text">' +
				address_input + '</div><div class="operation"><span class="edit">编辑</span><span class="del">删除</span></div>')
			// $('.Already_existing').$(this).parents('.Existing_address').html($div)
			$('.Existing_address').html($div)
		}
	});
	$('.list').distpicker();
})
// 删除地址
$(document).on('click', '.del', function() {
	console.log($(this).parents('.Existing_address'))
	$(this).parents('.Existing_address').remove()
})

// 数量加减
$('.counter .left').click(function() {
	var num = $(this).siblings('.number').text().trim();
	var unitprice = $(this).parent().siblings('.unit_price').text().trim().slice(1);
	var amount = $(this).parent().siblings('.amount').text().slice(1);
	var shopnum = $(this).parents('.main').siblings('.name').find('#num').text();
	var totalnum = $('#total').text();
	var all = $('#all').text().slice(1);
	var totalprice = $('#total_price').text().slice(1);
	if (num > 1) {
		num--;
		amount = amount -unitprice;
		shopnum--;
		totalnum--;
		all = parseFloat(all) - parseFloat(unitprice);
		totalprice = parseFloat(totalprice) - parseFloat(unitprice);
	} else {
		num = 1;
	}
	$(this).siblings('.number').text(num);
	$(this).parent().siblings('.amount').text('羊' + amount);
	$(this).parents('.main').siblings('.name').find('#num').text(shopnum);
	$('#total').text(totalnum);
	$('#all').text('羊' + all);
	$('#total_price').text('羊' + totalprice);
})

$('.counter .right').click(function() {
	var num = $(this).siblings('.number').text().trim();
	var unitprice = $(this).parent().siblings('.unit_price').text().trim().slice(1);
	var amount = $(this).parent().siblings('.amount').text().trim().slice(1);
	var shopnum = $(this).parents('.main').siblings('.name').find('#num').text()
	var totalnum = $('#total').text();
	var all = $('#all').text().slice(1);
	var totalprice = $('#total_price').text().slice(1);
	if (num < 9) {
		num++;
		amount = parseFloat(amount) + parseFloat(unitprice);
		shopnum++;
		totalnum++;
		all = parseFloat(all) + parseFloat(unitprice);
		totalprice = parseFloat(totalprice) + parseFloat(unitprice);
	} else {
		num = 9;
		layer.msg('库存不足')
	}
	$(this).siblings('.number').text(num);
	$(this).parent().siblings('.amount').text('羊' + amount);
	$(this).parents('.main').siblings('.name').find('#num').text(shopnum)
	$('#total').text(totalnum);
	$('#all').text('羊' + all)
	$('#total_price').text('羊' + totalprice);
})

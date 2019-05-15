
$('#getVersion3000Release').on('click', function(){
	var param = {v: '2.20', pid: 2};
	try {
		$.ajaxSetup({
			error: function (x, e) {
				$('#updateinfo3000').find('tbody').find('th').html('<span class="fa fa-warning">暂无具体内容！</span>');
				return false;
			}
		});	
		
		$.getJSON('server/download/getversion/default.asp?jsoncallback=?', param, function(result){
			var list = result.list;
			if(list.length > 0){
				$('#updateinfo3000').find('tbody').find('tr').remove();
				for(var i in list){
					$('#updateinfo3000').find('tbody').append('<tr>'+
						'<th>' + list[i].version + '</th>'+
						'<th>' + unescape(list[i].title) + '</th>'+
						'<th>' + list[i].redate + '</th>'+
					'</tr>');
				}
			}
		});
	}catch(e){
		$('#updateinfo3000').find('tbody').find('th').html('<span class="fa fa-warning">暂无具体内容！</span>');
	}
});

$('#getVersion3000').on('click', function(){
	var param = {v: '2.29,2.28,2.27,2.26,2.25,2.24,2.23,2.22,2.21', pid: 2};
	try {
		$.ajaxSetup({
			error: function (x, e) {
				$('#updateinfo3000').find('tbody').find('th').html('<span class="fa fa-warning">暂无具体内容！</span>');
				return false;
			}
		});	
		
		$.getJSON('server/download/getversion/default.asp?jsoncallback=?', param, function(result){
			var list = result.list;
			if(list.length > 0){
				$('#updateinfo3000').find('tbody').find('tr').remove();
				for(var i in list){
					$('#updateinfo3000').find('tbody').append('<tr>'+
						'<th>' + list[i].version + '</th>'+
						'<th>' + unescape(list[i].title) + '</th>'+
						'<th>' + list[i].redate + '</th>'+
					'</tr>');
				}
			}
		});
	}catch(e){
		$('#updateinfo3000').find('tbody').find('th').html('<span class="fa fa-warning">暂无具体内容！</span>');
	}
});


$('#getVersion3000posRelease').on('click', function(){
	var param = {v: '1.3.6.4', pid: 2};
	try {
		$.ajaxSetup({
			error: function (x, e) {
				$('#updateinfo3000pos').find('tbody').find('th').html('<span class="fa fa-warning">暂无具体内容！</span>');
				return false;
			}
		});	

		$.getJSON('server/download/getversion/default.asp?jsoncallback=?', param, function(result){
			var list = result.list;
			if(list.length > 0){
				$('#updateinfo3000pos').find('tbody').find('tr').remove();
				for(var i in list){
					$('#updateinfo3000pos').find('tbody').append('<tr>'+
						'<th>' + list[i].version + '</th>'+
						'<th>' + unescape(list[i].title) + '</th>'+
						'<th>' + list[i].redate + '</th>'+
					'</tr>');
				}
			}
		});
	}catch(e){
		$('#updateinfo3000pos').find('tbody').find('th').html('<span class="fa fa-warning">暂无具体内容！</span>');
	}
})
$('#getVersion3000pos').on('click', function(){
	var param = {v: 'SE1.3.6.9,1.3.6.8,SE1.3.6.7,se1.3.6.6,1.3.6.5', pid: 2};
	try {
		$.ajaxSetup({
			error: function (x, e) {
				$('#updateinfo3000pos').find('tbody').find('th').html('<span class="fa fa-warning">暂无具体内容！</span>');
				return false;
			}
		});	

		$.getJSON('server/download/getversion/default.asp?jsoncallback=?', param, function(result){
			var list = result.list;
			if(list.length > 0){
				$('#updateinfo3000pos').find('tbody').find('tr').remove();
				for(var i in list){
					$('#updateinfo3000pos').find('tbody').append('<tr>'+
						'<th>' + list[i].version + '</th>'+
						'<th>' + unescape(list[i].title) + '</th>'+
						'<th>' + list[i].redate + '</th>'+
					'</tr>');
				}
			}
		});
	}catch(e){
		$('#updateinfo3000pos').find('tbody').find('th').html('<span class="fa fa-warning">暂无具体内容！</span>');
	}
})
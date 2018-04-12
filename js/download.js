$('#getVersion3000').on('click', function(){
	var param = {v: '2.24,2.23,2.22,2.21', pid: 2};
	$.getJSON('server/download/getversion/default.asp?jsoncallback=?', param, function(result){
		var list = result.list;
		if(list.length > 0){
			for(var i in list){
				$('#updateinfo3000').find('tbody').append('<tr>'+
					'<th>' + list[i].version + '</th>'+
					'<th>' + unescape(list[i].title) + '</th>'+
					'<th>' + list[i].redate + '</th>'+
				'</tr>');
			}
		}
	});
});

$('#getVersion3000pos').on('click', function(){
	var param = {v: 'SE1.3.6.9,1.3.6.8,SE1.3.6.7,se1.3.6.6,1.3.6.5,1.3.6.4', pid: 2};
	$.getJSON('server/download/getversion/default.asp?jsoncallback=?', param, function(result){
		var list = result.list;
		if(list.length > 0){
			for(var i in list){
				$('#updateinfo3000pos').find('tbody').append('<tr>'+
					'<th>' + list[i].version + '</th>'+
					'<th>' + unescape(list[i].title) + '</th>'+
					'<th>' + list[i].redate + '</th>'+
				'</tr>');
			}
		}
	});
})
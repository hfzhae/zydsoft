$('#get2000').on('click', function(){
	getSerial(19, this, 'e商2000');
})

$('#get3000').on('click', function(){
	getSerial(1, this, 'e商3000');
})

$('#getCount').on('click', function(){
	$.getJSON('server/applyserial/count.asp', function(result){
		console.log(result);
		var a = $('<span>' + result.msg + '</span>');
		$('#countvinfo').find('span').remove();
		$('#countvinfo').append(a);
	});
})

function getSerial(t, o, title, k){
	var btn = $(o),
		param = {type: t, key: k};
	$.getJSON('server/applyserial/default.asp', param, function(result){
		if(result){
			var serial, serialinfo, serialicon, serialcolor;
			if(result.result){
				localStorage.serial = title + ':' + result.serial + ',' + localStorage.serial;
				serialinfo = '<div style="margin:30px;">恭喜！<br><br>您获得了一个新的'+title+'序列号。请在注册时使用它。有任何问题请及时 <a target="_blank" href="contact.html">联系我们</a>。</div>'
				serialicon = 'fa-check';
				serialcolor = '#398439';
			}else{
				serialinfo = '<div style="margin:30px;">' + unescape(result.msg) + '有任何问题请及时 <a target="_blank" href="contact.html">联系我们</a>。<br><br><a id="reapplybtn" class="btn btn-default" style="padding:9px;padding-left:15px;padding-right:15px;font-size:14px;">还需要继续申请</a></div>';
				serialicon = 'fa-warning';
				serialcolor = '#f0ad4e';
			}
			//$('#applyLabel').text('序列号');
			$('#serialinfo').text('');
			$('#serialinfo').append(serialinfo);
			//$('#Serialinput').val(serial);
			
			if(localStorage.serial != undefined){
				var serialArr = localStorage.serial.split(',');
				$('#SerialinputList').find('div').remove();
				for(var s in serialArr){
					if(serialArr[s] != 'undefined'){
						$('#SerialinputList').append('<div class="input-group" style="margin-bottom:3px;">'+
							'<span class="input-group-addon">'+serialArr[s].split(':')[0]+'</span>'+
							'<input type="text" onfocus="select()" class="form-control serialinput" placeholder="Serial" aria-describedby="basic-addon1" value="'+serialArr[s].split(':')[1]+'">'+
						'</div>');
					}
				}
			}
			$('.modal-body').find('.fa').removeClass('fa-check');
			$('.modal-body').find('.fa').removeClass('fa-warning');
			$('.modal-body').find('.fa').addClass(serialicon);
			$('.modal-body').find('.fa').css({color:serialcolor});
			$('#reapplybtn').on('click', function(){
				$(this).remove();
				var a = '<form><div class="input-group" class="text-center"><input id="keycode" type="password" onfocus="select()" class="form-control serialcode" placeholder="请输入直通码" aria-describedby="basic-addon1"><span class="input-group-addon" id="basic-addon1"><span class="fa fa-arrow-right"></span></span></div></form>'
				$('#serialinfo').find('div').append(a);
				$('#basic-addon1').on('click', function(){
					var key = $('#keycode').val();
					if(key != ''){
						getSerial(t, o, title, $('#keycode').val());
					}else{
						$('#keycode').focus();
					}
				})
			});
		}
	});
}
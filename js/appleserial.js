$('#get2000').on('click', function(){
	getSerial(2, this, 'e商2000服务器版');
})

$('#get3000').on('click', function(){
	getSerial(3, this, 'e商3000服务器版');
})

function getSerial(t, o, title, k){
	var btn = $(o),
		param = {type: t, key: k};
	$.getJSON('server/applyserial/default.asp', param, function(result){
		if(result){
			var serial, serialinfo, serialicon, serialcolor;
			if(result.result){
				serial = result.serial
				localStorage.serial = serial;
				serialinfo = '<div style="margin:30px;">恭喜！<br><br>您获得了一个新的'+title+'序列号。请在注册时使用它。有任何问题请及时 <a target="_blank" href="contact.html">联系我们</a>。</div>'
				serialicon = 'fa-check';
				serialcolor = '#398439';
			}else{
				serial = localStorage.serial;
				serialinfo = '<div style="margin:30px;">今天已经申请过了，请明天再来吧。以下是今天获取的'+title+'序列号。请在注册时使用它。有任何问题请及时 <a target="_blank" href="contact.html">联系我们</a>。<br><br><a id="reapplybtn" class="btn btn-default" style="padding:9px;padding-left:15px;padding-right:15px;font-size:14px;">还需要继续申请</a></div>';
				serialicon = 'fa-warning';
				serialcolor = '#f0ad4e';
			}
			$('#applyLabel').text(title);
			$('#serialinfo').text('');
			$('#serialinfo').append(serialinfo);
			$('#Serialinput').val(serial);
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
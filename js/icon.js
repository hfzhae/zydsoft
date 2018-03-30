try{
	var sheet=document.styleSheets[2],
		rules=sheet.cssRules;
	for(sy in rules){
		if(rules[sy].cssText.indexOf('::')>0){
			var csstext = rules[sy].cssText.substring(0, rules[sy].cssText.indexOf('::'));
			csstext = csstext.substring(4);
			var icon = $('<div class="client-item">'+
					'<span class="fa marginicon fa-'+csstext+'"></span><br>'+
					'<span>'+csstext+'</span>'+
				'</div>'+
			'</div>');
			$('#faicondiv').append(icon)
		}
	}
}catch(e){}

try{
	var sheet=document.styleSheets[0],
		rules=sheet.cssRules;
	for(sy in rules){
		if(rules[sy].cssText.indexOf(':before')>0){
			var csstext = rules[sy].cssText.substring(0, rules[sy].cssText.indexOf(':before')-1);
			csstext = csstext.substring(6);
			var icon = $('<div class="client-item">'+
					'<span class="icon marginicon icon-'+csstext+'"></span><br>'+
					'<span>'+csstext+'</span>'+
				'</div>'+
			'</div>');
			
			$('#icondiv').append(icon);
		}
	}
}catch(e){}

setTimeout(function(){
	var i = 1;
	$('.spantitle').each(function(){
		$(this).css({'marginLeft':-($(this).width()/2+25)});
		//$(this).prepend(i + '.');
		//i++;
	});
},500);

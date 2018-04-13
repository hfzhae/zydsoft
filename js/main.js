require(['config'],function(){
	require(['jquery'], function(){
		var browser = getExplorerInfo();
		if(browser != undefined){
			if(browser.type == 'IE'){   
				if(browser.version<9){
					alert("你的浏览器版本过低，点击确定后跳转旧版网址。")
					window.location = "http://old.zydsoft.com"
					return;	
				}
			} else {
				//$('#topheaderIE').hide();
				//$('#topSlider').show();
			}  
		}
		require([/* 'jqueryui','sliderPro', 'wow', 'owl', 'popper', */ 'bootstrap'], function() {
			require(['custom','icon','appleserial','download'], function() {});
		});
		
		function getExplorerInfo() {
			var explorer = window.navigator.userAgent.toLowerCase() ;
			//ie 
			if (explorer.indexOf("msie") >= 0) {
				var ver=explorer.match(/msie ([\d.]+)/)[1];
				return {type:"IE",version:ver};
			}
			//firefox 
			else if (explorer.indexOf("firefox") >= 0) {
				var ver=explorer.match(/firefox\/([\d.]+)/)[1];
				return {type:"Firefox",version:ver};
			}
			//Chrome
			else if(explorer.indexOf("chrome") >= 0){
				var ver=explorer.match(/chrome\/([\d.]+)/)[1];
				return {type:"Chrome",version:ver};
			}
			//Opera
			else if(explorer.indexOf("opera") >= 0){
				var ver=explorer.match(/opera.([\d.]+)/)[1];
				return {type:"Opera",version:ver};
			}
			//Safari
			else if(explorer.indexOf("Safari") >= 0){
				var ver=explorer.match(/version\/([\d.]+)/)[1];
				return {type:"Safari",version:ver};
			}
			//ipad
			else if(explorer.indexOf("ipad") >= 0){
				var ver=explorer.match(/mozilla\/([\d.]+)/)[1];
				return {type:"ipad",version:ver};
			}
			//iphone
			else if(explorer.indexOf("iphone") >= 0){
				var ver=explorer.match(/mozilla\/([\d.]+)/)[1];
				return {type:"ipad",version:ver};
			}
			//android
			else if(explorer.indexOf("android") >= 0){
				window.location = "http://zydsoft.com"
				var ver=explorer.match(/mozilla\/([\d.]+)/)[1];
				return {type:"android",version:ver};
			}
		}
	})
});
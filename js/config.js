requirejs.config({
	baseUrl: 'js/',
	paths: {
		custom: 'custom',
		jquery:'jquery-1.11.3.min',
		jqueryui: 'jquery-ui.min',
		sliderPro: 'jquery.sliderPro.min',
		wow: 'wow.min',
		owl: 'owl.carousel.min',
		popper: 'popper.min',
		bootstrap: 'bootstrap.min',
		icon:'icon'
		
	},
	waitSeconds: 15,//设置超时
	map: {
		'*': {
			'css': 'css'
		}
	},
	shim : {
		bootstrap:{ 
			deps:[
				'css!../css/font-awesome.min.css',
				'css!../css/style.css',
				'css!../css/bootstrap.min.css',
				'css!../css/slider-pro.min.css',
				'css!../css/owl.carousel.css',
				'css!../css/animate.min.css',
				'css!../css/main.css'
			]
		},
		wx: {
			exports: 'wx'
		}
	}
});
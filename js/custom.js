(function () {
    "use strict";
    var Core = {
        initialized: false,
        initialize: function () {

            if (this.initialized)
                return;
            this.initialized = true;
            this.build();
        },
        build: function () {
            // Dropdown menu
            this.cotentslide();
            // Owl carousel init
            this.initOwlCarousel();
            // Stick slider init
            //this.initStickSlider();
            // Fixed header 
            this.fixedHeader();
            // Progress bar animation
            //this.progressBarAnimation();
            // Wow init
            this.wowInit();
            // Loader
            this.loaderInit();
            // Start video
            //this.startVideo();
            // Toggle search
            this.toggleSearch();
            // Top slider init
            this.initSliderPro();
            // Init fancybox
            //this.initFancyBox();
            // Init fancybox video
            //this.initFancyBoxVideo();
			this.initcopydate();
			this.initfooter();
			this.inittopmenu();
			this.initbuysection();
        },
		initbuysection: function(){
			var baysection = $('.buy-section').find('.row');
			baysection.find('div').remove();
			baysection.append('<div class="col-md-8 col-md-offset-1 col-sm-9 wow fadeInLeft">'+
				'<div class="section-text">'+
					'<div class=" vcenter like">'+
						'<span class="icon icon-Briefcase"></span>'+ 
					'</div>'+
					'<div class="buy-text vcenter">'+
						'<div class="top-text">价格和购买方式</div>'+
						'<div class="bottom-text">根据你的企业情况来决定</div>'+
					'</div>'+
				'</div>'+
			'</div>');
			baysection.append('<div class="col-md-3 col-sm-3 wow fadeInRight">'+
				'<a href="#" class="btn btn-info ">现在了解</a>'+
			'</div>');
		},
		inittopmenu: function(){
			var topmenu = $('#navbar-collapse').find('ul'),
				pagename = window.location.pathname,
				topmenujson = [
					{
						title:'首页',
						href:'index.html',
						active:pagename=='/index.html'?'active':''
					},{
						title:'产品',
						href:'#',
						active:''
					},{
						title:'服务',
						href:'#',
						active:''
					},{
						title:'关于我们',
						href:'about.html',
						active:pagename=='/about.html'?'active':''
					},{
						title:'联系方式',
						href:'contact.html',
						active:pagename=='/contact.html'?'active':''
					}
				];
			topmenu.find('li').remove();
			for(var i in topmenujson){
				topmenu.append('<li class="' + topmenujson[i].active + '"><a href="' + topmenujson[i].href + '">' + topmenujson[i].title + '</a></li>');
			}
		},
		initfooter:function(){
			var footer = $('.footer-section').find('.row');
			footer.find('div').remove();
			footer.append('<div class="col-md-3 col-sm-3">' +
				'<h5>关于我们</h5>' +
				'<p>我们致力于互联网时代的企业管理软件的研发和推广，向客户提供可参与、可任意配置和裁剪的柔性软件系统，为客户适应电子商务时代的企业管理提供高水平、专业化的软件产品和服务。</p>' +
			'</div>');
		
			footer.append('<div class="col-md-3 col-sm-3">' +
				'<h5>站内导航</h5>' +
				'<div class="row">' +
					'<div class="col-md-6">' +
						'<ul class="footer-nav">' +
							'<li><a href="#">关于我们</a></li>' +
							'<li><a href="#">产品</a></li>' +
							'<li><a href="#">服务</a></li>' +
							'<li><a href="#">联系我们</a></li>' +
						'</ul>' +
					'</div>' +
					'<div class="col-md-6">' +
						'<ul class="footer-nav">' +
							'<li><a href="#">申请序列号</a></li>' +
							'<li><a href="#">在线留言</a></li>' +
							'<li><a href="#">合作伙伴</a></li>' +
						'</ul>' +
					'</div>' +
				'</div>' +
			'</div>');
			
			footer.append('<div class="col-md-3 col-sm-3">' +
				'<h5>联系方式</h5>' +
				'<ul class="contacts-list">' +
					//'<li>' +
					//	'<p><i class="icon icon-House"></i>北京市朝阳区常营北路10号院</p>' +
					//'</li>' +
					'<li>' +
						'<p><i class="icon icon-Phone2"></i>010 56296718</p>' +
					'</li>' +
					'<li>' +
						'<p><i class="icon icon-Mail"></i><a href="mailto:Services@zydsoft.com">Services@zydsoft.com</a> </p>' +
					'</li>' +
				'</ul>' +
			'</div>');
			footer.append('<div class="col-md-3 col-sm-3">' +
				'<h5>免费试用</h5>' +
				'<p>' +
					'单用户网络版永久免费使用。' +
					'通过网络下载方式，安装和使用我们的产品。' +
				'</p>' +
				'<div class="form-group has-feedback">' +
					'<ul class="contacts-list">'+
						'<li>' +
							'<p><i class="icon icon-Pencil"></i><a href="#">申请序列号</a></p>' +
						'</li>' +
					'</ul>'+
				'</div>' +
			'</div>');
		},
		initcopydate: function(){
			var now = new Date(),
				copyright = $('.copyright-section');
			copyright.find('p').remove();
			copyright.append('<p>Copyright &copy; 2000-' + now.getFullYear() + '.zydsoft All rights reserved.</p>');
		},
        initFancyBox: function () {
            $('.fancybox').fancybox();
        },
        initFancyBoxVideo: function () {
            $(".fancybox-video").click(function () {
                $.fancybox({
                    'padding': 0,
                    'autoScale': false,
                    'transitionIn': 'none',
                    'transitionOut': 'none',
                    'title': this.title,
                    'width': 680,
                    'height': 495,
                    'href': this.href.replace(new RegExp("watch\\?v=", "i"), 'v/'),
                    'type': 'swf',
                    'swf': {
                        'wmode': 'transparent',
                        'allowfullscreen': 'true'
                    }
                });

                return false;
            });
        },
        cotentslide: function (options) {

            var scrollPane = $(".scroll-pane"),
                    scrollContent = $(".scroll-content");
            //build slider
            var scrollbar = $(".scroll-bar").slider({
                slide: function (event, ui) {
                    if (scrollContent.width() > scrollPane.width()) {
                        scrollContent.css("margin-left", Math.round(
                                ui.value / 100 * (scrollPane.width() - scrollContent.width())
                                ) + "px");
                    } else {
                        scrollContent.css("margin-left", 0);
                    }
                }
            });
            //append icon to handle
            var handleHelper = scrollbar.find(".ui-slider-handle")
                    .mousedown(function () {
                        scrollbar.width(handleHelper.width());
                    })
                    .mouseup(function () {
                        scrollbar.width("100%");
                    })
                    .append("<span class='ui-icon ui-icon-grip-dotted-vertical'></span>")
                    .wrap("<div class='ui-handle-helper-parent'></div>").parent();
            //change overflow to hidden now that slider handles the scrolling
            scrollPane.css("overflow", "hidden");
            //size scrollbar and handle proportionally to scroll distance
            function sizeScrollbar() {
                var remainder = scrollContent.width() - scrollPane.width();
                var proportion = remainder / scrollContent.width();
                var handleSize = scrollPane.width() - (proportion * scrollPane.width());
                scrollbar.find(".ui-slider-handle").css({
                    width: handleSize,
                    "margin-left": -handleSize / 2
                });
                handleHelper.width("").width(scrollbar.width() - handleSize);
            }

            //change handle position on window resize
            $(window).resize(function () {
                sizeScrollbar();
            });
            //init scrollbar size
            setTimeout(sizeScrollbar, 10); //safari wants a timeout

        },
        initStickSlider: function (options) {
            $(".enable-stick-slider").each(function (i) {
                var $stick = $(this);
                $stick.slick({
                    responsive: [
                        {
                            breakpoint: 500,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1
                            }
                        }
                    ]
                });
            });

        },
        initOwlCarousel: function (options) {

            $(".enable-owl-carousel").each(function (i) {
                var $owl = $(this);
                var navigationData = $owl.data('navigation');
                var paginationData = $owl.data('pagination');
                var singleItemData = $owl.data('single-item');
                var autoPlayData = $owl.data('auto-play');
                var transitionStyleData = $owl.data('transition-style');
                var mainSliderData = $owl.data('main-text-animation');
                var afterInitDelay = $owl.data('after-init-delay');
                var stopOnHoverData = $owl.data('stop-on-hover');
                var min600 = $owl.data('min600');
                var min800 = $owl.data('min800');
                var min1200 = $owl.data('min1200');
                $owl.owlCarousel({
                    navigation: navigationData,
                    pagination: paginationData,
                    singleItem: singleItemData,
                    autoPlay: autoPlayData,
                    transitionStyle: transitionStyleData,
                    stopOnHover: stopOnHoverData,
                    navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
                    itemsCustom: [
                        [0, 1],
                        [600, min600],
                        [800, min800],
                        [1200, min1200]
                    ],
                    afterInit: function (elem) {
                        if (mainSliderData) {
                            setTimeout(function () {
                                $('.main-slider_zoomIn').css('visibility', 'visible').removeClass('zoomIn').addClass('zoomIn');
                                $('.main-slider_fadeInLeft').css('visibility', 'visible').removeClass('fadeInLeft').addClass('fadeInLeft');
                                $('.main-slider_fadeInLeftBig').css('visibility', 'visible').removeClass('fadeInLeftBig').addClass('fadeInLeftBig');
                                $('.main-slider_fadeInRightBig').css('visibility', 'visible').removeClass('fadeInRightBig').addClass('fadeInRightBig');
                            }, afterInitDelay);
                        }
                    },
                    beforeMove: function (elem) {
                        if (mainSliderData) {
                            $('.main-slider_zoomIn').css('visibility', 'hidden').removeClass('zoomIn');
                            $('.main-slider_slideInUp').css('visibility', 'hidden').removeClass('slideInUp');
                            $('.main-slider_fadeInLeft').css('visibility', 'hidden').removeClass('fadeInLeft');
                            $('.main-slider_fadeInRight').css('visibility', 'hidden').removeClass('fadeInRight');
                            $('.main-slider_fadeInLeftBig').css('visibility', 'hidden').removeClass('fadeInLeftBig');
                            $('.main-slider_fadeInRightBig').css('visibility', 'hidden').removeClass('fadeInRightBig');
                        }
                    },
                    afterMove: sliderContentAnimate,
                    afterUpdate: sliderContentAnimate,
                });
            });
            function sliderContentAnimate(elem) {
                var $elem = elem;
                var afterMoveDelay = $elem.data('after-move-delay');
                var mainSliderData = $elem.data('main-text-animation');
                if (mainSliderData) {
                    setTimeout(function () {
                        $('.main-slider_zoomIn').css('visibility', 'visible').addClass('zoomIn');
                        $('.main-slider_slideInUp').css('visibility', 'visible').addClass('slideInUp');
                        $('.main-slider_fadeInLeft').css('visibility', 'visible').addClass('fadeInLeft');
                        $('.main-slider_fadeInRight').css('visibility', 'visible').addClass('fadeInRight');
                        $('.main-slider_fadeInLeftBig').css('visibility', 'visible').addClass('fadeInLeftBig');
                        $('.main-slider_fadeInRightBig').css('visibility', 'visible').addClass('fadeInRightBig');
                    }, afterMoveDelay);
                }
            }
        },
        fixedHeader: function (options) {
            if ($(window).width() > 767) {
                // Fixed Header
                var topOffset = $(window).scrollTop();
                if (topOffset > 0) {
                    $('body').addClass('fixed-header');
                }
                $(window).on('scroll', function () {
                    var fromTop = $(this).scrollTop();
                    if (fromTop > 0) {
                        $('body').addClass('fixed-header');
                    } else {
                        $('body').removeClass('fixed-header');
                    }

                });
            }
        },
        progressBarAnimation: function (options) {
            $('.skills').waypoint(function () {
                $('.skills-animated').each(function () {
                    var persent = $(this).attr('data-percent');
                    $(this).find('.progress').animate({
                        width: persent + '%'
                    }, 300);
                });
            }, {
                offset: '100%',
                triggerOnce: true
            });
        },
        wowInit: function () {
            var scrollingAnimations = $('body').data("scrolling-animations");
            if (scrollingAnimations) {
                new WOW().init();
            }
        },
        loaderInit: function () {
			var $preloader = $('#page-preloader'),
				$spinner = $preloader.find('.spinner');
			$spinner.fadeOut();
			$preloader.delay(350).fadeOut(800);
			$('body').show();
            /* $(window).on('load', function () {
                var $preloader = $('#page-preloader'),
					$spinner = $preloader.find('.spinner');
                $spinner.fadeOut();
                $preloader.delay(350).fadeOut(800);
            }); */
        },
        startVideo: function () {
            if (!Modernizr.touch) {
                $(".video-play").mb_YTPlayer();
            }
        },
        toggleSearch: function () {
            $(document).on('click', "#search-open, #search-close", function () {
                $('.header').toggleClass('search-open');
            });
        },
        initSliderPro: function () {
            if ($('#topSlider').length > 0) {

                $('#topSlider').sliderPro({
                    width: 1600,
                    height: 800,
                    fade: true,
                    arrows: true,
                    buttons: true,
                    waitForLayers: true,
                    thumbnailPointer: false,
                    touchSwipe: false,
                    autoplay: true,
                    autoScaleLayers: false,
                    captionFadeDuration: 100,
					autoplayDelay:15000

                });

            }
        }
    };
    Core.initialize();
})();
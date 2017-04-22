
/*
To do:

Site Wide
---------
Down states for buttons



Intro
-----


TOUCH
-----



LOOK
----




LOVE
----



CONFIGURATOR
------------


*/



function Mallia() {

    function SiteWide()
    {
		var pages = ["", "look.html", "look2.html", "look2.html#switch2", "look2.html#switch3", "look2.html#select", "touch.html", "love.html", "love2.html", "config.html"]


		



		function handleWindowMove() {
			document.ontouchmove = function(event){
			event.preventDefault();
			}

			$('.scrollable').bind("touchmove",function(e){
            e.stopPropagation();
        });
		}



		function getPage() {
			return document.URL.substr(document.URL.lastIndexOf("/")).replace('/', '');
		}

		function mainPagination() {
			$('.navigation li.next').click(function() {

				
				switch(getPage()) {
				case pages[0]:
					window.location = pages[1]
					break;
				case pages[1]:
					window.location = pages[2]
					break;
				case pages[2]:
					window.location = pages[3]
					break;
				case pages[3]:
					window.location = pages[4]
					break;
				case pages[4]:
					window.location = pages[5]
					break;
				case pages[5]:
					window.location = pages[6]
					break;
				case pages[6]:
					window.location = pages[7]
					break;
				case pages[7]:
					window.location = pages[8]
					break;
				case pages[8]:
					window.location = pages[9]
					break;
				}


				return false
			})

			$('.navigation li.prev').click(function() {

				// console.log(getPage())
				switch(getPage()) {
				case pages[9]:
					window.location = pages[8]
					break;
				case pages[8]:
					window.location = pages[7]
					break;
				case pages[7]:
					window.location = pages[6]
					break;
				case pages[6]:
					window.location = pages[5]
					break;
				case pages[5]:
					window.location = pages[4]
					break;
				case pages[4]:
					window.location = pages[3]
					break;
				case pages[3]:
					window.location = pages[2]
					break;
				case pages[2]:
					window.location = pages[1]
					break;
				case pages[1]:
					window.location = pages[0]
					break;
				}


				return false
			})}


		mainPagination()
		handleWindowMove()
		
	}


	function Intro() {
		function staggerAnimation(){
			var Stagger = new TimelineLite()
			var elements = [
				$('#i11'),
				$('#i12'),
				$('#i13'),
				$('#i14'),
				$('#i21'),
				$('#i22'),
				$('#i23'),
				$('#i24'),
				$('#i25'),
				$('#i31'),
				$('#i32'),
				$('#i33'),
				$('#i34'),
				$('#i35'),
				$('#i36'),
				$('#i37'),
				$('#i38'),
				$('#i39'),
				$('#i41'),
				$('#i42'),
				$('#i43'),
				$('#i44'),
				$('#i45'),
				$('#i46'),
				$('#i47'),
				$('#look'),
				$('#i51'),
				$('#i52'),
				$('#i53'),
				$('#i54'),
				$('#i61'),
				$('#i62'),
				$('#i63'),
				$('#i64'),
				$('#i65'),
				$('#i71'),
				$('#i72'),
				$('#i73'),
				$('#i74'),
				$('#i75'),
				$('#i76'),
				$('#touch1, #touch2'),
				$('#i81'),
				$('#i82'),
				$('#i83'),
				$('#i84'),
				$('#i85'),
				$('#i91'),
				$('#i92'),
				$('#i93'),
				$('#i94'),
				$('#i101'),
				$('#i102'),
				$('#i103'),
				$('#i104'),
				$('#i111'),
				$('#i112'),
				$('#i113'),
				$('#love'),
				$('#i121'),
				$('#i122'),
				$('#i123'),
				$('#i131'),
				$('#i132'),
				$('#i133'),
				$('#i134'),
				$('#i141'),
				$('#i142'),
				$('#i143'),
				$('#i144'),
				$('#i151'),
				$('#i152'),
				$('#woo1, #woo2, #woo3, #woo4'),
				$('#i161'),
				$('#i162'),
				$('#i171'),
				$('#i181'),
				$('#i191'),
				$('#i201'),
				$('#i202'),
				$('#i203'),
				$('#i211'),
				$('#i212'),
				$('#i213'),
				$('#i221'),
				$('#i231'),
				$('#i241'),
				$('#i251'),
				$('#liner')


			]
			Stagger.staggerTo(elements, 1, {css:{opacity:0}}, 0.05);
		}
	staggerAnimation()	
	}


	function Look() {

	if ($('#next-button').length == 1 || $('#back-to-top').length == 1) {
		var nextAnimation = TweenLite.to($('#next-button'), 0.5, {css:{bottom: '-=20', autoAlpha: 0, paused: true}})
		var backAnimation = TweenLite.from($('#back-to-top'), 0.5, {css:{bottom: '+=20', autoAlpha: 0, paused: true}})
		nextAnimation.reverse()
		backAnimation.reverse()
	}

	

	function initTooltip() {
		$('.help-icon').qtip({
			content: {
				text: $('.pagination')
			},
			style: {
				classes: 'ui-tooltip-blue ui-tooltip-shadow'
			},
			position: {
				my: 'top right',
				// Position my top left...
				at: 'bottom left' // at the bottom right of...
			}
		})
	}


		// console.log('look')

		function lookSlider(){

			$(window).load(function(){
				$('.slider2').bxSlider({
				auto: true,
				mode: 'fade',
				captions: true,
				autoHover: true,
				randomStart: true,
				pause: 2600,
				hideControlOnEnd: true
				});

			$('.slider3').bxSlider({
				auto: true,
				mode: 'fade',
				captions: true,
				autoHover: true,
				randomStart: true,
				autoDelay: 1300,
				pause: 2600,
				hideControlOnEnd: true
				});
			})

			
		
		}

		function Scroll(){
			$('#parallax-wrapper').niceScroll().hide();
		}


		function handlePagination(){
			$('#next-button').click(function(){
			$scrollTop = $('#parallax-wrapper').scrollTop()
			$curSlide = Math.floor(($('#parallax-wrapper').scrollTop())/520)
			$curSlidePos = $curSlide*520
			$nextSlidePos = $curSlidePos + 520
			// $prevSlidePos = $curSlidePos - 520
			// console.log($scrollTop)
			TweenLite.to($('#parallax-wrapper'), 1, {scrollTo:{y:$nextSlidePos}, ease:Power2.easeOut});

			return false;

			
			})

			$('#back-to-top').click(function(){

			TweenLite.to($('#parallax-wrapper'), 1, {scrollTo:{y:0}, ease:Power2.easeOut});

			return false;
			})

		}

		function handleSwitch() {
			var $trigger = 1

			function toggleSwitchPanel() {
				$(window).load(function(){
					$('#panel-1 ul').caroufredsel({
							items: 5,
							swipe: {
								onTouch: true,
								onMouse: true

							},
							scroll: {
								items: 5
							},
							auto: {
								play: false
							},
							prev: {
								button: $('#panel-1 .prev')
							},
							next: {
								button: $('#panel-1 .next')
							}
						})
				})
			}


			function toggleBgPanel() {
			var $targetHTML = $('.hide .bg-set-' + $trigger).html()
				$('#panel-2 ul').html($targetHTML)
				if ($('#panel-2 ul li').length <= 5) {
					$('#panel-2 .prev, #panel-2 .next').hide()
				} else {
					$('#panel-2 .prev, #panel-2 .next').show()
				}

			}

			function togglePanelState() {
				$('.toggle').click(function(){
				
				if ($('.toggle a.sw').hasClass('active')) {
				TweenLite.to($('.panel-container'), 0.3, {css:{top:"-80px"}, onComplete: activateBgPanel});
				toggleBgPanel()
				$('.toggle a').removeClass('active')
				$('.toggle a.bg').addClass('active')
			} else {
				TweenLite.to($('.panel-container'), 0.3, {css:{top:"0"}});
				$('.toggle a').removeClass('active')
				$('.toggle a.sw').addClass('active')
					}	
				return false;
			})
			}

			function activateBgPanel() {
				$('#panel-2 ul').caroufredsel({
				swipe: {
					onTouch: true,
					onMouse: true
				},
				width: 400,
				align: 'left',
				scroll: {
					items: 5
				},
				auto: {
					play: false
				},
				prev: {
					button: $('#panel-2 .prev')
				},
				next: {
					button: $('#panel-2 .next')
				}
			})
			}

			function swapSwitch() {
				$('#panel-1 ul li a').bind('click', function(){

					$this = $(this)
					$target = $('.switch .target')
					$current = $('.switch')
					$trigger = $this.attr('data-target')
					var $targetbg = $this.attr('data-image')
					var imagePath = "url('images/look/parallax/"+$targetbg+".png')"
					$('#panel-1 ul li a').removeClass('active')
					$this.addClass('active')
					$target.css('background-image', imagePath)
					// console.log($this.attr('title'))
					$('.switch.draggable .caption span').html($this.attr('title'))
					TweenLite.from($('.switch .target'), 0, {css:{opacity:0}, onComplete: function(){
						$current.css('background-image', imagePath)
					}});



					return false;
				})
			}

			function swapBackground() {
				$('#panel-2 ul li a').live('click', function(){
					$this = $(this)
					$target = $('.select-panel .target')
					$current = $('.select-panel')
					var $targetbg = $this.attr('data-target')
					var imagePath = "url('images/look/parallax/"+$targetbg+".jpg')"
					$target.css('background-image', imagePath)

					$('#panel-2 ul li a').removeClass('active')
					$this.addClass('active')

					TweenLite.from($('.select-panel .target'), 0.4, {css:{opacity:0}, onComplete: function(){
						$current.css('background-image', imagePath)
					}});

					return false;
				})

			}

			function togglePanel() {
				var isOpen = true
				var tl = new TimelineLite({
					paused: true
				})

				

				tl.call(function(){
					$('#reveal-text').hide()
				})
				tl.to($('#toggle-text, .toggle'), 0.4, {css:{autoAlpha:"0", display: 'none'}});
				tl.to($('#switch-box'), 0.4, {css:{height:"18px"}});

	
				tl.to($('#reveal-text'), 0.4, {css:{autoAlpha:1, display: 'block'}});
	
				$('#toggle-panel').click(function(){
					if (isOpen == true) {
						
						$(this).html('+')
						tl.play()

						isOpen = false
						// console.log(isOpen)
					} else {
						$(this).html('-')
						tl.reverse()
						isOpen = true
						// console.log(isOpen)
					}


					return false;
				})
			}




			function initDrag() {
				$('.switch-holder').click(resetSwitchPos)
				$('#parallax-wrapper').scroll(handleScroll)
				$( ".draggable" ).draggable({
					containment: "#parallax-wrapper"
				});
				$( ".draggable" ).draggable("disable").removeClass('ui-state-disabled')

					function resetSwitchPos() {
						$( ".draggable" ).draggable("disable").removeClass('ui-state-disabled')
						TweenLite.to($('.switch'), 0.5, {css:{top: 120, left: 230}, onComplete: function(){
							if ($('.switch-holder').measureScrollDist() >= 1300) {
								$( ".draggable" ).draggable("enable")
							}
							
						}});
					}

					function handleScroll() {

						var promptAnimation = new TweenLite({
							paused: true
						})

					
						
						var draggable = false
						$scrollDist =  $('.switch-holder').measureScrollDist()


						// console.log($('#parallax-wrapper').scrollTop())

						if ($('#parallax-wrapper').scrollTop() >= 100) {
							TweenLite.to($('#prompt'),0.3, {css:{autoAlpha: 0}})
						} else {
							TweenLite.to($('#prompt'),0.3, {css:{autoAlpha: 1}})
						}

						if ($scrollDist >= 1200) {
							nextAnimation.play()
							TweenLite.to($('.caption'), 0.3, {css:{autoAlpha: 1}})
							TweenLite.to($('.moveable-text'), 0.3, {css:{autoAlpha: 1}})
							$('.moveable').removeClass('hide')

						var switchHoverAction = function(){
							$('.switch').mouseover(function(){
								// alert ('hello')
								TweenLite.to($('.moveable'), 0.3, {css:{autoAlpha: 1}})
								TweenLite.to($('.moveable-text'), 0.3, {css:{autoAlpha: 0}})

							})
							$('.switch').mouseout(function(){
								// alert ('hello')
								TweenLite.to($('.moveable'), 0.3, {css:{autoAlpha: 0}})
								// TweenLite.to($('.moveable-text'), 0.3, {css:{autoAlpha: 0}})
								
							})
						}

						switchHoverAction()


						} else {	
							TweenLite.to($('.moveable-text'), 0.3, {css:{autoAlpha: 0}})
							TweenLite.to($('.caption'), 0.3, {css:{autoAlpha: 0}})
							nextAnimation.reverse()
							$('.moveable').addClass('hide')
						}

						if ($scrollDist >= 1300) {
							draggable = true
							$( ".draggable" ).draggable("enable")

							backAnimation.play()
							
						} else {
							resetSwitchPos();
							$( ".draggable" ).draggable("disable").removeClass('ui-state-disabled')
							backAnimation.reverse()
							draggable = false
						}
						// console.log(draggable)
					}
			}

			function scrollorama() {
				var controller = $.superscrollorama();

					controller.addTween('#switch2-header', 
						TweenMax.from($('#switch2-header'), .5, {
							css:{
								opacity:0, //before
								marginLeft: -50 //before
							}
					}));

					controller.addTween('#switch2-body', 
						TweenMax.from($('#switch2-body'), .5, {
							css:{
								opacity:0,
								marginLeft: -50
							}
					}));

					controller.addTween('#switch3-header', 
						TweenMax.from($('#switch3-header'), .5, {
							css:{
								opacity:0,
								marginLeft: -50
							}
					}));

					controller.addTween('#switch3-body', 
						TweenMax.from($('#switch3-body'), .5, {
							css:{
								opacity:0,
								marginLeft: -50
							}
					}));

				

				};

			$.fn.measureScrollDist = function() {
				var $scrollTop = $('#parallax-wrapper').scrollTop()
				var $targetTop = this.offset().top
				var $Dist = Math.abs($targetTop - $scrollTop)
				return $Dist
			}

			



		swapSwitch()
		swapBackground()
		toggleSwitchPanel()
		togglePanel()
		togglePanelState()
		initDrag()
		scrollorama()
		
		

		}
		initTooltip()
		lookSlider()
		handleSwitch()
		handlePagination()
		Scroll()


	}

	function Touch() {
	var switchIntro = new TimelineLite()
	var switchVideo = new TimelineLite({
		paused: true,
		onUpdate: updateMainImage,
		onComplete: function(){
			switchVideo.progress(0)
		}
	})
	var $image = $('#image-video img')
	var $playhead = {frame: 1}
	var $src = $sequence+$playhead.frame+".jpg"
	var $value
	var $scroll = 0
	var $sequence = "images/touch/gold-intro/"
	var $type = new Type("gold");
	var $log = $("#log");
	var $posX = new Type(0);
	var isPlaying = false
	



	switchVideo.to($playhead, 2, {frame: 50, ease:Linear.easeNone});
	switchVideo.to($('#caption1'), 0.5, {css:{opacity: 1}});
	switchVideo.to($playhead, 2, {frame: 100, ease:Linear.easeNone});
	switchVideo.to($('#caption1'), 0.5, {css:{opacity: 0}});
	
	switchVideo.to($playhead, 2, {frame: 150, ease:Linear.easeNone});
	switchVideo.to($('#caption4'), 0.5, {css:{opacity: 1}});
	switchVideo.to($playhead, 2, {frame: 199, ease:Linear.easeNone});
	
	switchVideo.to($('#caption4'), 0.5, {css:{opacity: 0}});
	switchVideo.to($('#caption5'), 0.5, {css:{opacity: 1}});
	switchVideo.to($('#caption5'), 0.5, {css:{opacity: 0}, delay:2});


	// switchVideo.to($playhead, 0.9, {frame: 25, ease:Linear.easeNone});
	// switchVideo.to($('#caption1'), 0.5, {css:{opacity: 1}});
	// switchVideo.to($('#caption1'), 0.5, {css:{opacity: 0}, delay: 1});


	// switchVideo.to($playhead, 2, {frame: 67, ease:Linear.easeNone});
	// switchVideo.to($('#caption2'), 0.5, {css:{opacity: 1}});
	// switchVideo.to($('#caption2'), 0.5, {css:{opacity: 0}, delay: 1});

	// switchVideo.to($playhead, 1.1, {frame: 100, ease:Linear.easeNone});
	// switchVideo.to($('#caption3'), 0.5, {css:{opacity: 1}});
	// switchVideo.to($('#caption3'), 0.5, {css:{opacity: 0}, delay: 1});


	// switchVideo.to($playhead, 3, {frame: 175, ease:Linear.easeNone});
	// switchVideo.to($('#caption4'), 0.5, {css:{opacity: 1}});
	// switchVideo.to($('#caption4'), 0.5, {css:{opacity: 0}, delay: 1.1});


	// switchVideo.to($playhead, 1, {frame: 199, ease:Linear.easeNone});
	// switchVideo.to($('#caption5'), 0.5, {css:{opacity: 1}});
	// switchVideo.to($('#caption5'), 0.5, {css:{opacity: 0}, delay:1});

	function handleMouseWheel() {
		var newPos
		$('#image-video').mousewheel(function(event, deltaY) {
			newPos = switchVideo.progress() - deltaY / 100
			switchVideo.progress(newPos)
			$('#play').removeClass('pause')
			switchVideo.pause()
			isPlaying = false
			if(newPos <= 0) {
				// Reset playhead
				// switchVideo.progress(0)
			}
		});
	}



	function Type(val){
	    var value = val;
	    
	    this.getValue = function(){
	        return value;
	    };
	    
	    this.setValue = function(val){
	        value = val;
	    };
	}

	function checkImageLoaded() {
	var $progressBar = $('.progress .bar')
			switchIntro.pause()
			$('.hide').imagesLoaded({
		        progress: function (isBroken, $images, $proper, $broken) {
				 	// console.log(( ( $proper.length + $broken.length ) * 100 ) / $images.length)
				    $progressBar.css({ width: Math.round( ( ( $proper.length + $broken.length ) * 100 ) / $images.length ) + '%' });
				}
			});
			$(window).load(imageLoaded)
			
			function imageLoaded() {

					TweenLite.to($('#preloader'), 0.5, {css:{autoAlpha: 0}})
					switchIntro.play(0)

		
				
			}
		}

	function handleTouch() {
		function updateLog(x, y) {
			$posX.setValue(x / $(window).width())
			// $log.html($posX.getValue());
			switchVideo.progress($posX.getValue())
		}

		// document.addEventListener('touchstart', function(e) {
		// 	updateLog(e.changedTouches[0].pageX, e.changedTouches[0].pageY);

		// }, false);

		if (Modernizr.touch){
			 var target = document.getElementById("image-video")
			target.addEventListener("touchstart", touchStart, false);
			target.addEventListener("touchmove", touchMove, false);

			var start = {x:0,y:0};

			function touchStart(e) {
		
			start.x = event.touches[0].pageX;
			start.y = event.touches[0].pageY;
			}

			function touchMove(e){

			offset = {};

			offset.x = start.x - event.touches[0].pageX;
			offset.y = start.y - event.touches[0].pageY;
			$log.html(offset.x/1024*-1)
			switchVideo.progress(switchVideo.progress() + offset.x*-0.00005)
			return offset;

			}
		}


		// if (Modernizr.touch){
		// 	   document.addEventListener('touchmove', function(e) {
		// 		e.preventDefault();
		// 		updateLog(e.targetTouches[0].pageX, e.targetTouches[0].pageY);
		// 	}, false);
		// }

		
	}	

    



	function updateIntroImage(){
			// console.log($src)
			$src = "images/touch/"+ $type.getValue() +"-intro/"+Math.round($playhead.frame)+".jpg"
			$('#image-video img').attr('src', $src)			
		}

	function updateMainImage(){
			// console.log($src)
			$src = "images/touch/"+ $type.getValue() +"/"+Math.round($playhead.frame)+".jpg"
			$('#image-video img').attr('src', $src)
			$( "#slider" ).slider("value", Math.round(switchVideo.progress()*100) );
			// console.log(Math.round(switchVideo.progress()*100))
			if (switchVideo.progress() == 1) {
			$('#play').removeClass('pause')
			switchVideo.pause()
			isPlaying = false

			}
			}	
	function playVideo() {
			$playhead.frame = 1
			
			
			
		}			
		
	

	function playIntro() {
			$playhead.frame = 1
			switchIntro.to($playhead, 6, {frame: 130, ease:Linear.easeNone, onUpdate: updateIntroImage, onComplete: introDone});
			TweenLite.to($('#video-controller'), 0.5, {css:{autoAlpha: 0}})
			
		}

	
	function introDone() {
			// console.log('done')
			function showControls() {
				TweenLite.to($('#video-controller'), 0.5, {css:{autoAlpha: 1}})
				TweenLite.to($('#copy'), 0.5, {css:{autoAlpha: 1}})

			}

			playVideo()
			showControls()
			handleMouseWheel()
			handleTouch()
			
		}
	




	function Controller() {
		

		function initSlider() {
		$( "#slider" ).slider(

			{
				slide: function( event, ui ) {
					$value = $(this).slider( "option", "value" )
					// console.log($value/100)
					switchVideo.progress($value/100)
					$('#play').removeClass('pause')
					switchVideo.pause()
					isPlaying = false
				},
				max: 100
			});
		}		

		$('#play').click(function(){
			// console.log(isPlaying)

			if (!isPlaying) {
			$('#play').addClass('pause')
			isPlaying = true
			if (switchVideo.progress() == 1) {
				switchVideo.play(0)
			} else {
				switchVideo.play()
			}
		} else {
			$('#play').removeClass('pause')
			switchVideo.pause()
			isPlaying = false
		}


		})


		$('#pause').click(function(){
			switchVideo.pause()
		})
		
		$('#replay').click(playIntro)

		$('#change-gold').click(function(){
			// console.log('clicked')
			$type.setValue('gold')
			$('.change-switch').removeClass('active')
			$(this).addClass('active')
			// console.log($type.getValue())
			updateMainImage()
		})
		$('#change-pearl').click(function(){
			// console.log('clicked')
			$type.setValue('pearl')
			$('.change-switch').removeClass('active')
			$(this).addClass('active')
			// console.log($type.getValue())
			updateMainImage()
		})



		initSlider()
	}

	playIntro()
	Controller()
	checkImageLoaded()
	







	

}

	function Love() {
		function Page1Slider() {
			$('.slider').bxSlider({
				auto: true,
				mode: 'fade',
				pager: true,
				pause: 2000,
				buildPager: function(slideIndex) {
					switch(slideIndex) {
					case 0:
						return '<a href=""></a>';
					case 1:
						return '<a href=""></a>';
					case 2:
						return '<a href=""></a>';
					case 3:
						return '<a href="" class="pager-last"></a>';
					}

				}

			});
		}

		function coverFlip() {
			jQuery(document).ready(function() {
				jQuery('#flip').jcoverflip({
					current: 14,
					beforeCss: function(el, container, offset) {
						return [
						$.jcoverflip.animationElement(el, {
							left: (container.width() / 2 - 210 - 110 * offset + 20 * offset) + 'px',
							bottom: '20px'
						}, {}), $.jcoverflip.animationElement(el.find('img'), {
							width: Math.max(10, 100 - 20 * offset * offset) + 'px'
						}, {})];
					},
					afterCss: function(el, container, offset) {
						return [
						$.jcoverflip.animationElement(el, {
							left: (container.width() / 2 + 110 + 110 * offset) + 'px',
							bottom: '20px'
						}, {}), $.jcoverflip.animationElement(el.find('img'), {
							width: Math.max(10, 100 - 20 * offset * offset) + 'px'
						}, {})];
					},
					currentCss: function(el, container) {
						return [
						$.jcoverflip.animationElement(el, {
							left: (container.width() / 2 - 100) + 'px',
							bottom: 0
						}, {}), $.jcoverflip.animationElement(el.find('img'), {
							width: '200px'
						}, {})];
					},
					change: function(event, ui) {
						jQuery('#scrollbar').slider('value', ui.to*10);
					}
				});


				jQuery('#scrollbar').slider({
					animate: "fast",
					value: 140,
					max: 280,


					slide: function(event, ui) {
						if(event.originalEvent) {
							var newVal = ui.value/10;
							jQuery('#flip').jcoverflip('current', newVal);
							jQuery('#scrollbar').slider('value', newVal);
						}
					}
				});
			});


			

}


		function initLightBox() {
		
				var $item = $('#display-area ul li')

				$item.live("click", function() { 
				var $this = $(this)
				
				var $smallImgPath = $this.find('img').attr('src')
				
				var $bigImgPath = $smallImgPath.replace('images/love/f', 'images/love/fcb')

				var $bigImg = '<img width="400" height="400" src="'+ $bigImgPath +'"></>'

				// console.log($bigImg)
				$.colorbox({
					
					innerWidth: '520px',
					innerHeight: '460px',
					initialWidth: '520px',
					initialHeight: '460px',
					html: function(){
						return $bigImg + $this.find('.info').html()
					},
					onComplete: function(){
						
						$.colorbox.resize()

					}
					

			});
				// $('#cboxClose').attr('href', '#')

				return false;
				})
		}		

		initLightBox()

		function initDisplayCarousel() {
		    $(window).load(function()
		    {
		        $('#display-area ul').find('li').each(function(index)
		        {
		            $(this).attr('id', 'large' + index)
		        })
		        var itemFocus, currentPos
		        $('#display-area ul').caroufredsel({
		            width: 700,
		            auto: {
		                play: false
		            },
		            items: {
		                start: 2
		            },
		            swipe: {
		                onTouch: true,
		                onMouse: true,
		                onAfter: function()
		                {
		                    // console.log (this)
		                    itemFocus = $($('#display-area ul').triggerHandler("currentVisible")[1])
		                    $('#display-area ul>li').removeClass('active')
		                    itemFocus.addClass('active')

		                    itemFocus.trigger("currentPosition", function(pos)
		                    {
		                        // alert( "The carousel is at item number " + pos );

		                        $('.panel ul li a').removeClass('active')
		                        $('.panel ul li#' + (pos)).next().find('a').addClass('active')
		                        $('.panel ul').trigger("slideTo", pos - 2);

		                    });


		                    // console.log(itemFocus)
		                }
		            },
		            scroll: {
		                items: 1
		            }
		        })

		        $('.panel ul').caroufredsel({
		            auto: {
		                play: false
		            },
		            prev: {
		                button: $('.panel-container .prev')
		            },
		            next: {
		                button: $('.panel-container .next')
		            },
		            swipe: {
		                onTouch: true,
		                onMouse: true


		            }
		        })



		        $('.panel ul').find('li').each(function(index)
		        {
		            $(this).attr('id', index)
		        })


		       

		    })
			
			$('.panel ul li').click(function(){
					// console.log($(this).index())
					// console.log($(this).attr('id'))
					var target = parseInt($(this).attr('id'))
					$('#display-area ul').trigger("slideTo", target-1);
					$(this).parent().find('li a').removeClass('active')
					$(this).find('a').addClass('active')
					$('#display-area ul li').removeClass('active')
					$('#display-area ul li#large'+target).addClass('active')

				})

			

		}
		initDisplayCarousel()







		function initRoundabout() {


	
			// 	$('.pop').colorbox({
			// 	width: '600px',
			// 	height: '600px'
			// });
	
			$(window).load(function(){
				$('#flip').roundabout({
				minOpacity: 1,
				minScale: 0.3,
				maxScale: 0.7,
				duration: 200,
				tilt: -5,
				clickToFocusCallback: function() {
					// alert ('dsf')
					// console.log($('#flip').roundabout("setBearing"))
					$( "#scrollbar" ).slider( "value", 40 );
				}
			})
			})

			jQuery('#scrollbar').slider({
					animate: "fast",
					value: 1,
					max: 360,


					slide: function(event, ui) {
						var newVal = ui.value
						var inFocus = $('#flip').roundabout("getNearestChild")
						// if(event.originalEvent) {
						// 	var newVal = ui.value/10;
						// 	jQuery('#flip').jcoverflip('current', newVal);
						// 	jQuery('#scrollbar').slider('value', newVal);
						// }

						$('#flip').roundabout("setBearing", newVal)
						// console.log($('#flip').roundabout("getNearestChild"))
						// $('#flip li').hide()
			
						// $('#flip li').eq(inFocus+2).show()
						// $('#flip li').eq(inFocus+1).show()
						// $('#flip li').eq(inFocus).show()
						// $('#flip li').eq(inFocus-1).show()
						// $('#flip li').eq(inFocus-2).show()


					},

					stop: function(event, ui) {
						var newVal = ui.value
						$('#flip').roundabout("animateToNearestChild")

					}
				});
			
		}


	function handleTouch() {
		// alert ('sdf')

		$(function() {
    var $log = $("#log");

    function updateLog(x, y) {
    	var inFocus = $('#flip').roundabout("getNearestChild")
        $log.html((x/$(window).width())*360);
        var newVal = (x/$(window).width())*360
        jQuery('#scrollbar').slider('value', newVal);
        $('#flip').roundabout("setBearing", newVal)
  //       $('#flip li').hide()
			
		// $('#flip li').eq(inFocus+2).show()
		// $('#flip li').eq(inFocus+1).show()
		// $('#flip li').eq(inFocus).show()
		// $('#flip li').eq(inFocus-1).show()
		// $('#flip li').eq(inFocus-2).show()
        // jQuery('#flip').jcoverflip('current', newVal/10);
    }

    document.addEventListener('touchend', function(e) {
        e.preventDefault();
      	$('#flip').roundabout("animateToNearestChild")
    }, false);


    document.addEventListener('touchmove', function(e) {
        e.preventDefault();
        updateLog(e.targetTouches[0].pageX, e.targetTouches[0].pageY);
    }, false);
});

		
	}

		handleTouch()
		Page1Slider()
		// coverFlip()
		initRoundabout()
}


	$(document).ready(function()
	{
	    SiteWide()

	    if ($('body').hasClass('mainpage'))
	    {
	        Intro()
	    }

	    if ($('body').hasClass('look'))
	    {
	        Look()
	    }
	    if ($('body').hasClass('touch'))
	    {
	        Touch()
	    }
	    if ($('body').hasClass('love'))
	    {
	        Love()
	    }
	})

}

Mallia()


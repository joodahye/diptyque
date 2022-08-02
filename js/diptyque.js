$(document).ready(function(){
		
	if(  $(window).width()>1000 ) {
			//웹접근성강화
			$(".menuA").on("focus mouseenter",function(){
				$(".menuNav").stop().slideUp();
				$(this).next().stop().slideDown();
			});
		
			

			
			//베스트아이템
			const fw1 = $("#best_pro figure").eq(0).outerWidth(); //557
			const fw2 = fw1  * (-1);
			console.log(fw2);
			$("#best_pro").css("left", fw2 ); //-557
			console.log(fw2 * 2);
			
			//셋인터벌(자동슬라이드)
			/*const slide1 = setInterval(leftMove1, 3000);
			function leftMove1(){
					$("#best_pro").stop().animate({left: fw2 *2 },1700,function(){
							$("#best_pro").append( $("#best_pro figure").eq(0)  );
							$("#best_pro").css("left", fw2); //-557
							//console.log(  $(".Product").position().left );
					});
			}*/
			////베스트아이템 좌우버튼////
			//왼쪽버튼
			$("#best_btn .leftBtn").click(function(){
				bestLeft()
			});
			//오른쪽버튼
			$("#best_btn .rightBtn").click(function(){
				bestRight()
			});
			//왼쪽방향으로 이동
			function bestLeft(){
				$("#best_pro").stop().animate({left: fw2 *2 },"slow",function(){
					   $("#best_pro").append( $("#best_pro figure").first() );
					   $("#best_pro").css("left" , fw2 )
				});
			}
			//오른쪽방향으로 이동

	 		function bestRight(){
				$("#best_pro").stop().animate({left: 0 },"slow",function(){
			  		 $("#best_pro").prepend( $("#best_pro figure").last() );
			   		$("#best_pro").css("left" , fw2 )
				
		});
	}
	
	
	
			////리미티드 좌우버튼/////
			const limited1 = $("#limited_pro figure").eq(0).outerWidth();
			const limited2 = limited1 * (-1);
			$("#limited_pro").css("left", limited2 ); 
			
		//왼쪽버튼
			$("#limitedBtn .leftBtn").click(function(){
				limitedLeft()
			});
			//오른쪽버튼
			$("#limitedBtn .rightBtn").click(function(){
				limitedRight()
			});
			//왼쪽방향으로 이동
			function limitedLeft(){
				$("#limited_pro").stop().animate({left: limited2 *2 },"slow",function(){
					   $("#limited_pro").append( $("#limited_pro figure").first() );
					   $("#limited_pro").css("left" , limited2 )
				});
			}
			//오른쪽방향으로 이동

	 		function limitedRight(){
				$("#limited_pro").stop().animate({left: 0 },"slow",function(){
			  		 $("#limited_pro").prepend( $("#limited_pro figure").last() );
			   		$("#limited_pro").css("left" , limited2 )
		});
	}
			
			
			
			/////뉴 좌우 버튼/////
			let new1 = $("#new_pro figure").eq(0).outerWidth();
			let new2 = new1 * (-1);
			$("#new_pro").css("left", new2 );
		//왼쪽버튼
			$("#newBtn .leftBtn").click(function(){
				newLeft();
			});
			//오른쪽버튼
			$("#newBtn .rightBtn").click(function(){
				newRight()
			});
			//왼쪽방향으로
			function  newLeft() {
					$("#new_pro").stop().animate({left: new2 *2},"slow",function(){
						$("#new_pro").append($("#new_pro figure").first());
						$("#new_pro").css("left", new2)
					});
				
			}
			//오른쪽방향으로
			function newRight(){
				$("#new_pro").stop().animate({left:0},"slow",function(){
					$("#new_pro").prepend($("#new_pro figure").last());
					$("#new_pro").css("left", new2)
				});
			}
		
		
		
			/////홈데코/////
			
			const home1 = $("#homedecor_pro figure").eq(0).outerWidth();
			const home2 = new1 * (-1);
			$("#homedecor_pro").css("left", home2 );
			//왼쪽버튼
			$("#homedecorBtn .leftBtn").click(function(){
				homedecorLeft()
			});
			//오른쪽버튼
			$("#homedecorBtn .rightBtn").click(function(){
				homedecorRight()
			});
			//왼쪽방향으로 이동
			function homedecorLeft(){
				$("#homedecor_pro").stop().animate({left: home2 *2 },"slow",function(){
					   $("#homedecor_pro").append( $("#homedecor_pro figure").first() );
					   $("#homedecor_pro").css("left" ,home2)
				});
			}
			//오른쪽방향으로 이동

	 		function homedecorRight(){
				$("#homedecor_pro").stop().animate({left: 0 },"slow",function(){
			  		 $("#homedecor_pro").prepend( $("#homedecor_pro figure").last() );
			   		$("#homedecor_pro").css("left" , home2 )
		});
	}

	}	
		
	//모바일 메뉴 네비게이션
	$("#mobile_menu a").click(function(){
		const menubar = $("#menu").width();
		//모바일 버튼 클릭
		$("#menu").stop().animate({left: 0},1200);
		/*$("#menu").addClass("on");
				$("#menu").css("display","block");*/
	});
		//닫기버튼클릭
	$("#menu>a").click(function(){
		$("#menu").stop().animate({left: -650},1200);
		/*$("#menu").removeClass("on");
		$("#menu").css("display","none");*/
	});
	
	//섹션별 사진 애니메이션
	//console.log(  $(".innerText").position().top ); 
		
		$(window).scroll(function(){		
				if(  $(window).scrollTop()>= 1000){
					$(".innerText .sideSlide1").addClass("sideSlide1keyframes");
					}
					if(  $(window).scrollTop()>= 2000){
					$(".innerText .sideSlide2").addClass("sideSlide2keyframes");
					}
					if(  $(window).scrollTop()>= 3200){
					$(".innerText .sideSlide3").addClass("sideSlide3keyframes");
					}
				});
			

});/////// 
		

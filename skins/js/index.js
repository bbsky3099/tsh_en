$(function(){		
	var NextBtn=$(".next"),PrevBtn=$(".prev"),anyUl=$(".anyClass ul"),LiTotal=$(".anyClass ul li").length,RightLength=LiTotal-3,RightPicNum=RightLength,liwidth=130,showTime=6000,Auto=setInterval(AutoScroll,showTime);
	NextBtn.click(function(){if(RightPicNum>0){anyUl.animate({left:"-="+liwidth+"px"});RightPicNum--;}else{anyUl.animate({left:"0px"});RightPicNum=RightLength;}});
		
	PrevBtn.click(function(){if(RightPicNum==RightLength){anyUl.animate({left:"-"+RightLength*liwidth+"px"});RightPicNum=0;}else{anyUl.animate({left:"+="+liwidth+"px"});RightPicNum++;}});
	function AutoScroll(){NextBtn.click();}	
});

//$(function(){		
//	var NextBtn2=$(".next2"),PrevBtn2=$(".prev2"),anyUl2=$(".anyClass2 ul"),LiTotal2=$(".anyClass2 ul li").length,RightLength2=LiTotal2-8,RightPicNum2=RightLength2,liwidth2=128,showTime2=2000,Auto2=setInterval(Auto2Scroll,showTime2);
//	NextBtn2.click(function(){if(RightPicNum2>0){anyUl2.animate({left:"-="+liwidth2+"px"});RightPicNum2--;}else{anyUl2.animate({left:"0px"});RightPicNum2=RightLength2;}});
//		
//	PrevBtn2.click(function(){if(RightPicNum2==RightLength2){anyUl2.animate({left:"-"+RightLength2*liwidth2+"px"});RightPicNum2=0;}else{anyUl2.animate({left:"+="+liwidth2+"px"});RightPicNum2++;}});
//	function Auto2Scroll(){NextBtn2.click();}	
//	
//});



$(function(){
	var tt=0,stime4=3000,objM=$(".inban ul li"),sss=objM.length;

	$(".inban").append("<div class='control'></div>");
	
	for(z=0;z<objM.length;z++){		
		$(".control").append("<span class='png'><img src='"+objM.eq(z).find('img').attr('src')+"' width='65' height='32' class='png' /></span>");
	}
		
	$(".control span").eq(0).find('img').css("opacity","1.0");	
	objM.eq(0).fadeIn(800);
	
	$(".control span").click(function(){
		var ibnum=$(".control span").index(this);	
		$(".control span").find('img').css("opacity","0.4");
		$(".control span").eq(ibnum).find('img').css("opacity","1.0");
		objM.fadeOut(200);		
		objM.eq(ibnum).fadeIn(800);
		tt=ibnum;
	});
	
	$('.inban').hover(function(){
			clearInterval(Auto3);
		},function(){
			Auto3=setInterval(iBan,stime4);	
		});
		
	var Auto3=setInterval(iBan,stime4);		
	
	function iBan(){
		tt++;
		if(tt < sss){
			$(".control span").find('img').css("opacity","0.4");
			$(".control span").eq(tt).find('img').css("opacity","1.0");			
			objM.fadeOut(200);		
			objM.eq(tt).fadeIn(800);
		}else if(tt == sss){
			tt=0;
			$(".control span").find('img').css("opacity","0.4");
			$(".control span").eq(tt).find('img').css("opacity","1.0");
			objM.fadeOut(200);		
			objM.eq(tt).fadeIn(800);			
		}
}
	
	
});




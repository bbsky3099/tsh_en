// JavaScript Document
$(function(){		
var ps_NextBtn=$(".ps_next");
var ps_PrevBtn=$(".ps_prev");		
var ps_anyUl=$(".ps_SC ul");
var ps_LiTotal=$(".ps_SC ul li").length;
var ps_RL=ps_LiTotal-1;
var ps_RPN=ps_RL;
var ps_lw=500;
var ps_st=4000;
//var Auto=setInterval(ps_AutoScroll,ps_st);	

ps_NextBtn.click(function(){
		if(ps_RPN>0){
			ps_anyUl.animate({left:"-="+ps_lw+"px"});
			ps_RPN--;
		}else{
			ps_anyUl.animate({left:"0px"},100);
			ps_RPN=ps_RL;
			}
	});
	
ps_PrevBtn.click(function(){
		if(ps_RPN==ps_RL){
			ps_anyUl.animate({left:"-"+ps_RL*ps_lw+"px"},100);
			ps_RPN=0;
		}
		else{
			ps_anyUl.animate({left:"+="+ps_lw+"px"});
			ps_RPN++;
			}
	});
function ps_AutoScroll(){
	ps_NextBtn.click();
	}	

});
// JavaScript Document
$(function(){
	$('.nav li').hover(function(){
		if($(this).find('.secM').length != 0){
			$('.secMBg').show();
			$(this).find('.secM').show();
		}
		$(this).addClass('lih');
		},function(){
		$('.secMBg').hide();
		$(this).find('.secM').hide();
		$(this).removeClass('lih');	
	});	
})
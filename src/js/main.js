$(document).ready(function(){

 $(window).scroll(function(){
 	var scroll=$(window).scrollTop();
 	console.log(scroll);
 	if(scroll >0){
 		$("#sticky").removeClass("stick");
 	}else{
 		$("#sticky").addClass("stick");
 	}
 })

})

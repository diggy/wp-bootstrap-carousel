jQuery(document).ready(function($){
	if($(".carousel-inner-dps").length){
		$(".carousel-inner-dps").each(function(){
			$(this).find("div:not(:first)").removeClass("active");
		});
	}
	$(".carousel").carousel();
});
jQuery(document).ready(function(){
	if(jQuery(".carousel-inner-dps").length){jQuery(".carousel-inner-dps div:not(:first)").removeClass("active");}
	//jQuery(".carousel").carousel({interval:wp_bootstrap_carousel_js_vars.interval,pause:wp_bootstrap_carousel_js_vars.pause});
	jQuery(".carousel").carousel();
});
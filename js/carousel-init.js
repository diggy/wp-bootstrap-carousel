jQuery(document).ready(function($){
    if($(".carousel-inner").length){
        $(".carousel-inner .item img").each(function(){
            if($(this).parent().is( "a" ) && $(this).attr('data-wpbc_unwrap')) {
                $(this).unwrap();
            }
        });
    }
    if($(".carousel-inner-dps").length){
        $(".carousel-inner-dps").each(function(){
            $(this).find("div:not(:first)").removeClass("active");
        });
    }
    $(".carousel").carousel();
});

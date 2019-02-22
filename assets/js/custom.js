$(document).ready(function(){
    //----------------------gallery owl in single page-------------------
        var forsinglegall=$(".owl-item.active").find(".item").children().attr("src");
        $(".active_single_image").find("img").attr("src", forsinglegall);
      $(".owl-item").find(".item").click(function() {
        $(".active_single_image").find("img").attr("src", 
        $(this).find("img").attr("src"));
  });

  $('.tours').show();
$('.header_menu ul li span').on("click",function(e) {
	var content = $(e.target).attr('data-content');
	$('.'+content).show();
	$('.'+content).siblings(".sectionss").hide();
});
    // --------------------------------

    $(".header_menu ul li span").first().addClass("active_head_menu");
    $(".header_menu ul li span").click(function(){
        $(this).parent().siblings().children().removeClass("active_head_menu");
        $(this).addClass("active_head_menu");
    });
    

    $(".map-content path").click(function(){
        $(".fixed-index").addClass("active_fx_ind");
        
            var id="#"+$(this).attr("id");
            $(".fixed_content").find(".land").removeClass("active_fx_land");
            
        setTimeout(function(){$(".fixed_content").find(id).addClass("active_fx_land"); }, 400)
            var title= $(".fixed_content").find(id).attr("title");
            $(".fx_title").text(title);
            var link= $(this).attr("id") +".html"
            $(".fx_more").find("a").attr("href", link);
        
    });
    $(".exit_fixed").click(function(){
        $(".fixed-index").removeClass("active_fx_ind")
    });
    $(".search_btn").click(function(){
        $(".search_form").toggleClass("active_srch_frm")
    });
  });
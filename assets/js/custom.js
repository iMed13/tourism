$(document).ready(function(){
    $(".header_menu ul li a").first().addClass("active_head_menu");

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
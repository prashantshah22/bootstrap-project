$(document).ready(()=>{
    $(".btn").each(function(){
        $(this).click(function(){
            var filter=$(this).data("filter");
            $(".all").each(function(){
                $(this).hide();
                $("."+filter).each(function(){
                    $(this).fadeIn(500);
                })
            })
        })
    })
})

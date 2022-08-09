$(function(){
    $('.lnb3> li').mouseover(function(){
        $(this).children('.sub1').stop().slideDown();
    });

    $('.lnb3> li').mouseout(function(){
        $(this).children('.sub1').stop().slideUp();
    });
});
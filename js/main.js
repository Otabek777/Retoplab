$(function(){
    $('.header__navbar .item').click(function(){
        var target = $(this).attr('href');
        $('html, body').animate({scrollTop: $(target).offset().top}, 800);
        return false; 
    });
});
$('.services-open').click(function(){
    $(this).addClass("none");
    $(".services__box").addClass("active");
});

$(window).scroll(function() {
    let st = $(this).scrollTop();

    $(".star1").css({
        "transform" : "translate(0px, -" + st/15 + "px"
    });
    $(".star2").css({
        "transform" : "translate(0px, -" + st/20 + "px"
    });
    $(".star3").css({
        "transform" : "translate(0px, -" + st/25 + "px"
    });
    $(".star4").css({
        "transform" : "translate(0px, -" + st/12 + "px"
    });
    $(".banner__img .man").css({
        "transform" : "translate(0px, " + st/15 + "px"
    });
});
$(".header__burgir").click(function() {
    if($(".header__burgir").hasClass("active")) {
        $(".header__burgir").removeClass("rotate");
        $(".header__box").removeClass("transform");
        $(".header__navbar").removeClass("active");
        setTimeout(function() {
            $(".header__burgir").removeClass("active");
            $(".header__navbar").removeClass("opacity");
        }, 500);
    } else {
        $(".header__burgir").addClass("active");
        $(".header__box").addClass("transform");
        $(".header__navbar").addClass("active");
        setTimeout(function() {
            $(".header__burgir").addClass("rotate");
        }, 500);
        setTimeout(function() {
            $(".header__navbar").addClass("opacity");
        }, 1);
    }
});
// $(window).scroll(function(){
//     if ( $(this).scrollTop() > 50) {
//         $(".header").addClass("fixed");
//         $(".header__navbar").addClass("top");
//     } else {
//         $(".header").removeClass("fixed");
//         $(".header__navbar").removeClass("top");
//     }
// });
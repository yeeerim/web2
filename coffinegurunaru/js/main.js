$(function(){
  $('.list>li').mouseenter(function(){
    $('.depth2_bg').stop().slideDown(400)
    $('.depth2').stop().slideDown(400)
  });
  $('.depth2_bg').mouseleave(function(){
    $('.depth2').slideUp(300)
    $('.depth2_bg').slideUp(300)
  })

  $('.menu_slide').slick({
      // 슬라이드 자동실행
      autoplay: true,
      // 페이지버튼
      dots:true,
      arrows: false,
      autoplaySpeed:6000,
      pauseOnHover:false
  });

})
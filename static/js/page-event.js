$(function () {
  $.fn.fullpage({
    slidesColor: ['#fff', '#fff', '#fff', '#fff', '#fff'],
    anchors: ['page1', 'page2'],
    menu: '#menu',
    onLeave: function (index, direction) {
      let page = direction === 'up' ? 0 : 1;
      if (page === 0) {
        $(".find_nav_list").find('li').siblings('span').addClass('bottomLeft').removeClass('bottomRight');
      } else {
        $(".find_nav_list").find('li').siblings('span').addClass('bottomRight').removeClass('bottomLeft');
      }
      $(".find_nav_list").find('li').removeClass('find_nav_cur');
      $(".find_nav_list").find('li').eq(page).addClass('find_nav_cur');
    }
  });

  $("#QR_code").hover(function(){
      $(".arrow").show();
      $("#QR_code img").attr('src',"/static/images/wechat2.png");
  },function(){
      $(".arrow").hide();
      $("#QR_code img").attr('src',"/static/images/wechat.png");
  });

  $(".find_nav_list").find('li a').click(function(){
      var index = $(this).parent('li').index();
      $(this).parents('ul').find('li').removeClass('find_nav_cur');
      if (index === 0) {
          $(this).parent('li').siblings('span').addClass('bottomLeft').removeClass('bottomRight');
      } else {
          $(this).parent('li').siblings('span').addClass('bottomRight').removeClass('bottomLeft');
      }
      $(this).parent('li').addClass('find_nav_cur');
  })
})

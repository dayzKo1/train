$(function () {
  var a = false;
  //发射弹幕
  $('.send').click(function () {
    var val = $('.content').val();
    var $content = $('<div id ="p1" class="text">' + val + '</div>');
    $screen = $(document.getElementById("screen"));
    var top = Math.random() * $screen.height();
    var rdfontSize = Math.floor(Math.random() * 40 + 12); + 'px';
    var rdcolor = '#' + Math.floor(Math.random() * 0xffffff).toString(16);

    $content.css({
      top: top + "px",
      right: 0,
      fontSize: rdfontSize,
      color: rdcolor
    });
    if (a) {
      $content.css({
        opacity: 0.2
      })
    }
    $('.dm_show').append($content);

    $content.animate({
      right: $screen.width() - $content.width() + 80
    }, Math.random() * 10000, function () {
      $(this).remove();
    });



  });
  // 透明度
  $('.opacity').click(function () {
    a = !a;
    if (a) {
      $('.text').css({
        opacity: 0.2
      })
    }
    else {
      $('.text').css({
        opacity: 1
      })
    }
  })

  // 清空
  $('.clear').click(function () {
    $('.dm_show').empty();
  });
  
  //回车
  $('.content').keyup(function (e) {
    console.log(e.keyCode)
    if (e.keyCode == 13) {
      $('.send').click();
    }


  })



});
// $(selector).animate({params},speed,callback);
// 必需的 params 参数定义形成动画的 CSS 属性。
// 可选的 speed 参数规定效果的时长。它可以取以下值："slow"、"fast" 或毫秒。
// 可选的 callback 参数是动画完成后所执行的函数名称

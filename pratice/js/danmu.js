 //设置“发送”按钮点击事件，将弹幕体显示在弹幕墙上
$(function () {
  $('.send').click(function () {
    //获取文本输入框的内容
    var val = $('.content').val();
    //将文本框的内容赋值给val后，将文本框的内容清除，以便用户下一次输入
    //$('.content').val('');
    //将文本框内容用div包裹起来，便于后续处理
    var $content = $('<div class="text">' + val + '</div>');
    //获取弹幕墙对象
    $screen = $(document.getElementById("screen"));
    //设置弹幕体出现时的上边距，为任意值
    var top = Math.random() * $screen.height() + 40;
    //设置弹幕体的上边距和左边距
    $content.css({
      top: top + "px",
      right: 80
      
    });
    //将弹幕体添加到弹幕墙中
    $('.dm_show').append($content);
    //弹幕体从右到左，时间随机，到达删除
    $content.animate({
      right: $screen.width() + 80 - $content.width()
    }, Math.random()*10000, function () {
      $(this).remove();
    });
  });

  //设置“清屏”点击事件，清除弹幕墙中的所有内容
  $('.clear').click(function () {
    $('.dm_show').empty();
  });
});

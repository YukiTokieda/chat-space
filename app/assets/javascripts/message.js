$(function(){

  function buildHTML(message){
    var Image = message.image ? `<img src='${message.image}'> ` : '';
    // イメージの分岐
    var html = `<div class="message">
            <div class="message--info">

                <div class="message--info__user">
                 ${message.user_name}
                </div>

                <div class="message--info__date">
                 ${message.date}
                </div>

            </div>

            <div class="message--contents">
                <p class="message--contents__content">
                ${message.content}
                </p>

               </div>
                ${Image}
             </div>`
    return html;
  }

  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action')

    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
   })

   .done(function(data){
    var html = buildHTML(data);
    $('.messages').append(html)
    $('#new_message')[0].reset();
    // 入力欄のリセット
    $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight},'fast');
    // 最新のメッセージにスクロール
  })

  .fail(function(){
    alert('error');
  })

  return false;
  })
})
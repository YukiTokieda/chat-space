$(document).on('turbolinks:load', function(){

  $(function(){
    function buildHTML(message){
    var Image = message.image ? `<img src='${message.image}'> ` : '';
    // イメージの分岐
    var html =
      `<div class="message" data-id=${message.id}>
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


  // 自動更新

  var reloadMessages = function() {
    //カスタムデータ属性を利用し、ブラウザに表示されている最新メッセージのidを取得
    var gruop_id= location.pathname.split('/')[2];
  if (location.pathname.match('\/groups\/'+ gruop_id +'\/messages')){
    last_message_id = $('.message').last().data('id');

    $.ajax({
      //ルーティングで設定した通りのURLを指定
      url: `/groups/${gruop_id}/api/messages`,
      type: 'get',
      dataType: 'json',
      data: {id: last_message_id, gruop_id: gruop_id}
    })

    .done(function(messages) {
      //配列messagesの中身一つ一つを取り出し、HTMLに変換したものを入れ物に足し合わせる
      if (messages.length !== 0) {
        messages.forEach(function(message) {
        //メッセージが入ったHTMLを取得
        var html = buildHTML(message)
        //メッセージを追加
        $('.messages').append(html);
        $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight }, 'fast');
      });
      }
    })
    .fail(function() {
    alert('自動更新に失敗しました');
    });
  }
  };
  setInterval(reloadMessages, 5000);
  });
});
$(function(){
  function buildHTML(message){
    console.log(message)
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
               <image src=${message.image}>
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
    $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight},'fast');
  })

  .fail(function(){
    alert('error');
  })

  return false;
  })
})

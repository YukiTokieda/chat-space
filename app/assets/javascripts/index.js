$(document).on('turbolinks:load', function() {
  $(function() {
    var search_list = $("#user-search-result");

  function appendUser(user) {
    var html =
    `<div class="chat-group-user clearfix">
      <p class="chat-group-user__name">${ user.name }</p>
      <div class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="${user.id}" data-user-name="${user.name}">追加</div>
     </div>`
      search_list.append(html);
  }

  function appendErrMsgToHTML(user){
    var html = `<div class='chat-group-user clearfix'>
                  <p class='chat-group-user__name'>${user}</p>
                </div>`
    search_list.append(html);
  }

  $("#user-search-field").on("keyup", function() {
    var input = $("#user-search-field").val();

    $.ajax({
    type: 'GET',
    url: '/users',
    data: { keyword: input },
    dataType: 'json'
    })

    .done(function(users) {
    $("#user-search-result").empty();
    if (users.length !== 0) {
      users.forEach(function(user){
        appendUser(user);
      });
    }
    else {
      appendErrMsgToHTML("一致するユーザーは存在しません");
    }
    })

    .fail(function() {
      alert('ユーザー検索に失敗しました');
    })
  });

  function addUser(user_id, user_name) {
    var html =
    `<div class='chat-group-user clearfix' id='chat-group-user-8'>
      <input name='group[user_ids][]' type='hidden' value='${user_id}'>
      <p class='chat-group-user__name'>${user_name}</p>
      <a class='user-search-remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn'>削除</a>
    </div>`
    $('#chat-group-users').append(html);
  }

  $('#user-search-result').on("click",'.chat-group-user__btn--add',function() {
    var user_id = $(this).data('user-id');
    var user_name = $(this).data('user-name');
      addUser(user_id, user_name);
      $(this).parent().remove();
  });

  $('#chat-group-users').on('click','.chat-group-user__btn--remove',function(){
    $(this).parent().remove();
  });

 });
});
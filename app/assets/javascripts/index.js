$(function() {
  var search_list = $("#user-search-result");
  function appendUser(user) {
    var html =
    `<div class="chat-group-user clearfix">
      <p class="chat-group-user__name">${ user.name }</p>
      <div class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="ユーザーのid" data-user-name="ユーザー名">追加</div>
     </div>`
      search_list.append(html);
   }

   function appendErrMsgToHTML(msg) {
    var html =
    `
    <div class='listview__element--right-icon'>${ msg }</div>
    `
        search_list.append(html);
   }

  $(".chat-group-form__input").on("keyup", function() {
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
        console.log(users)
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
});

$(function() {
  function buildHTML(message) {
    console.log(message.image)
      var content = message.content ? `<p class="lower-message__content">${message.content}</p>`:``;
      var image = message.image ? `<img src="${message.image}" class="lower-message__image">`:``;
      var html = `<div class="message" data-message-id="${message.id}">
            <div class="upper-message">
              <div class="upper-message__user-name">
                ${ message.user_name }
              </div>
              <div class="upper-message__date">
                ${ message.created_at }
              </div>
            </div>
            <div class="lower-message">
                ${ content }
                ${ image }
            </div>
          </div>`
      return html;
    };
    $('#new_message').on('submit', function(e){
      e.preventDefault();
      var formData = new FormData(this);
      var url = $(this).attr('action');
      $.ajax({
        url: url,
        type: 'POST',
        data: formData,
        dataType: 'json',
        processData: false,
        contentType: false,
      })
      .done(function(data){
        if ( data.content != undefined ){
        var html = buildHTML(data);
        $('.messages').append(html);
        $('#new_message')[0].reset();
        $(".form__submit").prop("disabled", false);
        $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight}, 'fast');
        }
        else{
          alert("メッセージを入力してください")
        }
      })
      .fail(function(){
        alert('メッセージの送信に失敗しました');
      });
    })

    var interval = setInterval(function() {
      if (window.location.href.match(/\/groups\/\d+\/messages/)) {
        var href = 'api/messages'
        var last_message_id = $(".message:last").data("message-id");
        $.ajax({
          url: href,
          type: "GET",
          data: {id: last_message_id},
          dataType: "json",
        })
        .done(function(data) {
          var insertHTML = '';
          messages.forEach(function (message) {
            insertHTML = buildHTML(message)
            $('.messages').append(insertHTML);
            $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight}, 'fast');
          })
        })
        .fail(function() {
          alert("更新に失敗しました")
        });
    } else {
      clearInterval(interval);
    }
  } , 5000 );   
});
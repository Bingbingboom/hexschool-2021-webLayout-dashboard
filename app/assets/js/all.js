// $(function() {
//   console.log('Hello Bootstrap5');
// });

$(document).ready(function(){

  // Assignment 對話欄
  $('.js-reply').click(function(event){
    event.preventDefault();
    $('.replyBtn').toggleClass('d-none');
    $('.assignmentPage').toggleClass('d-none');
    $('.replyText').toggleClass('d-none');
    $('.replyInput').toggleClass('d-none');
  });

  $('.js-replyCancel').click(function(event){
    event.preventDefault();
    $('.replyBtn').toggleClass('d-none');
    $('.assignmentPage').toggleClass('d-none');
    $('.replyText').toggleClass('d-none');
    $('.replyInput').toggleClass('d-none');
  });

  // view modal 下拉按鈕
  $('.js-dropDown').click(function(event){
    $('.js-dropDown').toggleClass('dropDownClick');
    $('.js-dropDownBtn').toggleClass('d-none');
  });
});
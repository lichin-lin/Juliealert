// ===== Function Start =====
function Julie(content){
  if(isEmpty(content.errorText)){
    $('.Julie-Alert .error').css("display","none");
  }else{
    $('.Julie-Alert .error').css("display","inline-block");
  }
  if(isEmpty(content.confirmText)){
    $('.Julie-Alert .confirm').css("display","none");
  }else{
    $('.Julie-Alert .confirm').css("display","inline-block");
  }
  
  $('.Julie-Alert h2').text(content.title);
  $('.Julie-Alert .Alert-content').html(content.text);
  $('.Julie-Alert .confirm').text(content.confirmText);
  $('.Julie-Alert .error').text(content.errorText);

  $('.Julie-board').css({
    width: FindLarge(),
    height: FindLarge(),
    top: topOffset() + "px",
    left: leftOffset() + "px",
  }).addClass('showJulieAlertBoard');
  
    $('.Julie-Alert')
      .removeClass('hideJulieAlert')
      .css({
      display:"flex",
      opacity:1,
      "margin-top": -$('.Julie-Alert').height()/2
    })
  if(!content.Pop){
    $('.Julie-Alert').addClass('showJulieAlert');  
  }else{
    $('.Julie-Alert').addClass('showJulieAlertPop');
  }

  
                          
  $('.Julie-Alert button').click(function(){
    $('.Julie-board').removeClass('showJulieAlertBoard');
    $('.Julie-Alert').removeClass('showJulieAlert');
    $('.Julie-Alert').removeClass('showJulieAlertPop');
    $('.Julie-Alert') 
      .addClass('hideJulieAlert')
      .css({
      display:"none",
      opacity:0
    });
  });

}


function isEmpty(str) {
  return typeof str == 'string' && !str.trim() || typeof str == 'undefined' || str === null;
}
function FindLarge(){
  return $(window).width() > $(window).height() ? $(window).width() : $(window).height();
}
function topOffset(){
  return $(window).width() > $(window).height() ? $(window).height()/2 - $(window).width()/2 : 0;
}
function leftOffset(){
  return $(window).width() > $(window).height() ? 0 : $(window).width()/2 - $(window).height()/2;
}
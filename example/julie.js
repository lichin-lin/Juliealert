$('.basic button').click(function(){
  Julie({
    title: "Julie!",
    text: "Nice to meet you!",
    confirmText: "ok",
    errorText:"",
    Pop:false,
  });
});



$('.try-pop button').click(function(){
  Julie({
    title: "Pop!",
    text: "animation feature,Pop-Style",
    confirmText: "Know!",
    errorText:"",
    Pop: true
  });
});



$(".try-confirm button").click(function(){
  Julie({
    title: "Cool!Right?",
    text: "<h3>Here's a custom-HTML-Style!</h3>",
    errorText:"cancel!",
    Pop:false
  });
});


$(".try-error button").click(function(){
  Julie({
    title: "Wait!there's more",
    text: "<h1>last demo style!<br>IT IS FANCY<br>HTML element<h1>",
    confirmText: "bro!",
    errorText:"I will miss you!!",
    Pop:false
  });
});
# JulieAlert

JulieAlert let you display Javascript alert function with beautiful custom style. 
<br>
All you need is ```julie```:grin::grin::grin:.
<br>
![JulieAlert.gif](https://raw.githubusercontent.com/lichin-lin/Juliealert/master/JulieAlert.gif)



## Setup

download the package and reference the JavaScript and CSS files manually:
```html
  <script src="assets/juliealert.min.js"></script>
  <link href="assets/juliealert.min.css" rel="stylesheet">
```

##Example

using jquery to control ```julie``` function:

1.Basic style:
```javascript
$('button').click(function(){
  Julie({
    title: "Julie!",
    text: "Nice to meet you!",
    confirmText:"got it",
    errorText:"",
    Pop:false,
  });
});
```
___
<br>


2.With different animation style:
```javascript
$('button').click(function(){
  Julie({
    title: "Pop!",
    text: "animation feature,Pop-Style",
    confirmText: "Know!",
    errorText:"",
    Pop: true
  });
});
```
___
<br>



3.Even \<a\> tag in button:
```javascript
$("button").click(function(){
  Julie({
    title: "Cool!Right?",
    text: "click the button below!",
    errorText: JulieUrl("really?","https://github.com/lichin-lin/Juliealert"),
    Pop:false
  });
});
```
___
<br>


4.Customized your input in HTML style:
```javascript
$("button").click(function(){
  Julie({
    title: "Wait!there's more",
    text: "<h1>last demo style!<br>IT IS FANCY<br>HTML element<h1>",
    confirmText: "bro!",
    errorText:"I will miss you!!",
    Pop:false
  });
});
```
___


# JulieAlert

JulieAlert let you display Javascript alert function with beautiful custom style. 
<br>
All you need is ```julie```:grin::grin::grin:.
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
    text: "Basic style!",
    confirmText: "ok",
    errorText:"",
    Pop:false,
  });
});
```
___
<br>


2.With confirm & error button:
```javascript
$('button').click(function(){
  Julie({
    title: "Julie!",
    text: "do it!",
    confirmText: "ok",
    errorText:"nope!",
    Pop:false,
  });
});
```
___
<br>



3.Even with different animation style:
```javascript
$('button').click(function(){
  Julie({
    title: "Julie!",
    text: "Popping",
    confirmText: "wow",
    errorText:"cool",
    Pop:true,
  });
});
```
___
<br>


4.Customized your input in HTML style:
```javascript
$('button').click(function(){
  Julie({
    title: "Julie!",
    text: "<a>HTML inside~</a>",
    confirmText: "got it",
    errorText:"good bye",
    Pop:false,
  });
});
```
___


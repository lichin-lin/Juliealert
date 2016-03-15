# JulieAlert

JulieAlert let you display Javascript`s alert function with beautiful custom style. 
All you need is ``julie``.
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


4.Even with different animation style:
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

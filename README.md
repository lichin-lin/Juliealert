# JulieAlert

## All you need is ``julie``
JulieAlert let you display Javascript`s alert function with beautiful custom style. 
![JulieAlert.gif](https://raw.githubusercontent.com/lichin-lin/Juliealert/master/JulieAlert.gif)



## Setup

download the package and reference the JavaScript and CSS files manually:
<pre><code>  &lt;script src="assets/juliealert.min.js"&gt;&lt;script&gt;
  &lt;link href="assets/juliealert.min.css" rel="stylesheet" &gt;
</code></pre>

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

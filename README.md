# get-font-styles

This is a tiny module that takes a DOM element as input and returns an object
with that element and a `styles` array with the following properties:

`font-family`, `font-size`, `font-weight`, `font-style`.

## Basic usage

```javascript
var getFontStyles = require('get-font-styles');

getFontStyles(element);
```

## More Realistic Usage

```javascript
document.addEventListener('click', function(e) {
  e = e || window.event;
  var target = e.target || e.srcElement;

  var elementWithStyles = getFontStyles(target);

  console.log(elementWithStyles);
});

  /*
    { element: <div id="test1" style="font-family: Helvetica; font-size: 16px; font-weight: 400; font-style: normal;"></div>,
      styles: [
        {'font-family': 'Helvetica'},
        {'font-size': '16px'},
        {'font-weight': '400'},
        {'font-style': 'normal'}
      ]
    }
  */
```

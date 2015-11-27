var getComputedStyle = require('computed-style');
var fontStyles = ['font-family', 'font-size', 'font-weight', 'font-style'];

function createElement (element) {
  return {'element': element, styles: []};
}

function addStyle (element, item, style) {
  if (style === '') {
    style = undefined;
  }
  element.styles.push({[item]: style});
}

module.exports = function (element) {
  var elementObj = createElement(element);

  fontStyles.forEach(function (item) {
    var style = getComputedStyle(element, item);
    addStyle(elementObj, item, style);
  });

  return elementObj;
};

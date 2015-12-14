var getFontStyles = require('../index');
var test = require('tape');
var dom = require('jsdom');

test ('confidence check with all styles', function (t) {
  dom.env({
    html: '<div id="test1" style="font-family: Helvetica; font-size: 16px; font-weight: 400; font-style: normal;"></div>',
    scripts: [],
    done: function (err, window) {
      if (err) {
        throw err;
      }

      global.window = window;

      var document = window.document;

      var div = document.getElementById('test1');

      t.deepEqual(getFontStyles(div), { element: div, styles: [{ 'font-family': 'Helvetica' }, { 'font-size': '16px' }, { 'font-weight': '400' }, { 'font-style': 'normal' }] });
      t.end();
    }
  });
});

test ('confidence check with a missing style', function (t) {
  dom.env({
    html: '<div id="test1" style="font-family: Helvetica; font-weight: 400; font-style: normal;"></div>',
    scripts: [],
    done: function (err, window) {
      if (err) {
        throw err;
      }
      
      global.window = window;

      var document = window.document;

      var div = document.getElementById('test1');

      t.deepEqual(getFontStyles(div), { element: div, styles: [{ 'font-family': 'Helvetica' }, { 'font-size': undefined }, { 'font-weight': '400' }, { 'font-style': 'normal' }] });
      t.end();
    }
  });
});

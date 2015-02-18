'use strict';

module.exports = setJsObject;

function setJsObject(key, value) {
  if (key) {
    var o = {};
    o[key] = value;
    return o;
  }
}

'use strict';

module.exports = setJsObject;

function setJsObject(key, value) {
  if (key) {
    var newObject = {};
    newObject[key] = value;
    return newObject;
  }
}

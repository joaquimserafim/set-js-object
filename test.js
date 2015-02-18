'use strict';

var Lab   = require('lab');
var Code  = require('code');

var setJsObject = require('./');

var lab = module.exports.lab = Lab.script();

var describe  = lab.describe;
var it        = lab.it;
var expect    = Code.expect;

describe('create a JS Object', function() {
  it('should create an object', function(done) {
    var obj = setJsObject('key', {a: 1});
    expect(obj).to.be.an.object();
    done();
  });

  it('passing a number as key should create the object', function(done) {
    var obj = setJsObject(1, {a: 1});
    expect(obj).to.be.an.object();
    done();
  });

  it('passing an empty value should create the object with a "undefined" value',
  function(done) {
    var obj = setJsObject('key');
    expect(obj).to.be.an.object();
    expect(obj.key).to.be.undefined();
    done();
  });

  it('passing an empty key should return undefined', function(done) {
    var obj = setJsObject();
    expect(obj).to.be.undefined();
    done();
  });
});

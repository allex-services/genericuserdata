function createCryptoUserSink(execlib, ParentSink) {
  'use strict';
  function CryptoUserSink(prophash, client) {
    ParentSink.call(this, prophash, client);
  }
  
  ParentSink.inherit(CryptoUserSink, {}, require('../visiblefields/cryptouser'),require('../storagedescriptor'));
  CryptoUserSink.prototype.__cleanUp = function () {
    ParentSink.prototype.__cleanUp.call(this);
  };
  return CryptoUserSink;
}

module.exports = createCryptoUserSink;

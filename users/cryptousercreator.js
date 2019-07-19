function createCryptoUser(execlib, ParentUser) {
  'use strict';
  if (!ParentUser) {
    ParentUser = execlib.execSuite.ServicePack.Service.prototype.userFactory.get('user');
  }

  function CryptoUser(prophash) {
    ParentUser.call(this, prophash);
  }
  
  ParentUser.inherit(CryptoUser, {}, [/*visible state fields here*/]/*or a ctor for StateStream filter*/, require('../visiblefields/cryptouser'));
  CryptoUser.prototype.__cleanUp = function () {
    ParentUser.prototype.__cleanUp.call(this);
  };

  return CryptoUser;
}

module.exports = createCryptoUser;

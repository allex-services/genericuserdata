function createGenericUserDataService(execlib, ParentService) {
  'use strict';
  var dataSuite = execlib.dataSuite;

  function factoryCreator(parentFactory) {
    return {
      'service': require('./users/serviceusercreator')(execlib, parentFactory.get('service')),
      'user': require('./users/usercreator')(execlib, parentFactory.get('user')) 
    };
  }

  function GenericUserDataService(prophash) {
    ParentService.call(this, prophash);
  }
  
  ParentService.inherit(GenericUserDataService, factoryCreator, require('./storagedescriptor'));
  
  GenericUserDataService.prototype.__cleanUp = function() {
    ParentService.prototype.__cleanUp.call(this);
  };
  GenericUserDataService.prototype.createStorage = function(storagedescriptor) {
    return ParentService.prototype.createStorage.call(this, storagedescriptor);
  };
  return GenericUserDataService;
}

module.exports = createGenericUserDataService;

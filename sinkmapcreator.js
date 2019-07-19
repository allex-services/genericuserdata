function sinkMapCreator(execlib, ParentSinkMap) {
  'use strict';
  var sinkmap = require('./websinkmapcreator')(execlib, ParentSinkMap);
  sinkmap.add('crypto', require('./sinks/cryptousersinkcreator')(execlib, ParentSinkMap.get('user')));
  
  return sinkmap;
}

module.exports = sinkMapCreator;

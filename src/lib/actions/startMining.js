'use strict';
var loadMiner = require('./helpers/loadMiner');

module.exports = function() {
  loadMiner().then(function(miner) {
    miner.start();
  });
};

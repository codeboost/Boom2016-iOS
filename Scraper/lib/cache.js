// Generated by IcedCoffeeScript 1.8.0-c
(function() {
  var Cache, fs, mkdirp;

  fs = require('fs');

  mkdirp = require('mkdirp');

  Cache = (function() {
    function Cache(cacheDir, enabled) {
      var error;
      this.cacheDir = cacheDir;
      this.enabled = enabled;
      try {
        mkdirp.sync(this.cacheDir);
      } catch (_error) {
        error = _error;
      }
    }

    Cache.prototype.cacheFileName = function(keyName) {
      var fileName;
      keyName = keyName.replace(/\//g, '_');
      fileName = "" + this.cacheDir + "/" + keyName + ".json";
      return fileName;
    };

    Cache.prototype.saveToCache = function(keyName, data) {
      var fileName;
      fileName = this.cacheFileName(keyName);
      if (data == null) {
        data = {};
      }
      return fs.writeFile(fileName, JSON.stringify(data, void 0, 2), function(err) {
        if (err) {
          return console.error("Failed to save cache file: " + fileName);
        }
        return console.log("Written response to cache file " + fileName + ".");
      });
    };

    Cache.prototype.queryCache = function(keyName) {
      var e, fileName, result;
      if (!this.enabled) {
        return null;
      }
      fileName = this.cacheFileName(keyName);
      try {
        result = require(fileName);
      } catch (_error) {
        e = _error;
      }
      return result;
    };

    return Cache;

  })();

  module.exports = Cache;

}).call(this);
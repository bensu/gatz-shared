var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./com.cognitect.transit.util.js");
var cognitect=$CLJS.cognitect || ($CLJS.cognitect = {});
var clojure=$CLJS.clojure || ($CLJS.clojure = {});
var crdt=$CLJS.crdt || ($CLJS.crdt = {});
var cljs=$CLJS.cljs || ($CLJS.cljs = {});
var shadow=$CLJS.shadow || ($CLJS.shadow = {});
var goog=$CLJS.goog || ($CLJS.goog = {});
var gatz=$CLJS.gatz || ($CLJS.gatz = {});
var medley=$CLJS.medley || ($CLJS.medley = {});
var com=$CLJS.com || ($CLJS.com = {});

$CLJS.SHADOW_ENV.setLoaded("com.cognitect.transit.eq.js");

goog.provide("com.cognitect.transit.eq");
goog.require("com.cognitect.transit.util");
goog.scope(function() {
  var eq = com.cognitect.transit.eq;
  var util = com.cognitect.transit.util;
  eq.hashCodeProperty = "transit$hashCode$";
  eq.hashCodeCounter = 1;
  eq.equals = function(x, y) {
    if (x == null) {
      return y == null;
    } else if (x === y) {
      return true;
    } else if (typeof x === "object") {
      if (util.isArray(x)) {
        if (util.isArray(y)) {
          if (x.length === y.length) {
            var i = 0;
            for (; i < x.length; i++) {
              if (!eq.equals(x[i], y[i])) {
                return false;
              }
            }
            return true;
          } else {
            return false;
          }
        } else {
          return false;
        }
      } else if (x.com$cognitect$transit$equals) {
        return x.com$cognitect$transit$equals(y);
      } else if (y != null && typeof y === "object") {
        if (y.com$cognitect$transit$equals) {
          return y.com$cognitect$transit$equals(x);
        } else {
          var xklen = 0;
          var yklen = util.objectKeys(y).length;
          var p;
          for (p in x) {
            if (!x.hasOwnProperty(p)) {
              continue;
            }
            xklen++;
            if (!y.hasOwnProperty(p)) {
              return false;
            } else {
              if (!eq.equals(x[p], y[p])) {
                return false;
              }
            }
          }
          return xklen === yklen;
        }
      } else {
        return false;
      }
    } else {
      return false;
    }
  };
  eq.hashCombine = function(seed, hash) {
    return seed ^ hash + 2654435769 + (seed << 6) + (seed >> 2);
  };
  eq.stringCodeCache = {};
  eq.stringCodeCacheSize = 0;
  eq.STR_CACHE_MAX = 256;
  eq.hashString = function(str) {
    var cached = eq.stringCodeCache[str];
    if (cached != null) {
      return cached;
    }
    var code = 0;
    var i = 0;
    for (; i < str.length; ++i) {
      code = 31 * code + str.charCodeAt(i);
      code = code % 4294967296;
    }
    eq.stringCodeCacheSize++;
    if (eq.stringCodeCacheSize >= eq.STR_CACHE_MAX) {
      eq.stringCodeCache = {};
      eq.stringCodeCacheSize = 1;
    }
    eq.stringCodeCache[str] = code;
    return code;
  };
  eq.hashMapLike = function(m) {
    var code = 0;
    if (m.forEach != null) {
      m.forEach(function(val, key, m) {
        code = (code + (eq.hashCode(key) ^ eq.hashCode(val))) % 4503599627370496;
      });
    } else {
      var keys = util.objectKeys(m);
      var i = 0;
      for (; i < keys.length; i++) {
        var key = keys[i];
        var val = m[key];
        code = (code + (eq.hashCode(key) ^ eq.hashCode(val))) % 4503599627370496;
      }
    }
    return code;
  };
  eq.hashArrayLike = function(arr) {
    var code = 0;
    if (util.isArray(arr)) {
      var i = 0;
      for (; i < arr.length; i++) {
        code = eq.hashCombine(code, eq.hashCode(arr[i]));
      }
    } else if (arr.forEach) {
      arr.forEach(function(x, i) {
        code = eq.hashCombine(code, eq.hashCode(x));
      });
    }
    return code;
  };
  eq.hashCode = function(x) {
    if (x == null) {
      return 0;
    } else {
      switch(typeof x) {
        case "number":
          return x;
          break;
        case "boolean":
          return x === true ? 1 : 0;
          break;
        case "string":
          return eq.hashString(x);
          break;
        case "function":
          var code = x[eq.hashCodeProperty];
          if (code) {
            return code;
          } else {
            code = eq.hashCodeCounter;
            if (typeof Object.defineProperty != "undefined") {
              Object.defineProperty(x, eq.hashCodeProperty, {value:code, enumerable:false});
            } else {
              x[eq.hashCodeProperty] = code;
            }
            eq.hashCodeCounter++;
            return code;
          }
          break;
        default:
          if (x instanceof Date) {
            return x.valueOf();
          } else if (util.isArray(x)) {
            return eq.hashArrayLike(x);
          }
          if (x.com$cognitect$transit$hashCode) {
            return x.com$cognitect$transit$hashCode();
          } else {
            return eq.hashMapLike(x);
          }
          break;
      }
    }
  };
  eq.extendToEQ = function(obj, opts) {
    obj.com$cognitect$transit$hashCode = opts["hashCode"];
    obj.com$cognitect$transit$equals = opts["equals"];
    return obj;
  };
});

module.exports = com.cognitect.transit.eq;

//# sourceMappingURL=com.cognitect.transit.eq.js.map

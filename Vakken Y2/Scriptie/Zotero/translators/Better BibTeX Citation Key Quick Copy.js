{
	"translatorID": "a515a220-6fef-45ea-9842-8025dfebcc8f",
	"label": "Better BibTeX Citation Key Quick Copy",
	"description": "exports citations to be copy-pasted into your LaTeX/Markdown /Org-mode/etc documents",
	"creator": "Emiliano heyns",
	"target": "txt",
	"minVersion": "4.0.27",
	"maxVersion": "",
	"translatorType": 2,
	"browserSupport": "gcsv",
	"priority": 100,
	"displayOptions": {
		"quickCopyMode": ""
	},
	"inRepository": false,
	"configOptions": {
		"hash": "d7b45aaaac090eeee649925489c9577f33364a8bdfd61ef984f33a41b56fb20f"
	},
	"lastUpdated": "2025-05-08"
}

ZOTERO_CONFIG = {"GUID":"zotero@zotero.org","ID":"zotero","CLIENT_NAME":"Zotero","DOMAIN_NAME":"zotero.org","PRODUCER":"Digital Scholar","PRODUCER_URL":"https://digitalscholar.org","REPOSITORY_URL":"https://repo.zotero.org/repo/","BASE_URI":"http://zotero.org/","WWW_BASE_URL":"https://www.zotero.org/","PROXY_AUTH_URL":"https://zoteroproxycheck.s3.amazonaws.com/test","API_URL":"https://api.zotero.org/","STREAMING_URL":"wss://stream.zotero.org/","SERVICES_URL":"https://services.zotero.org/","API_VERSION":3,"CONNECTOR_MIN_VERSION":"5.0.39","PREF_BRANCH":"extensions.zotero.","BOOKMARKLET_ORIGIN":"https://www.zotero.org","BOOKMARKLET_URL":"https://www.zotero.org/bookmarklet/","START_URL":"https://www.zotero.org/start","QUICK_START_URL":"https://www.zotero.org/support/quick_start_guide","PDF_TOOLS_URL":"https://www.zotero.org/download/xpdf/","SUPPORT_URL":"https://www.zotero.org/support/","SYNC_INFO_URL":"https://www.zotero.org/support/sync","TROUBLESHOOTING_URL":"https://www.zotero.org/support/getting_help","FEEDBACK_URL":"https://forums.zotero.org/","CONNECTORS_URL":"https://www.zotero.org/download/connectors","CHANGELOG_URL":"https://www.zotero.org/support/changelog","CREDITS_URL":"https://www.zotero.org/support/credits_and_acknowledgments","LICENSING_URL":"https://www.zotero.org/support/licensing","GET_INVOLVED_URL":"https://www.zotero.org/getinvolved","DICTIONARIES_URL":"https://download.zotero.org/dictionaries/","PLUGINS_URL":"https://www.zotero.org/support/plugins","NEW_FEATURES_URL":"https://www.zotero.org/blog/zotero-7/"}

        if (typeof ZOTERO_TRANSLATOR_INFO === 'undefined') var ZOTERO_TRANSLATOR_INFO = {}; // declare if not declared
        Object.assign(ZOTERO_TRANSLATOR_INFO, {"translatorID":"a515a220-6fef-45ea-9842-8025dfebcc8f","label":"Better BibTeX Citation Key Quick Copy","description":"exports citations to be copy-pasted into your LaTeX/Markdown /Org-mode/etc documents","creator":"Emiliano heyns","target":"txt","minVersion":"4.0.27","maxVersion":"","translatorType":2,"browserSupport":"gcsv","priority":100,"displayOptions":{"quickCopyMode":""},"inRepository":false}); // assign new data
      
var { citeCreators, doExport, yearFromDate } = (() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all) => {
    for (var name2 in all)
      __defProp(target, name2, { get: all[name2], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // node_modules/@stdlib/utils-define-property/lib/define_property.js
  var require_define_property = __commonJS({
    "node_modules/@stdlib/utils-define-property/lib/define_property.js"(exports, module) {
      var main = typeof Object.defineProperty === "function" ? Object.defineProperty : null;
      module.exports = main;
    }
  });

  // node_modules/@stdlib/utils-define-property/lib/has_define_property_support.js
  var require_has_define_property_support = __commonJS({
    "node_modules/@stdlib/utils-define-property/lib/has_define_property_support.js"(exports, module) {
      var defineProperty = require_define_property();
      function hasDefinePropertySupport() {
        try {
          defineProperty({}, "x", {});
          return true;
        } catch (err) {
          return false;
        }
      }
      module.exports = hasDefinePropertySupport;
    }
  });

  // node_modules/@stdlib/utils-define-property/lib/builtin.js
  var require_builtin = __commonJS({
    "node_modules/@stdlib/utils-define-property/lib/builtin.js"(exports, module) {
      var defineProperty = Object.defineProperty;
      module.exports = defineProperty;
    }
  });

  // node_modules/@stdlib/string-base-format-interpolate/lib/is_number.js
  var require_is_number = __commonJS({
    "node_modules/@stdlib/string-base-format-interpolate/lib/is_number.js"(exports, module) {
      function isNumber(value) {
        return typeof value === "number";
      }
      module.exports = isNumber;
    }
  });

  // node_modules/@stdlib/string-base-format-interpolate/lib/zero_pad.js
  var require_zero_pad = __commonJS({
    "node_modules/@stdlib/string-base-format-interpolate/lib/zero_pad.js"(exports, module) {
      function startsWithMinus(str) {
        return str[0] === "-";
      }
      function zeros(n) {
        var out = "";
        var i;
        for (i = 0; i < n; i++) {
          out += "0";
        }
        return out;
      }
      function zeroPad(str, width, right) {
        var negative = false;
        var pad = width - str.length;
        if (pad < 0) {
          return str;
        }
        if (startsWithMinus(str)) {
          negative = true;
          str = str.substr(1);
        }
        str = right ? str + zeros(pad) : zeros(pad) + str;
        if (negative) {
          str = "-" + str;
        }
        return str;
      }
      module.exports = zeroPad;
    }
  });

  // node_modules/@stdlib/string-base-format-interpolate/lib/format_integer.js
  var require_format_integer = __commonJS({
    "node_modules/@stdlib/string-base-format-interpolate/lib/format_integer.js"(exports, module) {
      var isNumber = require_is_number();
      var zeroPad = require_zero_pad();
      var lowercase = String.prototype.toLowerCase;
      var uppercase = String.prototype.toUpperCase;
      function formatInteger(token) {
        var base;
        var out;
        var i;
        switch (token.specifier) {
          case "b":
            base = 2;
            break;
          case "o":
            base = 8;
            break;
          case "x":
          case "X":
            base = 16;
            break;
          case "d":
          case "i":
          case "u":
          default:
            base = 10;
            break;
        }
        out = token.arg;
        i = parseInt(out, 10);
        if (!isFinite(i)) {
          if (!isNumber(out)) {
            throw new Error("invalid integer. Value: " + out);
          }
          i = 0;
        }
        if (i < 0 && (token.specifier === "u" || base !== 10)) {
          i = 4294967295 + i + 1;
        }
        if (i < 0) {
          out = (-i).toString(base);
          if (token.precision) {
            out = zeroPad(out, token.precision, token.padRight);
          }
          out = "-" + out;
        } else {
          out = i.toString(base);
          if (!i && !token.precision) {
            out = "";
          } else if (token.precision) {
            out = zeroPad(out, token.precision, token.padRight);
          }
          if (token.sign) {
            out = token.sign + out;
          }
        }
        if (base === 16) {
          if (token.alternate) {
            out = "0x" + out;
          }
          out = token.specifier === uppercase.call(token.specifier) ? uppercase.call(out) : lowercase.call(out);
        }
        if (base === 8) {
          if (token.alternate && out.charAt(0) !== "0") {
            out = "0" + out;
          }
        }
        return out;
      }
      module.exports = formatInteger;
    }
  });

  // node_modules/@stdlib/string-base-format-interpolate/lib/is_string.js
  var require_is_string = __commonJS({
    "node_modules/@stdlib/string-base-format-interpolate/lib/is_string.js"(exports, module) {
      function isString(value) {
        return typeof value === "string";
      }
      module.exports = isString;
    }
  });

  // node_modules/@stdlib/string-base-format-interpolate/lib/format_double.js
  var require_format_double = __commonJS({
    "node_modules/@stdlib/string-base-format-interpolate/lib/format_double.js"(exports, module) {
      var isNumber = require_is_number();
      var abs = Math.abs;
      var lowercase = String.prototype.toLowerCase;
      var uppercase = String.prototype.toUpperCase;
      var replace = String.prototype.replace;
      var RE_EXP_POS_DIGITS = /e\+(\d)$/;
      var RE_EXP_NEG_DIGITS = /e-(\d)$/;
      var RE_ONLY_DIGITS = /^(\d+)$/;
      var RE_DIGITS_BEFORE_EXP = /^(\d+)e/;
      var RE_TRAILING_PERIOD_ZERO = /\.0$/;
      var RE_PERIOD_ZERO_EXP = /\.0*e/;
      var RE_ZERO_BEFORE_EXP = /(\..*[^0])0*e/;
      function formatDouble(token) {
        var digits;
        var out;
        var f = parseFloat(token.arg);
        if (!isFinite(f)) {
          if (!isNumber(token.arg)) {
            throw new Error("invalid floating-point number. Value: " + out);
          }
          f = token.arg;
        }
        switch (token.specifier) {
          case "e":
          case "E":
            out = f.toExponential(token.precision);
            break;
          case "f":
          case "F":
            out = f.toFixed(token.precision);
            break;
          case "g":
          case "G":
            if (abs(f) < 1e-4) {
              digits = token.precision;
              if (digits > 0) {
                digits -= 1;
              }
              out = f.toExponential(digits);
            } else {
              out = f.toPrecision(token.precision);
            }
            if (!token.alternate) {
              out = replace.call(out, RE_ZERO_BEFORE_EXP, "$1e");
              out = replace.call(out, RE_PERIOD_ZERO_EXP, "e");
              out = replace.call(out, RE_TRAILING_PERIOD_ZERO, "");
            }
            break;
          default:
            throw new Error("invalid double notation. Value: " + token.specifier);
        }
        out = replace.call(out, RE_EXP_POS_DIGITS, "e+0$1");
        out = replace.call(out, RE_EXP_NEG_DIGITS, "e-0$1");
        if (token.alternate) {
          out = replace.call(out, RE_ONLY_DIGITS, "$1.");
          out = replace.call(out, RE_DIGITS_BEFORE_EXP, "$1.e");
        }
        if (f >= 0 && token.sign) {
          out = token.sign + out;
        }
        out = token.specifier === uppercase.call(token.specifier) ? uppercase.call(out) : lowercase.call(out);
        return out;
      }
      module.exports = formatDouble;
    }
  });

  // node_modules/@stdlib/string-base-format-interpolate/lib/space_pad.js
  var require_space_pad = __commonJS({
    "node_modules/@stdlib/string-base-format-interpolate/lib/space_pad.js"(exports, module) {
      function spaces(n) {
        var out = "";
        var i;
        for (i = 0; i < n; i++) {
          out += " ";
        }
        return out;
      }
      function spacePad(str, width, right) {
        var pad = width - str.length;
        if (pad < 0) {
          return str;
        }
        str = right ? str + spaces(pad) : spaces(pad) + str;
        return str;
      }
      module.exports = spacePad;
    }
  });

  // node_modules/@stdlib/string-base-format-interpolate/lib/main.js
  var require_main = __commonJS({
    "node_modules/@stdlib/string-base-format-interpolate/lib/main.js"(exports, module) {
      var formatInteger = require_format_integer();
      var isString = require_is_string();
      var formatDouble = require_format_double();
      var spacePad = require_space_pad();
      var zeroPad = require_zero_pad();
      var fromCharCode = String.fromCharCode;
      var isArray = Array.isArray;
      function isnan(value) {
        return value !== value;
      }
      function initialize(token) {
        var out = {};
        out.specifier = token.specifier;
        out.precision = token.precision === void 0 ? 1 : token.precision;
        out.width = token.width;
        out.flags = token.flags || "";
        out.mapping = token.mapping;
        return out;
      }
      function formatInterpolate(tokens) {
        var hasPeriod;
        var flags;
        var token;
        var flag;
        var num;
        var out;
        var pos;
        var i;
        var j;
        if (!isArray(tokens)) {
          throw new TypeError("invalid argument. First argument must be an array. Value: `" + tokens + "`.");
        }
        out = "";
        pos = 1;
        for (i = 0; i < tokens.length; i++) {
          token = tokens[i];
          if (isString(token)) {
            out += token;
          } else {
            hasPeriod = token.precision !== void 0;
            token = initialize(token);
            if (!token.specifier) {
              throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `" + i + "`. Value: `" + token + "`.");
            }
            if (token.mapping) {
              pos = token.mapping;
            }
            flags = token.flags;
            for (j = 0; j < flags.length; j++) {
              flag = flags.charAt(j);
              switch (flag) {
                case " ":
                  token.sign = " ";
                  break;
                case "+":
                  token.sign = "+";
                  break;
                case "-":
                  token.padRight = true;
                  token.padZeros = false;
                  break;
                case "0":
                  token.padZeros = flags.indexOf("-") < 0;
                  break;
                case "#":
                  token.alternate = true;
                  break;
                default:
                  throw new Error("invalid flag: " + flag);
              }
            }
            if (token.width === "*") {
              token.width = parseInt(arguments[pos], 10);
              pos += 1;
              if (isnan(token.width)) {
                throw new TypeError("the argument for * width at position " + pos + " is not a number. Value: `" + token.width + "`.");
              }
              if (token.width < 0) {
                token.padRight = true;
                token.width = -token.width;
              }
            }
            if (hasPeriod) {
              if (token.precision === "*") {
                token.precision = parseInt(arguments[pos], 10);
                pos += 1;
                if (isnan(token.precision)) {
                  throw new TypeError("the argument for * precision at position " + pos + " is not a number. Value: `" + token.precision + "`.");
                }
                if (token.precision < 0) {
                  token.precision = 1;
                  hasPeriod = false;
                }
              }
            }
            token.arg = arguments[pos];
            switch (token.specifier) {
              case "b":
              case "o":
              case "x":
              case "X":
              case "d":
              case "i":
              case "u":
                if (hasPeriod) {
                  token.padZeros = false;
                }
                token.arg = formatInteger(token);
                break;
              case "s":
                token.maxWidth = hasPeriod ? token.precision : -1;
                token.arg = String(token.arg);
                break;
              case "c":
                if (!isnan(token.arg)) {
                  num = parseInt(token.arg, 10);
                  if (num < 0 || num > 127) {
                    throw new Error("invalid character code. Value: " + token.arg);
                  }
                  token.arg = isnan(num) ? String(token.arg) : fromCharCode(num);
                }
                break;
              case "e":
              case "E":
              case "f":
              case "F":
              case "g":
              case "G":
                if (!hasPeriod) {
                  token.precision = 6;
                }
                token.arg = formatDouble(token);
                break;
              default:
                throw new Error("invalid specifier: " + token.specifier);
            }
            if (token.maxWidth >= 0 && token.arg.length > token.maxWidth) {
              token.arg = token.arg.substring(0, token.maxWidth);
            }
            if (token.padZeros) {
              token.arg = zeroPad(token.arg, token.width || token.precision, token.padRight);
            } else if (token.width) {
              token.arg = spacePad(token.arg, token.width, token.padRight);
            }
            out += token.arg || "";
            pos += 1;
          }
        }
        return out;
      }
      module.exports = formatInterpolate;
    }
  });

  // node_modules/@stdlib/string-base-format-interpolate/lib/index.js
  var require_lib = __commonJS({
    "node_modules/@stdlib/string-base-format-interpolate/lib/index.js"(exports, module) {
      var main = require_main();
      module.exports = main;
    }
  });

  // node_modules/@stdlib/string-base-format-tokenize/lib/main.js
  var require_main2 = __commonJS({
    "node_modules/@stdlib/string-base-format-tokenize/lib/main.js"(exports, module) {
      var RE = /%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;
      function parse(match) {
        var token = {
          "mapping": match[1] ? parseInt(match[1], 10) : void 0,
          "flags": match[2],
          "width": match[3],
          "precision": match[5],
          "specifier": match[6]
        };
        if (match[4] === "." && match[5] === void 0) {
          token.precision = "1";
        }
        return token;
      }
      function formatTokenize(str) {
        var content;
        var tokens;
        var match;
        var prev;
        tokens = [];
        prev = 0;
        match = RE.exec(str);
        while (match) {
          content = str.slice(prev, RE.lastIndex - match[0].length);
          if (content.length) {
            tokens.push(content);
          }
          tokens.push(parse(match));
          prev = RE.lastIndex;
          match = RE.exec(str);
        }
        content = str.slice(prev);
        if (content.length) {
          tokens.push(content);
        }
        return tokens;
      }
      module.exports = formatTokenize;
    }
  });

  // node_modules/@stdlib/string-base-format-tokenize/lib/index.js
  var require_lib2 = __commonJS({
    "node_modules/@stdlib/string-base-format-tokenize/lib/index.js"(exports, module) {
      var main = require_main2();
      module.exports = main;
    }
  });

  // node_modules/@stdlib/string-format/lib/is_string.js
  var require_is_string2 = __commonJS({
    "node_modules/@stdlib/string-format/lib/is_string.js"(exports, module) {
      function isString(value) {
        return typeof value === "string";
      }
      module.exports = isString;
    }
  });

  // node_modules/@stdlib/string-format/lib/main.js
  var require_main3 = __commonJS({
    "node_modules/@stdlib/string-format/lib/main.js"(exports, module) {
      var interpolate = require_lib();
      var tokenize = require_lib2();
      var isString = require_is_string2();
      function format(str) {
        var args;
        var i;
        if (!isString(str)) {
          throw new TypeError(format("invalid argument. First argument must be a string. Value: `%s`.", str));
        }
        args = [tokenize(str)];
        for (i = 1; i < arguments.length; i++) {
          args.push(arguments[i]);
        }
        return interpolate.apply(null, args);
      }
      module.exports = format;
    }
  });

  // node_modules/@stdlib/string-format/lib/index.js
  var require_lib3 = __commonJS({
    "node_modules/@stdlib/string-format/lib/index.js"(exports, module) {
      var main = require_main3();
      module.exports = main;
    }
  });

  // node_modules/@stdlib/utils-define-property/lib/polyfill.js
  var require_polyfill = __commonJS({
    "node_modules/@stdlib/utils-define-property/lib/polyfill.js"(exports, module) {
      var format = require_lib3();
      var objectProtoype = Object.prototype;
      var toStr = objectProtoype.toString;
      var defineGetter = objectProtoype.__defineGetter__;
      var defineSetter = objectProtoype.__defineSetter__;
      var lookupGetter = objectProtoype.__lookupGetter__;
      var lookupSetter = objectProtoype.__lookupSetter__;
      function defineProperty(obj, prop, descriptor) {
        var prototype;
        var hasValue;
        var hasGet;
        var hasSet;
        if (typeof obj !== "object" || obj === null || toStr.call(obj) === "[object Array]") {
          throw new TypeError(format("invalid argument. First argument must be an object. Value: `%s`.", obj));
        }
        if (typeof descriptor !== "object" || descriptor === null || toStr.call(descriptor) === "[object Array]") {
          throw new TypeError(format("invalid argument. Property descriptor must be an object. Value: `%s`.", descriptor));
        }
        hasValue = "value" in descriptor;
        if (hasValue) {
          if (lookupGetter.call(obj, prop) || lookupSetter.call(obj, prop)) {
            prototype = obj.__proto__;
            obj.__proto__ = objectProtoype;
            delete obj[prop];
            obj[prop] = descriptor.value;
            obj.__proto__ = prototype;
          } else {
            obj[prop] = descriptor.value;
          }
        }
        hasGet = "get" in descriptor;
        hasSet = "set" in descriptor;
        if (hasValue && (hasGet || hasSet)) {
          throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");
        }
        if (hasGet && defineGetter) {
          defineGetter.call(obj, prop, descriptor.get);
        }
        if (hasSet && defineSetter) {
          defineSetter.call(obj, prop, descriptor.set);
        }
        return obj;
      }
      module.exports = defineProperty;
    }
  });

  // node_modules/@stdlib/utils-define-property/lib/index.js
  var require_lib4 = __commonJS({
    "node_modules/@stdlib/utils-define-property/lib/index.js"(exports, module) {
      var hasDefinePropertySupport = require_has_define_property_support();
      var builtin = require_builtin();
      var polyfill = require_polyfill();
      var defineProperty;
      if (hasDefinePropertySupport()) {
        defineProperty = builtin;
      } else {
        defineProperty = polyfill;
      }
      module.exports = defineProperty;
    }
  });

  // node_modules/@stdlib/utils-define-nonenumerable-read-only-property/lib/main.js
  var require_main4 = __commonJS({
    "node_modules/@stdlib/utils-define-nonenumerable-read-only-property/lib/main.js"(exports, module) {
      var defineProperty = require_lib4();
      function setNonEnumerableReadOnly(obj, prop, value) {
        defineProperty(obj, prop, {
          "configurable": false,
          "enumerable": false,
          "writable": false,
          "value": value
        });
      }
      module.exports = setNonEnumerableReadOnly;
    }
  });

  // node_modules/@stdlib/utils-define-nonenumerable-read-only-property/lib/index.js
  var require_lib5 = __commonJS({
    "node_modules/@stdlib/utils-define-nonenumerable-read-only-property/lib/index.js"(exports, module) {
      var main = require_main4();
      module.exports = main;
    }
  });

  // node_modules/@stdlib/assert-is-string/lib/primitive.js
  var require_primitive = __commonJS({
    "node_modules/@stdlib/assert-is-string/lib/primitive.js"(exports, module) {
      function isString(value) {
        return typeof value === "string";
      }
      module.exports = isString;
    }
  });

  // node_modules/@stdlib/assert-has-symbol-support/lib/main.js
  var require_main5 = __commonJS({
    "node_modules/@stdlib/assert-has-symbol-support/lib/main.js"(exports, module) {
      function hasSymbolSupport() {
        return typeof Symbol === "function" && typeof Symbol("foo") === "symbol";
      }
      module.exports = hasSymbolSupport;
    }
  });

  // node_modules/@stdlib/assert-has-symbol-support/lib/index.js
  var require_lib6 = __commonJS({
    "node_modules/@stdlib/assert-has-symbol-support/lib/index.js"(exports, module) {
      var main = require_main5();
      module.exports = main;
    }
  });

  // node_modules/@stdlib/assert-has-tostringtag-support/lib/main.js
  var require_main6 = __commonJS({
    "node_modules/@stdlib/assert-has-tostringtag-support/lib/main.js"(exports, module) {
      var hasSymbols = require_lib6();
      var FLG = hasSymbols();
      function hasToStringTagSupport() {
        return FLG && typeof Symbol.toStringTag === "symbol";
      }
      module.exports = hasToStringTagSupport;
    }
  });

  // node_modules/@stdlib/assert-has-tostringtag-support/lib/index.js
  var require_lib7 = __commonJS({
    "node_modules/@stdlib/assert-has-tostringtag-support/lib/index.js"(exports, module) {
      var main = require_main6();
      module.exports = main;
    }
  });

  // node_modules/@stdlib/utils-native-class/lib/tostring.js
  var require_tostring = __commonJS({
    "node_modules/@stdlib/utils-native-class/lib/tostring.js"(exports, module) {
      var toStr = Object.prototype.toString;
      module.exports = toStr;
    }
  });

  // node_modules/@stdlib/utils-native-class/lib/main.js
  var require_main7 = __commonJS({
    "node_modules/@stdlib/utils-native-class/lib/main.js"(exports, module) {
      var toStr = require_tostring();
      function nativeClass(v) {
        return toStr.call(v);
      }
      module.exports = nativeClass;
    }
  });

  // node_modules/@stdlib/assert-has-own-property/lib/main.js
  var require_main8 = __commonJS({
    "node_modules/@stdlib/assert-has-own-property/lib/main.js"(exports, module) {
      var has = Object.prototype.hasOwnProperty;
      function hasOwnProp(value, property) {
        if (value === void 0 || value === null) {
          return false;
        }
        return has.call(value, property);
      }
      module.exports = hasOwnProp;
    }
  });

  // node_modules/@stdlib/assert-has-own-property/lib/index.js
  var require_lib8 = __commonJS({
    "node_modules/@stdlib/assert-has-own-property/lib/index.js"(exports, module) {
      var main = require_main8();
      module.exports = main;
    }
  });

  // node_modules/@stdlib/symbol-ctor/lib/main.js
  var require_main9 = __commonJS({
    "node_modules/@stdlib/symbol-ctor/lib/main.js"(exports, module) {
      var Sym = typeof Symbol === "function" ? Symbol : void 0;
      module.exports = Sym;
    }
  });

  // node_modules/@stdlib/symbol-ctor/lib/index.js
  var require_lib9 = __commonJS({
    "node_modules/@stdlib/symbol-ctor/lib/index.js"(exports, module) {
      var main = require_main9();
      module.exports = main;
    }
  });

  // node_modules/@stdlib/utils-native-class/lib/tostringtag.js
  var require_tostringtag = __commonJS({
    "node_modules/@stdlib/utils-native-class/lib/tostringtag.js"(exports, module) {
      var Symbol2 = require_lib9();
      var toStrTag = typeof Symbol2 === "function" ? Symbol2.toStringTag : "";
      module.exports = toStrTag;
    }
  });

  // node_modules/@stdlib/utils-native-class/lib/polyfill.js
  var require_polyfill2 = __commonJS({
    "node_modules/@stdlib/utils-native-class/lib/polyfill.js"(exports, module) {
      var hasOwnProp = require_lib8();
      var toStringTag = require_tostringtag();
      var toStr = require_tostring();
      function nativeClass(v) {
        var isOwn;
        var tag;
        var out;
        if (v === null || v === void 0) {
          return toStr.call(v);
        }
        tag = v[toStringTag];
        isOwn = hasOwnProp(v, toStringTag);
        try {
          v[toStringTag] = void 0;
        } catch (err) {
          return toStr.call(v);
        }
        out = toStr.call(v);
        if (isOwn) {
          v[toStringTag] = tag;
        } else {
          delete v[toStringTag];
        }
        return out;
      }
      module.exports = nativeClass;
    }
  });

  // node_modules/@stdlib/utils-native-class/lib/index.js
  var require_lib10 = __commonJS({
    "node_modules/@stdlib/utils-native-class/lib/index.js"(exports, module) {
      var hasToStringTag = require_lib7();
      var builtin = require_main7();
      var polyfill = require_polyfill2();
      var main;
      if (hasToStringTag()) {
        main = polyfill;
      } else {
        main = builtin;
      }
      module.exports = main;
    }
  });

  // node_modules/@stdlib/assert-is-string/lib/valueof.js
  var require_valueof = __commonJS({
    "node_modules/@stdlib/assert-is-string/lib/valueof.js"(exports, module) {
      var valueOf = String.prototype.valueOf;
      module.exports = valueOf;
    }
  });

  // node_modules/@stdlib/assert-is-string/lib/try2valueof.js
  var require_try2valueof = __commonJS({
    "node_modules/@stdlib/assert-is-string/lib/try2valueof.js"(exports, module) {
      var valueOf = require_valueof();
      function test(value) {
        try {
          valueOf.call(value);
          return true;
        } catch (err) {
          return false;
        }
      }
      module.exports = test;
    }
  });

  // node_modules/@stdlib/assert-is-string/lib/object.js
  var require_object = __commonJS({
    "node_modules/@stdlib/assert-is-string/lib/object.js"(exports, module) {
      var hasToStringTag = require_lib7();
      var nativeClass = require_lib10();
      var test = require_try2valueof();
      var FLG = hasToStringTag();
      function isString(value) {
        if (typeof value === "object") {
          if (value instanceof String) {
            return true;
          }
          if (FLG) {
            return test(value);
          }
          return nativeClass(value) === "[object String]";
        }
        return false;
      }
      module.exports = isString;
    }
  });

  // node_modules/@stdlib/assert-is-string/lib/main.js
  var require_main10 = __commonJS({
    "node_modules/@stdlib/assert-is-string/lib/main.js"(exports, module) {
      var isPrimitive = require_primitive();
      var isObject = require_object();
      function isString(value) {
        return isPrimitive(value) || isObject(value);
      }
      module.exports = isString;
    }
  });

  // node_modules/@stdlib/assert-is-string/lib/index.js
  var require_lib11 = __commonJS({
    "node_modules/@stdlib/assert-is-string/lib/index.js"(exports, module) {
      var setReadOnly = require_lib5();
      var main = require_main10();
      var isPrimitive = require_primitive();
      var isObject = require_object();
      setReadOnly(main, "isPrimitive", isPrimitive);
      setReadOnly(main, "isObject", isObject);
      module.exports = main;
    }
  });

  // node_modules/@stdlib/utils-escape-regexp-string/lib/main.js
  var require_main11 = __commonJS({
    "node_modules/@stdlib/utils-escape-regexp-string/lib/main.js"(exports, module) {
      var isString = require_lib11().isPrimitive;
      var format = require_lib3();
      var RE_CHARS = /[-\/\\^$*+?.()|[\]{}]/g;
      function rescape2(str) {
        var len;
        var s;
        var i;
        if (!isString(str)) {
          throw new TypeError(format("invalid argument. Must provide a regular expression string. Value: `%s`.", str));
        }
        if (str[0] === "/") {
          len = str.length;
          for (i = len - 1; i >= 0; i--) {
            if (str[i] === "/") {
              break;
            }
          }
        }
        if (i === void 0 || i <= 0) {
          return str.replace(RE_CHARS, "\\$&");
        }
        s = str.substring(1, i);
        s = s.replace(RE_CHARS, "\\$&");
        str = str[0] + s + str.substring(i);
        return str;
      }
      module.exports = rescape2;
    }
  });

  // node_modules/@stdlib/utils-escape-regexp-string/lib/index.js
  var require_lib12 = __commonJS({
    "node_modules/@stdlib/utils-escape-regexp-string/lib/index.js"(exports, module) {
      var main = require_main11();
      module.exports = main;
    }
  });

  // node_modules/eta/dist/browser.umd.js
  var require_browser_umd = __commonJS({
    "node_modules/eta/dist/browser.umd.js"(exports, module) {
      !function(t, e) {
        "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e((t || self).eta = {});
      }(exports, function(t) {
        function e() {
          return e = Object.assign ? Object.assign.bind() : function(t2) {
            for (var e2 = 1; e2 < arguments.length; e2++) {
              var n2 = arguments[e2];
              for (var r2 in n2) Object.prototype.hasOwnProperty.call(n2, r2) && (t2[r2] = n2[r2]);
            }
            return t2;
          }, e.apply(this, arguments);
        }
        function n(t2, e2) {
          t2.prototype = Object.create(e2.prototype), t2.prototype.constructor = t2, i(t2, e2);
        }
        function r(t2) {
          return r = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t3) {
            return t3.__proto__ || Object.getPrototypeOf(t3);
          }, r(t2);
        }
        function i(t2, e2) {
          return i = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t3, e3) {
            return t3.__proto__ = e3, t3;
          }, i(t2, e2);
        }
        function a(t2, e2, n2) {
          return a = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return false;
            if (Reflect.construct.sham) return false;
            if ("function" == typeof Proxy) return true;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
              })), true;
            } catch (t3) {
              return false;
            }
          }() ? Reflect.construct.bind() : function(t3, e3, n3) {
            var r2 = [null];
            r2.push.apply(r2, e3);
            var a2 = new (Function.bind.apply(t3, r2))();
            return n3 && i(a2, n3.prototype), a2;
          }, a.apply(null, arguments);
        }
        function s(t2) {
          var e2 = "function" == typeof Map ? /* @__PURE__ */ new Map() : void 0;
          return s = function(t3) {
            if (null === t3 || -1 === Function.toString.call(t3).indexOf("[native code]")) return t3;
            if ("function" != typeof t3) throw new TypeError("Super expression must either be null or a function");
            if (void 0 !== e2) {
              if (e2.has(t3)) return e2.get(t3);
              e2.set(t3, n2);
            }
            function n2() {
              return a(t3, arguments, r(this).constructor);
            }
            return n2.prototype = Object.create(t3.prototype, { constructor: { value: n2, enumerable: false, writable: true, configurable: true } }), i(n2, t3);
          }, s(t2);
        }
        var o = /* @__PURE__ */ function() {
          function t2(t3) {
            this.cache = void 0, this.cache = t3;
          }
          var n2 = t2.prototype;
          return n2.define = function(t3, e2) {
            this.cache[t3] = e2;
          }, n2.get = function(t3) {
            return this.cache[t3];
          }, n2.remove = function(t3) {
            delete this.cache[t3];
          }, n2.reset = function() {
            this.cache = {};
          }, n2.load = function(t3) {
            this.cache = e({}, this.cache, t3);
          }, t2;
        }(), c = /* @__PURE__ */ function(t2) {
          function e2(e3) {
            var n2;
            return (n2 = t2.call(this, e3) || this).name = "Eta Error", n2;
          }
          return n(e2, t2), e2;
        }(/* @__PURE__ */ s(Error)), l = /* @__PURE__ */ function(t2) {
          function e2(e3) {
            var n2;
            return (n2 = t2.call(this, e3) || this).name = "EtaParser Error", n2;
          }
          return n(e2, t2), e2;
        }(c), u = /* @__PURE__ */ function(t2) {
          function e2(e3) {
            var n2;
            return (n2 = t2.call(this, e3) || this).name = "EtaRuntime Error", n2;
          }
          return n(e2, t2), e2;
        }(c), f = /* @__PURE__ */ function(t2) {
          function e2(e3) {
            var n2;
            return (n2 = t2.call(this, e3) || this).name = "EtaNameResolution Error", n2;
          }
          return n(e2, t2), e2;
        }(c);
        function h(t2, e2, n2) {
          var r2 = e2.slice(0, n2).split(/\n/), i2 = r2.length, a2 = r2[i2 - 1].length + 1;
          throw t2 += " at line " + i2 + " col " + a2 + ":\n\n  " + e2.split(/\n/)[i2 - 1] + "\n  " + Array(a2).join(" ") + "^", new l(t2);
        }
        function p(t2, e2, n2, r2) {
          var i2 = e2.split("\n"), a2 = Math.max(n2 - 3, 0), s2 = Math.min(i2.length, n2 + 3), o2 = r2, c2 = i2.slice(a2, s2).map(function(t3, e3) {
            var r3 = e3 + a2 + 1;
            return (r3 == n2 ? " >> " : "    ") + r3 + "| " + t3;
          }).join("\n"), l2 = new u((o2 ? o2 + ":" + n2 + "\n" : "line " + n2 + "\n") + c2 + "\n\n" + t2.message);
          throw l2.name = t2.name, l2;
        }
        var d = function() {
          return Promise.resolve();
        }.constructor;
        function g(t2, e2) {
          var n2 = this.config, r2 = e2 && e2.async ? d : Function;
          try {
            return new r2(n2.varName, "options", this.compileToString.call(this, t2, e2));
          } catch (n3) {
            throw n3 instanceof SyntaxError ? new l("Bad template syntax\n\n" + n3.message + "\n" + Array(n3.message.length + 1).join("=") + "\n" + this.compileToString.call(this, t2, e2) + "\n") : n3;
          }
        }
        function y(t2, e2) {
          var n2 = this.config, r2 = e2 && e2.async, i2 = this.compileBody, a2 = this.parse.call(this, t2), s2 = n2.functionHeader + '\nlet include = (template, data) => this.render(template, data, options);\nlet includeAsync = (template, data) => this.renderAsync(template, data, options);\n\nlet __eta = {res: "", e: this.config.escapeFunction, f: this.config.filterFunction' + (n2.debug ? ', line: 1, templateStr: "' + t2.replace(/\\|"/g, "\\$&").replace(/\r\n|\n|\r/g, "\\n") + '"' : "") + "};\n\nfunction layout(path, data) {\n  __eta.layout = path;\n  __eta.layoutData = data;\n}" + (n2.debug ? "try {" : "") + (n2.useWith ? "with(" + n2.varName + "||{}){" : "") + "\n\n" + i2.call(this, a2) + "\nif (__eta.layout) {\n  __eta.res = " + (r2 ? "await includeAsync" : "include") + " (__eta.layout, {..." + n2.varName + ", body: __eta.res, ...__eta.layoutData});\n}\n" + (n2.useWith ? "}" : "") + (n2.debug ? "} catch (e) { this.RuntimeErr(e, __eta.templateStr, __eta.line, options.filepath) }" : "") + "\nreturn __eta.res;\n";
          if (n2.plugins) for (var o2 = 0; o2 < n2.plugins.length; o2++) {
            var c2 = n2.plugins[o2];
            c2.processFnString && (s2 = c2.processFnString(s2, n2));
          }
          return s2;
        }
        function v(t2) {
          for (var e2 = this.config, n2 = 0, r2 = t2.length, i2 = ""; n2 < r2; n2++) {
            var a2 = t2[n2];
            if ("string" == typeof a2) i2 += "__eta.res+='" + a2 + "'\n";
            else {
              var s2 = a2.t, o2 = a2.val || "";
              e2.debug && (i2 += "__eta.line=" + a2.lineNo + "\n"), "r" === s2 ? (e2.autoFilter && (o2 = "__eta.f(" + o2 + ")"), i2 += "__eta.res+=" + o2 + "\n") : "i" === s2 ? (e2.autoFilter && (o2 = "__eta.f(" + o2 + ")"), e2.autoEscape && (o2 = "__eta.e(" + o2 + ")"), i2 += "__eta.res+=" + o2 + "\n") : "e" === s2 && (i2 += o2 + "\n");
            }
          }
          return i2;
        }
        var m = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
        function x(t2) {
          return m[t2];
        }
        var _ = { autoEscape: true, autoFilter: false, autoTrim: [false, "nl"], cache: false, cacheFilepaths: true, debug: false, escapeFunction: function(t2) {
          var e2 = String(t2);
          return /[&<>"']/.test(e2) ? e2.replace(/[&<>"']/g, x) : e2;
        }, filterFunction: function(t2) {
          return String(t2);
        }, functionHeader: "", parse: { exec: "", interpolate: "=", raw: "~" }, plugins: [], rmWhitespace: false, tags: ["<%", "%>"], useWith: false, varName: "it", defaultExtension: ".eta" }, b = /`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})*}|(?!\${)[^\\`])*`/g, w = /'(?:\\[\s\w"'\\`]|[^\n\r'\\])*?'/g, S = /"(?:\\[\s\w"'\\`]|[^\n\r"\\])*?"/g;
        function E(t2) {
          return t2.replace(/[.*+\-?^${}()|[\]\\]/g, "\\$&");
        }
        function F(t2, e2) {
          return t2.slice(0, e2).split("\n").length;
        }
        function O(t2) {
          var e2 = this.config, n2 = [], r2 = false, i2 = 0, a2 = e2.parse;
          if (e2.plugins) for (var s2 = 0; s2 < e2.plugins.length; s2++) {
            var o2 = e2.plugins[s2];
            o2.processTemplate && (t2 = o2.processTemplate(t2, e2));
          }
          function c2(t3, i3) {
            t3 && (t3 = function(t4, e3, n3, r3) {
              var i4, a3;
              return Array.isArray(e3.autoTrim) ? (i4 = e3.autoTrim[1], a3 = e3.autoTrim[0]) : i4 = a3 = e3.autoTrim, (n3 || false === n3) && (i4 = n3), (r3 || false === r3) && (a3 = r3), a3 || i4 ? "slurp" === i4 && "slurp" === a3 ? t4.trim() : ("_" === i4 || "slurp" === i4 ? t4 = t4.trimStart() : "-" !== i4 && "nl" !== i4 || (t4 = t4.replace(/^(?:\r\n|\n|\r)/, "")), "_" === a3 || "slurp" === a3 ? t4 = t4.trimEnd() : "-" !== a3 && "nl" !== a3 || (t4 = t4.replace(/(?:\r\n|\n|\r)$/, "")), t4) : t4;
            }(t3, e2, r2, i3), t3 && (t3 = t3.replace(/\\|'/g, "\\$&").replace(/\r\n|\n|\r/g, "\\n"), n2.push(t3)));
          }
          e2.rmWhitespace && (t2 = t2.replace(/[\r\n]+/g, "\n").replace(/^\s+|\s+$/gm, "")), b.lastIndex = 0, w.lastIndex = 0, S.lastIndex = 0;
          for (var l2, u2 = [a2.exec, a2.interpolate, a2.raw].reduce(function(t3, e3) {
            return t3 && e3 ? t3 + "|" + E(e3) : e3 ? E(e3) : t3;
          }, ""), f2 = new RegExp(E(e2.tags[0]) + "(-|_)?\\s*(" + u2 + ")?\\s*", "g"), p2 = new RegExp("'|\"|`|\\/\\*|(\\s*(-|_)?" + E(e2.tags[1]) + ")", "g"); l2 = f2.exec(t2); ) {
            var d2 = t2.slice(i2, l2.index);
            i2 = l2[0].length + l2.index;
            var g2 = l2[2] || "";
            c2(d2, l2[1]), p2.lastIndex = i2;
            for (var y2 = void 0, v2 = false; y2 = p2.exec(t2); ) {
              if (y2[1]) {
                var m2 = t2.slice(i2, y2.index);
                f2.lastIndex = i2 = p2.lastIndex, r2 = y2[2], v2 = { t: g2 === a2.exec ? "e" : g2 === a2.raw ? "r" : g2 === a2.interpolate ? "i" : "", val: m2 };
                break;
              }
              var x2 = y2[0];
              if ("/*" === x2) {
                var _2 = t2.indexOf("*/", p2.lastIndex);
                -1 === _2 && h("unclosed comment", t2, y2.index), p2.lastIndex = _2;
              } else "'" === x2 ? (w.lastIndex = y2.index, w.exec(t2) ? p2.lastIndex = w.lastIndex : h("unclosed string", t2, y2.index)) : '"' === x2 ? (S.lastIndex = y2.index, S.exec(t2) ? p2.lastIndex = S.lastIndex : h("unclosed string", t2, y2.index)) : "`" === x2 && (b.lastIndex = y2.index, b.exec(t2) ? p2.lastIndex = b.lastIndex : h("unclosed string", t2, y2.index));
            }
            v2 ? (e2.debug && (v2.lineNo = F(t2, l2.index)), n2.push(v2)) : h("unclosed tag", t2, l2.index);
          }
          if (c2(t2.slice(i2, t2.length), false), e2.plugins) for (var O2 = 0; O2 < e2.plugins.length; O2++) {
            var I2 = e2.plugins[O2];
            I2.processAST && (n2 = I2.processAST(n2, e2));
          }
          return n2;
        }
        function I(t2, e2) {
          var n2 = e2 && e2.async ? this.templatesAsync : this.templatesSync;
          if (this.resolvePath && this.readFile && !t2.startsWith("@")) {
            var r2 = e2.filepath, i2 = n2.get(r2);
            if (this.config.cache && i2) return i2;
            var a2 = this.readFile(r2), s2 = this.compile(a2, e2);
            return this.config.cache && n2.define(r2, s2), s2;
          }
          var o2 = n2.get(t2);
          if (o2) return o2;
          throw new f("Failed to get template '" + t2 + "'");
        }
        function A(t2, n2, r2) {
          var i2, a2 = e({}, r2, { async: false });
          return "string" == typeof t2 ? (this.resolvePath && this.readFile && !t2.startsWith("@") && (a2.filepath = this.resolvePath(t2, a2)), i2 = I.call(this, t2, a2)) : i2 = t2, i2.call(this, n2, a2);
        }
        function P(t2, n2, r2) {
          var i2, a2 = e({}, r2, { async: true });
          "string" == typeof t2 ? (this.resolvePath && this.readFile && !t2.startsWith("@") && (a2.filepath = this.resolvePath(t2, a2)), i2 = I.call(this, t2, a2)) : i2 = t2;
          var s2 = i2.call(this, n2, a2);
          return Promise.resolve(s2);
        }
        function T(t2, e2) {
          var n2 = this.compile(t2, { async: false });
          return A.call(this, n2, e2);
        }
        function j(t2, e2) {
          var n2 = this.compile(t2, { async: true });
          return P.call(this, n2, e2);
        }
        var R = /* @__PURE__ */ function() {
          function t2(t3) {
            this.config = void 0, this.RuntimeErr = p, this.compile = g, this.compileToString = y, this.compileBody = v, this.parse = O, this.render = A, this.renderAsync = P, this.renderString = T, this.renderStringAsync = j, this.filepathCache = {}, this.templatesSync = new o({}), this.templatesAsync = new o({}), this.resolvePath = null, this.readFile = null, this.config = t3 ? e({}, _, t3) : e({}, _);
          }
          var n2 = t2.prototype;
          return n2.configure = function(t3) {
            this.config = e({}, this.config, t3);
          }, n2.withConfig = function(t3) {
            return e({}, this, { config: e({}, this.config, t3) });
          }, n2.loadTemplate = function(t3, e2, n3) {
            if ("string" == typeof e2) (n3 && n3.async ? this.templatesAsync : this.templatesSync).define(t3, this.compile(e2, n3));
            else {
              var r2 = this.templatesSync;
              ("AsyncFunction" === e2.constructor.name || n3 && n3.async) && (r2 = this.templatesAsync), r2.define(t3, e2);
            }
          }, t2;
        }(), W = /* @__PURE__ */ function(t2) {
          function e2() {
            return t2.apply(this, arguments) || this;
          }
          return n(e2, t2), e2;
        }(R);
        t.Eta = W;
      });
    }
  });

  // translators/Better BibTeX Citation Key Quick Copy.ts
  var Better_BibTeX_Citation_Key_Quick_Copy_exports = {};
  __export(Better_BibTeX_Citation_Key_Quick_Copy_exports, {
    citeCreators: () => citeCreators,
    doExport: () => doExport,
    yearFromDate: () => yearFromDate
  });

  // content/client.ts
  var worker = typeof location !== "undefined" && !!location.search;
  var searchParams = worker && new URLSearchParams(location.search);
  var name = (() => {
    var _a;
    if (worker) return searchParams.get("name");
    const $name = Zotero.clientName || ((_a = Zotero.BetterBibTeX) == null ? void 0 : _a.clientName);
    if (!$name) throw new Error("Unable to detect clientName");
    return $name;
  })();
  var version = (() => {
    var _a;
    if (worker) return searchParams.get("version");
    const $version = Zotero.version || ((_a = Zotero.BetterBibTeX) == null ? void 0 : _a.clientVersion);
    if (!$version) throw new Error("Unable to detect clientVersion");
    return $version;
  })();
  var slug = name.toLowerCase().replace("-", "");
  var isBeta = version.includes("beta");
  var locale = worker ? searchParams.get("locale") : Zotero.locale;
  var platform = worker ? searchParams.get("platform") : Zotero.isWin ? "win" : Zotero.isMac ? "mac" : Zotero.isLinux ? "lin" : "unk";
  var isWin = worker ? searchParams.get("isWin") === "true" : Zotero.isWin;
  var isMac = worker ? searchParams.get("isMac") === "true" : Zotero.isMac;
  var isLinux = worker ? searchParams.get("isLinux") === "true" : Zotero.isLinux;

  // gen/items/simplify.ts
  var zotero = slug === "zotero";
  var jurism = !zotero;
  function unalias(item, { scrub = true } = {}) {
    delete item.inPublications;
    let v;
    if (v = item.dateDecided || item.issueDate || item.dateEnacted) item.date = v;
    if (scrub) {
      delete item.dateDecided;
      delete item.issueDate;
      delete item.dateEnacted;
    }
    if (v = item.artworkMedium || item.audioRecordingFormat || item.videoRecordingFormat || item.interviewMedium || item.audioFileType) item.medium = v;
    if (scrub) {
      delete item.artworkMedium;
      delete item.audioRecordingFormat;
      delete item.videoRecordingFormat;
      delete item.interviewMedium;
      delete item.audioFileType;
    }
    if (v = item.billNumber || item.docketNumber || item.patentNumber || item.episodeNumber || item.reportNumber || item.publicLawNumber) item.number = v;
    if (scrub) {
      delete item.billNumber;
      delete item.docketNumber;
      delete item.patentNumber;
      delete item.episodeNumber;
      delete item.reportNumber;
      delete item.publicLawNumber;
    }
    if (v = item.codePages || item.firstPage) item.pages = v;
    if (scrub) {
      delete item.codePages;
      delete item.firstPage;
    }
    if (v = item.blogTitle || item.bookTitle || item.proceedingsTitle || item.dictionaryTitle || item.encyclopediaTitle || item.forumTitle || item.programTitle || item.websiteTitle) item.publicationTitle = v;
    if (scrub) {
      delete item.blogTitle;
      delete item.bookTitle;
      delete item.proceedingsTitle;
      delete item.dictionaryTitle;
      delete item.encyclopediaTitle;
      delete item.forumTitle;
      delete item.programTitle;
      delete item.websiteTitle;
    }
    if (v = item.label || item.company || item.distributor || item.network || item.university || item.studio) item.publisher = v;
    if (scrub) {
      delete item.label;
      delete item.company;
      delete item.distributor;
      delete item.network;
      delete item.university;
      delete item.studio;
    }
    if (v = item.caseName || item.subject || item.nameOfAct) item.title = v;
    if (scrub) {
      delete item.caseName;
      delete item.subject;
      delete item.nameOfAct;
    }
    if (v = item.websiteType || item.genre || item.postType || item.letterType || item.manuscriptType || item.mapType || item.presentationType || item.reportType || item.thesisType) item.type = v;
    if (scrub) {
      delete item.websiteType;
      delete item.genre;
      delete item.postType;
      delete item.letterType;
      delete item.manuscriptType;
      delete item.mapType;
      delete item.presentationType;
      delete item.reportType;
      delete item.thesisType;
    }
    if (v = item.codeVolume || item.reporterVolume) item.volume = v;
    if (scrub) {
      delete item.codeVolume;
      delete item.reporterVolume;
    }
    if (zotero) {
      if (v = item.legislativeBody || item.court || item.issuingAuthority || item.organization) item.authority = v;
      if (scrub) {
        delete item.legislativeBody;
        delete item.court;
        delete item.issuingAuthority;
        delete item.organization;
      }
      if (item.format) item.medium = item.format;
      if (scrub) {
        delete item.format;
      }
      if (v = item.identifier || item.documentNumber || item.archiveID) item.number = v;
      if (scrub) {
        delete item.identifier;
        delete item.documentNumber;
        delete item.archiveID;
      }
      if (item.repositoryLocation) item.place = item.repositoryLocation;
      if (scrub) {
        delete item.repositoryLocation;
      }
      if (v = item.repository || item.institution) item.publisher = v;
      if (scrub) {
        delete item.repository;
        delete item.institution;
      }
      if (item.legalStatus) item.status = item.legalStatus;
      if (scrub) {
        delete item.legalStatus;
      }
    }
    if (jurism) {
      if (item.release) item.edition = item.release;
      if (scrub) {
        delete item.release;
      }
      if (item.bookAbbreviation) item.journalAbbreviation = item.bookAbbreviation;
      if (scrub) {
        delete item.bookAbbreviation;
      }
      if (item.regulatoryBody) item.legislativeBody = item.regulatoryBody;
      if (scrub) {
        delete item.regulatoryBody;
      }
      if (item.treatyNumber) item.number = item.treatyNumber;
      if (scrub) {
        delete item.treatyNumber;
      }
      if (v = item.album || item.reporter) item.publicationTitle = v;
      if (scrub) {
        delete item.album;
        delete item.reporter;
      }
      if (item.assemblyNumber) item.seriesNumber = item.assemblyNumber;
      if (scrub) {
        delete item.assemblyNumber;
      }
      if (v = item.sessionType || item.regulationType) item.type = v;
      if (scrub) {
        delete item.sessionType;
        delete item.regulationType;
      }
    }
  }
  function simplifyForExport(item, { creators = true, dropAttachments = false, scrub = true } = {}) {
    unalias(item, { scrub });
    if (item.filingDate) item.filingDate = item.filingDate.replace(/^0000-00-00 /, "");
    if (creators && item.creators) {
      for (const creator of item.creators) {
        if (creator.fieldMode) {
          creator.name = creator.name || creator.lastName;
          delete creator.lastName;
          delete creator.firstName;
          delete creator.fieldMode;
        }
      }
    }
    if (item.itemType === "attachment" || item.itemType === "note") {
      delete item.attachments;
      delete item.notes;
    } else {
      item.attachments = !dropAttachments && item.attachments || [];
    }
    return item;
  }

  // content/escape.ts
  var import_utils_escape_regexp_string = __toESM(require_lib12());
  var entity = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;"
  };
  function html(str) {
    return str.replace(/[<>&"']/g, (c) => entity[c] || `&#${c.charCodeAt(0)};`);
  }

  // translators/Better BibTeX Citation Key Quick Copy.ts
  var import_eta = __toESM(require_browser_umd());
  var eta = new import_eta.Eta({ autoEscape: true });
  function select_by_key(item) {
    const [, kind, lib, key] = item.uri.match(/^https?:\/\/zotero\.org\/(users|groups)\/((?:local\/)?[^/]+)\/items\/(.+)/);
    return kind === "users" ? `zotero://select/library/items/${key}` : `zotero://select/groups/${lib}/items/${key}`;
  }
  function select_by_citekey(item) {
    return `zotero://select/items/@${encodeURIComponent(item.citationKey)}`;
  }
  function citeCreators(creators) {
    creators = creators || [];
    const creator = creators[0] || {};
    let name2 = creator.name || creator.lastName || "no author";
    if (creators.length > 1) name2 += " et al.";
    return name2;
  }
  function yearFromDate(d) {
    if (!d) return "no date";
    let date = Zotero.BetterBibTeX.parseDate(d);
    if (date.type === "interval") date = date.from;
    if (date.type === "verbatim" || !date.year) return d;
    return `${date.year}`;
  }
  var Mode = {
    gitbook(items) {
      const citations = items.map((item) => `{{ "${item.citationKey}" | cite }}`);
      Zotero.write(citations.join(""));
    },
    latex(items) {
      const keys = items.map((item) => item.citationKey);
      const cmd = `${Zotero.getHiddenPref("better-bibtex.citeCommand")}`.trim();
      if (cmd === "") {
        Zotero.write(keys.join(","));
      } else {
        Zotero.write(`\\${cmd}{${keys.join(", ")}}`);
      }
    },
    citekeys(items) {
      const keys = items.map((item) => item.citationKey);
      Zotero.write(keys.join(", "));
    },
    pandoc(items) {
      let keys = items.map((item) => `@${item.citationKey}`);
      keys = keys.join("; ");
      if (Zotero.getHiddenPref("better-bibtex.quickCopyPandocBrackets")) keys = `[${keys}]`;
      Zotero.write(keys);
    },
    roamCiteKey(items) {
      let keys = items.map((item) => `[[@${item.citationKey}]]`);
      keys = keys.join(" ");
      Zotero.write(keys);
    },
    orgRef(items) {
      if (!items.length) return "";
      Zotero.write(`cite:${items.map((item) => item.citationKey).join(", ")}`);
    },
    orgRef3(items) {
      if (!items.length) return "";
      Zotero.write(`cite:&${items.map((item) => item.citationKey).join(";&")}`);
    },
    orgcite(items) {
      if (!items.length) return "";
      Zotero.write(`[cite:@${items.map((item) => item.citationKey).join("; @")}]`);
    },
    orgmode(items) {
      switch (Zotero.getHiddenPref("better-bibtex.quickCopyOrgMode")) {
        case "zotero":
          for (const item of items) {
            Zotero.write(`[[${select_by_key(item)}][@${item.citationKey}]]`);
          }
          break;
        case "citationkey":
          for (const item of items) {
            Zotero.write(`[[${select_by_citekey(item)}][@${item.citationKey}]]`);
          }
          break;
      }
    },
    selectlink(items) {
      switch (Zotero.getHiddenPref("better-bibtex.quickCopySelectLink")) {
        case "zotero":
          Zotero.write(items.map(select_by_key).join("\n"));
          break;
        case "citationkey":
          Zotero.write(items.map(select_by_citekey).join("\n"));
          break;
      }
    },
    rtfScan(items) {
      const reference = items.map((item) => {
        const ref = [];
        ref.push(citeCreators(item.creators));
        if (item.title) ref.push(JSON.stringify(item.title));
        ref.push(yearFromDate(item.date));
        return ref.join(", ");
      });
      Zotero.write(`{${reference.join("; ")}}`);
    },
    jupyter(items) {
      Zotero.write(items.map((item) => `<cite data-cite="${html(item.citationKey)}">(${html(citeCreators(item.creators))}, ${html(yearFromDate(item.date))})</cite>`).join(""));
    },
    eta(items) {
      try {
        Zotero.write(eta.renderString(Zotero.getHiddenPref("better-bibtex.quickCopyEta"), { items: items.map(simplifyForExport) }));
      } catch (err) {
        Zotero.write(`${err}`);
      }
    },
    jekyll(items) {
      Zotero.write(items.map((item) => `{% cite ${item.citationKey} %}`).join(""));
    }
  };
  function doExport() {
    const items = [];
    let item;
    while (item = Zotero.nextItem()) {
      if (item.citationKey) items.push(item);
    }
    items.sort((a, b) => {
      const ka = [a.citationKey || a.itemType, a.dateModified || a.dateAdded, a.itemID].join("	");
      const kb = [b.citationKey || b.itemType, b.dateModified || b.dateAdded, b.itemID].join("	");
      return ka.localeCompare(kb, void 0, { sensitivity: "base" });
    });
    const mode = Mode[Zotero.getOption("quickCopyMode")] || Mode[Zotero.getHiddenPref("better-bibtex.quickCopyMode")];
    if (mode) {
      mode.call(null, items);
    } else {
      throw new Error(`Unsupported Quick Copy format '${Zotero.getOption("quickCopyMode") || Zotero.getHiddenPref("better-bibtex.quickCopyMode")}', I only know about: ${Object.keys(Mode).join(", ")}`);
    }
  }
  return __toCommonJS(Better_BibTeX_Citation_Key_Quick_Copy_exports);
})();
/*! Bundled license information:

@stdlib/utils-define-property/lib/define_property.js:
@stdlib/utils-define-property/lib/has_define_property_support.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2021 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/utils-define-property/lib/builtin.js:
@stdlib/utils-define-property/lib/polyfill.js:
@stdlib/utils-define-property/lib/index.js:
@stdlib/utils-define-nonenumerable-read-only-property/lib/main.js:
@stdlib/utils-define-nonenumerable-read-only-property/lib/index.js:
@stdlib/assert-is-string/lib/primitive.js:
@stdlib/assert-has-symbol-support/lib/main.js:
@stdlib/assert-has-symbol-support/lib/index.js:
@stdlib/assert-has-tostringtag-support/lib/main.js:
@stdlib/assert-has-tostringtag-support/lib/index.js:
@stdlib/utils-native-class/lib/tostring.js:
@stdlib/utils-native-class/lib/main.js:
@stdlib/assert-has-own-property/lib/main.js:
@stdlib/assert-has-own-property/lib/index.js:
@stdlib/symbol-ctor/lib/main.js:
@stdlib/symbol-ctor/lib/index.js:
@stdlib/utils-native-class/lib/tostringtag.js:
@stdlib/utils-native-class/lib/polyfill.js:
@stdlib/utils-native-class/lib/index.js:
@stdlib/assert-is-string/lib/valueof.js:
@stdlib/assert-is-string/lib/try2valueof.js:
@stdlib/assert-is-string/lib/object.js:
@stdlib/assert-is-string/lib/main.js:
@stdlib/assert-is-string/lib/index.js:
@stdlib/utils-escape-regexp-string/lib/main.js:
@stdlib/utils-escape-regexp-string/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/string-base-format-interpolate/lib/is_number.js:
@stdlib/string-base-format-interpolate/lib/zero_pad.js:
@stdlib/string-base-format-interpolate/lib/format_integer.js:
@stdlib/string-base-format-interpolate/lib/is_string.js:
@stdlib/string-base-format-interpolate/lib/format_double.js:
@stdlib/string-base-format-interpolate/lib/space_pad.js:
@stdlib/string-base-format-interpolate/lib/main.js:
@stdlib/string-base-format-interpolate/lib/index.js:
@stdlib/string-base-format-tokenize/lib/main.js:
@stdlib/string-base-format-tokenize/lib/index.js:
@stdlib/string-format/lib/is_string.js:
@stdlib/string-format/lib/main.js:
@stdlib/string-format/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2022 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)
*/

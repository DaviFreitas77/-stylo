import {
  require_react
} from "./chunk-W4EHDCLL.js";
import {
  __toESM
} from "./chunk-EWTE5DHJ.js";

// node_modules/react-content-loader/dist/react-content-loader.es.js
var import_react = __toESM(require_react());
var __assign = function() {
  __assign = Object.assign || function __assign2(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
function __rest(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
    t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
}
var uid = function() {
  return Math.random().toString(36).substring(6);
};
var SVG = function(_a) {
  var _b = _a.animate, animate = _b === void 0 ? true : _b, _c = _a.backgroundColor, backgroundColor = _c === void 0 ? "#f5f6f7" : _c, _d = _a.backgroundOpacity, backgroundOpacity = _d === void 0 ? 1 : _d, _e = _a.baseUrl, baseUrl = _e === void 0 ? "" : _e, children = _a.children, _f = _a.foregroundColor, foregroundColor = _f === void 0 ? "#eee" : _f, _g = _a.foregroundOpacity, foregroundOpacity = _g === void 0 ? 1 : _g, _h = _a.gradientRatio, gradientRatio = _h === void 0 ? 2 : _h, uniqueKey = _a.uniqueKey, _j = _a.rtl, rtl = _j === void 0 ? false : _j, _k = _a.speed, speed = _k === void 0 ? 1.2 : _k, _l = _a.style, style = _l === void 0 ? {} : _l, _m = _a.title, title = _m === void 0 ? "Loading..." : _m, _o = _a.beforeMask, beforeMask = _o === void 0 ? null : _o, props = __rest(_a, ["animate", "backgroundColor", "backgroundOpacity", "baseUrl", "children", "foregroundColor", "foregroundOpacity", "gradientRatio", "uniqueKey", "rtl", "speed", "style", "title", "beforeMask"]);
  var fixedId = uniqueKey || uid();
  var idClip = "".concat(fixedId, "-diff");
  var idGradient = "".concat(fixedId, "-animated-diff");
  var idAria = "".concat(fixedId, "-aria");
  var rtlStyle = rtl ? { transform: "scaleX(-1)" } : null;
  var dur = "".concat(speed, "s");
  var from = "".concat(gradientRatio * -1, " 0");
  var to = "".concat(gradientRatio, " 0");
  return (0, import_react.createElement)(
    "svg",
    __assign({ "aria-labelledby": idAria, role: "img", style: __assign(__assign({}, style), rtlStyle) }, props),
    title ? (0, import_react.createElement)("title", { id: idAria }, title) : null,
    beforeMask && (0, import_react.isValidElement)(beforeMask) ? beforeMask : null,
    (0, import_react.createElement)("rect", { role: "presentation", x: "0", y: "0", width: "100%", height: "100%", clipPath: "url(".concat(baseUrl, "#").concat(idClip, ")"), style: { fill: "url(".concat(baseUrl, "#").concat(idGradient, ")") } }),
    (0, import_react.createElement)(
      "defs",
      null,
      (0, import_react.createElement)("clipPath", { id: idClip }, children),
      (0, import_react.createElement)(
        "linearGradient",
        { id: idGradient, gradientTransform: "translate(".concat(from, ")") },
        (0, import_react.createElement)("stop", { offset: "0%", stopColor: backgroundColor, stopOpacity: backgroundOpacity }),
        (0, import_react.createElement)("stop", { offset: "50%", stopColor: foregroundColor, stopOpacity: foregroundOpacity }),
        (0, import_react.createElement)("stop", { offset: "100%", stopColor: backgroundColor, stopOpacity: backgroundOpacity }),
        animate && (0, import_react.createElement)("animateTransform", { attributeName: "gradientTransform", type: "translate", values: "".concat(from, "; 0 0; ").concat(to), dur, repeatCount: "indefinite" })
      )
    )
  );
};
var ContentLoader = function(props) {
  return props.children ? (0, import_react.createElement)(SVG, __assign({}, props)) : (0, import_react.createElement)(ReactContentLoaderFacebook, __assign({}, props));
};
var ReactContentLoaderFacebook = function(props) {
  return (0, import_react.createElement)(
    ContentLoader,
    __assign({ viewBox: "0 0 476 124" }, props),
    (0, import_react.createElement)("rect", { x: "48", y: "8", width: "88", height: "6", rx: "3" }),
    (0, import_react.createElement)("rect", { x: "48", y: "26", width: "52", height: "6", rx: "3" }),
    (0, import_react.createElement)("rect", { x: "0", y: "56", width: "410", height: "6", rx: "3" }),
    (0, import_react.createElement)("rect", { x: "0", y: "72", width: "380", height: "6", rx: "3" }),
    (0, import_react.createElement)("rect", { x: "0", y: "88", width: "178", height: "6", rx: "3" }),
    (0, import_react.createElement)("circle", { cx: "20", cy: "20", r: "20" })
  );
};
var ReactContentLoaderInstagram = function(props) {
  return (0, import_react.createElement)(
    ContentLoader,
    __assign({ viewBox: "0 0 400 460" }, props),
    (0, import_react.createElement)("circle", { cx: "31", cy: "31", r: "15" }),
    (0, import_react.createElement)("rect", { x: "58", y: "18", rx: "2", ry: "2", width: "140", height: "10" }),
    (0, import_react.createElement)("rect", { x: "58", y: "34", rx: "2", ry: "2", width: "140", height: "10" }),
    (0, import_react.createElement)("rect", { x: "0", y: "60", rx: "2", ry: "2", width: "400", height: "400" })
  );
};
var ReactContentLoaderCode = function(props) {
  return (0, import_react.createElement)(
    ContentLoader,
    __assign({ viewBox: "0 0 340 84" }, props),
    (0, import_react.createElement)("rect", { x: "0", y: "0", width: "67", height: "11", rx: "3" }),
    (0, import_react.createElement)("rect", { x: "76", y: "0", width: "140", height: "11", rx: "3" }),
    (0, import_react.createElement)("rect", { x: "127", y: "48", width: "53", height: "11", rx: "3" }),
    (0, import_react.createElement)("rect", { x: "187", y: "48", width: "72", height: "11", rx: "3" }),
    (0, import_react.createElement)("rect", { x: "18", y: "48", width: "100", height: "11", rx: "3" }),
    (0, import_react.createElement)("rect", { x: "0", y: "71", width: "37", height: "11", rx: "3" }),
    (0, import_react.createElement)("rect", { x: "18", y: "23", width: "140", height: "11", rx: "3" }),
    (0, import_react.createElement)("rect", { x: "166", y: "23", width: "173", height: "11", rx: "3" })
  );
};
var ReactContentLoaderListStyle = function(props) {
  return (0, import_react.createElement)(
    ContentLoader,
    __assign({ viewBox: "0 0 400 110" }, props),
    (0, import_react.createElement)("rect", { x: "0", y: "0", rx: "3", ry: "3", width: "250", height: "10" }),
    (0, import_react.createElement)("rect", { x: "20", y: "20", rx: "3", ry: "3", width: "220", height: "10" }),
    (0, import_react.createElement)("rect", { x: "20", y: "40", rx: "3", ry: "3", width: "170", height: "10" }),
    (0, import_react.createElement)("rect", { x: "0", y: "60", rx: "3", ry: "3", width: "250", height: "10" }),
    (0, import_react.createElement)("rect", { x: "20", y: "80", rx: "3", ry: "3", width: "200", height: "10" }),
    (0, import_react.createElement)("rect", { x: "20", y: "100", rx: "3", ry: "3", width: "80", height: "10" })
  );
};
var ReactContentLoaderBulletList = function(props) {
  return (0, import_react.createElement)(
    ContentLoader,
    __assign({ viewBox: "0 0 245 125" }, props),
    (0, import_react.createElement)("circle", { cx: "10", cy: "20", r: "8" }),
    (0, import_react.createElement)("rect", { x: "25", y: "15", rx: "5", ry: "5", width: "220", height: "10" }),
    (0, import_react.createElement)("circle", { cx: "10", cy: "50", r: "8" }),
    (0, import_react.createElement)("rect", { x: "25", y: "45", rx: "5", ry: "5", width: "220", height: "10" }),
    (0, import_react.createElement)("circle", { cx: "10", cy: "80", r: "8" }),
    (0, import_react.createElement)("rect", { x: "25", y: "75", rx: "5", ry: "5", width: "220", height: "10" }),
    (0, import_react.createElement)("circle", { cx: "10", cy: "110", r: "8" }),
    (0, import_react.createElement)("rect", { x: "25", y: "105", rx: "5", ry: "5", width: "220", height: "10" })
  );
};
var react_content_loader_es_default = ContentLoader;
export {
  ReactContentLoaderBulletList as BulletList,
  ReactContentLoaderCode as Code,
  ReactContentLoaderFacebook as Facebook,
  ReactContentLoaderInstagram as Instagram,
  ReactContentLoaderListStyle as List,
  react_content_loader_es_default as default
};
/*! Bundled license information:

react-content-loader/dist/react-content-loader.es.js:
  (*! *****************************************************************************
  Copyright (c) Microsoft Corporation. All rights reserved.
  Licensed under the Apache License, Version 2.0 (the "License"); you may not use
  this file except in compliance with the License. You may obtain a copy of the
  License at http://www.apache.org/licenses/LICENSE-2.0
  
  THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
  KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
  WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
  MERCHANTABLITY OR NON-INFRINGEMENT.
  
  See the Apache Version 2.0 License for specific language governing permissions
  and limitations under the License.
  ***************************************************************************** *)
*/
//# sourceMappingURL=react-content-loader.js.map

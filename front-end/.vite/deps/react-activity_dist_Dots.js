import {
  require_react
} from "./chunk-W4EHDCLL.js";
import {
  __commonJS
} from "./chunk-EWTE5DHJ.js";

// node_modules/react-activity/dist/Dots/index.js
var require_Dots = __commonJS({
  "node_modules/react-activity/dist/Dots/index.js"(exports, module) {
    (function webpackUniversalModuleDefinition(root, factory) {
      if (typeof exports === "object" && typeof module === "object")
        module.exports = factory(require_react());
      else if (typeof define === "function" && define.amd)
        define("ReactActivity", ["react"], factory);
      else if (typeof exports === "object")
        exports["ReactActivity"] = factory(require_react());
      else
        root["ReactActivity"] = factory(root["react"]);
    })(exports, function(__WEBPACK_EXTERNAL_MODULE__297__) {
      return (
        /******/
        (() => {
          "use strict";
          var __webpack_modules__ = {
            /***/
            438: (
              /***/
              (__unused_webpack_module, __webpack_exports__2, __webpack_require__2) => {
                __webpack_require__2.d(__webpack_exports__2, {
                  "Z": () => (
                    /* reexport */
                    ActivityIndicator_ActivityIndicator
                  )
                });
                var external_react_ = __webpack_require__2(297);
                var getRelativeTime = __webpack_require__2(531);
                ;
                var __assign = function() {
                  __assign = Object.assign || function(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                      s = arguments[i];
                      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
                    }
                    return t;
                  };
                  return __assign.apply(this, arguments);
                };
                var ActivityIndicator = function(_a) {
                  var style = _a.style, _b = _a.size, size = _b === void 0 ? 16 : _b, _c = _a.speed, speed = _c === void 0 ? 1 : _c, defaultAnimationDuration = _a.defaultAnimationDuration, color = _a.color, className = _a.className, _d = _a.animating, animating = _d === void 0 ? true : _d, children = _a.children, indicatorClassName = _a.indicatorClassName;
                  if (!animating) {
                    return null;
                  }
                  var animationDuration = (0, getRelativeTime.n)(speed, defaultAnimationDuration);
                  return external_react_.createElement("div", { "data-testid": "rai-activity-indicator", className: "rai-container " + indicatorClassName + (className ? " " + className : ""), style: __assign({ color, fontSize: size + "px", animationDuration }, style) }, children);
                };
                const ActivityIndicator_ActivityIndicator = ActivityIndicator;
                ;
              }
            ),
            /***/
            531: (
              /***/
              (__unused_webpack_module, __webpack_exports__2, __webpack_require__2) => {
                __webpack_require__2.d(__webpack_exports__2, {
                  /* harmony export */
                  "n": () => (
                    /* binding */
                    getRelativeTime
                  )
                  /* harmony export */
                });
                var getRelativeTime = function(speed, delay) {
                  return 1 / speed * delay + "s";
                };
              }
            ),
            /***/
            297: (
              /***/
              (module2) => {
                module2.exports = __WEBPACK_EXTERNAL_MODULE__297__;
              }
            )
            /******/
          };
          var __webpack_module_cache__ = {};
          function __webpack_require__(moduleId) {
            var cachedModule = __webpack_module_cache__[moduleId];
            if (cachedModule !== void 0) {
              return cachedModule.exports;
            }
            var module2 = __webpack_module_cache__[moduleId] = {
              /******/
              // no module.id needed
              /******/
              // no module.loaded needed
              /******/
              exports: {}
              /******/
            };
            __webpack_modules__[moduleId](module2, module2.exports, __webpack_require__);
            return module2.exports;
          }
          (() => {
            __webpack_require__.d = (exports2, definition) => {
              for (var key in definition) {
                if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports2, key)) {
                  Object.defineProperty(exports2, key, { enumerable: true, get: definition[key] });
                }
              }
            };
          })();
          (() => {
            __webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);
          })();
          (() => {
            __webpack_require__.r = (exports2) => {
              if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
                Object.defineProperty(exports2, Symbol.toStringTag, { value: "Module" });
              }
              Object.defineProperty(exports2, "__esModule", { value: true });
            };
          })();
          var __webpack_exports__ = {};
          (() => {
            __webpack_require__.r(__webpack_exports__);
            __webpack_require__.d(__webpack_exports__, {
              "default": () => (
                /* reexport */
                Dots_Dots
              )
            });
            ;
            var external_react_ = __webpack_require__(297);
            var ActivityIndicator = __webpack_require__(438);
            var getRelativeTime = __webpack_require__(531);
            ;
            var __assign = function() {
              __assign = Object.assign || function(t) {
                for (var s, i = 1, n = arguments.length; i < n; i++) {
                  s = arguments[i];
                  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                    t[p] = s[p];
                }
                return t;
              };
              return __assign.apply(this, arguments);
            };
            var __rest = function(s, e) {
              var t = {};
              for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                t[p] = s[p];
              if (s != null && typeof Object.getOwnPropertySymbols === "function")
                for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                  if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
                }
              return t;
            };
            var Dots = function(_a) {
              var _b = _a.speed, speed = _b === void 0 ? 1 : _b, rest = __rest(_a, ["speed"]);
              return external_react_.createElement(
                ActivityIndicator.Z,
                __assign({ indicatorClassName: "rai-dots", speed, defaultAnimationDuration: 0.8 }, rest),
                external_react_.createElement("div", { className: "rai-circle", style: { animationDelay: (0, getRelativeTime.n)(speed, -0.3) } }),
                external_react_.createElement("div", { className: "rai-circle", style: { animationDelay: (0, getRelativeTime.n)(speed, -0.2) } }),
                external_react_.createElement("div", { className: "rai-circle", style: { animationDelay: (0, getRelativeTime.n)(speed, -0.1) } })
              );
            };
            const Dots_Dots = Dots;
            ;
          })();
          return __webpack_exports__;
        })()
      );
    });
  }
});
export default require_Dots();
//# sourceMappingURL=react-activity_dist_Dots.js.map

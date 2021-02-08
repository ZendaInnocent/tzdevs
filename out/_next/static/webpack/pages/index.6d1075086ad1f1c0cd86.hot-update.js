webpackHotUpdate_N_E("pages/index",{

/***/ "./components/DevsCards.js":
/*!*********************************!*\
  !*** ./components/DevsCards.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_Main_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/Main.module.css */ "./styles/Main.module.css");
/* harmony import */ var _styles_Main_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_Main_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _DevCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DevCard */ "./components/DevCard.js");


var _jsxFileName = "C:\\Users\\Innocent\\Desktop\\tzdevs-next\\components\\DevsCards.js",
    _this = undefined;




var DevCards = function DevCards(_ref) {
  var currentDevs = _ref.currentDevs,
      pageNumbers = _ref.pageNumbers,
      handleClick = _ref.handleClick;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_Main_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.container,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_Main_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.cards,
      children: currentDevs.map(function (dev) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: dev.html_url,
          title: "View in GitHub",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_DevCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
            dev: dev
          }, dev.login, false, {
            fileName: _jsxFileName,
            lineNumber: 10,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 9,
          columnNumber: 11
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
      className: _styles_Main_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.pagination,
      children: pageNumbers.map(function (pageNumber, index) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          onClick: handleClick,
          id: pageNumber,
          children: pageNumber
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 13
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, _this);
};

_c = DevCards;
/* harmony default export */ __webpack_exports__["default"] = (DevCards);

var _c;

$RefreshReg$(_c, "DevCards");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9EZXZzQ2FyZHMuanMiXSwibmFtZXMiOlsiRGV2Q2FyZHMiLCJjdXJyZW50RGV2cyIsInBhZ2VOdW1iZXJzIiwiaGFuZGxlQ2xpY2siLCJzdHlsZXMiLCJjb250YWluZXIiLCJjYXJkcyIsIm1hcCIsImRldiIsImh0bWxfdXJsIiwibG9naW4iLCJwYWdpbmF0aW9uIiwicGFnZU51bWJlciIsImluZGV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLE9BQStDO0FBQUEsTUFBNUNDLFdBQTRDLFFBQTVDQSxXQUE0QztBQUFBLE1BQS9CQyxXQUErQixRQUEvQkEsV0FBK0I7QUFBQSxNQUFsQkMsV0FBa0IsUUFBbEJBLFdBQWtCO0FBQzlELHNCQUNFO0FBQUssYUFBUyxFQUFFQyw4REFBTSxDQUFDQyxTQUF2QjtBQUFBLDRCQUNFO0FBQUssZUFBUyxFQUFFRCw4REFBTSxDQUFDRSxLQUF2QjtBQUFBLGdCQUNHTCxXQUFXLENBQUNNLEdBQVosQ0FBZ0IsVUFBQ0MsR0FBRDtBQUFBLDRCQUNmO0FBQUcsY0FBSSxFQUFFQSxHQUFHLENBQUNDLFFBQWI7QUFBdUIsZUFBSyxFQUFDLGdCQUE3QjtBQUFBLGlDQUNFLHFFQUFDLGdEQUFEO0FBQVMsZUFBRyxFQUFFRDtBQUFkLGFBQXdCQSxHQUFHLENBQUNFLEtBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURlO0FBQUEsT0FBaEI7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFRRTtBQUFJLGVBQVMsRUFBRU4sOERBQU0sQ0FBQ08sVUFBdEI7QUFBQSxnQkFDR1QsV0FBVyxDQUFDSyxHQUFaLENBQWdCLFVBQUNLLFVBQUQsRUFBYUMsS0FBYixFQUF1QjtBQUN0Qyw0QkFDRTtBQUFnQixpQkFBTyxFQUFFVixXQUF6QjtBQUFzQyxZQUFFLEVBQUVTLFVBQTFDO0FBQUEsb0JBQ0dBO0FBREgsV0FBU0MsS0FBVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGO0FBS0QsT0FOQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQW9CRCxDQXJCRDs7S0FBTWIsUTtBQXVCU0EsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNmQxMDc1MDg2YWQxZjFjMGNkODYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9NYWluLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IERldkNhcmQgZnJvbSBcIi4vRGV2Q2FyZFwiO1xyXG5cclxuY29uc3QgRGV2Q2FyZHMgPSAoeyBjdXJyZW50RGV2cywgcGFnZU51bWJlcnMsIGhhbmRsZUNsaWNrIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcmRzfT5cclxuICAgICAgICB7Y3VycmVudERldnMubWFwKChkZXYpID0+IChcclxuICAgICAgICAgIDxhIGhyZWY9e2Rldi5odG1sX3VybH0gdGl0bGU9XCJWaWV3IGluIEdpdEh1YlwiPlxyXG4gICAgICAgICAgICA8RGV2Q2FyZCBkZXY9e2Rldn0ga2V5PXtkZXYubG9naW59IC8+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8dWwgY2xhc3NOYW1lPXtzdHlsZXMucGFnaW5hdGlvbn0+XHJcbiAgICAgICAge3BhZ2VOdW1iZXJzLm1hcCgocGFnZU51bWJlciwgaW5kZXgpID0+IHtcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fSBvbkNsaWNrPXtoYW5kbGVDbGlja30gaWQ9e3BhZ2VOdW1iZXJ9PlxyXG4gICAgICAgICAgICAgIHtwYWdlTnVtYmVyfVxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9KX1cclxuICAgICAgPC91bD5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEZXZDYXJkcztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
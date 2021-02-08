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
      currentPage = _ref.currentPage,
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
          }, void 0, false, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9EZXZzQ2FyZHMuanMiXSwibmFtZXMiOlsiRGV2Q2FyZHMiLCJjdXJyZW50RGV2cyIsInBhZ2VOdW1iZXJzIiwiY3VycmVudFBhZ2UiLCJoYW5kbGVDbGljayIsInN0eWxlcyIsImNvbnRhaW5lciIsImNhcmRzIiwibWFwIiwiZGV2IiwiaHRtbF91cmwiLCJwYWdpbmF0aW9uIiwicGFnZU51bWJlciIsImluZGV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLE9BQTREO0FBQUEsTUFBekRDLFdBQXlELFFBQXpEQSxXQUF5RDtBQUFBLE1BQTVDQyxXQUE0QyxRQUE1Q0EsV0FBNEM7QUFBQSxNQUEvQkMsV0FBK0IsUUFBL0JBLFdBQStCO0FBQUEsTUFBbEJDLFdBQWtCLFFBQWxCQSxXQUFrQjtBQUMzRSxzQkFDRTtBQUFLLGFBQVMsRUFBRUMsOERBQU0sQ0FBQ0MsU0FBdkI7QUFBQSw0QkFDRTtBQUFLLGVBQVMsRUFBRUQsOERBQU0sQ0FBQ0UsS0FBdkI7QUFBQSxnQkFDR04sV0FBVyxDQUFDTyxHQUFaLENBQWdCLFVBQUNDLEdBQUQ7QUFBQSw0QkFDZjtBQUFHLGNBQUksRUFBRUEsR0FBRyxDQUFDQyxRQUFiO0FBQXVCLGVBQUssRUFBQyxnQkFBN0I7QUFBQSxpQ0FDRSxxRUFBQyxnREFBRDtBQUFTLGVBQUcsRUFBRUQ7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEZTtBQUFBLE9BQWhCO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBUUU7QUFBSSxlQUFTLEVBQUVKLDhEQUFNLENBQUNNLFVBQXRCO0FBQUEsZ0JBQ0dULFdBQVcsQ0FBQ00sR0FBWixDQUFnQixVQUFDSSxVQUFELEVBQWFDLEtBQWIsRUFBdUI7QUFDdEMsNEJBQ0U7QUFBZ0IsaUJBQU8sRUFBRVQsV0FBekI7QUFBc0MsWUFBRSxFQUFFUSxVQUExQztBQUFBLG9CQUNHQTtBQURILFdBQVNDLEtBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERjtBQUtELE9BTkE7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFvQkQsQ0FyQkQ7O0tBQU1iLFE7QUF1QlNBLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjEzOTEyNTNiNDMyZTY2OGFiNWY1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvTWFpbi5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCBEZXZDYXJkIGZyb20gXCIuL0RldkNhcmRcIjtcclxuXHJcbmNvbnN0IERldkNhcmRzID0gKHsgY3VycmVudERldnMsIHBhZ2VOdW1iZXJzLCBjdXJyZW50UGFnZSwgaGFuZGxlQ2xpY2sgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZHN9PlxyXG4gICAgICAgIHtjdXJyZW50RGV2cy5tYXAoKGRldikgPT4gKFxyXG4gICAgICAgICAgPGEgaHJlZj17ZGV2Lmh0bWxfdXJsfSB0aXRsZT1cIlZpZXcgaW4gR2l0SHViXCI+XHJcbiAgICAgICAgICAgIDxEZXZDYXJkIGRldj17ZGV2fSAvPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHVsIGNsYXNzTmFtZT17c3R5bGVzLnBhZ2luYXRpb259PlxyXG4gICAgICAgIHtwYWdlTnVtYmVycy5tYXAoKHBhZ2VOdW1iZXIsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8bGkga2V5PXtpbmRleH0gb25DbGljaz17aGFuZGxlQ2xpY2t9IGlkPXtwYWdlTnVtYmVyfT5cclxuICAgICAgICAgICAgICB7cGFnZU51bWJlcn1cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSl9XHJcbiAgICAgIDwvdWw+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGV2Q2FyZHM7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=
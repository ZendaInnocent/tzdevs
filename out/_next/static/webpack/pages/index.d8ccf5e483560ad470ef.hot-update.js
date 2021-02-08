webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var C_Users_Innocent_Desktop_tzdevs_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_Innocent_Desktop_tzdevs_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_Innocent_Desktop_tzdevs_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_Innocent_Desktop_tzdevs_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_DevsCards__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/DevsCards */ "./components/DevsCards.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");





var _jsxFileName = "C:\\Users\\Innocent\\Desktop\\tzdevs-next\\pages\\index.js",
    _s = $RefreshSig$();




var __N_SSG = true;
function Home(_ref) {
  _s();

  var devs = _ref.devs;
  var pageNumbers = [];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(1),
      currentPage = _useState[0],
      setCurrentPage = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(100),
      devsPerPage = _useState2[0],
      setdevsPerPage = _useState2[1];

  var indexOfLastDev = currentPage * devsPerPage;
  var indexOfFirstDev = indexOfLastDev - devsPerPage; // const currentDevs = devs.slice(indexOfFirstDev, indexOfLastDev);

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(fetchDevs(1)),
      currentDevs = _useState3[0],
      setSurrentDevs = _useState3[1];

  for (var i = 1; i <= Math.ceil(devs.length / devsPerPage); i++) {
    pageNumbers.push(i);
  }

  var handleClick = function handleClick(e) {
    setCurrentPage(Number(e.target.id));
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_Header__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_DevsCards__WEBPACK_IMPORTED_MODULE_4__["default"], {
      currentDevs: currentDevs,
      pageNumbers: pageNumbers,
      currentPage: currentPage,
      handleClick: handleClick
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

_s(Home, "Qh5Dgw+KBWYm50krAkknJDFZp0g=");

_c = Home;

var fetchDevs = /*#__PURE__*/function () {
  var _ref2 = Object(C_Users_Innocent_Desktop_tzdevs_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_Innocent_Desktop_tzdevs_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(pageNum) {
    var res, data;
    return C_Users_Innocent_Desktop_tzdevs_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch("https://api.github.com/search/users?q=location:tanzania&per_page=100&page=".concat(pageNum));

          case 2:
            res = _context.sent;
            _context.next = 5;
            return res.json();

          case 5:
            data = _context.sent;
            return _context.abrupt("return", data.items);

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function fetchDevs(_x) {
    return _ref2.apply(this, arguments);
  };
}();

var _c;

$RefreshReg$(_c, "Home");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsImRldnMiLCJwYWdlTnVtYmVycyIsInVzZVN0YXRlIiwiY3VycmVudFBhZ2UiLCJzZXRDdXJyZW50UGFnZSIsImRldnNQZXJQYWdlIiwic2V0ZGV2c1BlclBhZ2UiLCJpbmRleE9mTGFzdERldiIsImluZGV4T2ZGaXJzdERldiIsImZldGNoRGV2cyIsImN1cnJlbnREZXZzIiwic2V0U3VycmVudERldnMiLCJpIiwiTWF0aCIsImNlaWwiLCJsZW5ndGgiLCJwdXNoIiwiaGFuZGxlQ2xpY2siLCJlIiwiTnVtYmVyIiwidGFyZ2V0IiwiaWQiLCJwYWdlTnVtIiwiZmV0Y2giLCJyZXMiLCJqc29uIiwiZGF0YSIsIml0ZW1zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRWUsU0FBU0EsSUFBVCxPQUF3QjtBQUFBOztBQUFBLE1BQVJDLElBQVEsUUFBUkEsSUFBUTtBQUNyQyxNQUFNQyxXQUFXLEdBQUcsRUFBcEI7O0FBRHFDLGtCQUVDQyxzREFBUSxDQUFDLENBQUQsQ0FGVDtBQUFBLE1BRTlCQyxXQUY4QjtBQUFBLE1BRWpCQyxjQUZpQjs7QUFBQSxtQkFHQ0Ysc0RBQVEsQ0FBQyxHQUFELENBSFQ7QUFBQSxNQUc5QkcsV0FIOEI7QUFBQSxNQUdqQkMsY0FIaUI7O0FBSXJDLE1BQU1DLGNBQWMsR0FBR0osV0FBVyxHQUFHRSxXQUFyQztBQUNBLE1BQU1HLGVBQWUsR0FBR0QsY0FBYyxHQUFHRixXQUF6QyxDQUxxQyxDQU1yQzs7QUFOcUMsbUJBT0NILHNEQUFRLENBQUNPLFNBQVMsQ0FBQyxDQUFELENBQVYsQ0FQVDtBQUFBLE1BTzlCQyxXQVA4QjtBQUFBLE1BT2pCQyxjQVBpQjs7QUFTckMsT0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxJQUFJQyxJQUFJLENBQUNDLElBQUwsQ0FBVWQsSUFBSSxDQUFDZSxNQUFMLEdBQWNWLFdBQXhCLENBQXJCLEVBQTJETyxDQUFDLEVBQTVELEVBQWdFO0FBQzlEWCxlQUFXLENBQUNlLElBQVosQ0FBaUJKLENBQWpCO0FBQ0Q7O0FBRUQsTUFBTUssV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsQ0FBRCxFQUFPO0FBQ3pCZCxrQkFBYyxDQUFDZSxNQUFNLENBQUNELENBQUMsQ0FBQ0UsTUFBRixDQUFTQyxFQUFWLENBQVAsQ0FBZDtBQUNELEdBRkQ7O0FBSUEsc0JBQ0U7QUFBQSw0QkFDRSxxRUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRSxxRUFBQyw2REFBRDtBQUNFLGlCQUFXLEVBQUVYLFdBRGY7QUFFRSxpQkFBVyxFQUFFVCxXQUZmO0FBR0UsaUJBQVcsRUFBRUUsV0FIZjtBQUlFLGlCQUFXLEVBQUVjO0FBSmY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGO0FBQUEsa0JBREY7QUFXRDs7R0E1QnVCbEIsSTs7S0FBQUEsSTs7QUE0Q3hCLElBQU1VLFNBQVM7QUFBQSxpU0FBRyxpQkFBT2EsT0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUNFQyxLQUFLLHFGQUN3REQsT0FEeEQsRUFEUDs7QUFBQTtBQUNWRSxlQURVO0FBQUE7QUFBQSxtQkFJR0EsR0FBRyxDQUFDQyxJQUFKLEVBSkg7O0FBQUE7QUFJVkMsZ0JBSlU7QUFBQSw2Q0FLVEEsSUFBSSxDQUFDQyxLQUxJOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQVRsQixTQUFTO0FBQUE7QUFBQTtBQUFBLEdBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZDhjY2Y1ZTQ4MzU2MGFkNDcwZWYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBEZXZzQ2FyZHMgZnJvbSBcIi4uL2NvbXBvbmVudHMvRGV2c0NhcmRzXCI7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvSGVhZGVyXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHsgZGV2cyB9KSB7XHJcbiAgY29uc3QgcGFnZU51bWJlcnMgPSBbXTtcclxuICBjb25zdCBbY3VycmVudFBhZ2UsIHNldEN1cnJlbnRQYWdlXSA9IHVzZVN0YXRlKDEpO1xyXG4gIGNvbnN0IFtkZXZzUGVyUGFnZSwgc2V0ZGV2c1BlclBhZ2VdID0gdXNlU3RhdGUoMTAwKTtcclxuICBjb25zdCBpbmRleE9mTGFzdERldiA9IGN1cnJlbnRQYWdlICogZGV2c1BlclBhZ2U7XHJcbiAgY29uc3QgaW5kZXhPZkZpcnN0RGV2ID0gaW5kZXhPZkxhc3REZXYgLSBkZXZzUGVyUGFnZTtcclxuICAvLyBjb25zdCBjdXJyZW50RGV2cyA9IGRldnMuc2xpY2UoaW5kZXhPZkZpcnN0RGV2LCBpbmRleE9mTGFzdERldik7XHJcbiAgY29uc3QgW2N1cnJlbnREZXZzLCBzZXRTdXJyZW50RGV2c10gPSB1c2VTdGF0ZShmZXRjaERldnMoMSkpO1xyXG5cclxuICBmb3IgKGxldCBpID0gMTsgaSA8PSBNYXRoLmNlaWwoZGV2cy5sZW5ndGggLyBkZXZzUGVyUGFnZSk7IGkrKykge1xyXG4gICAgcGFnZU51bWJlcnMucHVzaChpKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKGUpID0+IHtcclxuICAgIHNldEN1cnJlbnRQYWdlKE51bWJlcihlLnRhcmdldC5pZCkpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZGVyIC8+XHJcbiAgICAgIDxEZXZzQ2FyZHNcclxuICAgICAgICBjdXJyZW50RGV2cz17Y3VycmVudERldnN9XHJcbiAgICAgICAgcGFnZU51bWJlcnM9e3BhZ2VOdW1iZXJzfVxyXG4gICAgICAgIGN1cnJlbnRQYWdlPXtjdXJyZW50UGFnZX1cclxuICAgICAgICBoYW5kbGVDbGljaz17aGFuZGxlQ2xpY2t9XHJcbiAgICAgIC8+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XHJcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXHJcbiAgICBcImh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vc2VhcmNoL3VzZXJzP3E9bG9jYXRpb246dGFuemFuaWEmcGVyX3BhZ2U9MTAwXCJcclxuICApO1xyXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gIGNvbnN0IGRldnMgPSBkYXRhLml0ZW1zO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgZGV2cyxcclxuICAgIH0sXHJcbiAgfTtcclxufVxyXG5cclxuY29uc3QgZmV0Y2hEZXZzID0gYXN5bmMgKHBhZ2VOdW0pID0+IHtcclxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcclxuICAgIGBodHRwczovL2FwaS5naXRodWIuY29tL3NlYXJjaC91c2Vycz9xPWxvY2F0aW9uOnRhbnphbmlhJnBlcl9wYWdlPTEwMCZwYWdlPSR7cGFnZU51bX1gXHJcbiAgKTtcclxuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICByZXR1cm4gZGF0YS5pdGVtcztcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
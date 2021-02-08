webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/@babel/runtime/helpers/esm/readOnlyError.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/readOnlyError.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _readOnlyError; });
function _readOnlyError(name) {
  throw new TypeError("\"" + name + "\" is read-only");
}

/***/ }),

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
/* harmony import */ var C_Users_Innocent_Desktop_tzdevs_next_node_modules_babel_runtime_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/readOnlyError */ "./node_modules/@babel/runtime/helpers/esm/readOnlyError.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_DevsCards__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/DevsCards */ "./components/DevsCards.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");






var _jsxFileName = "C:\\Users\\Innocent\\Desktop\\tzdevs-next\\pages\\index.js",
    _s = $RefreshSig$();




var __N_SSG = true;
function Home(_ref) {
  _s();

  var devs = _ref.devs;
  var pageNumbers = [];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(1),
      currentPage = _useState[0],
      setCurrentPage = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(100),
      devsPerPage = _useState2[0],
      setdevsPerPage = _useState2[1];

  var indexOfLastDev = currentPage * devsPerPage;
  var indexOfFirstDev = indexOfLastDev - devsPerPage; // const currentDevs = devs.slice(indexOfFirstDev, indexOfLastDev);

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])([]),
      currentDevs = _useState3[0],
      setSurrentDevs = _useState3[1];

  for (var i = 1; i <= Math.ceil(devs.length / devsPerPage); i++) {
    pageNumbers.push(i);
  }

  var handleClick = function handleClick(e) {
    setCurrentPage(Number(e.target.id));
    currentDevs = (Object(C_Users_Innocent_Desktop_tzdevs_next_node_modules_babel_runtime_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_3__["default"])("currentDevs"), fetchDevs(Number(e.target.id)));
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_Header__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_DevsCards__WEBPACK_IMPORTED_MODULE_5__["default"], {
      currentDevs: currentDevs,
      pageNumbers: pageNumbers,
      currentPage: currentPage,
      handleClick: handleClick
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

_s(Home, "F/A8NRWFOaGLeA+4px3POlVIiq4=");

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
            return _context.abrupt("return", data);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3JlYWRPbmx5RXJyb3IuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkhvbWUiLCJkZXZzIiwicGFnZU51bWJlcnMiLCJ1c2VTdGF0ZSIsImN1cnJlbnRQYWdlIiwic2V0Q3VycmVudFBhZ2UiLCJkZXZzUGVyUGFnZSIsInNldGRldnNQZXJQYWdlIiwiaW5kZXhPZkxhc3REZXYiLCJpbmRleE9mRmlyc3REZXYiLCJjdXJyZW50RGV2cyIsInNldFN1cnJlbnREZXZzIiwiaSIsIk1hdGgiLCJjZWlsIiwibGVuZ3RoIiwicHVzaCIsImhhbmRsZUNsaWNrIiwiZSIsIk51bWJlciIsInRhcmdldCIsImlkIiwiZmV0Y2hEZXZzIiwicGFnZU51bSIsImZldGNoIiwicmVzIiwianNvbiIsImRhdGEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQWU7QUFDZjtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGQTtBQUNBO0FBQ0E7O0FBRWUsU0FBU0EsSUFBVCxPQUF3QjtBQUFBOztBQUFBLE1BQVJDLElBQVEsUUFBUkEsSUFBUTtBQUNyQyxNQUFNQyxXQUFXLEdBQUcsRUFBcEI7O0FBRHFDLGtCQUVDQyxzREFBUSxDQUFDLENBQUQsQ0FGVDtBQUFBLE1BRTlCQyxXQUY4QjtBQUFBLE1BRWpCQyxjQUZpQjs7QUFBQSxtQkFHQ0Ysc0RBQVEsQ0FBQyxHQUFELENBSFQ7QUFBQSxNQUc5QkcsV0FIOEI7QUFBQSxNQUdqQkMsY0FIaUI7O0FBSXJDLE1BQU1DLGNBQWMsR0FBR0osV0FBVyxHQUFHRSxXQUFyQztBQUNBLE1BQU1HLGVBQWUsR0FBR0QsY0FBYyxHQUFHRixXQUF6QyxDQUxxQyxDQU1yQzs7QUFOcUMsbUJBT0NILHNEQUFRLENBQUMsRUFBRCxDQVBUO0FBQUEsTUFPOUJPLFdBUDhCO0FBQUEsTUFPakJDLGNBUGlCOztBQVNyQyxPQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLElBQUlDLElBQUksQ0FBQ0MsSUFBTCxDQUFVYixJQUFJLENBQUNjLE1BQUwsR0FBY1QsV0FBeEIsQ0FBckIsRUFBMkRNLENBQUMsRUFBNUQsRUFBZ0U7QUFDOURWLGVBQVcsQ0FBQ2MsSUFBWixDQUFpQkosQ0FBakI7QUFDRDs7QUFFRCxNQUFNSyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDQyxDQUFELEVBQU87QUFDekJiLGtCQUFjLENBQUNjLE1BQU0sQ0FBQ0QsQ0FBQyxDQUFDRSxNQUFGLENBQVNDLEVBQVYsQ0FBUCxDQUFkO0FBQ0FYLGVBQVcsOEpBQUdZLFNBQVMsQ0FBQ0gsTUFBTSxDQUFDRCxDQUFDLENBQUNFLE1BQUYsQ0FBU0MsRUFBVixDQUFQLENBQVosQ0FBWDtBQUNELEdBSEQ7O0FBS0Esc0JBQ0U7QUFBQSw0QkFDRSxxRUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRSxxRUFBQyw2REFBRDtBQUNFLGlCQUFXLEVBQUVYLFdBRGY7QUFFRSxpQkFBVyxFQUFFUixXQUZmO0FBR0UsaUJBQVcsRUFBRUUsV0FIZjtBQUlFLGlCQUFXLEVBQUVhO0FBSmY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGO0FBQUEsa0JBREY7QUFXRDs7R0E3QnVCakIsSTs7S0FBQUEsSTs7QUE2Q3hCLElBQU1zQixTQUFTO0FBQUEsaVNBQUcsaUJBQU9DLE9BQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFDRUMsS0FBSyxxRkFDd0RELE9BRHhELEVBRFA7O0FBQUE7QUFDVkUsZUFEVTtBQUFBO0FBQUEsbUJBSUdBLEdBQUcsQ0FBQ0MsSUFBSixFQUpIOztBQUFBO0FBSVZDLGdCQUpVO0FBQUEsNkNBS1RBLElBTFM7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBVEwsU0FBUztBQUFBO0FBQUE7QUFBQSxHQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4Ljg4YmM4OGYzZGY1NTMwMzJhYzI4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfcmVhZE9ubHlFcnJvcihuYW1lKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJcXFwiXCIgKyBuYW1lICsgXCJcXFwiIGlzIHJlYWQtb25seVwiKTtcbn0iLCJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgRGV2c0NhcmRzIGZyb20gXCIuLi9jb21wb25lbnRzL0RldnNDYXJkc1wiO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0hlYWRlclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSh7IGRldnMgfSkge1xyXG4gIGNvbnN0IHBhZ2VOdW1iZXJzID0gW107XHJcbiAgY29uc3QgW2N1cnJlbnRQYWdlLCBzZXRDdXJyZW50UGFnZV0gPSB1c2VTdGF0ZSgxKTtcclxuICBjb25zdCBbZGV2c1BlclBhZ2UsIHNldGRldnNQZXJQYWdlXSA9IHVzZVN0YXRlKDEwMCk7XHJcbiAgY29uc3QgaW5kZXhPZkxhc3REZXYgPSBjdXJyZW50UGFnZSAqIGRldnNQZXJQYWdlO1xyXG4gIGNvbnN0IGluZGV4T2ZGaXJzdERldiA9IGluZGV4T2ZMYXN0RGV2IC0gZGV2c1BlclBhZ2U7XHJcbiAgLy8gY29uc3QgY3VycmVudERldnMgPSBkZXZzLnNsaWNlKGluZGV4T2ZGaXJzdERldiwgaW5kZXhPZkxhc3REZXYpO1xyXG4gIGNvbnN0IFtjdXJyZW50RGV2cywgc2V0U3VycmVudERldnNdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICBmb3IgKGxldCBpID0gMTsgaSA8PSBNYXRoLmNlaWwoZGV2cy5sZW5ndGggLyBkZXZzUGVyUGFnZSk7IGkrKykge1xyXG4gICAgcGFnZU51bWJlcnMucHVzaChpKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKGUpID0+IHtcclxuICAgIHNldEN1cnJlbnRQYWdlKE51bWJlcihlLnRhcmdldC5pZCkpO1xyXG4gICAgY3VycmVudERldnMgPSBmZXRjaERldnMoTnVtYmVyKGUudGFyZ2V0LmlkKSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgPERldnNDYXJkc1xyXG4gICAgICAgIGN1cnJlbnREZXZzPXtjdXJyZW50RGV2c31cclxuICAgICAgICBwYWdlTnVtYmVycz17cGFnZU51bWJlcnN9XHJcbiAgICAgICAgY3VycmVudFBhZ2U9e2N1cnJlbnRQYWdlfVxyXG4gICAgICAgIGhhbmRsZUNsaWNrPXtoYW5kbGVDbGlja31cclxuICAgICAgLz5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcclxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcclxuICAgIFwiaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS9zZWFyY2gvdXNlcnM/cT1sb2NhdGlvbjp0YW56YW5pYSZwZXJfcGFnZT0xMDBcIlxyXG4gICk7XHJcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgY29uc3QgZGV2cyA9IGRhdGEuaXRlbXM7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBkZXZzLFxyXG4gICAgfSxcclxuICB9O1xyXG59XHJcblxyXG5jb25zdCBmZXRjaERldnMgPSBhc3luYyAocGFnZU51bSkgPT4ge1xyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFxyXG4gICAgYGh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vc2VhcmNoL3VzZXJzP3E9bG9jYXRpb246dGFuemFuaWEmcGVyX3BhZ2U9MTAwJnBhZ2U9JHtwYWdlTnVtfWBcclxuICApO1xyXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gIHJldHVybiBkYXRhO1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9
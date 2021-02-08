webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_Innocent_Desktop_tzdevs_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var C_Users_Innocent_Desktop_tzdevs_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_Innocent_Desktop_tzdevs_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_Users_Innocent_Desktop_tzdevs_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var C_Users_Innocent_Desktop_tzdevs_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_DevsCards__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/DevsCards */ "./components/DevsCards.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");






var _jsxFileName = "C:\\Users\\Innocent\\Desktop\\tzdevs-next\\pages\\index.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_Innocent_Desktop_tzdevs_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




function Home() {
  _s();

  var pageNumbers = [1, 2, 3, 4, 5];

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
      setCurrentDevs = _useState3[1]; // for (let i = 1; i <= Math.ceil(devs.length / devsPerPage); i++) {
  //   pageNumbers.push(i);
  // }


  var fetchDevs = /*#__PURE__*/function () {
    var _ref = Object(C_Users_Innocent_Desktop_tzdevs_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/C_Users_Innocent_Desktop_tzdevs_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee(pageNum) {
      var res, data;
      return C_Users_Innocent_Desktop_tzdevs_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {
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
      return _ref.apply(this, arguments);
    };
  }();

  var handleClick = function handleClick(e) {
    setCurrentPage(Number(e.target.id));
    var newDevs = fetchDevs(Number(e.target.id));
    setCurrentDevs(_objectSpread({}, newDevs));
    console.log(currentDevs);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Header__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_DevsCards__WEBPACK_IMPORTED_MODULE_5__["default"], {
      currentDevs: currentDevs,
      pageNumbers: pageNumbers,
      currentPage: currentPage,
      handleClick: handleClick
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }, this)]
  }, void 0, true);
} // export async function getStaticProps() {
//   const res = await fetch(
//     "https://api.github.com/search/users?q=location:tanzania&per_page=100"
//   );
//   const data = await res.json();
//   const devs = data.items;
//   return {
//     props: {
//       devs,
//     },
//   };
// }

_s(Home, "m/X0GsgmDVXwMjKZ74+4ZNjeJGs=");

_c = Home;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsInBhZ2VOdW1iZXJzIiwidXNlU3RhdGUiLCJjdXJyZW50UGFnZSIsInNldEN1cnJlbnRQYWdlIiwiZGV2c1BlclBhZ2UiLCJzZXRkZXZzUGVyUGFnZSIsImluZGV4T2ZMYXN0RGV2IiwiaW5kZXhPZkZpcnN0RGV2IiwiY3VycmVudERldnMiLCJzZXRDdXJyZW50RGV2cyIsImZldGNoRGV2cyIsInBhZ2VOdW0iLCJmZXRjaCIsInJlcyIsImpzb24iLCJkYXRhIiwiaXRlbXMiLCJoYW5kbGVDbGljayIsImUiLCJOdW1iZXIiLCJ0YXJnZXQiLCJpZCIsIm5ld0RldnMiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLElBQVQsR0FBZ0I7QUFBQTs7QUFDN0IsTUFBTUMsV0FBVyxHQUFHLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLEVBQVUsQ0FBVixFQUFhLENBQWIsQ0FBcEI7O0FBRDZCLGtCQUVTQyxzREFBUSxDQUFDLENBQUQsQ0FGakI7QUFBQSxNQUV0QkMsV0FGc0I7QUFBQSxNQUVUQyxjQUZTOztBQUFBLG1CQUdTRixzREFBUSxDQUFDLEdBQUQsQ0FIakI7QUFBQSxNQUd0QkcsV0FIc0I7QUFBQSxNQUdUQyxjQUhTOztBQUk3QixNQUFNQyxjQUFjLEdBQUdKLFdBQVcsR0FBR0UsV0FBckM7QUFDQSxNQUFNRyxlQUFlLEdBQUdELGNBQWMsR0FBR0YsV0FBekMsQ0FMNkIsQ0FNN0I7O0FBTjZCLG1CQU9TSCxzREFBUSxDQUFDLEVBQUQsQ0FQakI7QUFBQSxNQU90Qk8sV0FQc0I7QUFBQSxNQU9UQyxjQVBTLGtCQVM3QjtBQUNBO0FBQ0E7OztBQUVBLE1BQU1DLFNBQVM7QUFBQSxrU0FBRyxpQkFBT0MsT0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUNFQyxLQUFLLHFGQUN3REQsT0FEeEQsRUFEUDs7QUFBQTtBQUNWRSxpQkFEVTtBQUFBO0FBQUEscUJBSUdBLEdBQUcsQ0FBQ0MsSUFBSixFQUpIOztBQUFBO0FBSVZDLGtCQUpVO0FBQUEsK0NBS1RBLElBQUksQ0FBQ0MsS0FMSTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFUTixTQUFTO0FBQUE7QUFBQTtBQUFBLEtBQWY7O0FBUUEsTUFBTU8sV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsQ0FBRCxFQUFPO0FBQ3pCZixrQkFBYyxDQUFDZ0IsTUFBTSxDQUFDRCxDQUFDLENBQUNFLE1BQUYsQ0FBU0MsRUFBVixDQUFQLENBQWQ7QUFDQSxRQUFNQyxPQUFPLEdBQUdaLFNBQVMsQ0FBQ1MsTUFBTSxDQUFDRCxDQUFDLENBQUNFLE1BQUYsQ0FBU0MsRUFBVixDQUFQLENBQXpCO0FBQ0FaLGtCQUFjLG1CQUFNYSxPQUFOLEVBQWQ7QUFDQUMsV0FBTyxDQUFDQyxHQUFSLENBQVloQixXQUFaO0FBQ0QsR0FMRDs7QUFPQSxzQkFDRTtBQUFBLDRCQUNFLHFFQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUVFLHFFQUFDLDZEQUFEO0FBQ0UsaUJBQVcsRUFBRUEsV0FEZjtBQUVFLGlCQUFXLEVBQUVSLFdBRmY7QUFHRSxpQkFBVyxFQUFFRSxXQUhmO0FBSUUsaUJBQVcsRUFBRWU7QUFKZjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkY7QUFBQSxrQkFERjtBQVdELEMsQ0FFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0dBckR3QmxCLEk7O0tBQUFBLEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNWRmYTkyNzdjMWE3NTYyZWQ2YmEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBEZXZzQ2FyZHMgZnJvbSBcIi4uL2NvbXBvbmVudHMvRGV2c0NhcmRzXCI7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvSGVhZGVyXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xyXG4gIGNvbnN0IHBhZ2VOdW1iZXJzID0gWzEsIDIsIDMsIDQsIDVdO1xyXG4gIGNvbnN0IFtjdXJyZW50UGFnZSwgc2V0Q3VycmVudFBhZ2VdID0gdXNlU3RhdGUoMSk7XHJcbiAgY29uc3QgW2RldnNQZXJQYWdlLCBzZXRkZXZzUGVyUGFnZV0gPSB1c2VTdGF0ZSgxMDApO1xyXG4gIGNvbnN0IGluZGV4T2ZMYXN0RGV2ID0gY3VycmVudFBhZ2UgKiBkZXZzUGVyUGFnZTtcclxuICBjb25zdCBpbmRleE9mRmlyc3REZXYgPSBpbmRleE9mTGFzdERldiAtIGRldnNQZXJQYWdlO1xyXG4gIC8vIGNvbnN0IGN1cnJlbnREZXZzID0gZGV2cy5zbGljZShpbmRleE9mRmlyc3REZXYsIGluZGV4T2ZMYXN0RGV2KTtcclxuICBjb25zdCBbY3VycmVudERldnMsIHNldEN1cnJlbnREZXZzXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgLy8gZm9yIChsZXQgaSA9IDE7IGkgPD0gTWF0aC5jZWlsKGRldnMubGVuZ3RoIC8gZGV2c1BlclBhZ2UpOyBpKyspIHtcclxuICAvLyAgIHBhZ2VOdW1iZXJzLnB1c2goaSk7XHJcbiAgLy8gfVxyXG5cclxuICBjb25zdCBmZXRjaERldnMgPSBhc3luYyAocGFnZU51bSkgPT4ge1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXHJcbiAgICAgIGBodHRwczovL2FwaS5naXRodWIuY29tL3NlYXJjaC91c2Vycz9xPWxvY2F0aW9uOnRhbnphbmlhJnBlcl9wYWdlPTEwMCZwYWdlPSR7cGFnZU51bX1gXHJcbiAgICApO1xyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICByZXR1cm4gZGF0YS5pdGVtcztcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDbGljayA9IChlKSA9PiB7XHJcbiAgICBzZXRDdXJyZW50UGFnZShOdW1iZXIoZS50YXJnZXQuaWQpKTtcclxuICAgIGNvbnN0IG5ld0RldnMgPSBmZXRjaERldnMoTnVtYmVyKGUudGFyZ2V0LmlkKSk7XHJcbiAgICBzZXRDdXJyZW50RGV2cyh7IC4uLm5ld0RldnMgfSk7XHJcbiAgICBjb25zb2xlLmxvZyhjdXJyZW50RGV2cyk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgPERldnNDYXJkc1xyXG4gICAgICAgIGN1cnJlbnREZXZzPXtjdXJyZW50RGV2c31cclxuICAgICAgICBwYWdlTnVtYmVycz17cGFnZU51bWJlcnN9XHJcbiAgICAgICAgY3VycmVudFBhZ2U9e2N1cnJlbnRQYWdlfVxyXG4gICAgICAgIGhhbmRsZUNsaWNrPXtoYW5kbGVDbGlja31cclxuICAgICAgLz5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbi8vIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcclxuLy8gICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcclxuLy8gICAgIFwiaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS9zZWFyY2gvdXNlcnM/cT1sb2NhdGlvbjp0YW56YW5pYSZwZXJfcGFnZT0xMDBcIlxyXG4vLyAgICk7XHJcbi8vICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbi8vICAgY29uc3QgZGV2cyA9IGRhdGEuaXRlbXM7XHJcblxyXG4vLyAgIHJldHVybiB7XHJcbi8vICAgICBwcm9wczoge1xyXG4vLyAgICAgICBkZXZzLFxyXG4vLyAgICAgfSxcclxuLy8gICB9O1xyXG4vLyB9XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=
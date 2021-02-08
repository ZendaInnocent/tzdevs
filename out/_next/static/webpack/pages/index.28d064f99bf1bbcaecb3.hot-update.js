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
/* harmony import */ var C_Users_Innocent_Desktop_tzdevs_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_Innocent_Desktop_tzdevs_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_Innocent_Desktop_tzdevs_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_Innocent_Desktop_tzdevs_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_DevsCards__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/DevsCards */ "./components/DevsCards.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");





var _jsxFileName = "C:\\Users\\Innocent\\Desktop\\tzdevs-next\\pages\\index.js",
    _s = $RefreshSig$();




function Home() {
  _s();

  var pageNumbers = [1, 2, 3, 4, 5];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(1),
      currentPage = _useState[0],
      setCurrentPage = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(100),
      devsPerPage = _useState2[0],
      setdevsPerPage = _useState2[1];

  var indexOfLastDev = currentPage * devsPerPage;
  var indexOfFirstDev = indexOfLastDev - devsPerPage; // const currentDevs = devs.slice(indexOfFirstDev, indexOfLastDev);

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      currentDevs = _useState3[0],
      setCurrentDevs = _useState3[1]; // for (let i = 1; i <= Math.ceil(devs.length / devsPerPage); i++) {
  //   pageNumbers.push(i);
  // }


  var fetchDevs = /*#__PURE__*/function () {
    var _ref = Object(C_Users_Innocent_Desktop_tzdevs_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_Innocent_Desktop_tzdevs_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(pageNum) {
      var res, data;
      return C_Users_Innocent_Desktop_tzdevs_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
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
      return _ref.apply(this, arguments);
    };
  }();

  var handleClick = function handleClick(e) {
    setCurrentPage(Number(e.target.id));
    setCurrentDevs(fetchDevs(Number(e.target.id)));
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Header__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_DevsCards__WEBPACK_IMPORTED_MODULE_4__["default"], {
      currentDevs: currentDevs,
      pageNumbers: pageNumbers,
      currentPage: currentPage,
      handleClick: handleClick
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsInBhZ2VOdW1iZXJzIiwidXNlU3RhdGUiLCJjdXJyZW50UGFnZSIsInNldEN1cnJlbnRQYWdlIiwiZGV2c1BlclBhZ2UiLCJzZXRkZXZzUGVyUGFnZSIsImluZGV4T2ZMYXN0RGV2IiwiaW5kZXhPZkZpcnN0RGV2IiwiY3VycmVudERldnMiLCJzZXRDdXJyZW50RGV2cyIsImZldGNoRGV2cyIsInBhZ2VOdW0iLCJmZXRjaCIsInJlcyIsImpzb24iLCJkYXRhIiwiaGFuZGxlQ2xpY2siLCJlIiwiTnVtYmVyIiwidGFyZ2V0IiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRWUsU0FBU0EsSUFBVCxHQUFnQjtBQUFBOztBQUM3QixNQUFNQyxXQUFXLEdBQUcsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxDQUFWLEVBQWEsQ0FBYixDQUFwQjs7QUFENkIsa0JBRVNDLHNEQUFRLENBQUMsQ0FBRCxDQUZqQjtBQUFBLE1BRXRCQyxXQUZzQjtBQUFBLE1BRVRDLGNBRlM7O0FBQUEsbUJBR1NGLHNEQUFRLENBQUMsR0FBRCxDQUhqQjtBQUFBLE1BR3RCRyxXQUhzQjtBQUFBLE1BR1RDLGNBSFM7O0FBSTdCLE1BQU1DLGNBQWMsR0FBR0osV0FBVyxHQUFHRSxXQUFyQztBQUNBLE1BQU1HLGVBQWUsR0FBR0QsY0FBYyxHQUFHRixXQUF6QyxDQUw2QixDQU03Qjs7QUFONkIsbUJBT1NILHNEQUFRLENBQUMsRUFBRCxDQVBqQjtBQUFBLE1BT3RCTyxXQVBzQjtBQUFBLE1BT1RDLGNBUFMsa0JBUzdCO0FBQ0E7QUFDQTs7O0FBRUEsTUFBTUMsU0FBUztBQUFBLGtTQUFHLGlCQUFPQyxPQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQ0VDLEtBQUsscUZBQ3dERCxPQUR4RCxFQURQOztBQUFBO0FBQ1ZFLGlCQURVO0FBQUE7QUFBQSxxQkFJR0EsR0FBRyxDQUFDQyxJQUFKLEVBSkg7O0FBQUE7QUFJVkMsa0JBSlU7QUFBQSwrQ0FLVEEsSUFMUzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFUTCxTQUFTO0FBQUE7QUFBQTtBQUFBLEtBQWY7O0FBUUEsTUFBTU0sV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsQ0FBRCxFQUFPO0FBQ3pCZCxrQkFBYyxDQUFDZSxNQUFNLENBQUNELENBQUMsQ0FBQ0UsTUFBRixDQUFTQyxFQUFWLENBQVAsQ0FBZDtBQUNBWCxrQkFBYyxDQUFDQyxTQUFTLENBQUNRLE1BQU0sQ0FBQ0QsQ0FBQyxDQUFDRSxNQUFGLENBQVNDLEVBQVYsQ0FBUCxDQUFWLENBQWQ7QUFDRCxHQUhEOztBQUtBLHNCQUNFO0FBQUEsNEJBQ0UscUVBQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBRUUscUVBQUMsNkRBQUQ7QUFDRSxpQkFBVyxFQUFFWixXQURmO0FBRUUsaUJBQVcsRUFBRVIsV0FGZjtBQUdFLGlCQUFXLEVBQUVFLFdBSGY7QUFJRSxpQkFBVyxFQUFFYztBQUpmO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRjtBQUFBLGtCQURGO0FBV0QsQyxDQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7R0FuRHdCakIsSTs7S0FBQUEsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4yOGQwNjRmOTliZjFiYmNhZWNiMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IERldnNDYXJkcyBmcm9tIFwiLi4vY29tcG9uZW50cy9EZXZzQ2FyZHNcIjtcclxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9IZWFkZXJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XHJcbiAgY29uc3QgcGFnZU51bWJlcnMgPSBbMSwgMiwgMywgNCwgNV07XHJcbiAgY29uc3QgW2N1cnJlbnRQYWdlLCBzZXRDdXJyZW50UGFnZV0gPSB1c2VTdGF0ZSgxKTtcclxuICBjb25zdCBbZGV2c1BlclBhZ2UsIHNldGRldnNQZXJQYWdlXSA9IHVzZVN0YXRlKDEwMCk7XHJcbiAgY29uc3QgaW5kZXhPZkxhc3REZXYgPSBjdXJyZW50UGFnZSAqIGRldnNQZXJQYWdlO1xyXG4gIGNvbnN0IGluZGV4T2ZGaXJzdERldiA9IGluZGV4T2ZMYXN0RGV2IC0gZGV2c1BlclBhZ2U7XHJcbiAgLy8gY29uc3QgY3VycmVudERldnMgPSBkZXZzLnNsaWNlKGluZGV4T2ZGaXJzdERldiwgaW5kZXhPZkxhc3REZXYpO1xyXG4gIGNvbnN0IFtjdXJyZW50RGV2cywgc2V0Q3VycmVudERldnNdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICAvLyBmb3IgKGxldCBpID0gMTsgaSA8PSBNYXRoLmNlaWwoZGV2cy5sZW5ndGggLyBkZXZzUGVyUGFnZSk7IGkrKykge1xyXG4gIC8vICAgcGFnZU51bWJlcnMucHVzaChpKTtcclxuICAvLyB9XHJcblxyXG4gIGNvbnN0IGZldGNoRGV2cyA9IGFzeW5jIChwYWdlTnVtKSA9PiB7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcclxuICAgICAgYGh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vc2VhcmNoL3VzZXJzP3E9bG9jYXRpb246dGFuemFuaWEmcGVyX3BhZ2U9MTAwJnBhZ2U9JHtwYWdlTnVtfWBcclxuICAgICk7XHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgIHJldHVybiBkYXRhO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKGUpID0+IHtcclxuICAgIHNldEN1cnJlbnRQYWdlKE51bWJlcihlLnRhcmdldC5pZCkpO1xyXG4gICAgc2V0Q3VycmVudERldnMoZmV0Y2hEZXZzKE51bWJlcihlLnRhcmdldC5pZCkpKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWRlciAvPlxyXG4gICAgICA8RGV2c0NhcmRzXHJcbiAgICAgICAgY3VycmVudERldnM9e2N1cnJlbnREZXZzfVxyXG4gICAgICAgIHBhZ2VOdW1iZXJzPXtwYWdlTnVtYmVyc31cclxuICAgICAgICBjdXJyZW50UGFnZT17Y3VycmVudFBhZ2V9XHJcbiAgICAgICAgaGFuZGxlQ2xpY2s9e2hhbmRsZUNsaWNrfVxyXG4gICAgICAvPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuLy8gZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xyXG4vLyAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFxyXG4vLyAgICAgXCJodHRwczovL2FwaS5naXRodWIuY29tL3NlYXJjaC91c2Vycz9xPWxvY2F0aW9uOnRhbnphbmlhJnBlcl9wYWdlPTEwMFwiXHJcbi8vICAgKTtcclxuLy8gICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuLy8gICBjb25zdCBkZXZzID0gZGF0YS5pdGVtcztcclxuXHJcbi8vICAgcmV0dXJuIHtcclxuLy8gICAgIHByb3BzOiB7XHJcbi8vICAgICAgIGRldnMsXHJcbi8vICAgICB9LFxyXG4vLyAgIH07XHJcbi8vIH1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
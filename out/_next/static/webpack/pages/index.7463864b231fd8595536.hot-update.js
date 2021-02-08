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
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_DevsCards__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/DevsCards */ "./components/DevsCards.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");



var _jsxFileName = "C:\\Users\\Innocent\\Desktop\\tzdevs-next\\pages\\index.js",
    _s = $RefreshSig$();



 // const devs = [
//   {
//     login: "lykmapipo",
//     id: 1610857,
//     node_id: "MDQ6VXNlcjE2MTA4NTc=",
//     avatar_url: "https://avatars.githubusercontent.com/u/1610857?v=4",
//     gravatar_id: "",
//     url: "https://api.github.com/users/lykmapipo",
//     html_url: "https://github.com/lykmapipo",
//     followers_url: "https://api.github.com/users/lykmapipo/followers",
//     following_url:
//       "https://api.github.com/users/lykmapipo/following{/other_user}",
//     gists_url: "https://api.github.com/users/lykmapipo/gists{/gist_id}",
//     starred_url:
//       "https://api.github.com/users/lykmapipo/starred{/owner}{/repo}",
//     subscriptions_url: "https://api.github.com/users/lykmapipo/subscriptions",
//     organizations_url: "https://api.github.com/users/lykmapipo/orgs",
//     repos_url: "https://api.github.com/users/lykmapipo/repos",
//     events_url: "https://api.github.com/users/lykmapipo/events{/privacy}",
//     received_events_url:
//       "https://api.github.com/users/lykmapipo/received_events",
//     type: "User",
//     site_admin: false,
//     score: 1.0,
//   },
//   {
//     login: "gernest",
//     id: 6039952,
//     node_id: "MDQ6VXNlcjYwMzk5NTI=",
//     avatar_url: "https://avatars.githubusercontent.com/u/6039952?v=4",
//     gravatar_id: "",
//     url: "https://api.github.com/users/gernest",
//     html_url: "https://github.com/gernest",
//     followers_url: "https://api.github.com/users/gernest/followers",
//     following_url:
//       "https://api.github.com/users/gernest/following{/other_user}",
//     gists_url: "https://api.github.com/users/gernest/gists{/gist_id}",
//     starred_url: "https://api.github.com/users/gernest/starred{/owner}{/repo}",
//     subscriptions_url: "https://api.github.com/users/gernest/subscriptions",
//     organizations_url: "https://api.github.com/users/gernest/orgs",
//     repos_url: "https://api.github.com/users/gernest/repos",
//     events_url: "https://api.github.com/users/gernest/events{/privacy}",
//     received_events_url: "https://api.github.com/users/gernest/received_events",
//     type: "User",
//     site_admin: false,
//     score: 1.0,
//   },
//   {
//     login: "alphaolomi",
//     id: 10551599,
//     node_id: "MDQ6VXNlcjEwNTUxNTk5",
//     avatar_url: "https://avatars.githubusercontent.com/u/10551599?v=4",
//     gravatar_id: "",
//     url: "https://api.github.com/users/alphaolomi",
//     html_url: "https://github.com/alphaolomi",
//     followers_url: "https://api.github.com/users/alphaolomi/followers",
//     following_url:
//       "https://api.github.com/users/alphaolomi/following{/other_user}",
//     gists_url: "https://api.github.com/users/alphaolomi/gists{/gist_id}",
//     starred_url:
//       "https://api.github.com/users/alphaolomi/starred{/owner}{/repo}",
//     subscriptions_url: "https://api.github.com/users/alphaolomi/subscriptions",
//     organizations_url: "https://api.github.com/users/alphaolomi/orgs",
//     repos_url: "https://api.github.com/users/alphaolomi/repos",
//     events_url: "https://api.github.com/users/alphaolomi/events{/privacy}",
//     received_events_url:
//       "https://api.github.com/users/alphaolomi/received_events",
//     type: "User",
//     site_admin: false,
//     score: 1.0,
//   },
// ];

var __N_SSG = true;
function Home(_ref) {
  _s();

  var devs = _ref.devs;
  var pageNumbers = [];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(1),
      currentPage = _useState[0],
      setCurrentPage = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(15),
      devsPerPage = _useState2[0],
      setdevsPerPage = _useState2[1];

  var indexOfLastDev = currentPage * devsPerPage;
  var indexOfFirstDev = indexOfLastDev - devsPerPage;
  var currentDevs = devs.slice(indexOfFirstDev, indexOfLastDev);

  for (var i = 1; i <= Math.ceil(devs.length / devsPerPage); i++) {
    pageNumbers.push(i);
  }

  var handleClick = function handleClick(e) {
    setCurrentPage(Number(e.target.id));
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_DevsCards__WEBPACK_IMPORTED_MODULE_2__["default"], {
      currentDevs: currentDevs,
      pageNumbers: pageNumbers,
      currentPage: currentPage,
      handleClick: handleClick
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

_s(Home, "k6MeIxWu0rsxZ6TJc68laJoLph8=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsImRldnMiLCJwYWdlTnVtYmVycyIsInVzZVN0YXRlIiwiY3VycmVudFBhZ2UiLCJzZXRDdXJyZW50UGFnZSIsImRldnNQZXJQYWdlIiwic2V0ZGV2c1BlclBhZ2UiLCJpbmRleE9mTGFzdERldiIsImluZGV4T2ZGaXJzdERldiIsImN1cnJlbnREZXZzIiwic2xpY2UiLCJpIiwiTWF0aCIsImNlaWwiLCJsZW5ndGgiLCJwdXNoIiwiaGFuZGxlQ2xpY2siLCJlIiwiTnVtYmVyIiwidGFyZ2V0IiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0NBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFZSxTQUFTQSxJQUFULE9BQXdCO0FBQUE7O0FBQUEsTUFBUkMsSUFBUSxRQUFSQSxJQUFRO0FBQ3JDLE1BQU1DLFdBQVcsR0FBRyxFQUFwQjs7QUFEcUMsa0JBRUNDLHNEQUFRLENBQUMsQ0FBRCxDQUZUO0FBQUEsTUFFOUJDLFdBRjhCO0FBQUEsTUFFakJDLGNBRmlCOztBQUFBLG1CQUdDRixzREFBUSxDQUFDLEVBQUQsQ0FIVDtBQUFBLE1BRzlCRyxXQUg4QjtBQUFBLE1BR2pCQyxjQUhpQjs7QUFJckMsTUFBTUMsY0FBYyxHQUFHSixXQUFXLEdBQUdFLFdBQXJDO0FBQ0EsTUFBTUcsZUFBZSxHQUFHRCxjQUFjLEdBQUdGLFdBQXpDO0FBQ0EsTUFBTUksV0FBVyxHQUFHVCxJQUFJLENBQUNVLEtBQUwsQ0FBV0YsZUFBWCxFQUE0QkQsY0FBNUIsQ0FBcEI7O0FBRUEsT0FBSyxJQUFJSSxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxJQUFJQyxJQUFJLENBQUNDLElBQUwsQ0FBVWIsSUFBSSxDQUFDYyxNQUFMLEdBQWNULFdBQXhCLENBQXJCLEVBQTJETSxDQUFDLEVBQTVELEVBQWdFO0FBQzlEVixlQUFXLENBQUNjLElBQVosQ0FBaUJKLENBQWpCO0FBQ0Q7O0FBRUQsTUFBTUssV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsQ0FBRCxFQUFPO0FBQ3pCYixrQkFBYyxDQUFDYyxNQUFNLENBQUNELENBQUMsQ0FBQ0UsTUFBRixDQUFTQyxFQUFWLENBQVAsQ0FBZDtBQUNELEdBRkQ7O0FBSUEsc0JBQ0U7QUFBQSw0QkFDRSxxRUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRSxxRUFBQyw2REFBRDtBQUNFLGlCQUFXLEVBQUVYLFdBRGY7QUFFRSxpQkFBVyxFQUFFUixXQUZmO0FBR0UsaUJBQVcsRUFBRUUsV0FIZjtBQUlFLGlCQUFXLEVBQUVhO0FBSmY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGO0FBQUEsa0JBREY7QUFXRDs7R0EzQnVCakIsSTs7S0FBQUEsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC43NDYzODY0YjIzMWZkODU5NTUzNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IERldnNDYXJkcyBmcm9tIFwiLi4vY29tcG9uZW50cy9EZXZzQ2FyZHNcIjtcclxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9IZWFkZXJcIjtcclxuXHJcblxyXG4vLyBjb25zdCBkZXZzID0gW1xyXG4vLyAgIHtcclxuLy8gICAgIGxvZ2luOiBcImx5a21hcGlwb1wiLFxyXG4vLyAgICAgaWQ6IDE2MTA4NTcsXHJcbi8vICAgICBub2RlX2lkOiBcIk1EUTZWWE5sY2pFMk1UQTROVGM9XCIsXHJcbi8vICAgICBhdmF0YXJfdXJsOiBcImh0dHBzOi8vYXZhdGFycy5naXRodWJ1c2VyY29udGVudC5jb20vdS8xNjEwODU3P3Y9NFwiLFxyXG4vLyAgICAgZ3JhdmF0YXJfaWQ6IFwiXCIsXHJcbi8vICAgICB1cmw6IFwiaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2Vycy9seWttYXBpcG9cIixcclxuLy8gICAgIGh0bWxfdXJsOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9seWttYXBpcG9cIixcclxuLy8gICAgIGZvbGxvd2Vyc191cmw6IFwiaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2Vycy9seWttYXBpcG8vZm9sbG93ZXJzXCIsXHJcbi8vICAgICBmb2xsb3dpbmdfdXJsOlxyXG4vLyAgICAgICBcImh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMvbHlrbWFwaXBvL2ZvbGxvd2luZ3svb3RoZXJfdXNlcn1cIixcclxuLy8gICAgIGdpc3RzX3VybDogXCJodHRwczovL2FwaS5naXRodWIuY29tL3VzZXJzL2x5a21hcGlwby9naXN0c3svZ2lzdF9pZH1cIixcclxuLy8gICAgIHN0YXJyZWRfdXJsOlxyXG4vLyAgICAgICBcImh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMvbHlrbWFwaXBvL3N0YXJyZWR7L293bmVyfXsvcmVwb31cIixcclxuLy8gICAgIHN1YnNjcmlwdGlvbnNfdXJsOiBcImh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMvbHlrbWFwaXBvL3N1YnNjcmlwdGlvbnNcIixcclxuLy8gICAgIG9yZ2FuaXphdGlvbnNfdXJsOiBcImh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMvbHlrbWFwaXBvL29yZ3NcIixcclxuLy8gICAgIHJlcG9zX3VybDogXCJodHRwczovL2FwaS5naXRodWIuY29tL3VzZXJzL2x5a21hcGlwby9yZXBvc1wiLFxyXG4vLyAgICAgZXZlbnRzX3VybDogXCJodHRwczovL2FwaS5naXRodWIuY29tL3VzZXJzL2x5a21hcGlwby9ldmVudHN7L3ByaXZhY3l9XCIsXHJcbi8vICAgICByZWNlaXZlZF9ldmVudHNfdXJsOlxyXG4vLyAgICAgICBcImh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMvbHlrbWFwaXBvL3JlY2VpdmVkX2V2ZW50c1wiLFxyXG4vLyAgICAgdHlwZTogXCJVc2VyXCIsXHJcbi8vICAgICBzaXRlX2FkbWluOiBmYWxzZSxcclxuLy8gICAgIHNjb3JlOiAxLjAsXHJcbi8vICAgfSxcclxuLy8gICB7XHJcbi8vICAgICBsb2dpbjogXCJnZXJuZXN0XCIsXHJcbi8vICAgICBpZDogNjAzOTk1MixcclxuLy8gICAgIG5vZGVfaWQ6IFwiTURRNlZYTmxjall3TXprNU5UST1cIixcclxuLy8gICAgIGF2YXRhcl91cmw6IFwiaHR0cHM6Ly9hdmF0YXJzLmdpdGh1YnVzZXJjb250ZW50LmNvbS91LzYwMzk5NTI/dj00XCIsXHJcbi8vICAgICBncmF2YXRhcl9pZDogXCJcIixcclxuLy8gICAgIHVybDogXCJodHRwczovL2FwaS5naXRodWIuY29tL3VzZXJzL2dlcm5lc3RcIixcclxuLy8gICAgIGh0bWxfdXJsOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9nZXJuZXN0XCIsXHJcbi8vICAgICBmb2xsb3dlcnNfdXJsOiBcImh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMvZ2VybmVzdC9mb2xsb3dlcnNcIixcclxuLy8gICAgIGZvbGxvd2luZ191cmw6XHJcbi8vICAgICAgIFwiaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2Vycy9nZXJuZXN0L2ZvbGxvd2luZ3svb3RoZXJfdXNlcn1cIixcclxuLy8gICAgIGdpc3RzX3VybDogXCJodHRwczovL2FwaS5naXRodWIuY29tL3VzZXJzL2dlcm5lc3QvZ2lzdHN7L2dpc3RfaWR9XCIsXHJcbi8vICAgICBzdGFycmVkX3VybDogXCJodHRwczovL2FwaS5naXRodWIuY29tL3VzZXJzL2dlcm5lc3Qvc3RhcnJlZHsvb3duZXJ9ey9yZXBvfVwiLFxyXG4vLyAgICAgc3Vic2NyaXB0aW9uc191cmw6IFwiaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2Vycy9nZXJuZXN0L3N1YnNjcmlwdGlvbnNcIixcclxuLy8gICAgIG9yZ2FuaXphdGlvbnNfdXJsOiBcImh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMvZ2VybmVzdC9vcmdzXCIsXHJcbi8vICAgICByZXBvc191cmw6IFwiaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2Vycy9nZXJuZXN0L3JlcG9zXCIsXHJcbi8vICAgICBldmVudHNfdXJsOiBcImh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMvZ2VybmVzdC9ldmVudHN7L3ByaXZhY3l9XCIsXHJcbi8vICAgICByZWNlaXZlZF9ldmVudHNfdXJsOiBcImh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMvZ2VybmVzdC9yZWNlaXZlZF9ldmVudHNcIixcclxuLy8gICAgIHR5cGU6IFwiVXNlclwiLFxyXG4vLyAgICAgc2l0ZV9hZG1pbjogZmFsc2UsXHJcbi8vICAgICBzY29yZTogMS4wLFxyXG4vLyAgIH0sXHJcbi8vICAge1xyXG4vLyAgICAgbG9naW46IFwiYWxwaGFvbG9taVwiLFxyXG4vLyAgICAgaWQ6IDEwNTUxNTk5LFxyXG4vLyAgICAgbm9kZV9pZDogXCJNRFE2VlhObGNqRXdOVFV4TlRrNVwiLFxyXG4vLyAgICAgYXZhdGFyX3VybDogXCJodHRwczovL2F2YXRhcnMuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3UvMTA1NTE1OTk/dj00XCIsXHJcbi8vICAgICBncmF2YXRhcl9pZDogXCJcIixcclxuLy8gICAgIHVybDogXCJodHRwczovL2FwaS5naXRodWIuY29tL3VzZXJzL2FscGhhb2xvbWlcIixcclxuLy8gICAgIGh0bWxfdXJsOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9hbHBoYW9sb21pXCIsXHJcbi8vICAgICBmb2xsb3dlcnNfdXJsOiBcImh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMvYWxwaGFvbG9taS9mb2xsb3dlcnNcIixcclxuLy8gICAgIGZvbGxvd2luZ191cmw6XHJcbi8vICAgICAgIFwiaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2Vycy9hbHBoYW9sb21pL2ZvbGxvd2luZ3svb3RoZXJfdXNlcn1cIixcclxuLy8gICAgIGdpc3RzX3VybDogXCJodHRwczovL2FwaS5naXRodWIuY29tL3VzZXJzL2FscGhhb2xvbWkvZ2lzdHN7L2dpc3RfaWR9XCIsXHJcbi8vICAgICBzdGFycmVkX3VybDpcclxuLy8gICAgICAgXCJodHRwczovL2FwaS5naXRodWIuY29tL3VzZXJzL2FscGhhb2xvbWkvc3RhcnJlZHsvb3duZXJ9ey9yZXBvfVwiLFxyXG4vLyAgICAgc3Vic2NyaXB0aW9uc191cmw6IFwiaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2Vycy9hbHBoYW9sb21pL3N1YnNjcmlwdGlvbnNcIixcclxuLy8gICAgIG9yZ2FuaXphdGlvbnNfdXJsOiBcImh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMvYWxwaGFvbG9taS9vcmdzXCIsXHJcbi8vICAgICByZXBvc191cmw6IFwiaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2Vycy9hbHBoYW9sb21pL3JlcG9zXCIsXHJcbi8vICAgICBldmVudHNfdXJsOiBcImh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMvYWxwaGFvbG9taS9ldmVudHN7L3ByaXZhY3l9XCIsXHJcbi8vICAgICByZWNlaXZlZF9ldmVudHNfdXJsOlxyXG4vLyAgICAgICBcImh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMvYWxwaGFvbG9taS9yZWNlaXZlZF9ldmVudHNcIixcclxuLy8gICAgIHR5cGU6IFwiVXNlclwiLFxyXG4vLyAgICAgc2l0ZV9hZG1pbjogZmFsc2UsXHJcbi8vICAgICBzY29yZTogMS4wLFxyXG4vLyAgIH0sXHJcbi8vIF07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHsgZGV2cyB9KSB7XHJcbiAgY29uc3QgcGFnZU51bWJlcnMgPSBbXTtcclxuICBjb25zdCBbY3VycmVudFBhZ2UsIHNldEN1cnJlbnRQYWdlXSA9IHVzZVN0YXRlKDEpO1xyXG4gIGNvbnN0IFtkZXZzUGVyUGFnZSwgc2V0ZGV2c1BlclBhZ2VdID0gdXNlU3RhdGUoMTUpO1xyXG4gIGNvbnN0IGluZGV4T2ZMYXN0RGV2ID0gY3VycmVudFBhZ2UgKiBkZXZzUGVyUGFnZTtcclxuICBjb25zdCBpbmRleE9mRmlyc3REZXYgPSBpbmRleE9mTGFzdERldiAtIGRldnNQZXJQYWdlO1xyXG4gIGNvbnN0IGN1cnJlbnREZXZzID0gZGV2cy5zbGljZShpbmRleE9mRmlyc3REZXYsIGluZGV4T2ZMYXN0RGV2KTtcclxuXHJcbiAgZm9yIChsZXQgaSA9IDE7IGkgPD0gTWF0aC5jZWlsKGRldnMubGVuZ3RoIC8gZGV2c1BlclBhZ2UpOyBpKyspIHtcclxuICAgIHBhZ2VOdW1iZXJzLnB1c2goaSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVDbGljayA9IChlKSA9PiB7XHJcbiAgICBzZXRDdXJyZW50UGFnZShOdW1iZXIoZS50YXJnZXQuaWQpKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWRlciAvPlxyXG4gICAgICA8RGV2c0NhcmRzXHJcbiAgICAgICAgY3VycmVudERldnM9e2N1cnJlbnREZXZzfVxyXG4gICAgICAgIHBhZ2VOdW1iZXJzPXtwYWdlTnVtYmVyc31cclxuICAgICAgICBjdXJyZW50UGFnZT17Y3VycmVudFBhZ2V9XHJcbiAgICAgICAgaGFuZGxlQ2xpY2s9e2hhbmRsZUNsaWNrfVxyXG4gICAgICAvPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFxyXG4gICAgXCJodHRwczovL2FwaS5naXRodWIuY29tL3NlYXJjaC91c2Vycz9xPWxvY2F0aW9uOnRhbnphbmlhJnBlcl9wYWdlPTEwMFwiXHJcbiAgKTtcclxuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICBjb25zdCBkZXZzID0gZGF0YS5pdGVtcztcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9
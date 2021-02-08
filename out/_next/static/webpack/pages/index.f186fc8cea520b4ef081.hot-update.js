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

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(15),
      currentPage = _useState[0],
      setCurrentPage = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(1),
      devsPerPage = _useState2[0],
      setdevsPerPage = _useState2[1];

  var indexOfLastDev = currentPage * devsPerPage;
  var indexOfFirstDev = indexOfLastDev - devsPerPage;
  var currentDevs = props.devs.slice(indexOfFirstDev, indexOfLastDev);

  for (var i = 1; i <= Math.ceil(props.devs.length / devsPerPage); i++) {
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
      handleClick: handleClick
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

_s(Home, "s8ZsWavgxPkWDYDySfQPFdIj2e8=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsImRldnMiLCJwYWdlTnVtYmVycyIsInVzZVN0YXRlIiwiY3VycmVudFBhZ2UiLCJzZXRDdXJyZW50UGFnZSIsImRldnNQZXJQYWdlIiwic2V0ZGV2c1BlclBhZ2UiLCJpbmRleE9mTGFzdERldiIsImluZGV4T2ZGaXJzdERldiIsImN1cnJlbnREZXZzIiwicHJvcHMiLCJzbGljZSIsImkiLCJNYXRoIiwiY2VpbCIsImxlbmd0aCIsInB1c2giLCJoYW5kbGVDbGljayIsImUiLCJOdW1iZXIiLCJ0YXJnZXQiLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7Q0FJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVlLFNBQVNBLElBQVQsT0FBd0I7QUFBQTs7QUFBQSxNQUFSQyxJQUFRLFFBQVJBLElBQVE7QUFDckMsTUFBTUMsV0FBVyxHQUFHLEVBQXBCOztBQURxQyxrQkFFQ0Msc0RBQVEsQ0FBQyxFQUFELENBRlQ7QUFBQSxNQUU5QkMsV0FGOEI7QUFBQSxNQUVqQkMsY0FGaUI7O0FBQUEsbUJBR0NGLHNEQUFRLENBQUMsQ0FBRCxDQUhUO0FBQUEsTUFHOUJHLFdBSDhCO0FBQUEsTUFHakJDLGNBSGlCOztBQUlyQyxNQUFNQyxjQUFjLEdBQUdKLFdBQVcsR0FBR0UsV0FBckM7QUFDQSxNQUFNRyxlQUFlLEdBQUdELGNBQWMsR0FBR0YsV0FBekM7QUFDQSxNQUFNSSxXQUFXLEdBQUdDLEtBQUssQ0FBQ1YsSUFBTixDQUFXVyxLQUFYLENBQWlCSCxlQUFqQixFQUFrQ0QsY0FBbEMsQ0FBcEI7O0FBRUEsT0FBSyxJQUFJSyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxJQUFJQyxJQUFJLENBQUNDLElBQUwsQ0FBVUosS0FBSyxDQUFDVixJQUFOLENBQVdlLE1BQVgsR0FBb0JWLFdBQTlCLENBQXJCLEVBQWlFTyxDQUFDLEVBQWxFLEVBQXNFO0FBQ3BFWCxlQUFXLENBQUNlLElBQVosQ0FBaUJKLENBQWpCO0FBQ0Q7O0FBRUQsTUFBTUssV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsQ0FBRCxFQUFPO0FBQ3pCZCxrQkFBYyxDQUFDZSxNQUFNLENBQUNELENBQUMsQ0FBQ0UsTUFBRixDQUFTQyxFQUFWLENBQVAsQ0FBZDtBQUNELEdBRkQ7O0FBSUEsc0JBQ0U7QUFBQSw0QkFDRSxxRUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRSxxRUFBQyw2REFBRDtBQUNFLGlCQUFXLEVBQUVaLFdBRGY7QUFFRSxpQkFBVyxFQUFFUixXQUZmO0FBR0UsaUJBQVcsRUFBRWdCO0FBSGY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGO0FBQUEsa0JBREY7QUFVRDs7R0ExQnVCbEIsSTs7S0FBQUEsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5mMTg2ZmM4Y2VhNTIwYjRlZjA4MS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IERldnNDYXJkcyBmcm9tIFwiLi4vY29tcG9uZW50cy9EZXZzQ2FyZHNcIjtcclxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9IZWFkZXJcIjtcclxuXHJcblxyXG4vLyBjb25zdCBkZXZzID0gW1xyXG4vLyAgIHtcclxuLy8gICAgIGxvZ2luOiBcImx5a21hcGlwb1wiLFxyXG4vLyAgICAgaWQ6IDE2MTA4NTcsXHJcbi8vICAgICBub2RlX2lkOiBcIk1EUTZWWE5sY2pFMk1UQTROVGM9XCIsXHJcbi8vICAgICBhdmF0YXJfdXJsOiBcImh0dHBzOi8vYXZhdGFycy5naXRodWJ1c2VyY29udGVudC5jb20vdS8xNjEwODU3P3Y9NFwiLFxyXG4vLyAgICAgZ3JhdmF0YXJfaWQ6IFwiXCIsXHJcbi8vICAgICB1cmw6IFwiaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2Vycy9seWttYXBpcG9cIixcclxuLy8gICAgIGh0bWxfdXJsOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9seWttYXBpcG9cIixcclxuLy8gICAgIGZvbGxvd2Vyc191cmw6IFwiaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2Vycy9seWttYXBpcG8vZm9sbG93ZXJzXCIsXHJcbi8vICAgICBmb2xsb3dpbmdfdXJsOlxyXG4vLyAgICAgICBcImh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMvbHlrbWFwaXBvL2ZvbGxvd2luZ3svb3RoZXJfdXNlcn1cIixcclxuLy8gICAgIGdpc3RzX3VybDogXCJodHRwczovL2FwaS5naXRodWIuY29tL3VzZXJzL2x5a21hcGlwby9naXN0c3svZ2lzdF9pZH1cIixcclxuLy8gICAgIHN0YXJyZWRfdXJsOlxyXG4vLyAgICAgICBcImh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMvbHlrbWFwaXBvL3N0YXJyZWR7L293bmVyfXsvcmVwb31cIixcclxuLy8gICAgIHN1YnNjcmlwdGlvbnNfdXJsOiBcImh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMvbHlrbWFwaXBvL3N1YnNjcmlwdGlvbnNcIixcclxuLy8gICAgIG9yZ2FuaXphdGlvbnNfdXJsOiBcImh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMvbHlrbWFwaXBvL29yZ3NcIixcclxuLy8gICAgIHJlcG9zX3VybDogXCJodHRwczovL2FwaS5naXRodWIuY29tL3VzZXJzL2x5a21hcGlwby9yZXBvc1wiLFxyXG4vLyAgICAgZXZlbnRzX3VybDogXCJodHRwczovL2FwaS5naXRodWIuY29tL3VzZXJzL2x5a21hcGlwby9ldmVudHN7L3ByaXZhY3l9XCIsXHJcbi8vICAgICByZWNlaXZlZF9ldmVudHNfdXJsOlxyXG4vLyAgICAgICBcImh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMvbHlrbWFwaXBvL3JlY2VpdmVkX2V2ZW50c1wiLFxyXG4vLyAgICAgdHlwZTogXCJVc2VyXCIsXHJcbi8vICAgICBzaXRlX2FkbWluOiBmYWxzZSxcclxuLy8gICAgIHNjb3JlOiAxLjAsXHJcbi8vICAgfSxcclxuLy8gICB7XHJcbi8vICAgICBsb2dpbjogXCJnZXJuZXN0XCIsXHJcbi8vICAgICBpZDogNjAzOTk1MixcclxuLy8gICAgIG5vZGVfaWQ6IFwiTURRNlZYTmxjall3TXprNU5UST1cIixcclxuLy8gICAgIGF2YXRhcl91cmw6IFwiaHR0cHM6Ly9hdmF0YXJzLmdpdGh1YnVzZXJjb250ZW50LmNvbS91LzYwMzk5NTI/dj00XCIsXHJcbi8vICAgICBncmF2YXRhcl9pZDogXCJcIixcclxuLy8gICAgIHVybDogXCJodHRwczovL2FwaS5naXRodWIuY29tL3VzZXJzL2dlcm5lc3RcIixcclxuLy8gICAgIGh0bWxfdXJsOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9nZXJuZXN0XCIsXHJcbi8vICAgICBmb2xsb3dlcnNfdXJsOiBcImh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMvZ2VybmVzdC9mb2xsb3dlcnNcIixcclxuLy8gICAgIGZvbGxvd2luZ191cmw6XHJcbi8vICAgICAgIFwiaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2Vycy9nZXJuZXN0L2ZvbGxvd2luZ3svb3RoZXJfdXNlcn1cIixcclxuLy8gICAgIGdpc3RzX3VybDogXCJodHRwczovL2FwaS5naXRodWIuY29tL3VzZXJzL2dlcm5lc3QvZ2lzdHN7L2dpc3RfaWR9XCIsXHJcbi8vICAgICBzdGFycmVkX3VybDogXCJodHRwczovL2FwaS5naXRodWIuY29tL3VzZXJzL2dlcm5lc3Qvc3RhcnJlZHsvb3duZXJ9ey9yZXBvfVwiLFxyXG4vLyAgICAgc3Vic2NyaXB0aW9uc191cmw6IFwiaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2Vycy9nZXJuZXN0L3N1YnNjcmlwdGlvbnNcIixcclxuLy8gICAgIG9yZ2FuaXphdGlvbnNfdXJsOiBcImh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMvZ2VybmVzdC9vcmdzXCIsXHJcbi8vICAgICByZXBvc191cmw6IFwiaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2Vycy9nZXJuZXN0L3JlcG9zXCIsXHJcbi8vICAgICBldmVudHNfdXJsOiBcImh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMvZ2VybmVzdC9ldmVudHN7L3ByaXZhY3l9XCIsXHJcbi8vICAgICByZWNlaXZlZF9ldmVudHNfdXJsOiBcImh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMvZ2VybmVzdC9yZWNlaXZlZF9ldmVudHNcIixcclxuLy8gICAgIHR5cGU6IFwiVXNlclwiLFxyXG4vLyAgICAgc2l0ZV9hZG1pbjogZmFsc2UsXHJcbi8vICAgICBzY29yZTogMS4wLFxyXG4vLyAgIH0sXHJcbi8vICAge1xyXG4vLyAgICAgbG9naW46IFwiYWxwaGFvbG9taVwiLFxyXG4vLyAgICAgaWQ6IDEwNTUxNTk5LFxyXG4vLyAgICAgbm9kZV9pZDogXCJNRFE2VlhObGNqRXdOVFV4TlRrNVwiLFxyXG4vLyAgICAgYXZhdGFyX3VybDogXCJodHRwczovL2F2YXRhcnMuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3UvMTA1NTE1OTk/dj00XCIsXHJcbi8vICAgICBncmF2YXRhcl9pZDogXCJcIixcclxuLy8gICAgIHVybDogXCJodHRwczovL2FwaS5naXRodWIuY29tL3VzZXJzL2FscGhhb2xvbWlcIixcclxuLy8gICAgIGh0bWxfdXJsOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9hbHBoYW9sb21pXCIsXHJcbi8vICAgICBmb2xsb3dlcnNfdXJsOiBcImh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMvYWxwaGFvbG9taS9mb2xsb3dlcnNcIixcclxuLy8gICAgIGZvbGxvd2luZ191cmw6XHJcbi8vICAgICAgIFwiaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2Vycy9hbHBoYW9sb21pL2ZvbGxvd2luZ3svb3RoZXJfdXNlcn1cIixcclxuLy8gICAgIGdpc3RzX3VybDogXCJodHRwczovL2FwaS5naXRodWIuY29tL3VzZXJzL2FscGhhb2xvbWkvZ2lzdHN7L2dpc3RfaWR9XCIsXHJcbi8vICAgICBzdGFycmVkX3VybDpcclxuLy8gICAgICAgXCJodHRwczovL2FwaS5naXRodWIuY29tL3VzZXJzL2FscGhhb2xvbWkvc3RhcnJlZHsvb3duZXJ9ey9yZXBvfVwiLFxyXG4vLyAgICAgc3Vic2NyaXB0aW9uc191cmw6IFwiaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2Vycy9hbHBoYW9sb21pL3N1YnNjcmlwdGlvbnNcIixcclxuLy8gICAgIG9yZ2FuaXphdGlvbnNfdXJsOiBcImh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMvYWxwaGFvbG9taS9vcmdzXCIsXHJcbi8vICAgICByZXBvc191cmw6IFwiaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2Vycy9hbHBoYW9sb21pL3JlcG9zXCIsXHJcbi8vICAgICBldmVudHNfdXJsOiBcImh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMvYWxwaGFvbG9taS9ldmVudHN7L3ByaXZhY3l9XCIsXHJcbi8vICAgICByZWNlaXZlZF9ldmVudHNfdXJsOlxyXG4vLyAgICAgICBcImh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMvYWxwaGFvbG9taS9yZWNlaXZlZF9ldmVudHNcIixcclxuLy8gICAgIHR5cGU6IFwiVXNlclwiLFxyXG4vLyAgICAgc2l0ZV9hZG1pbjogZmFsc2UsXHJcbi8vICAgICBzY29yZTogMS4wLFxyXG4vLyAgIH0sXHJcbi8vIF07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHsgZGV2cyB9KSB7XHJcbiAgY29uc3QgcGFnZU51bWJlcnMgPSBbXTtcclxuICBjb25zdCBbY3VycmVudFBhZ2UsIHNldEN1cnJlbnRQYWdlXSA9IHVzZVN0YXRlKDE1KTtcclxuICBjb25zdCBbZGV2c1BlclBhZ2UsIHNldGRldnNQZXJQYWdlXSA9IHVzZVN0YXRlKDEpO1xyXG4gIGNvbnN0IGluZGV4T2ZMYXN0RGV2ID0gY3VycmVudFBhZ2UgKiBkZXZzUGVyUGFnZTtcclxuICBjb25zdCBpbmRleE9mRmlyc3REZXYgPSBpbmRleE9mTGFzdERldiAtIGRldnNQZXJQYWdlO1xyXG4gIGNvbnN0IGN1cnJlbnREZXZzID0gcHJvcHMuZGV2cy5zbGljZShpbmRleE9mRmlyc3REZXYsIGluZGV4T2ZMYXN0RGV2KTtcclxuXHJcbiAgZm9yIChsZXQgaSA9IDE7IGkgPD0gTWF0aC5jZWlsKHByb3BzLmRldnMubGVuZ3RoIC8gZGV2c1BlclBhZ2UpOyBpKyspIHtcclxuICAgIHBhZ2VOdW1iZXJzLnB1c2goaSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVDbGljayA9IChlKSA9PiB7XHJcbiAgICBzZXRDdXJyZW50UGFnZShOdW1iZXIoZS50YXJnZXQuaWQpKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWRlciAvPlxyXG4gICAgICA8RGV2c0NhcmRzXHJcbiAgICAgICAgY3VycmVudERldnM9e2N1cnJlbnREZXZzfVxyXG4gICAgICAgIHBhZ2VOdW1iZXJzPXtwYWdlTnVtYmVyc31cclxuICAgICAgICBoYW5kbGVDbGljaz17aGFuZGxlQ2xpY2t9XHJcbiAgICAgIC8+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XHJcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXHJcbiAgICBcImh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vc2VhcmNoL3VzZXJzP3E9bG9jYXRpb246dGFuemFuaWEmcGVyX3BhZ2U9MTAwXCJcclxuICApO1xyXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IGRhdGEuaXRlbXMsXHJcbiAgfTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9
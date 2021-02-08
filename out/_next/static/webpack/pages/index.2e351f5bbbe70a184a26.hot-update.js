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




var devs = [{
  login: "lykmapipo",
  id: 1610857,
  node_id: "MDQ6VXNlcjE2MTA4NTc=",
  avatar_url: "https://avatars.githubusercontent.com/u/1610857?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/lykmapipo",
  html_url: "https://github.com/lykmapipo",
  followers_url: "https://api.github.com/users/lykmapipo/followers",
  following_url: "https://api.github.com/users/lykmapipo/following{/other_user}",
  gists_url: "https://api.github.com/users/lykmapipo/gists{/gist_id}",
  starred_url: "https://api.github.com/users/lykmapipo/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/lykmapipo/subscriptions",
  organizations_url: "https://api.github.com/users/lykmapipo/orgs",
  repos_url: "https://api.github.com/users/lykmapipo/repos",
  events_url: "https://api.github.com/users/lykmapipo/events{/privacy}",
  received_events_url: "https://api.github.com/users/lykmapipo/received_events",
  type: "User",
  site_admin: false,
  score: 1.0
}, {
  login: "gernest",
  id: 6039952,
  node_id: "MDQ6VXNlcjYwMzk5NTI=",
  avatar_url: "https://avatars.githubusercontent.com/u/6039952?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/gernest",
  html_url: "https://github.com/gernest",
  followers_url: "https://api.github.com/users/gernest/followers",
  following_url: "https://api.github.com/users/gernest/following{/other_user}",
  gists_url: "https://api.github.com/users/gernest/gists{/gist_id}",
  starred_url: "https://api.github.com/users/gernest/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/gernest/subscriptions",
  organizations_url: "https://api.github.com/users/gernest/orgs",
  repos_url: "https://api.github.com/users/gernest/repos",
  events_url: "https://api.github.com/users/gernest/events{/privacy}",
  received_events_url: "https://api.github.com/users/gernest/received_events",
  type: "User",
  site_admin: false,
  score: 1.0
}, {
  login: "alphaolomi",
  id: 10551599,
  node_id: "MDQ6VXNlcjEwNTUxNTk5",
  avatar_url: "https://avatars.githubusercontent.com/u/10551599?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/alphaolomi",
  html_url: "https://github.com/alphaolomi",
  followers_url: "https://api.github.com/users/alphaolomi/followers",
  following_url: "https://api.github.com/users/alphaolomi/following{/other_user}",
  gists_url: "https://api.github.com/users/alphaolomi/gists{/gist_id}",
  starred_url: "https://api.github.com/users/alphaolomi/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/alphaolomi/subscriptions",
  organizations_url: "https://api.github.com/users/alphaolomi/orgs",
  repos_url: "https://api.github.com/users/alphaolomi/repos",
  events_url: "https://api.github.com/users/alphaolomi/events{/privacy}",
  received_events_url: "https://api.github.com/users/alphaolomi/received_events",
  type: "User",
  site_admin: false,
  score: 1.0
}];
var __N_SSG = true;
function Home(_ref) {
  _s();

  var props = _ref.props;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiZGV2cyIsImxvZ2luIiwiaWQiLCJub2RlX2lkIiwiYXZhdGFyX3VybCIsImdyYXZhdGFyX2lkIiwidXJsIiwiaHRtbF91cmwiLCJmb2xsb3dlcnNfdXJsIiwiZm9sbG93aW5nX3VybCIsImdpc3RzX3VybCIsInN0YXJyZWRfdXJsIiwic3Vic2NyaXB0aW9uc191cmwiLCJvcmdhbml6YXRpb25zX3VybCIsInJlcG9zX3VybCIsImV2ZW50c191cmwiLCJyZWNlaXZlZF9ldmVudHNfdXJsIiwidHlwZSIsInNpdGVfYWRtaW4iLCJzY29yZSIsIkhvbWUiLCJwcm9wcyIsInBhZ2VOdW1iZXJzIiwidXNlU3RhdGUiLCJjdXJyZW50UGFnZSIsInNldEN1cnJlbnRQYWdlIiwiZGV2c1BlclBhZ2UiLCJzZXRkZXZzUGVyUGFnZSIsImluZGV4T2ZMYXN0RGV2IiwiaW5kZXhPZkZpcnN0RGV2IiwiY3VycmVudERldnMiLCJzbGljZSIsImkiLCJNYXRoIiwiY2VpbCIsImxlbmd0aCIsInB1c2giLCJoYW5kbGVDbGljayIsImUiLCJOdW1iZXIiLCJ0YXJnZXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFHQSxJQUFNQSxJQUFJLEdBQUcsQ0FDWDtBQUNFQyxPQUFLLEVBQUUsV0FEVDtBQUVFQyxJQUFFLEVBQUUsT0FGTjtBQUdFQyxTQUFPLEVBQUUsc0JBSFg7QUFJRUMsWUFBVSxFQUFFLHFEQUpkO0FBS0VDLGFBQVcsRUFBRSxFQUxmO0FBTUVDLEtBQUcsRUFBRSx3Q0FOUDtBQU9FQyxVQUFRLEVBQUUsOEJBUFo7QUFRRUMsZUFBYSxFQUFFLGtEQVJqQjtBQVNFQyxlQUFhLEVBQ1gsK0RBVko7QUFXRUMsV0FBUyxFQUFFLHdEQVhiO0FBWUVDLGFBQVcsRUFDVCwrREFiSjtBQWNFQyxtQkFBaUIsRUFBRSxzREFkckI7QUFlRUMsbUJBQWlC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QUEsWUFERixlQUVFLHFFQUFDLDZEQUFEO0FBQ0UsaUJBQVcsRUFBRTRCLFdBRGY7QUFFRSxpQkFBVyxFQUFFUixXQUZmO0FBR0UsaUJBQVcsRUFBRWU7QUFIZjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkY7QUFBQSxrQkFERjtBQVVEOztHQTFCdUJqQixJOztLQUFBQSxJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjJlMzUxZjViYmJlNzBhMTg0YTI2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgRGV2c0NhcmRzIGZyb20gXCIuLi9jb21wb25lbnRzL0RldnNDYXJkc1wiO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0hlYWRlclwiO1xyXG5cclxuXHJcbmNvbnN0IGRldnMgPSBbXHJcbiAge1xyXG4gICAgbG9naW46IFwibHlrbWFwaXBvXCIsXHJcbiAgICBpZDogMTYxMDg1NyxcclxuICAgIG5vZGVfaWQ6IFwiTURRNlZYTmxjakUyTVRBNE5UYz1cIixcclxuICAgIGF2YXRhcl91cmw6IFwiaHR0cHM6Ly9hdmF0YXJzLmdpdGh1YnVzZXJjb250ZW50LmNvbS91LzE2MTA4NTc/dj00XCIsXHJcbiAgICBncmF2YXRhcl9pZDogXCJcIixcclxuICAgIHVybDogXCJodHRwczovL2FwaS5naXRodWIuY29tL3VzZXJzL2x5a21hcGlwb1wiLFxyXG4gICAgaHRtbF91cmw6IFwiaHR0cHM6Ly9naXRodWIuY29tL2x5a21hcGlwb1wiLFxyXG4gICAgZm9sbG93ZXJzX3VybDogXCJodHRwczovL2FwaS5naXRodWIuY29tL3VzZXJzL2x5a21hcGlwby9mb2xsb3dlcnNcIixcclxuICAgIGZvbGxvd2luZ191cmw6XHJcbiAgICAgIFwiaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2Vycy9seWttYXBpcG8vZm9sbG93aW5ney9vdGhlcl91c2VyfVwiLFxyXG4gICAgZ2lzdHNfdXJsOiBcImh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMvbHlrbWFwaXBvL2dpc3Rzey9naXN0X2lkfVwiLFxyXG4gICAgc3RhcnJlZF91cmw6XHJcbiAgICAgIFwiaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2Vycy9seWttYXBpcG8vc3RhcnJlZHsvb3duZXJ9ey9yZXBvfVwiLFxyXG4gICAgc3Vic2NyaXB0aW9uc191cmw6IFwiaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2Vycy9seWttYXBpcG8vc3Vic2NyaXB0aW9uc1wiLFxyXG4gICAgb3JnYW5pemF0aW9uc191cmw6IFwiaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2Vycy9seWttYXBpcG8vb3Jnc1wiLFxyXG4gICAgcmVwb3NfdXJsOiBcImh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMvbHlrbWFwaXBvL3JlcG9zXCIsXHJcbiAgICBldmVudHNfdXJsOiBcImh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMvbHlrbWFwaXBvL2V2ZW50c3svcHJpdmFjeX1cIixcclxuICAgIHJlY2VpdmVkX2V2ZW50c191cmw6XHJcbiAgICAgIFwiaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2Vycy9seWttYXBpcG8vcmVjZWl2ZWRfZXZlbnRzXCIsXHJcbiAgICB0eXBlOiBcIlVzZXJcIixcclxuICAgIHNpdGVfYWRtaW46IGZhbHNlLFxyXG4gICAgc2NvcmU6IDEuMCxcclxuICB9LFxyXG4gIHtcclxuICAgIGxvZ2luOiBcImdlcm5lc3RcIixcclxuICAgIGlkOiA2MDM5OTUyLFxyXG4gICAgbm9kZV9pZDogXCJNRFE2VlhObGNqWXdNems1TlRJPVwiLFxyXG4gICAgYXZhdGFyX3VybDogXCJodHRwczovL2F2YXRhcnMuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3UvNjAzOTk1Mj92PTRcIixcclxuICAgIGdyYXZhdGFyX2lkOiBcIlwiLFxyXG4gICAgdXJsOiBcImh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMvZ2VybmVzdFwiLFxyXG4gICAgaHRtbF91cmw6IFwiaHR0cHM6Ly9naXRodWIuY29tL2dlcm5lc3RcIixcclxuICAgIGZvbGxvd2Vyc191cmw6IFwiaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2Vycy9nZXJuZXN0L2ZvbGxvd2Vyc1wiLFxyXG4gICAgZm9sbG93aW5nX3VybDpcclxuICAgICAgXCJodHRwczovL2FwaS5naXRodWIuY29tL3VzZXJzL2dlcm5lc3QvZm9sbG93aW5ney9vdGhlcl91c2VyfVwiLFxyXG4gICAgZ2lzdHNfdXJsOiBcImh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMvZ2VybmVzdC9naXN0c3svZ2lzdF9pZH1cIixcclxuICAgIHN0YXJyZWRfdXJsOiBcImh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMvZ2VybmVzdC9zdGFycmVkey9vd25lcn17L3JlcG99XCIsXHJcbiAgICBzdWJzY3JpcHRpb25zX3VybDogXCJodHRwczovL2FwaS5naXRodWIuY29tL3VzZXJzL2dlcm5lc3Qvc3Vic2NyaXB0aW9uc1wiLFxyXG4gICAgb3JnYW5pemF0aW9uc191cmw6IFwiaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2Vycy9nZXJuZXN0L29yZ3NcIixcclxuICAgIHJlcG9zX3VybDogXCJodHRwczovL2FwaS5naXRodWIuY29tL3VzZXJzL2dlcm5lc3QvcmVwb3NcIixcclxuICAgIGV2ZW50c191cmw6IFwiaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2Vycy9nZXJuZXN0L2V2ZW50c3svcHJpdmFjeX1cIixcclxuICAgIHJlY2VpdmVkX2V2ZW50c191cmw6IFwiaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2Vycy9nZXJuZXN0L3JlY2VpdmVkX2V2ZW50c1wiLFxyXG4gICAgdHlwZTogXCJVc2VyXCIsXHJcbiAgICBzaXRlX2FkbWluOiBmYWxzZSxcclxuICAgIHNjb3JlOiAxLjAsXHJcbiAgfSxcclxuICB7XHJcbiAgICBsb2dpbjogXCJhbHBoYW9sb21pXCIsXHJcbiAgICBpZDogMTA1NTE1OTksXHJcbiAgICBub2RlX2lkOiBcIk1EUTZWWE5sY2pFd05UVXhOVGs1XCIsXHJcbiAgICBhdmF0YXJfdXJsOiBcImh0dHBzOi8vYXZhdGFycy5naXRodWJ1c2VyY29udGVudC5jb20vdS8xMDU1MTU5OT92PTRcIixcclxuICAgIGdyYXZhdGFyX2lkOiBcIlwiLFxyXG4gICAgdXJsOiBcImh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMvYWxwaGFvbG9taVwiLFxyXG4gICAgaHRtbF91cmw6IFwiaHR0cHM6Ly9naXRodWIuY29tL2FscGhhb2xvbWlcIixcclxuICAgIGZvbGxvd2Vyc191cmw6IFwiaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2Vycy9hbHBoYW9sb21pL2ZvbGxvd2Vyc1wiLFxyXG4gICAgZm9sbG93aW5nX3VybDpcclxuICAgICAgXCJodHRwczovL2FwaS5naXRodWIuY29tL3VzZXJzL2FscGhhb2xvbWkvZm9sbG93aW5ney9vdGhlcl91c2VyfVwiLFxyXG4gICAgZ2lzdHNfdXJsOiBcImh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMvYWxwaGFvbG9taS9naXN0c3svZ2lzdF9pZH1cIixcclxuICAgIHN0YXJyZWRfdXJsOlxyXG4gICAgICBcImh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMvYWxwaGFvbG9taS9zdGFycmVkey9vd25lcn17L3JlcG99XCIsXHJcbiAgICBzdWJzY3JpcHRpb25zX3VybDogXCJodHRwczovL2FwaS5naXRodWIuY29tL3VzZXJzL2FscGhhb2xvbWkvc3Vic2NyaXB0aW9uc1wiLFxyXG4gICAgb3JnYW5pemF0aW9uc191cmw6IFwiaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2Vycy9hbHBoYW9sb21pL29yZ3NcIixcclxuICAgIHJlcG9zX3VybDogXCJodHRwczovL2FwaS5naXRodWIuY29tL3VzZXJzL2FscGhhb2xvbWkvcmVwb3NcIixcclxuICAgIGV2ZW50c191cmw6IFwiaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2Vycy9hbHBoYW9sb21pL2V2ZW50c3svcHJpdmFjeX1cIixcclxuICAgIHJlY2VpdmVkX2V2ZW50c191cmw6XHJcbiAgICAgIFwiaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2Vycy9hbHBoYW9sb21pL3JlY2VpdmVkX2V2ZW50c1wiLFxyXG4gICAgdHlwZTogXCJVc2VyXCIsXHJcbiAgICBzaXRlX2FkbWluOiBmYWxzZSxcclxuICAgIHNjb3JlOiAxLjAsXHJcbiAgfSxcclxuXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoeyBwcm9wcyB9KSB7XHJcbiAgY29uc3QgcGFnZU51bWJlcnMgPSBbXTtcclxuICBjb25zdCBbY3VycmVudFBhZ2UsIHNldEN1cnJlbnRQYWdlXSA9IHVzZVN0YXRlKDE1KTtcclxuICBjb25zdCBbZGV2c1BlclBhZ2UsIHNldGRldnNQZXJQYWdlXSA9IHVzZVN0YXRlKDEpO1xyXG4gIGNvbnN0IGluZGV4T2ZMYXN0RGV2ID0gY3VycmVudFBhZ2UgKiBkZXZzUGVyUGFnZTtcclxuICBjb25zdCBpbmRleE9mRmlyc3REZXYgPSBpbmRleE9mTGFzdERldiAtIGRldnNQZXJQYWdlO1xyXG4gIGNvbnN0IGN1cnJlbnREZXZzID0gcHJvcHMuZGV2cy5zbGljZShpbmRleE9mRmlyc3REZXYsIGluZGV4T2ZMYXN0RGV2KTtcclxuXHJcbiAgZm9yIChsZXQgaSA9IDE7IGkgPD0gTWF0aC5jZWlsKGRldnMubGVuZ3RoIC8gZGV2c1BlclBhZ2UpOyBpKyspIHtcclxuICAgIHBhZ2VOdW1iZXJzLnB1c2goaSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVDbGljayA9IChlKSA9PiB7XHJcbiAgICBzZXRDdXJyZW50UGFnZShOdW1iZXIoZS50YXJnZXQuaWQpKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWRlciAvPlxyXG4gICAgICA8RGV2c0NhcmRzXHJcbiAgICAgICAgY3VycmVudERldnM9e2N1cnJlbnREZXZzfVxyXG4gICAgICAgIHBhZ2VOdW1iZXJzPXtwYWdlTnVtYmVyc31cclxuICAgICAgICBoYW5kbGVDbGljaz17aGFuZGxlQ2xpY2t9XHJcbiAgICAgIC8+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XHJcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXHJcbiAgICBcImh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vc2VhcmNoL3VzZXJzP3E9bG9jYXRpb246dGFuemFuaWEmcGVyX3BhZ2U9MTAwXCJcclxuICApO1xyXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IGRhdGEuaXRlbXMsXHJcbiAgfTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9
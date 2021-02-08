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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_DevsCards__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/DevsCards */ "./components/DevsCards.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
/* harmony import */ var _db_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../db.json */ "./db.json");
var _db_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../db.json */ "./db.json", 1);



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
console.log(_db_json__WEBPACK_IMPORTED_MODULE_4__.total_count);
function Home(_ref) {
  _s();

  var data = _ref.data;
  var pageNumbers = [];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(1),
      currentPage = _useState[0],
      setCurrentPage = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(1),
      devsPerPage = _useState2[0],
      setdevsPerPage = _useState2[1];

  var indexOfLastDev = currentPage * devsPerPage;
  var indexOfFirstDev = indexOfLastDev - devsPerPage;
  var currentDevs = devs.slice(indexOfFirstDev, indexOfLastDev);

  for (var i = 1; i <= Math.ceil(data.total_count / devsPerPage); i++) {
    pageNumbers.push(i);
  }

  var handleClick = function handleClick(e) {
    setCurrentPage(Number(e.target.id));
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_DevsCards__WEBPACK_IMPORTED_MODULE_2__["default"], {
      currentDevs: currentDevs,
      pageNumbers: pageNumbers,
      handleClick: handleClick
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

_s(Home, "INjTpuiGD89dOxZCF8UyT0QDfNQ=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiZGV2cyIsImxvZ2luIiwiaWQiLCJub2RlX2lkIiwiYXZhdGFyX3VybCIsImdyYXZhdGFyX2lkIiwidXJsIiwiaHRtbF91cmwiLCJmb2xsb3dlcnNfdXJsIiwiZm9sbG93aW5nX3VybCIsImdpc3RzX3VybCIsInN0YXJyZWRfdXJsIiwic3Vic2NyaXB0aW9uc191cmwiLCJvcmdhbml6YXRpb25zX3VybCIsInJlcG9zX3VybCIsImV2ZW50c191cmwiLCJyZWNlaXZlZF9ldmVudHNfdXJsIiwidHlwZSIsInNpdGVfYWRtaW4iLCJzY29yZSIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwidG90YWxfY291bnQiLCJIb21lIiwicGFnZU51bWJlcnMiLCJ1c2VTdGF0ZSIsImN1cnJlbnRQYWdlIiwic2V0Q3VycmVudFBhZ2UiLCJkZXZzUGVyUGFnZSIsInNldGRldnNQZXJQYWdlIiwiaW5kZXhPZkxhc3REZXYiLCJpbmRleE9mRmlyc3REZXYiLCJjdXJyZW50RGV2cyIsInNsaWNlIiwiaSIsIk1hdGgiLCJjZWlsIiwicHVzaCIsImhhbmRsZUNsaWNrIiwiZSIsIk51bWJlciIsInRhcmdldCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUdBLElBQU1BLElBQUksR0FBRyxDQUNYO0FBQ0VDLE9BQUssRUFBRSxXQURUO0FBRUVDLElBQUUsRUFBRSxPQUZOO0FBR0VDLFNBQU8sRUFBRSxzQkFIWDtBQUlFQyxZQUFVLEVBQUUscURBSmQ7QUFLRUMsYUFBVyxFQUFFLEVBTGY7QUFNRUMsS0FBRyxFQUFFLHdDQU5QO0FBT0VDLFVBQVEsRUFBRSw4QkFQWjtBQVFFQyxlQUFhLEVBQUUsa0RBUmpCO0FBU0VDLGVBQWEsRUFDWCwrREFWSjtBQVdFQyxXQUFTLEVBQUUsd0RBWGI7QUFZRUMsYUFBVyxFQUNULCtEQWJKO0FBY0VDLG1CQUFp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R0FGRDs7QUFJQSxzQkFDRTtBQUFBLDRCQUNFLHFFQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUVFLHFFQUFDLDZEQUFEO0FBQ0UsaUJBQVcsRUFBRStCLFdBRGY7QUFFRSxpQkFBVyxFQUFFUixXQUZmO0FBR0UsaUJBQVcsRUFBRWM7QUFIZjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkY7QUFBQSxrQkFERjtBQVVEOztHQTFCdUJmLEk7O0tBQUFBLEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZjFlNTg3ZjVlOWNmMmYyNTZiMjIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBEZXZzQ2FyZHMgZnJvbSBcIi4uL2NvbXBvbmVudHMvRGV2c0NhcmRzXCI7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvSGVhZGVyXCI7XHJcbmltcG9ydCBkYXRhIGZyb20gXCIuLi9kYi5qc29uXCI7XHJcblxyXG5cclxuY29uc3QgZGV2cyA9IFtcclxuICB7XHJcbiAgICBsb2dpbjogXCJseWttYXBpcG9cIixcclxuICAgIGlkOiAxNjEwODU3LFxyXG4gICAgbm9kZV9pZDogXCJNRFE2VlhObGNqRTJNVEE0TlRjPVwiLFxyXG4gICAgYXZhdGFyX3VybDogXCJodHRwczovL2F2YXRhcnMuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3UvMTYxMDg1Nz92PTRcIixcclxuICAgIGdyYXZhdGFyX2lkOiBcIlwiLFxyXG4gICAgdXJsOiBcImh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMvbHlrbWFwaXBvXCIsXHJcbiAgICBodG1sX3VybDogXCJodHRwczovL2dpdGh1Yi5jb20vbHlrbWFwaXBvXCIsXHJcbiAgICBmb2xsb3dlcnNfdXJsOiBcImh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMvbHlrbWFwaXBvL2ZvbGxvd2Vyc1wiLFxyXG4gICAgZm9sbG93aW5nX3VybDpcclxuICAgICAgXCJodHRwczovL2FwaS5naXRodWIuY29tL3VzZXJzL2x5a21hcGlwby9mb2xsb3dpbmd7L290aGVyX3VzZXJ9XCIsXHJcbiAgICBnaXN0c191cmw6IFwiaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2Vycy9seWttYXBpcG8vZ2lzdHN7L2dpc3RfaWR9XCIsXHJcbiAgICBzdGFycmVkX3VybDpcclxuICAgICAgXCJodHRwczovL2FwaS5naXRodWIuY29tL3VzZXJzL2x5a21hcGlwby9zdGFycmVkey9vd25lcn17L3JlcG99XCIsXHJcbiAgICBzdWJzY3JpcHRpb25zX3VybDogXCJodHRwczovL2FwaS5naXRodWIuY29tL3VzZXJzL2x5a21hcGlwby9zdWJzY3JpcHRpb25zXCIsXHJcbiAgICBvcmdhbml6YXRpb25zX3VybDogXCJodHRwczovL2FwaS5naXRodWIuY29tL3VzZXJzL2x5a21hcGlwby9vcmdzXCIsXHJcbiAgICByZXBvc191cmw6IFwiaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2Vycy9seWttYXBpcG8vcmVwb3NcIixcclxuICAgIGV2ZW50c191cmw6IFwiaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2Vycy9seWttYXBpcG8vZXZlbnRzey9wcml2YWN5fVwiLFxyXG4gICAgcmVjZWl2ZWRfZXZlbnRzX3VybDpcclxuICAgICAgXCJodHRwczovL2FwaS5naXRodWIuY29tL3VzZXJzL2x5a21hcGlwby9yZWNlaXZlZF9ldmVudHNcIixcclxuICAgIHR5cGU6IFwiVXNlclwiLFxyXG4gICAgc2l0ZV9hZG1pbjogZmFsc2UsXHJcbiAgICBzY29yZTogMS4wLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbG9naW46IFwiZ2VybmVzdFwiLFxyXG4gICAgaWQ6IDYwMzk5NTIsXHJcbiAgICBub2RlX2lkOiBcIk1EUTZWWE5sY2pZd016azVOVEk9XCIsXHJcbiAgICBhdmF0YXJfdXJsOiBcImh0dHBzOi8vYXZhdGFycy5naXRodWJ1c2VyY29udGVudC5jb20vdS82MDM5OTUyP3Y9NFwiLFxyXG4gICAgZ3JhdmF0YXJfaWQ6IFwiXCIsXHJcbiAgICB1cmw6IFwiaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2Vycy9nZXJuZXN0XCIsXHJcbiAgICBodG1sX3VybDogXCJodHRwczovL2dpdGh1Yi5jb20vZ2VybmVzdFwiLFxyXG4gICAgZm9sbG93ZXJzX3VybDogXCJodHRwczovL2FwaS5naXRodWIuY29tL3VzZXJzL2dlcm5lc3QvZm9sbG93ZXJzXCIsXHJcbiAgICBmb2xsb3dpbmdfdXJsOlxyXG4gICAgICBcImh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMvZ2VybmVzdC9mb2xsb3dpbmd7L290aGVyX3VzZXJ9XCIsXHJcbiAgICBnaXN0c191cmw6IFwiaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2Vycy9nZXJuZXN0L2dpc3Rzey9naXN0X2lkfVwiLFxyXG4gICAgc3RhcnJlZF91cmw6IFwiaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2Vycy9nZXJuZXN0L3N0YXJyZWR7L293bmVyfXsvcmVwb31cIixcclxuICAgIHN1YnNjcmlwdGlvbnNfdXJsOiBcImh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMvZ2VybmVzdC9zdWJzY3JpcHRpb25zXCIsXHJcbiAgICBvcmdhbml6YXRpb25zX3VybDogXCJodHRwczovL2FwaS5naXRodWIuY29tL3VzZXJzL2dlcm5lc3Qvb3Jnc1wiLFxyXG4gICAgcmVwb3NfdXJsOiBcImh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMvZ2VybmVzdC9yZXBvc1wiLFxyXG4gICAgZXZlbnRzX3VybDogXCJodHRwczovL2FwaS5naXRodWIuY29tL3VzZXJzL2dlcm5lc3QvZXZlbnRzey9wcml2YWN5fVwiLFxyXG4gICAgcmVjZWl2ZWRfZXZlbnRzX3VybDogXCJodHRwczovL2FwaS5naXRodWIuY29tL3VzZXJzL2dlcm5lc3QvcmVjZWl2ZWRfZXZlbnRzXCIsXHJcbiAgICB0eXBlOiBcIlVzZXJcIixcclxuICAgIHNpdGVfYWRtaW46IGZhbHNlLFxyXG4gICAgc2NvcmU6IDEuMCxcclxuICB9LFxyXG4gIHtcclxuICAgIGxvZ2luOiBcImFscGhhb2xvbWlcIixcclxuICAgIGlkOiAxMDU1MTU5OSxcclxuICAgIG5vZGVfaWQ6IFwiTURRNlZYTmxjakV3TlRVeE5UazVcIixcclxuICAgIGF2YXRhcl91cmw6IFwiaHR0cHM6Ly9hdmF0YXJzLmdpdGh1YnVzZXJjb250ZW50LmNvbS91LzEwNTUxNTk5P3Y9NFwiLFxyXG4gICAgZ3JhdmF0YXJfaWQ6IFwiXCIsXHJcbiAgICB1cmw6IFwiaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2Vycy9hbHBoYW9sb21pXCIsXHJcbiAgICBodG1sX3VybDogXCJodHRwczovL2dpdGh1Yi5jb20vYWxwaGFvbG9taVwiLFxyXG4gICAgZm9sbG93ZXJzX3VybDogXCJodHRwczovL2FwaS5naXRodWIuY29tL3VzZXJzL2FscGhhb2xvbWkvZm9sbG93ZXJzXCIsXHJcbiAgICBmb2xsb3dpbmdfdXJsOlxyXG4gICAgICBcImh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMvYWxwaGFvbG9taS9mb2xsb3dpbmd7L290aGVyX3VzZXJ9XCIsXHJcbiAgICBnaXN0c191cmw6IFwiaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2Vycy9hbHBoYW9sb21pL2dpc3Rzey9naXN0X2lkfVwiLFxyXG4gICAgc3RhcnJlZF91cmw6XHJcbiAgICAgIFwiaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2Vycy9hbHBoYW9sb21pL3N0YXJyZWR7L293bmVyfXsvcmVwb31cIixcclxuICAgIHN1YnNjcmlwdGlvbnNfdXJsOiBcImh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMvYWxwaGFvbG9taS9zdWJzY3JpcHRpb25zXCIsXHJcbiAgICBvcmdhbml6YXRpb25zX3VybDogXCJodHRwczovL2FwaS5naXRodWIuY29tL3VzZXJzL2FscGhhb2xvbWkvb3Jnc1wiLFxyXG4gICAgcmVwb3NfdXJsOiBcImh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMvYWxwaGFvbG9taS9yZXBvc1wiLFxyXG4gICAgZXZlbnRzX3VybDogXCJodHRwczovL2FwaS5naXRodWIuY29tL3VzZXJzL2FscGhhb2xvbWkvZXZlbnRzey9wcml2YWN5fVwiLFxyXG4gICAgcmVjZWl2ZWRfZXZlbnRzX3VybDpcclxuICAgICAgXCJodHRwczovL2FwaS5naXRodWIuY29tL3VzZXJzL2FscGhhb2xvbWkvcmVjZWl2ZWRfZXZlbnRzXCIsXHJcbiAgICB0eXBlOiBcIlVzZXJcIixcclxuICAgIHNpdGVfYWRtaW46IGZhbHNlLFxyXG4gICAgc2NvcmU6IDEuMCxcclxuICB9LFxyXG5dO1xyXG5cclxuY29uc29sZS5sb2coZGF0YS50b3RhbF9jb3VudCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHsgZGF0YSB9KSB7XHJcbiAgY29uc3QgcGFnZU51bWJlcnMgPSBbXTtcclxuICBjb25zdCBbY3VycmVudFBhZ2UsIHNldEN1cnJlbnRQYWdlXSA9IHVzZVN0YXRlKDEpO1xyXG4gIGNvbnN0IFtkZXZzUGVyUGFnZSwgc2V0ZGV2c1BlclBhZ2VdID0gdXNlU3RhdGUoMSk7XHJcbiAgY29uc3QgaW5kZXhPZkxhc3REZXYgPSBjdXJyZW50UGFnZSAqIGRldnNQZXJQYWdlO1xyXG4gIGNvbnN0IGluZGV4T2ZGaXJzdERldiA9IGluZGV4T2ZMYXN0RGV2IC0gZGV2c1BlclBhZ2U7XHJcbiAgY29uc3QgY3VycmVudERldnMgPSBkZXZzLnNsaWNlKGluZGV4T2ZGaXJzdERldiwgaW5kZXhPZkxhc3REZXYpO1xyXG5cclxuICBmb3IgKGxldCBpID0gMTsgaSA8PSBNYXRoLmNlaWwoZGF0YS50b3RhbF9jb3VudCAvIGRldnNQZXJQYWdlKTsgaSsrKSB7XHJcbiAgICBwYWdlTnVtYmVycy5wdXNoKGkpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoZSkgPT4ge1xyXG4gICAgc2V0Q3VycmVudFBhZ2UoTnVtYmVyKGUudGFyZ2V0LmlkKSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgPERldnNDYXJkc1xyXG4gICAgICAgIGN1cnJlbnREZXZzPXtjdXJyZW50RGV2c31cclxuICAgICAgICBwYWdlTnVtYmVycz17cGFnZU51bWJlcnN9XHJcbiAgICAgICAgaGFuZGxlQ2xpY2s9e2hhbmRsZUNsaWNrfVxyXG4gICAgICAvPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9
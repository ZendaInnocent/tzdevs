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
/* harmony import */ var C_Users_Innocent_Desktop_tzdevs_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
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
function Home() {
  _s();

  var pageNumbers = [];

  var _useState = useState(1),
      _useState2 = Object(C_Users_Innocent_Desktop_tzdevs_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      currentPage = _useState2[0],
      setCurrentPage = _useState2[1];

  var _useState3 = useState(15),
      _useState4 = Object(C_Users_Innocent_Desktop_tzdevs_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState3, 2),
      devsPerPage = _useState4[0],
      setdevsPerPage = _useState4[1];

  var indexOfLastDev = currentPage * devsPerPage;
  var indexOfFirstDev = indexOfLastDev - devsPerPage;
  var currentDevs = devs.slice(indexOfFirstDev, indexOfLastDev);

  for (var i = 1; i <= Math.ceil(_db_json__WEBPACK_IMPORTED_MODULE_4__.total_count / devsPerPage); i++) {
    pageNumbers.push(i);
  }

  var handleClick = function handleClick(e) {
    setCurrentPage(Number(e.target.id));
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_DevsCards__WEBPACK_IMPORTED_MODULE_2__["default"], {
      currentDevs: _db_json__WEBPACK_IMPORTED_MODULE_4__.items,
      pageNumbers: pageNumbers,
      handleClick: handleClick
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 100,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiZGV2cyIsImxvZ2luIiwiaWQiLCJub2RlX2lkIiwiYXZhdGFyX3VybCIsImdyYXZhdGFyX2lkIiwidXJsIiwiaHRtbF91cmwiLCJmb2xsb3dlcnNfdXJsIiwiZm9sbG93aW5nX3VybCIsImdpc3RzX3VybCIsInN0YXJyZWRfdXJsIiwic3Vic2NyaXB0aW9uc191cmwiLCJvcmdhbml6YXRpb25zX3VybCIsInJlcG9zX3VybCIsImV2ZW50c191cmwiLCJyZWNlaXZlZF9ldmVudHNfdXJsIiwidHlwZSIsInNpdGVfYWRtaW4iLCJzY29yZSIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwidG90YWxfY291bnQiLCJIb21lIiwicGFnZU51bWJlcnMiLCJ1c2VTdGF0ZSIsImN1cnJlbnRQYWdlIiwic2V0Q3VycmVudFBhZ2UiLCJkZXZzUGVyUGFnZSIsInNldGRldnNQZXJQYWdlIiwiaW5kZXhPZkxhc3REZXYiLCJpbmRleE9mRmlyc3REZXYiLCJjdXJyZW50RGV2cyIsInNsaWNlIiwiaSIsIk1hdGgiLCJjZWlsIiwicHVzaCIsImhhbmRsZUNsaWNrIiwiZSIsIk51bWJlciIsInRhcmdldCIsIml0ZW1zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUdBLElBQU1BLElBQUksR0FBRyxDQUNYO0FBQ0VDLE9BQUssRUFBRSxXQURUO0FBRUVDLElBQUUsRUFBRSxPQUZOO0FBR0VDLFNBQU8sRUFBRSxzQkFIWDtBQUlFQyxZQUFVLEVBQUUscURBSmQ7QUFLRUMsYUFBVyxFQUFFLEVBTGY7QUFNRUMsS0FBRyxFQUFFLHdDQU5QO0FBT0VDLFVBQVEsRUFBRSw4QkFQWjtBQVFFQyxlQUFhLEVBQUUsa0RBUmpCO0FBU0VDLGVBQWEsRUFDWCwrREFWSjtBQVdFQyxXQUFTLEVBQUUsd0RBWGI7QUFZRUMsYUFBVyxFQUNULCtEQWJKO0FBY0VDLG1C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QUFBQSw0QkFDRSxxRUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRSxxRUFBQyw2REFBRDtBQUNFLGlCQUFXLEVBQUVvQixxQ0FBSSxDQUFDcUIsS0FEcEI7QUFFRSxpQkFBVyxFQUFFbEIsV0FGZjtBQUdFLGlCQUFXLEVBQUVjO0FBSGY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGO0FBQUEsa0JBREY7QUFVRDs7R0ExQnVCZixJOztLQUFBQSxJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmIxN2E1MjZlNmEzZmM2MGRjODExLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRGV2c0NhcmRzIGZyb20gXCIuLi9jb21wb25lbnRzL0RldnNDYXJkc1wiO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0hlYWRlclwiO1xyXG5pbXBvcnQgZGF0YSBmcm9tIFwiLi4vZGIuanNvblwiO1xyXG5cclxuXHJcbmNvbnN0IGRldnMgPSBbXHJcbiAge1xyXG4gICAgbG9naW46IFwibHlrbWFwaXBvXCIsXHJcbiAgICBpZDogMTYxMDg1NyxcclxuICAgIG5vZGVfaWQ6IFwiTURRNlZYTmxjakUyTVRBNE5UYz1cIixcclxuICAgIGF2YXRhcl91cmw6IFwiaHR0cHM6Ly9hdmF0YXJzLmdpdGh1YnVzZXJjb250ZW50LmNvbS91LzE2MTA4NTc/dj00XCIsXHJcbiAgICBncmF2YXRhcl9pZDogXCJcIixcclxuICAgIHVybDogXCJodHRwczovL2FwaS5naXRodWIuY29tL3VzZXJzL2x5a21hcGlwb1wiLFxyXG4gICAgaHRtbF91cmw6IFwiaHR0cHM6Ly9naXRodWIuY29tL2x5a21hcGlwb1wiLFxyXG4gICAgZm9sbG93ZXJzX3VybDogXCJodHRwczovL2FwaS5naXRodWIuY29tL3VzZXJzL2x5a21hcGlwby9mb2xsb3dlcnNcIixcclxuICAgIGZvbGxvd2luZ191cmw6XHJcbiAgICAgIFwiaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2Vycy9seWttYXBpcG8vZm9sbG93aW5ney9vdGhlcl91c2VyfVwiLFxyXG4gICAgZ2lzdHNfdXJsOiBcImh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMvbHlrbWFwaXBvL2dpc3Rzey9naXN0X2lkfVwiLFxyXG4gICAgc3RhcnJlZF91cmw6XHJcbiAgICAgIFwiaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2Vycy9seWttYXBpcG8vc3RhcnJlZHsvb3duZXJ9ey9yZXBvfVwiLFxyXG4gICAgc3Vic2NyaXB0aW9uc191cmw6IFwiaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2Vycy9seWttYXBpcG8vc3Vic2NyaXB0aW9uc1wiLFxyXG4gICAgb3JnYW5pemF0aW9uc191cmw6IFwiaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2Vycy9seWttYXBpcG8vb3Jnc1wiLFxyXG4gICAgcmVwb3NfdXJsOiBcImh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMvbHlrbWFwaXBvL3JlcG9zXCIsXHJcbiAgICBldmVudHNfdXJsOiBcImh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMvbHlrbWFwaXBvL2V2ZW50c3svcHJpdmFjeX1cIixcclxuICAgIHJlY2VpdmVkX2V2ZW50c191cmw6XHJcbiAgICAgIFwiaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2Vycy9seWttYXBpcG8vcmVjZWl2ZWRfZXZlbnRzXCIsXHJcbiAgICB0eXBlOiBcIlVzZXJcIixcclxuICAgIHNpdGVfYWRtaW46IGZhbHNlLFxyXG4gICAgc2NvcmU6IDEuMCxcclxuICB9LFxyXG4gIHtcclxuICAgIGxvZ2luOiBcImdlcm5lc3RcIixcclxuICAgIGlkOiA2MDM5OTUyLFxyXG4gICAgbm9kZV9pZDogXCJNRFE2VlhObGNqWXdNems1TlRJPVwiLFxyXG4gICAgYXZhdGFyX3VybDogXCJodHRwczovL2F2YXRhcnMuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3UvNjAzOTk1Mj92PTRcIixcclxuICAgIGdyYXZhdGFyX2lkOiBcIlwiLFxyXG4gICAgdXJsOiBcImh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMvZ2VybmVzdFwiLFxyXG4gICAgaHRtbF91cmw6IFwiaHR0cHM6Ly9naXRodWIuY29tL2dlcm5lc3RcIixcclxuICAgIGZvbGxvd2Vyc191cmw6IFwiaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2Vycy9nZXJuZXN0L2ZvbGxvd2Vyc1wiLFxyXG4gICAgZm9sbG93aW5nX3VybDpcclxuICAgICAgXCJodHRwczovL2FwaS5naXRodWIuY29tL3VzZXJzL2dlcm5lc3QvZm9sbG93aW5ney9vdGhlcl91c2VyfVwiLFxyXG4gICAgZ2lzdHNfdXJsOiBcImh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMvZ2VybmVzdC9naXN0c3svZ2lzdF9pZH1cIixcclxuICAgIHN0YXJyZWRfdXJsOiBcImh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMvZ2VybmVzdC9zdGFycmVkey9vd25lcn17L3JlcG99XCIsXHJcbiAgICBzdWJzY3JpcHRpb25zX3VybDogXCJodHRwczovL2FwaS5naXRodWIuY29tL3VzZXJzL2dlcm5lc3Qvc3Vic2NyaXB0aW9uc1wiLFxyXG4gICAgb3JnYW5pemF0aW9uc191cmw6IFwiaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2Vycy9nZXJuZXN0L29yZ3NcIixcclxuICAgIHJlcG9zX3VybDogXCJodHRwczovL2FwaS5naXRodWIuY29tL3VzZXJzL2dlcm5lc3QvcmVwb3NcIixcclxuICAgIGV2ZW50c191cmw6IFwiaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2Vycy9nZXJuZXN0L2V2ZW50c3svcHJpdmFjeX1cIixcclxuICAgIHJlY2VpdmVkX2V2ZW50c191cmw6IFwiaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2Vycy9nZXJuZXN0L3JlY2VpdmVkX2V2ZW50c1wiLFxyXG4gICAgdHlwZTogXCJVc2VyXCIsXHJcbiAgICBzaXRlX2FkbWluOiBmYWxzZSxcclxuICAgIHNjb3JlOiAxLjAsXHJcbiAgfSxcclxuICB7XHJcbiAgICBsb2dpbjogXCJhbHBoYW9sb21pXCIsXHJcbiAgICBpZDogMTA1NTE1OTksXHJcbiAgICBub2RlX2lkOiBcIk1EUTZWWE5sY2pFd05UVXhOVGs1XCIsXHJcbiAgICBhdmF0YXJfdXJsOiBcImh0dHBzOi8vYXZhdGFycy5naXRodWJ1c2VyY29udGVudC5jb20vdS8xMDU1MTU5OT92PTRcIixcclxuICAgIGdyYXZhdGFyX2lkOiBcIlwiLFxyXG4gICAgdXJsOiBcImh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMvYWxwaGFvbG9taVwiLFxyXG4gICAgaHRtbF91cmw6IFwiaHR0cHM6Ly9naXRodWIuY29tL2FscGhhb2xvbWlcIixcclxuICAgIGZvbGxvd2Vyc191cmw6IFwiaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2Vycy9hbHBoYW9sb21pL2ZvbGxvd2Vyc1wiLFxyXG4gICAgZm9sbG93aW5nX3VybDpcclxuICAgICAgXCJodHRwczovL2FwaS5naXRodWIuY29tL3VzZXJzL2FscGhhb2xvbWkvZm9sbG93aW5ney9vdGhlcl91c2VyfVwiLFxyXG4gICAgZ2lzdHNfdXJsOiBcImh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMvYWxwaGFvbG9taS9naXN0c3svZ2lzdF9pZH1cIixcclxuICAgIHN0YXJyZWRfdXJsOlxyXG4gICAgICBcImh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMvYWxwaGFvbG9taS9zdGFycmVkey9vd25lcn17L3JlcG99XCIsXHJcbiAgICBzdWJzY3JpcHRpb25zX3VybDogXCJodHRwczovL2FwaS5naXRodWIuY29tL3VzZXJzL2FscGhhb2xvbWkvc3Vic2NyaXB0aW9uc1wiLFxyXG4gICAgb3JnYW5pemF0aW9uc191cmw6IFwiaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2Vycy9hbHBoYW9sb21pL29yZ3NcIixcclxuICAgIHJlcG9zX3VybDogXCJodHRwczovL2FwaS5naXRodWIuY29tL3VzZXJzL2FscGhhb2xvbWkvcmVwb3NcIixcclxuICAgIGV2ZW50c191cmw6IFwiaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2Vycy9hbHBoYW9sb21pL2V2ZW50c3svcHJpdmFjeX1cIixcclxuICAgIHJlY2VpdmVkX2V2ZW50c191cmw6XHJcbiAgICAgIFwiaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2Vycy9hbHBoYW9sb21pL3JlY2VpdmVkX2V2ZW50c1wiLFxyXG4gICAgdHlwZTogXCJVc2VyXCIsXHJcbiAgICBzaXRlX2FkbWluOiBmYWxzZSxcclxuICAgIHNjb3JlOiAxLjAsXHJcbiAgfSxcclxuXTtcclxuXHJcbmNvbnNvbGUubG9nKGRhdGEudG90YWxfY291bnQpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcclxuICBjb25zdCBwYWdlTnVtYmVycyA9IFtdO1xyXG4gIGNvbnN0IFtjdXJyZW50UGFnZSwgc2V0Q3VycmVudFBhZ2VdID0gdXNlU3RhdGUoMSk7XHJcbiAgY29uc3QgW2RldnNQZXJQYWdlLCBzZXRkZXZzUGVyUGFnZV0gPSB1c2VTdGF0ZSgxNSk7XHJcbiAgY29uc3QgaW5kZXhPZkxhc3REZXYgPSBjdXJyZW50UGFnZSAqIGRldnNQZXJQYWdlO1xyXG4gIGNvbnN0IGluZGV4T2ZGaXJzdERldiA9IGluZGV4T2ZMYXN0RGV2IC0gZGV2c1BlclBhZ2U7XHJcbiAgY29uc3QgY3VycmVudERldnMgPSBkZXZzLnNsaWNlKGluZGV4T2ZGaXJzdERldiwgaW5kZXhPZkxhc3REZXYpO1xyXG5cclxuICBmb3IgKGxldCBpID0gMTsgaSA8PSBNYXRoLmNlaWwoZGF0YS50b3RhbF9jb3VudCAvIGRldnNQZXJQYWdlKTsgaSsrKSB7XHJcbiAgICBwYWdlTnVtYmVycy5wdXNoKGkpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoZSkgPT4ge1xyXG4gICAgc2V0Q3VycmVudFBhZ2UoTnVtYmVyKGUudGFyZ2V0LmlkKSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgPERldnNDYXJkc1xyXG4gICAgICAgIGN1cnJlbnREZXZzPXtkYXRhLml0ZW1zfVxyXG4gICAgICAgIHBhZ2VOdW1iZXJzPXtwYWdlTnVtYmVyc31cclxuICAgICAgICBoYW5kbGVDbGljaz17aGFuZGxlQ2xpY2t9XHJcbiAgICAgIC8+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=
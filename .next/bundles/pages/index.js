
          window.__NEXT_REGISTER_PAGE('/', function() {
            var comp = module.exports =
webpackJsonp([5],{

/***/ 559:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _regenerator = __webpack_require__(72);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(63);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _link = __webpack_require__(562);

var _link2 = _interopRequireDefault(_link);

__webpack_require__(566);

var _Layout = __webpack_require__(569);

var _Layout2 = _interopRequireDefault(_Layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "C:\\Users\\shoaibB\\Desktop\\nextJS\\NextJS Code\\pages\\index.js?entry",
    _this = undefined;

var Home = function Home(_ref) {
	var stars = _ref.stars;
	return _react2.default.createElement(_Layout2.default, { title: "This is Home Component", __source: {
			fileName: _jsxFileName,
			lineNumber: 7
		}
	}, _react2.default.createElement("section", {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 8
		}
	}, _react2.default.createElement("div", {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 9
		}
	}, "ReactJS has ", stars, " stars ")));
};

Home.getInitialProps = function () {
	var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(_ref2) {
		var req = _ref2.req;
		var res, json;
		return _regenerator2.default.wrap(function _callee$(_context) {
			while (1) {
				switch (_context.prev = _context.next) {
					case 0:
						_context.next = 2;
						return fetch("https://api.github.com/repos/facebook/react");

					case 2:
						res = _context.sent;
						_context.next = 5;
						return res.json();

					case 5:
						json = _context.sent;
						return _context.abrupt("return", { stars: json.stargazers_count });

					case 7:
					case "end":
						return _context.stop();
				}
			}
		}, _callee, _this);
	}));

	return function (_x) {
		return _ref3.apply(this, arguments);
	};
}();

exports.default = Home;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "C:\\Users\\shoaibB\\Desktop\\nextJS\\NextJS Code\\pages\\index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Users\\shoaibB\\Desktop\\nextJS\\NextJS Code\\pages\\index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(83)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(module.exports.default || module.exports, "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ }),

/***/ 563:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(559);


/***/ }),

/***/ 569:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _link = __webpack_require__(562);

var _link2 = _interopRequireDefault(_link);

var _head = __webpack_require__(199);

var _head2 = _interopRequireDefault(_head);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "C:\\Users\\shoaibB\\Desktop\\nextJS\\NextJS Code\\components\\Layout.js";


var Layout = function Layout(_ref) {
  var children = _ref.children,
      _ref$title = _ref.title,
      title = _ref$title === undefined ? "This is a Default Title" : _ref$title;
  return _react2.default.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, _react2.default.createElement(_head2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, _react2.default.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, title), _react2.default.createElement("meta", { charSet: "utf-8", __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }), _react2.default.createElement("meta", { name: "viewport", content: "initial-scale=1.0, width=device-width", __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }), _react2.default.createElement("link", {
    rel: "stylesheet",
    href: "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css",
    integrity: "sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u",
    crossorigin: "anonymous",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  })), _react2.default.createElement("section", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, children), _react2.default.createElement("footer", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, "I`m here to stay"));
};

exports.default = Layout;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "C:\\Users\\shoaibB\\Desktop\\nextJS\\NextJS Code\\components\\Layout.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Users\\shoaibB\\Desktop\\nextJS\\NextJS Code\\components\\Layout.js"); } } })();

/***/ })

},[563]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlc1xccGFnZXNcXGluZGV4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXM/ZjM3YmRiNCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xheW91dC5qcz9mMzdiZGI0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgXCJpc29tb3JwaGljLWZldGNoXCI7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0LmpzXCI7XHJcblxyXG5jb25zdCBIb21lID0gKHsgc3RhcnMgfSkgPT4gKFxyXG5cdDxMYXlvdXQgdGl0bGU9XCJUaGlzIGlzIEhvbWUgQ29tcG9uZW50XCI+XHJcblx0XHQ8c2VjdGlvbj5cclxuXHRcdFx0PGRpdj5SZWFjdEpTIGhhcyB7c3RhcnN9IHN0YXJzIDwvZGl2PlxyXG5cdFx0PC9zZWN0aW9uPlxyXG5cdDwvTGF5b3V0PlxyXG4pO1xyXG5cclxuSG9tZS5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoeyByZXEgfSkgPT4ge1xyXG5cdGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS9yZXBvcy9mYWNlYm9vay9yZWFjdFwiKTtcclxuXHRjb25zdCBqc29uID0gYXdhaXQgcmVzLmpzb24oKTtcclxuXHRyZXR1cm4geyBzdGFyczoganNvbi5zdGFyZ2F6ZXJzX2NvdW50IH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcz9lbnRyeSIsImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5cclxuY29uc3QgTGF5b3V0ID0gKHsgY2hpbGRyZW4sIHRpdGxlID0gXCJUaGlzIGlzIGEgRGVmYXVsdCBUaXRsZVwiIH0pID0+IChcclxuICA8ZGl2PlxyXG4gICAgPEhlYWQ+XHJcbiAgICAgIDx0aXRsZT57dGl0bGV9PC90aXRsZT5cclxuICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cclxuICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cImluaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGhcIiAvPlxyXG4gICAgICA8bGlua1xyXG4gICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxyXG4gICAgICAgIGhyZWY9XCJodHRwczovL21heGNkbi5ib290c3RyYXBjZG4uY29tL2Jvb3RzdHJhcC8zLjMuNy9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIlxyXG4gICAgICAgIGludGVncml0eT1cInNoYTM4NC1CVllpaVNJRmVLMWRHbUpSQWt5Y3VIQUhSZzMyT21VY3d3N29uM1JZZGc0VmErUG1TVHN6L0s2OHZiZEVqaDR1XCJcclxuICAgICAgICBjcm9zc29yaWdpbj1cImFub255bW91c1wiXHJcbiAgICAgIC8+XHJcbiAgICA8L0hlYWQ+XHJcbiAgICA8c2VjdGlvbj5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9zZWN0aW9uPlxyXG5cclxuICAgIDxmb290ZXI+XHJcbiAgICAgIElgbSBoZXJlIHRvIHN0YXlcclxuICAgIDwvZm9vdGVyPlxyXG4gIDwvZGl2PlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL0xheW91dC5qcyJdLCJtYXBwaW5ncyI6IjtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7OztBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBSEE7QUFDQTtBQU9BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQURBO0FBQUE7QUFFQTtBQUNBO0FBREE7QUFGQTtBQUdBO0FBQ0E7QUFKQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFNQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEJBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBOztBQUdBO0FBQ0E7QUFDQTtBQUFBOztBQUpBO0FBT0E7QUFQQTtBQUNBOztBQU1BO0FBQ0E7QUFEQTtBQUFBOztBQUlBO0FBQUE7QUFBQTtBQUFBO0FBTUE7QUFDQTtBQURBO0FBQ0E7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=
            return { page: comp.default }
          })
        
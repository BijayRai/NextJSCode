"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _link = require("next\\dist\\lib\\link.js");

var _link2 = _interopRequireDefault(_link);

require("isomorphic-fetch");

var _Layout = require("../components/Layout.js");

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
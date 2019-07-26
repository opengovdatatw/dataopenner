webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf3 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/defineProperty.js"));

var _mapKeys2 = _interopRequireDefault(__webpack_require__(/*! lodash/mapKeys */ "./node_modules/lodash/mapKeys.js"));

var _map2 = _interopRequireDefault(__webpack_require__(/*! lodash/map */ "./node_modules/lodash/map.js"));

var _pullAt2 = _interopRequireDefault(__webpack_require__(/*! lodash/pullAt */ "./node_modules/lodash/pullAt.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _axios = _interopRequireDefault(__webpack_require__(/*! axios */ "./node_modules/axios/index.js"));

var _styledComponents = _interopRequireDefault(__webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js"));

var _Head = _interopRequireDefault(__webpack_require__(/*! ../components/Head */ "./components/Head.js"));

var _Rank = _interopRequireDefault(__webpack_require__(/*! ../components/Rank */ "./components/Rank.js"));

var _RankSunburst = _interopRequireDefault(__webpack_require__(/*! ../components/RankSunburst */ "./components/RankSunburst.js"));

var _jsxFileName = "/Users/yutin/Studio/tmot/dataopener/pages/index.js";

var Topbar = _styledComponents["default"].div.withConfig({
  displayName: "pages__Topbar",
  componentId: "lgvotk-0"
})(["height:20px;"]);

var Title = _styledComponents["default"].div.withConfig({
  displayName: "pages__Title",
  componentId: "lgvotk-1"
})(["font-size:1.5em;padding:3px 10px 3px 10px;background:#ffffff;display:inline-block;border-radius:3px;"]);

var Document = _styledComponents["default"].div.withConfig({
  displayName: "pages__Document",
  componentId: "lgvotk-2"
})(["background-image:url(\"./static/background.jpg\");background-size:cover;background-position:center center;height:100vh;"]);

var Mask = _styledComponents["default"].div.withConfig({
  displayName: "pages__Mask",
  componentId: "lgvotk-3"
})(["width:100%;height:100%;background-color:rgba(10,10,10,0.6);"]);

var Container = _styledComponents["default"].div.withConfig({
  displayName: "pages__Container",
  componentId: "lgvotk-4"
})(["height:100%;display:flex;flex-direction:column;position:relative;"]);

var Main = _styledComponents["default"].div.withConfig({
  displayName: "pages__Main",
  componentId: "lgvotk-5"
})(["position:absolute;top:0;left:0;width:50%;height:100%;display:flex;flex-direction:column;align-items:flex-start;justify-content:center;"]);

var RankPanel = (0, _styledComponents["default"])(_Rank["default"]).withConfig({
  displayName: "pages__RankPanel",
  componentId: "lgvotk-6"
})(["margin-right:0;"]);

var GithubButton = _styledComponents["default"].a.withConfig({
  displayName: "pages__GithubButton",
  componentId: "lgvotk-7"
})(["color:#ffffff;padding:5px 0;display:inline-block;"]);

var Home =
/*#__PURE__*/
function (_React$PureComponent) {
  (0, _inherits2["default"])(Home, _React$PureComponent);

  function Home() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2["default"])(this, Home);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2["default"])(this, (_getPrototypeOf2 = (0, _getPrototypeOf3["default"])(Home)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      data: null
    });
    return _this;
  }

  (0, _createClass2["default"])(Home, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.loadData();
    }
  }, {
    key: "loadData",
    value: function () {
      var _loadData = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee() {
        var res, raw, fields, data;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _axios["default"].get("./static/data.json");

              case 2:
                res = _context.sent;
                _context.next = 5;
                return res.data;

              case 5:
                raw = _context.sent;
                fields = (0, _pullAt2["default"])(raw, [0])[0];
                data = (0, _map2["default"])(raw, function (item) {
                  return (0, _mapKeys2["default"])(item, function (__, key) {
                    return fields[key];
                  });
                });
                this.setState({
                  data: data
                });

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function loadData() {
        return _loadData.apply(this, arguments);
      }

      return loadData;
    }()
  }, {
    key: "renderSunburst",
    value: function renderSunburst() {
      var data = this.state.data;
      if (!data) return null;
      return _react["default"].createElement(_RankSunburst["default"], {
        data: data,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      });
    }
  }, {
    key: "renderRank",
    value: function renderRank() {
      var data = this.state.data;
      if (!data) return null;
      return _react["default"].createElement(RankPanel, {
        data: data,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      });
    }
  }, {
    key: "render",
    value: function render() {
      return _react["default"].createElement(Document, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }, _react["default"].createElement(_Head["default"], {
        title: "\u8CC7\u6599\u7533\u8ACB\u5C0F\u5E6B\u624B",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }), _react["default"].createElement(Mask, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, _react["default"].createElement(Container, {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }, _react["default"].createElement(Topbar, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }), _react["default"].createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, _react["default"].createElement(Title, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }, "\u8CC7\u6599\u7533\u8ACB\u5C0F\u5E6B\u624B"), _react["default"].createElement(GithubButton, {
        target: "_blank",
        href: "https://github.com/opengovdatatw/dataopener",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }, "View on GitHub")), this.renderRank(), _react["default"].createElement(Main, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        __self: this
      }, _react["default"].createElement("button", {
        type: "button",
        className: "btn btn-primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      }, "\u7ACB\u5373\u6AA2\u7D22\u7533\u8ACB\u72C0\u6CC1"), _react["default"].createElement("button", {
        type: "button",
        className: "btn btn-primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      }, "\u6211\u60F3\u8981\u66F4\u591A")))));
    }
  }]);
  return Home;
}(_react["default"].PureComponent);

exports["default"] = Home;

/***/ })

})
//# sourceMappingURL=index.js.45361b4864996182f723.hot-update.js.map
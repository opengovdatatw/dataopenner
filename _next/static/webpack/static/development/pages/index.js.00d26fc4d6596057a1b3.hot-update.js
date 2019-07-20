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

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _styledComponents = _interopRequireDefault(__webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js"));

var _axios = _interopRequireDefault(__webpack_require__(/*! axios */ "./node_modules/axios/index.js"));

var _reactVis = __webpack_require__(/*! react-vis */ "./node_modules/react-vis/es/index.js");

var _randomcolor = _interopRequireDefault(__webpack_require__(/*! randomcolor */ "./node_modules/randomcolor/randomColor.js"));

var _Head = _interopRequireDefault(__webpack_require__(/*! ../components/Head */ "./components/Head.js"));

var _jsxFileName = "/Users/yutin/Studio/tmot/dataopener/pages/index.js";

var Document = _styledComponents["default"].div.withConfig({
  displayName: "pages__Document",
  componentId: "lgvotk-0"
})([""]);

var Header = _styledComponents["default"].div.withConfig({
  displayName: "pages__Header",
  componentId: "lgvotk-1"
})([""]);

var Chart = _styledComponents["default"].div.withConfig({
  displayName: "pages__Chart",
  componentId: "lgvotk-2"
})(["width:500px;height:500px;"]);

var Footer = _styledComponents["default"].div.withConfig({
  displayName: "pages__Footer",
  componentId: "lgvotk-3"
})([""]);

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
      data: {},
      hoveredCell: false
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
        var res;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _axios["default"].get("/static/data.json");

              case 2:
                res = _context.sent;
                _context.t0 = this;
                _context.next = 6;
                return res.data;

              case 6:
                _context.t1 = _context.sent;
                _context.t2 = {
                  data: _context.t1
                };

                _context.t0.setState.call(_context.t0, _context.t2);

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
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          data = _this$state.data,
          hoveredCell = _this$state.hoveredCell;
      return _react["default"].createElement(Document, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, _react["default"].createElement(Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, "\u8CC7\u6599\u7533\u8ACB\u5C0F\u5E6B\u624B"), _react["default"].createElement(_Head["default"], {
        title: "\u8CC7\u6599\u7533\u8ACB\u5C0F\u5E6B\u624B",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }), _react["default"].createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, "View on GitHub"), data && _react["default"].createElement(_reactVis.Sunburst, {
        data: data,
        style: {
          stroke: '#fff'
        },
        onValueMouseOver: function onValueMouseOver(v) {
          return _this2.setState({
            hoveredCell: v.x && v.y ? v : false
          });
        },
        onValueMouseOut: function onValueMouseOut(v) {
          return _this2.setState({
            hoveredCell: false
          });
        },
        height: 800,
        width: 800,
        margin: {
          top: 50,
          bottom: 50,
          left: 50,
          right: 50
        },
        getLabel: function getLabel(d) {
          return d.name;
        },
        getSize: function getSize(d) {
          return d.value;
        },
        getColor: function getColor() {
          return (0, _randomcolor["default"])();
        },
        padAngle: function padAngle() {
          return 0.02;
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }), _react["default"].createElement(Footer, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, "\u6211\u60F3\u8981\u66F4\u591A"));
    }
  }]);
  return Home;
}(_react["default"].PureComponent);

exports["default"] = Home;

/***/ })

})
//# sourceMappingURL=index.js.00d26fc4d6596057a1b3.hot-update.js.map
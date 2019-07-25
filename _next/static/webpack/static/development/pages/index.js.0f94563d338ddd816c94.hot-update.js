webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Rank.js":
/*!****************************!*\
  !*** ./components/Rank.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/objectWithoutProperties.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf3 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/defineProperty.js"));

var _replace2 = _interopRequireDefault(__webpack_require__(/*! lodash/replace */ "./node_modules/lodash/replace.js"));

var _set2 = _interopRequireDefault(__webpack_require__(/*! lodash/set */ "./node_modules/lodash/set.js"));

var _get2 = _interopRequireDefault(__webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js"));

var _forEach2 = _interopRequireDefault(__webpack_require__(/*! lodash/forEach */ "./node_modules/lodash/forEach.js"));

var _take2 = _interopRequireDefault(__webpack_require__(/*! lodash/take */ "./node_modules/lodash/take.js"));

var _map2 = _interopRequireDefault(__webpack_require__(/*! lodash/map */ "./node_modules/lodash/map.js"));

var _sumBy2 = _interopRequireDefault(__webpack_require__(/*! lodash/sumBy */ "./node_modules/lodash/sumBy.js"));

var _orderBy2 = _interopRequireDefault(__webpack_require__(/*! lodash/orderBy */ "./node_modules/lodash/orderBy.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _recompose = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");

var _styledComponents = _interopRequireDefault(__webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js"));

var _randomcolor = _interopRequireDefault(__webpack_require__(/*! randomcolor */ "./node_modules/randomcolor/randomColor.js"));

var _jsxFileName = "/Users/yutin/Studio/tmot/dataopener/components/Rank.js",
    _Rank;

var replies = ["申請前已對外提供", "同意提供", "不同意提供", "還未回覆"];
var colors = (0, _randomcolor["default"])({
  luminosity: "dark",
  count: 4
});

var Wrapper = _styledComponents["default"].div.withConfig({
  displayName: "Rank__Wrapper",
  componentId: "sc-1jps8v2-0"
})(["width:100%;margin:0 auto;flex:1;display:flex;flex-direction:row;"]);

var KindName = _styledComponents["default"].div.withConfig({
  displayName: "Rank__KindName",
  componentId: "sc-1jps8v2-1"
})(["font-size:1.5em;flex:1;display:flex;align-items:flex-end;justify-content:flex-end;padding:0 20px 20px;color:", ";"], function (_ref) {
  var idx = _ref.idx;
  return colors[idx];
});

var Bar = _styledComponents["default"].div.withConfig({
  displayName: "Rank__Bar",
  componentId: "sc-1jps8v2-2"
})(["position:relative;height:100%;width:100%;max-width:600px;display:flex;flex-direction:row-reverse;align-items:flex-end;"]);

var Item = _styledComponents["default"].div.withConfig({
  displayName: "Rank__Item",
  componentId: "sc-1jps8v2-3"
})(["position:relative;flex:1;background-color:rgba(255,255,255,0.6);margin:0 5px;height:", "%;transition-property:height;transition-duration:1s;display:flex;align-items:flex-end;justify-content:center;padding-bottom:20px;font-size:1.2em;color:", ";"], function (_ref2) {
  var value = _ref2.value;
  return value * 500;
}, function (_ref3) {
  var idx = _ref3.idx;
  return colors[idx];
});

var Organizer = _styledComponents["default"].div.withConfig({
  displayName: "Rank__Organizer",
  componentId: "sc-1jps8v2-4"
})(["position:absolute;top:-30px;right:0;text-align:right;width:200px;color:#ffffff;"]);

var Rank =
/*#__PURE__*/
function (_React$PureComponent) {
  (0, _inherits2["default"])(Rank, _React$PureComponent);

  function Rank() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2["default"])(this, Rank);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2["default"])(this, (_getPrototypeOf2 = (0, _getPrototypeOf3["default"])(Rank)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      idx: 0
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onTimerTrigger", function () {
      var idx = _this.state.idx;
      idx += 1;
      if (idx >= replies.length) idx = 0;

      _this.setState({
        idx: idx
      });

      _this.timer = setTimeout(_this.onTimerTrigger, 5000);
    });
    return _this;
  }

  (0, _createClass2["default"])(Rank, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.timer = setTimeout(this.onTimerTrigger, 5000);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearTimeout(this.timer);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          data = _this$props.data,
          props = (0, _objectWithoutProperties2["default"])(_this$props, ["data"]);
      var idx = this.state.idx;
      var results = (0, _orderBy2["default"])(data, [replies[idx]], ["desc"]);
      var total = (0, _sumBy2["default"])(data, replies[idx]);
      return _react["default"].createElement(Wrapper, (0, _extends2["default"])({}, props, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }), _react["default"].createElement(KindName, {
        idx: idx,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, replies[idx]), _react["default"].createElement(Bar, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }, (0, _map2["default"])((0, _take2["default"])(results, 8), function (result, index) {
        return _react["default"].createElement(Item, {
          key: index,
          value: result[replies[idx]] / total,
          idx: idx,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 101
          },
          __self: this
        }, _react["default"].createElement(Organizer, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 102
          },
          __self: this
        }, result.name), result[replies[idx]]);
      })));
    }
  }]);
  return Rank;
}(_react["default"].PureComponent);

(0, _defineProperty2["default"])(Rank, "propTypes", {
  data: _propTypes["default"].arrayOf(_propTypes["default"].shape({})).isRequired
});

var _default = (_Rank = Rank, (0, _recompose.withPropsOnChange)(["data"], function (_ref4) {
  var data = _ref4.data;
  var results = {};
  (0, _forEach2["default"])(data, function (item) {
    if (!item["標記用＿派發機關"] || !item["0. 政府對民眾申請開放資料的答覆是？"]) return;
    var paths = [item["標記用＿派發機關"], item["0. 政府對民眾申請開放資料的答覆是？"]];
    var value = (0, _get2["default"])(results, paths, 0);
    (0, _set2["default"])(results, paths, value + 1);
  });
  return {
    data: (0, _map2["default"])(results, function (result, name) {
      var item = {
        name: (0, _replace2["default"])(name, "政府", "")
      };
      (0, _forEach2["default"])(replies, function (key) {
        item[key] = result[key] || 0;
      });
      return item;
    })
  };
})(_Rank));

exports["default"] = _default;

/***/ })

})
//# sourceMappingURL=index.js.0f94563d338ddd816c94.hot-update.js.map
webpackHotUpdate("static/development/pages/list.js",{

/***/ "./components/Collection.js":
/*!**********************************!*\
  !*** ./components/Collection.js ***!
  \**********************************/
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

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/defineProperty.js"));

var _map2 = _interopRequireDefault(__webpack_require__(/*! lodash/map */ "./node_modules/lodash/map.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _recompose = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");

var _styledComponents = _interopRequireDefault(__webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js"));

var _jsxFileName = "/Users/yutin/Studio/tmot/dataopener/components/Collection.js";
var replies = ["申請前已對外提供", "同意提供", "不同意提供", "還未回覆"];
var nameColors = ["#aab6fe", "#b2fab4", "#ffa4a2", "#ffe97d"];
var valueColors = ["#49599a", "#519657", "#af4448", "#c88719"];

var Wrapper = _styledComponents["default"].div.withConfig({
  displayName: "Collection__Wrapper",
  componentId: "ebk0pk-0"
})(["width:100%;margin:0 auto;flex:1;display:flex;flex-direction:column;"]);

var Item = _styledComponents["default"].div.withConfig({
  displayName: "Collection__Item",
  componentId: "ebk0pk-1"
})(["position:relative;flex:1;background-color:rgba(255,255,255,0.6);margin:0 5px;height:", "%;transition-property:height;transition-duration:1s;display:flex;align-items:flex-end;justify-content:center;padding-bottom:20px;font-size:1.2em;color:", ";"], function (_ref) {
  var value = _ref.value;
  return value * 500;
}, function (_ref2) {
  var idx = _ref2.idx;
  return valueColors[idx];
});

var Organizer = _styledComponents["default"].div.withConfig({
  displayName: "Collection__Organizer",
  componentId: "ebk0pk-2"
})(["position:absolute;top:-30px;right:0;text-align:right;width:200px;color:#ffffff;"]);

var Collection =
/*#__PURE__*/
function (_React$PureComponent) {
  (0, _inherits2["default"])(Collection, _React$PureComponent);

  function Collection() {
    (0, _classCallCheck2["default"])(this, Collection);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Collection).apply(this, arguments));
  }

  (0, _createClass2["default"])(Collection, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          data = _this$props.data,
          props = (0, _objectWithoutProperties2["default"])(_this$props, ["data"]);
      return _react["default"].createElement(Wrapper, (0, _extends2["default"])({}, props, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }), (0, _map2["default"])(data, function (item, idx) {
        return _react["default"].createElement("div", {
          key: "".concat(idx, "-").concat(item["原ID"]),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 56
          },
          __self: this
        }, item["原ID"]);
      }));
    }
  }]);
  return Collection;
}(_react["default"].PureComponent);

exports["default"] = Collection;
(0, _defineProperty2["default"])(Collection, "propTypes", {
  data: _propTypes["default"].arrayOf(_propTypes["default"].shape({})).isRequired
});

/***/ })

})
//# sourceMappingURL=list.js.2b7be1f5e380491e7586.hot-update.js.map
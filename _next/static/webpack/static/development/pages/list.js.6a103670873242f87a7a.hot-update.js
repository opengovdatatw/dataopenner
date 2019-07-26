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

var _jsxFileName = "/Users/yutin/Studio/tmot/dataopener/components/Collection.js",
    _Rank;

var replies = ["申請前已對外提供", "同意提供", "不同意提供", "還未回覆"];
var nameColors = ["#aab6fe", "#b2fab4", "#ffa4a2", "#ffe97d"];
var valueColors = ["#49599a", "#519657", "#af4448", "#c88719"];

var Wrapper = _styledComponents["default"].div.withConfig({
  displayName: "Collection__Wrapper",
  componentId: "ebk0pk-0"
})(["width:100%;margin:0 auto;flex:1;display:flex;flex-direction:row;"]);

var KindName = _styledComponents["default"].div.withConfig({
  displayName: "Collection__KindName",
  componentId: "ebk0pk-1"
})(["font-size:1.5em;flex:1;display:flex;align-items:flex-end;justify-content:flex-end;padding:0 20px 20px;color:", ";"], function (_ref) {
  var idx = _ref.idx;
  return nameColors[idx];
});

var Bar = _styledComponents["default"].div.withConfig({
  displayName: "Collection__Bar",
  componentId: "ebk0pk-2"
})(["position:relative;height:100%;width:100%;max-width:600px;display:flex;flex-direction:row-reverse;align-items:flex-end;"]);

var Item = _styledComponents["default"].div.withConfig({
  displayName: "Collection__Item",
  componentId: "ebk0pk-3"
})(["position:relative;flex:1;background-color:rgba(255,255,255,0.6);margin:0 5px;height:", "%;transition-property:height;transition-duration:1s;display:flex;align-items:flex-end;justify-content:center;padding-bottom:20px;font-size:1.2em;color:", ";"], function (_ref2) {
  var value = _ref2.value;
  return value * 500;
}, function (_ref3) {
  var idx = _ref3.idx;
  return valueColors[idx];
});

var Organizer = _styledComponents["default"].div.withConfig({
  displayName: "Collection__Organizer",
  componentId: "ebk0pk-4"
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

/***/ }),

/***/ "./components/RankSunburst.js":
false,

/***/ "./node_modules/d3-array/src/array.js":
false,

/***/ "./node_modules/d3-array/src/ascending.js":
false,

/***/ "./node_modules/d3-array/src/bisect.js":
false,

/***/ "./node_modules/d3-array/src/bisector.js":
false,

/***/ "./node_modules/d3-array/src/constant.js":
false,

/***/ "./node_modules/d3-array/src/cross.js":
false,

/***/ "./node_modules/d3-array/src/descending.js":
false,

/***/ "./node_modules/d3-array/src/deviation.js":
false,

/***/ "./node_modules/d3-array/src/extent.js":
false,

/***/ "./node_modules/d3-array/src/histogram.js":
false,

/***/ "./node_modules/d3-array/src/identity.js":
false,

/***/ "./node_modules/d3-array/src/index.js":
false,

/***/ "./node_modules/d3-array/src/max.js":
false,

/***/ "./node_modules/d3-array/src/mean.js":
false,

/***/ "./node_modules/d3-array/src/median.js":
false,

/***/ "./node_modules/d3-array/src/merge.js":
false,

/***/ "./node_modules/d3-array/src/min.js":
false,

/***/ "./node_modules/d3-array/src/number.js":
false,

/***/ "./node_modules/d3-array/src/pairs.js":
false,

/***/ "./node_modules/d3-array/src/permute.js":
false,

/***/ "./node_modules/d3-array/src/quantile.js":
false,

/***/ "./node_modules/d3-array/src/range.js":
false,

/***/ "./node_modules/d3-array/src/scan.js":
false,

/***/ "./node_modules/d3-array/src/shuffle.js":
false,

/***/ "./node_modules/d3-array/src/sum.js":
false,

/***/ "./node_modules/d3-array/src/threshold/freedmanDiaconis.js":
false,

/***/ "./node_modules/d3-array/src/threshold/scott.js":
false,

/***/ "./node_modules/d3-array/src/threshold/sturges.js":
false,

/***/ "./node_modules/d3-array/src/ticks.js":
false,

/***/ "./node_modules/d3-array/src/transpose.js":
false,

/***/ "./node_modules/d3-array/src/variance.js":
false,

/***/ "./node_modules/d3-array/src/zip.js":
false,

/***/ "./node_modules/d3-collection/src/entries.js":
false,

/***/ "./node_modules/d3-collection/src/index.js":
false,

/***/ "./node_modules/d3-collection/src/keys.js":
false,

/***/ "./node_modules/d3-collection/src/map.js":
false,

/***/ "./node_modules/d3-collection/src/nest.js":
false,

/***/ "./node_modules/d3-collection/src/set.js":
false,

/***/ "./node_modules/d3-collection/src/values.js":
false,

/***/ "./node_modules/d3-color/src/color.js":
false,

/***/ "./node_modules/d3-color/src/cubehelix.js":
false,

/***/ "./node_modules/d3-color/src/define.js":
false,

/***/ "./node_modules/d3-color/src/index.js":
false,

/***/ "./node_modules/d3-color/src/lab.js":
false,

/***/ "./node_modules/d3-color/src/math.js":
false,

/***/ "./node_modules/d3-contour/src/area.js":
false,

/***/ "./node_modules/d3-contour/src/array.js":
false,

/***/ "./node_modules/d3-contour/src/ascending.js":
false,

/***/ "./node_modules/d3-contour/src/blur.js":
false,

/***/ "./node_modules/d3-contour/src/constant.js":
false,

/***/ "./node_modules/d3-contour/src/contains.js":
false,

/***/ "./node_modules/d3-contour/src/contours.js":
false,

/***/ "./node_modules/d3-contour/src/density.js":
false,

/***/ "./node_modules/d3-contour/src/index.js":
false,

/***/ "./node_modules/d3-contour/src/noop.js":
false,

/***/ "./node_modules/d3-format/src/defaultLocale.js":
false,

/***/ "./node_modules/d3-format/src/exponent.js":
false,

/***/ "./node_modules/d3-format/src/formatDecimal.js":
false,

/***/ "./node_modules/d3-format/src/formatGroup.js":
false,

/***/ "./node_modules/d3-format/src/formatNumerals.js":
false,

/***/ "./node_modules/d3-format/src/formatPrefixAuto.js":
false,

/***/ "./node_modules/d3-format/src/formatRounded.js":
false,

/***/ "./node_modules/d3-format/src/formatSpecifier.js":
false,

/***/ "./node_modules/d3-format/src/formatTrim.js":
false,

/***/ "./node_modules/d3-format/src/formatTypes.js":
false,

/***/ "./node_modules/d3-format/src/identity.js":
false,

/***/ "./node_modules/d3-format/src/index.js":
false,

/***/ "./node_modules/d3-format/src/locale.js":
false,

/***/ "./node_modules/d3-format/src/precisionFixed.js":
false,

/***/ "./node_modules/d3-format/src/precisionPrefix.js":
false,

/***/ "./node_modules/d3-format/src/precisionRound.js":
false,

/***/ "./node_modules/d3-geo/src/adder.js":
false,

/***/ "./node_modules/d3-geo/src/area.js":
false,

/***/ "./node_modules/d3-geo/src/bounds.js":
false,

/***/ "./node_modules/d3-geo/src/cartesian.js":
false,

/***/ "./node_modules/d3-geo/src/centroid.js":
false,

/***/ "./node_modules/d3-geo/src/circle.js":
false,

/***/ "./node_modules/d3-geo/src/clip/antimeridian.js":
false,

/***/ "./node_modules/d3-geo/src/clip/buffer.js":
false,

/***/ "./node_modules/d3-geo/src/clip/circle.js":
false,

/***/ "./node_modules/d3-geo/src/clip/extent.js":
false,

/***/ "./node_modules/d3-geo/src/clip/index.js":
false,

/***/ "./node_modules/d3-geo/src/clip/line.js":
false,

/***/ "./node_modules/d3-geo/src/clip/rectangle.js":
false,

/***/ "./node_modules/d3-geo/src/clip/rejoin.js":
false,

/***/ "./node_modules/d3-geo/src/compose.js":
false,

/***/ "./node_modules/d3-geo/src/constant.js":
false,

/***/ "./node_modules/d3-geo/src/contains.js":
false,

/***/ "./node_modules/d3-geo/src/distance.js":
false,

/***/ "./node_modules/d3-geo/src/graticule.js":
false,

/***/ "./node_modules/d3-geo/src/identity.js":
false,

/***/ "./node_modules/d3-geo/src/index.js":
false,

/***/ "./node_modules/d3-geo/src/interpolate.js":
false,

/***/ "./node_modules/d3-geo/src/length.js":
false,

/***/ "./node_modules/d3-geo/src/math.js":
false,

/***/ "./node_modules/d3-geo/src/noop.js":
false,

/***/ "./node_modules/d3-geo/src/path/area.js":
false,

/***/ "./node_modules/d3-geo/src/path/bounds.js":
false,

/***/ "./node_modules/d3-geo/src/path/centroid.js":
false,

/***/ "./node_modules/d3-geo/src/path/context.js":
false,

/***/ "./node_modules/d3-geo/src/path/index.js":
false,

/***/ "./node_modules/d3-geo/src/path/measure.js":
false,

/***/ "./node_modules/d3-geo/src/path/string.js":
false,

/***/ "./node_modules/d3-geo/src/pointEqual.js":
false,

/***/ "./node_modules/d3-geo/src/polygonContains.js":
false,

/***/ "./node_modules/d3-geo/src/projection/albers.js":
false,

/***/ "./node_modules/d3-geo/src/projection/albersUsa.js":
false,

/***/ "./node_modules/d3-geo/src/projection/azimuthal.js":
false,

/***/ "./node_modules/d3-geo/src/projection/azimuthalEqualArea.js":
false,

/***/ "./node_modules/d3-geo/src/projection/azimuthalEquidistant.js":
false,

/***/ "./node_modules/d3-geo/src/projection/conic.js":
false,

/***/ "./node_modules/d3-geo/src/projection/conicConformal.js":
false,

/***/ "./node_modules/d3-geo/src/projection/conicEqualArea.js":
false,

/***/ "./node_modules/d3-geo/src/projection/conicEquidistant.js":
false,

/***/ "./node_modules/d3-geo/src/projection/cylindricalEqualArea.js":
false,

/***/ "./node_modules/d3-geo/src/projection/equalEarth.js":
false,

/***/ "./node_modules/d3-geo/src/projection/equirectangular.js":
false,

/***/ "./node_modules/d3-geo/src/projection/fit.js":
false,

/***/ "./node_modules/d3-geo/src/projection/gnomonic.js":
false,

/***/ "./node_modules/d3-geo/src/projection/identity.js":
false,

/***/ "./node_modules/d3-geo/src/projection/index.js":
false,

/***/ "./node_modules/d3-geo/src/projection/mercator.js":
false,

/***/ "./node_modules/d3-geo/src/projection/naturalEarth1.js":
false,

/***/ "./node_modules/d3-geo/src/projection/orthographic.js":
false,

/***/ "./node_modules/d3-geo/src/projection/resample.js":
false,

/***/ "./node_modules/d3-geo/src/projection/stereographic.js":
false,

/***/ "./node_modules/d3-geo/src/projection/transverseMercator.js":
false,

/***/ "./node_modules/d3-geo/src/rotation.js":
false,

/***/ "./node_modules/d3-geo/src/stream.js":
false,

/***/ "./node_modules/d3-geo/src/transform.js":
false,

/***/ "./node_modules/d3-hexbin/index.js":
false,

/***/ "./node_modules/d3-hexbin/src/hexbin.js":
false,

/***/ "./node_modules/d3-hierarchy/src/accessors.js":
false,

/***/ "./node_modules/d3-hierarchy/src/array.js":
false,

/***/ "./node_modules/d3-hierarchy/src/cluster.js":
false,

/***/ "./node_modules/d3-hierarchy/src/constant.js":
false,

/***/ "./node_modules/d3-hierarchy/src/hierarchy/ancestors.js":
false,

/***/ "./node_modules/d3-hierarchy/src/hierarchy/count.js":
false,

/***/ "./node_modules/d3-hierarchy/src/hierarchy/descendants.js":
false,

/***/ "./node_modules/d3-hierarchy/src/hierarchy/each.js":
false,

/***/ "./node_modules/d3-hierarchy/src/hierarchy/eachAfter.js":
false,

/***/ "./node_modules/d3-hierarchy/src/hierarchy/eachBefore.js":
false,

/***/ "./node_modules/d3-hierarchy/src/hierarchy/index.js":
false,

/***/ "./node_modules/d3-hierarchy/src/hierarchy/leaves.js":
false,

/***/ "./node_modules/d3-hierarchy/src/hierarchy/links.js":
false,

/***/ "./node_modules/d3-hierarchy/src/hierarchy/path.js":
false,

/***/ "./node_modules/d3-hierarchy/src/hierarchy/sort.js":
false,

/***/ "./node_modules/d3-hierarchy/src/hierarchy/sum.js":
false,

/***/ "./node_modules/d3-hierarchy/src/index.js":
false,

/***/ "./node_modules/d3-hierarchy/src/pack/enclose.js":
false,

/***/ "./node_modules/d3-hierarchy/src/pack/index.js":
false,

/***/ "./node_modules/d3-hierarchy/src/pack/siblings.js":
false,

/***/ "./node_modules/d3-hierarchy/src/partition.js":
false,

/***/ "./node_modules/d3-hierarchy/src/stratify.js":
false,

/***/ "./node_modules/d3-hierarchy/src/tree.js":
false,

/***/ "./node_modules/d3-hierarchy/src/treemap/binary.js":
false,

/***/ "./node_modules/d3-hierarchy/src/treemap/dice.js":
false,

/***/ "./node_modules/d3-hierarchy/src/treemap/index.js":
false,

/***/ "./node_modules/d3-hierarchy/src/treemap/resquarify.js":
false,

/***/ "./node_modules/d3-hierarchy/src/treemap/round.js":
false,

/***/ "./node_modules/d3-hierarchy/src/treemap/slice.js":
false,

/***/ "./node_modules/d3-hierarchy/src/treemap/sliceDice.js":
false,

/***/ "./node_modules/d3-hierarchy/src/treemap/squarify.js":
false,

/***/ "./node_modules/d3-interpolate/src/array.js":
false,

/***/ "./node_modules/d3-interpolate/src/basis.js":
false,

/***/ "./node_modules/d3-interpolate/src/basisClosed.js":
false,

/***/ "./node_modules/d3-interpolate/src/color.js":
false,

/***/ "./node_modules/d3-interpolate/src/constant.js":
false,

/***/ "./node_modules/d3-interpolate/src/cubehelix.js":
false,

/***/ "./node_modules/d3-interpolate/src/date.js":
false,

/***/ "./node_modules/d3-interpolate/src/discrete.js":
false,

/***/ "./node_modules/d3-interpolate/src/hcl.js":
false,

/***/ "./node_modules/d3-interpolate/src/hsl.js":
false,

/***/ "./node_modules/d3-interpolate/src/hue.js":
false,

/***/ "./node_modules/d3-interpolate/src/index.js":
false,

/***/ "./node_modules/d3-interpolate/src/lab.js":
false,

/***/ "./node_modules/d3-interpolate/src/number.js":
false,

/***/ "./node_modules/d3-interpolate/src/object.js":
false,

/***/ "./node_modules/d3-interpolate/src/piecewise.js":
false,

/***/ "./node_modules/d3-interpolate/src/quantize.js":
false,

/***/ "./node_modules/d3-interpolate/src/rgb.js":
false,

/***/ "./node_modules/d3-interpolate/src/round.js":
false,

/***/ "./node_modules/d3-interpolate/src/string.js":
false,

/***/ "./node_modules/d3-interpolate/src/transform/decompose.js":
false,

/***/ "./node_modules/d3-interpolate/src/transform/index.js":
false,

/***/ "./node_modules/d3-interpolate/src/transform/parse.js":
false,

/***/ "./node_modules/d3-interpolate/src/value.js":
false,

/***/ "./node_modules/d3-interpolate/src/zoom.js":
false,

/***/ "./node_modules/d3-path/src/index.js":
false,

/***/ "./node_modules/d3-path/src/path.js":
false,

/***/ "./node_modules/d3-sankey/index.js":
false,

/***/ "./node_modules/d3-sankey/src/align.js":
false,

/***/ "./node_modules/d3-sankey/src/constant.js":
false,

/***/ "./node_modules/d3-sankey/src/sankey.js":
false,

/***/ "./node_modules/d3-sankey/src/sankeyLinkHorizontal.js":
false,

/***/ "./node_modules/d3-scale/index.js":
false,

/***/ "./node_modules/d3-scale/src/array.js":
false,

/***/ "./node_modules/d3-scale/src/band.js":
false,

/***/ "./node_modules/d3-scale/src/category10.js":
false,

/***/ "./node_modules/d3-scale/src/category20.js":
false,

/***/ "./node_modules/d3-scale/src/category20b.js":
false,

/***/ "./node_modules/d3-scale/src/category20c.js":
false,

/***/ "./node_modules/d3-scale/src/colors.js":
false,

/***/ "./node_modules/d3-scale/src/constant.js":
false,

/***/ "./node_modules/d3-scale/src/continuous.js":
false,

/***/ "./node_modules/d3-scale/src/cubehelix.js":
false,

/***/ "./node_modules/d3-scale/src/identity.js":
false,

/***/ "./node_modules/d3-scale/src/linear.js":
false,

/***/ "./node_modules/d3-scale/src/log.js":
false,

/***/ "./node_modules/d3-scale/src/nice.js":
false,

/***/ "./node_modules/d3-scale/src/number.js":
false,

/***/ "./node_modules/d3-scale/src/ordinal.js":
false,

/***/ "./node_modules/d3-scale/src/pow.js":
false,

/***/ "./node_modules/d3-scale/src/quantile.js":
false,

/***/ "./node_modules/d3-scale/src/quantize.js":
false,

/***/ "./node_modules/d3-scale/src/rainbow.js":
false,

/***/ "./node_modules/d3-scale/src/sequential.js":
false,

/***/ "./node_modules/d3-scale/src/threshold.js":
false,

/***/ "./node_modules/d3-scale/src/tickFormat.js":
false,

/***/ "./node_modules/d3-scale/src/time.js":
false,

/***/ "./node_modules/d3-scale/src/utcTime.js":
false,

/***/ "./node_modules/d3-scale/src/viridis.js":
false,

/***/ "./node_modules/d3-shape/src/arc.js":
false,

/***/ "./node_modules/d3-shape/src/area.js":
false,

/***/ "./node_modules/d3-shape/src/areaRadial.js":
false,

/***/ "./node_modules/d3-shape/src/array.js":
false,

/***/ "./node_modules/d3-shape/src/constant.js":
false,

/***/ "./node_modules/d3-shape/src/curve/basis.js":
false,

/***/ "./node_modules/d3-shape/src/curve/basisClosed.js":
false,

/***/ "./node_modules/d3-shape/src/curve/basisOpen.js":
false,

/***/ "./node_modules/d3-shape/src/curve/bundle.js":
false,

/***/ "./node_modules/d3-shape/src/curve/cardinal.js":
false,

/***/ "./node_modules/d3-shape/src/curve/cardinalClosed.js":
false,

/***/ "./node_modules/d3-shape/src/curve/cardinalOpen.js":
false,

/***/ "./node_modules/d3-shape/src/curve/catmullRom.js":
false,

/***/ "./node_modules/d3-shape/src/curve/catmullRomClosed.js":
false,

/***/ "./node_modules/d3-shape/src/curve/catmullRomOpen.js":
false,

/***/ "./node_modules/d3-shape/src/curve/linear.js":
false,

/***/ "./node_modules/d3-shape/src/curve/linearClosed.js":
false,

/***/ "./node_modules/d3-shape/src/curve/monotone.js":
false,

/***/ "./node_modules/d3-shape/src/curve/natural.js":
false,

/***/ "./node_modules/d3-shape/src/curve/radial.js":
false,

/***/ "./node_modules/d3-shape/src/curve/step.js":
false,

/***/ "./node_modules/d3-shape/src/descending.js":
false,

/***/ "./node_modules/d3-shape/src/identity.js":
false,

/***/ "./node_modules/d3-shape/src/index.js":
false,

/***/ "./node_modules/d3-shape/src/line.js":
false,

/***/ "./node_modules/d3-shape/src/lineRadial.js":
false,

/***/ "./node_modules/d3-shape/src/link/index.js":
false,

/***/ "./node_modules/d3-shape/src/math.js":
false,

/***/ "./node_modules/d3-shape/src/noop.js":
false,

/***/ "./node_modules/d3-shape/src/offset/diverging.js":
false,

/***/ "./node_modules/d3-shape/src/offset/expand.js":
false,

/***/ "./node_modules/d3-shape/src/offset/none.js":
false,

/***/ "./node_modules/d3-shape/src/offset/silhouette.js":
false,

/***/ "./node_modules/d3-shape/src/offset/wiggle.js":
false,

/***/ "./node_modules/d3-shape/src/order/appearance.js":
false,

/***/ "./node_modules/d3-shape/src/order/ascending.js":
false,

/***/ "./node_modules/d3-shape/src/order/descending.js":
false,

/***/ "./node_modules/d3-shape/src/order/insideOut.js":
false,

/***/ "./node_modules/d3-shape/src/order/none.js":
false,

/***/ "./node_modules/d3-shape/src/order/reverse.js":
false,

/***/ "./node_modules/d3-shape/src/pie.js":
false,

/***/ "./node_modules/d3-shape/src/point.js":
false,

/***/ "./node_modules/d3-shape/src/pointRadial.js":
false,

/***/ "./node_modules/d3-shape/src/stack.js":
false,

/***/ "./node_modules/d3-shape/src/symbol.js":
false,

/***/ "./node_modules/d3-shape/src/symbol/circle.js":
false,

/***/ "./node_modules/d3-shape/src/symbol/cross.js":
false,

/***/ "./node_modules/d3-shape/src/symbol/diamond.js":
false,

/***/ "./node_modules/d3-shape/src/symbol/square.js":
false,

/***/ "./node_modules/d3-shape/src/symbol/star.js":
false,

/***/ "./node_modules/d3-shape/src/symbol/triangle.js":
false,

/***/ "./node_modules/d3-shape/src/symbol/wye.js":
false,

/***/ "./node_modules/d3-time-format/src/defaultLocale.js":
false,

/***/ "./node_modules/d3-time-format/src/index.js":
false,

/***/ "./node_modules/d3-time-format/src/isoFormat.js":
false,

/***/ "./node_modules/d3-time-format/src/isoParse.js":
false,

/***/ "./node_modules/d3-time-format/src/locale.js":
false,

/***/ "./node_modules/d3-time/src/day.js":
false,

/***/ "./node_modules/d3-time/src/duration.js":
false,

/***/ "./node_modules/d3-time/src/hour.js":
false,

/***/ "./node_modules/d3-time/src/index.js":
false,

/***/ "./node_modules/d3-time/src/interval.js":
false,

/***/ "./node_modules/d3-time/src/millisecond.js":
false,

/***/ "./node_modules/d3-time/src/minute.js":
false,

/***/ "./node_modules/d3-time/src/month.js":
false,

/***/ "./node_modules/d3-time/src/second.js":
false,

/***/ "./node_modules/d3-time/src/utcDay.js":
false,

/***/ "./node_modules/d3-time/src/utcHour.js":
false,

/***/ "./node_modules/d3-time/src/utcMinute.js":
false,

/***/ "./node_modules/d3-time/src/utcMonth.js":
false,

/***/ "./node_modules/d3-time/src/utcWeek.js":
false,

/***/ "./node_modules/d3-time/src/utcYear.js":
false,

/***/ "./node_modules/d3-time/src/week.js":
false,

/***/ "./node_modules/d3-time/src/year.js":
false,

/***/ "./node_modules/d3-voronoi/src/Beach.js":
false,

/***/ "./node_modules/d3-voronoi/src/Cell.js":
false,

/***/ "./node_modules/d3-voronoi/src/Circle.js":
false,

/***/ "./node_modules/d3-voronoi/src/Diagram.js":
false,

/***/ "./node_modules/d3-voronoi/src/Edge.js":
false,

/***/ "./node_modules/d3-voronoi/src/RedBlackTree.js":
false,

/***/ "./node_modules/d3-voronoi/src/constant.js":
false,

/***/ "./node_modules/d3-voronoi/src/index.js":
false,

/***/ "./node_modules/d3-voronoi/src/point.js":
false,

/***/ "./node_modules/d3-voronoi/src/voronoi.js":
false,

/***/ "./node_modules/deep-equal/index.js":
false,

/***/ "./node_modules/deep-equal/lib/is_arguments.js":
false,

/***/ "./node_modules/deep-equal/lib/keys.js":
false,

/***/ "./node_modules/global/window.js":
false,

/***/ "./node_modules/performance-now/lib/performance-now.js":
false,

/***/ "./node_modules/raf/index.js":
false,

/***/ "./node_modules/raf/node_modules/performance-now/lib/performance-now.js":
false,

/***/ "./node_modules/randomcolor/randomColor.js":
false,

/***/ "./node_modules/react-motion/lib/Motion.js":
false,

/***/ "./node_modules/react-motion/lib/StaggeredMotion.js":
false,

/***/ "./node_modules/react-motion/lib/TransitionMotion.js":
false,

/***/ "./node_modules/react-motion/lib/mapToZero.js":
false,

/***/ "./node_modules/react-motion/lib/mergeDiff.js":
false,

/***/ "./node_modules/react-motion/lib/presets.js":
false,

/***/ "./node_modules/react-motion/lib/react-motion.js":
false,

/***/ "./node_modules/react-motion/lib/reorderKeys.js":
false,

/***/ "./node_modules/react-motion/lib/shouldStopAnimation.js":
false,

/***/ "./node_modules/react-motion/lib/spring.js":
false,

/***/ "./node_modules/react-motion/lib/stepper.js":
false,

/***/ "./node_modules/react-motion/lib/stripStyle.js":
false,

/***/ "./node_modules/react-vis/es/animation.js":
false,

/***/ "./node_modules/react-vis/es/index.js":
false,

/***/ "./node_modules/react-vis/es/legends/continuous-color-legend.js":
false,

/***/ "./node_modules/react-vis/es/legends/continuous-size-legend.js":
false,

/***/ "./node_modules/react-vis/es/legends/discrete-color-legend-item.js":
false,

/***/ "./node_modules/react-vis/es/legends/discrete-color-legend.js":
false,

/***/ "./node_modules/react-vis/es/legends/searchable-discrete-color-legend.js":
false,

/***/ "./node_modules/react-vis/es/make-vis-flexible.js":
false,

/***/ "./node_modules/react-vis/es/parallel-coordinates/index.js":
false,

/***/ "./node_modules/react-vis/es/plot/axis/axis-line.js":
false,

/***/ "./node_modules/react-vis/es/plot/axis/axis-ticks.js":
false,

/***/ "./node_modules/react-vis/es/plot/axis/axis-title.js":
false,

/***/ "./node_modules/react-vis/es/plot/axis/axis.js":
false,

/***/ "./node_modules/react-vis/es/plot/axis/decorative-axis-ticks.js":
false,

/***/ "./node_modules/react-vis/es/plot/axis/decorative-axis.js":
false,

/***/ "./node_modules/react-vis/es/plot/axis/x-axis.js":
false,

/***/ "./node_modules/react-vis/es/plot/axis/y-axis.js":
false,

/***/ "./node_modules/react-vis/es/plot/borders.js":
false,

/***/ "./node_modules/react-vis/es/plot/chart-label.js":
false,

/***/ "./node_modules/react-vis/es/plot/circular-grid-lines.js":
false,

/***/ "./node_modules/react-vis/es/plot/crosshair.js":
false,

/***/ "./node_modules/react-vis/es/plot/gradient-defs.js":
false,

/***/ "./node_modules/react-vis/es/plot/grid-lines.js":
false,

/***/ "./node_modules/react-vis/es/plot/highlight.js":
false,

/***/ "./node_modules/react-vis/es/plot/hint.js":
false,

/***/ "./node_modules/react-vis/es/plot/horizontal-grid-lines.js":
false,

/***/ "./node_modules/react-vis/es/plot/series/abstract-series.js":
false,

/***/ "./node_modules/react-vis/es/plot/series/arc-series.js":
false,

/***/ "./node_modules/react-vis/es/plot/series/area-series.js":
false,

/***/ "./node_modules/react-vis/es/plot/series/bar-series-canvas.js":
false,

/***/ "./node_modules/react-vis/es/plot/series/bar-series.js":
false,

/***/ "./node_modules/react-vis/es/plot/series/canvas-wrapper.js":
false,

/***/ "./node_modules/react-vis/es/plot/series/contour-series.js":
false,

/***/ "./node_modules/react-vis/es/plot/series/custom-svg-series.js":
false,

/***/ "./node_modules/react-vis/es/plot/series/heatmap-series.js":
false,

/***/ "./node_modules/react-vis/es/plot/series/hexbin-series.js":
false,

/***/ "./node_modules/react-vis/es/plot/series/horizontal-bar-series-canvas.js":
false,

/***/ "./node_modules/react-vis/es/plot/series/horizontal-bar-series.js":
false,

/***/ "./node_modules/react-vis/es/plot/series/horizontal-rect-series-canvas.js":
false,

/***/ "./node_modules/react-vis/es/plot/series/horizontal-rect-series.js":
false,

/***/ "./node_modules/react-vis/es/plot/series/label-series.js":
false,

/***/ "./node_modules/react-vis/es/plot/series/line-mark-series-canvas.js":
false,

/***/ "./node_modules/react-vis/es/plot/series/line-mark-series.js":
false,

/***/ "./node_modules/react-vis/es/plot/series/line-series-canvas.js":
false,

/***/ "./node_modules/react-vis/es/plot/series/line-series.js":
false,

/***/ "./node_modules/react-vis/es/plot/series/mark-series-canvas.js":
false,

/***/ "./node_modules/react-vis/es/plot/series/mark-series.js":
false,

/***/ "./node_modules/react-vis/es/plot/series/polygon-series.js":
false,

/***/ "./node_modules/react-vis/es/plot/series/rect-series-canvas.js":
false,

/***/ "./node_modules/react-vis/es/plot/series/rect-series.js":
false,

/***/ "./node_modules/react-vis/es/plot/series/vertical-bar-series-canvas.js":
false,

/***/ "./node_modules/react-vis/es/plot/series/vertical-bar-series.js":
false,

/***/ "./node_modules/react-vis/es/plot/series/vertical-rect-series-canvas.js":
false,

/***/ "./node_modules/react-vis/es/plot/series/vertical-rect-series.js":
false,

/***/ "./node_modules/react-vis/es/plot/series/whisker-series.js":
false,

/***/ "./node_modules/react-vis/es/plot/vertical-grid-lines.js":
false,

/***/ "./node_modules/react-vis/es/plot/voronoi.js":
false,

/***/ "./node_modules/react-vis/es/plot/xy-plot.js":
false,

/***/ "./node_modules/react-vis/es/radar-chart/index.js":
false,

/***/ "./node_modules/react-vis/es/radial-chart/index.js":
false,

/***/ "./node_modules/react-vis/es/sankey/index.js":
false,

/***/ "./node_modules/react-vis/es/sankey/sankey-link.js":
false,

/***/ "./node_modules/react-vis/es/sunburst/index.js":
false,

/***/ "./node_modules/react-vis/es/theme.js":
false,

/***/ "./node_modules/react-vis/es/treemap/index.js":
false,

/***/ "./node_modules/react-vis/es/treemap/treemap-dom.js":
false,

/***/ "./node_modules/react-vis/es/treemap/treemap-leaf.js":
false,

/***/ "./node_modules/react-vis/es/treemap/treemap-svg.js":
false,

/***/ "./node_modules/react-vis/es/utils/axis-utils.js":
false,

/***/ "./node_modules/react-vis/es/utils/chart-utils.js":
false,

/***/ "./node_modules/react-vis/es/utils/data-utils.js":
false,

/***/ "./node_modules/react-vis/es/utils/react-utils.js":
false,

/***/ "./node_modules/react-vis/es/utils/scales-utils.js":
false,

/***/ "./node_modules/react-vis/es/utils/series-utils.js":
false,

/***/ "./pages/list.js":
/*!***********************!*\
  !*** ./pages/list.js ***!
  \***********************/
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

var _link = _interopRequireDefault(__webpack_require__(/*! next/link */ "./node_modules/next/link.js"));

var _Head = _interopRequireDefault(__webpack_require__(/*! ../components/Head */ "./components/Head.js"));

var _Rank = _interopRequireDefault(__webpack_require__(/*! ../components/Rank */ "./components/Rank.js"));

var _Collection = _interopRequireDefault(__webpack_require__(/*! ../components/Collection */ "./components/Collection.js"));

var _jsxFileName = "/Users/yutin/Studio/tmot/dataopener/pages/list.js";

var Topbar = _styledComponents["default"].div.withConfig({
  displayName: "list__Topbar",
  componentId: "ab95bo-0"
})(["height:20px;"]);

var Title = _styledComponents["default"].div.withConfig({
  displayName: "list__Title",
  componentId: "ab95bo-1"
})(["font-size:1.5em;padding:3px 10px 3px 10px;background:#ffffff;display:inline-block;border-radius:3px;"]);

var Document = _styledComponents["default"].div.withConfig({
  displayName: "list__Document",
  componentId: "ab95bo-2"
})([""]);

var Header = _styledComponents["default"].div.withConfig({
  displayName: "list__Header",
  componentId: "ab95bo-3"
})(["width:100%;background-image:url(\"./static/background.jpg\");background-size:cover;background-position:center center;"]);

var HeaderBackground = _styledComponents["default"].div.withConfig({
  displayName: "list__HeaderBackground",
  componentId: "ab95bo-4"
})(["width:100%;padding-bottom:5%;background-color:rgba(10,10,10,0.6);"]);

var Container = _styledComponents["default"].div.withConfig({
  displayName: "list__Container",
  componentId: "ab95bo-5"
})(["height:100%;display:flex;flex-direction:column;position:relative;"]);

var Main = _styledComponents["default"].div.withConfig({
  displayName: "list__Main",
  componentId: "ab95bo-6"
})(["position:absolute;top:80px;left:0;width:50%;height:calc(100% - 80px);display:flex;flex-direction:column;align-items:flex-start;justify-content:center;"]);

var RankPanel = (0, _styledComponents["default"])(_Rank["default"]).withConfig({
  displayName: "list__RankPanel",
  componentId: "ab95bo-7"
})(["margin-right:0;"]);

var GithubButton = _styledComponents["default"].a.withConfig({
  displayName: "list__GithubButton",
  componentId: "ab95bo-8"
})(["color:#ffffff;padding:5px 0;display:block;&:hover{color:#ffffff;}"]);

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
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "renderList", function () {
      var data = _this.state.data;
      if (!data) return;
      console.log(data);
      return (0, _map2["default"])(data, function (item, idx) {
        return _react["default"].createElement("div", {
          key: "".concat(idx, "-").concat(item["原ID"]),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 93
          },
          __self: this
        }, item["原ID"]);
      });
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
    key: "render",
    value: function render() {
      return _react["default"].createElement(Document, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }, _react["default"].createElement(_Head["default"], {
        title: "\u8CC7\u6599\u7533\u8ACB\u5C0F\u5E6B\u624B",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }), _react["default"].createElement(Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, _react["default"].createElement(HeaderBackground, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }, _react["default"].createElement(Topbar, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }), _react["default"].createElement("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }, _react["default"].createElement(Title, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }, "\u8CC7\u6599\u7533\u8ACB\u5C0F\u5E6B\u624B"), _react["default"].createElement(GithubButton, {
        target: "_blank",
        href: "https://github.com/opengovdatatw/dataopener",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }, "View on GitHub")))), _react["default"].createElement(Container, {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      }, this.renderList()));
    }
  }]);
  return Home;
}(_react["default"].PureComponent);

exports["default"] = Home;

/***/ })

})
//# sourceMappingURL=list.js.6a103670873242f87a7a.hot-update.js.map
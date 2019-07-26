webpackHotUpdate("static/development/pages/list.js",{

/***/ "./components/Collection.js":
false,

/***/ "./components/Sankeys.js":
/*!*******************************!*\
  !*** ./components/Sankeys.js ***!
  \*******************************/
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

var _forEach2 = _interopRequireDefault(__webpack_require__(/*! lodash/forEach */ "./node_modules/lodash/forEach.js"));

var _set2 = _interopRequireDefault(__webpack_require__(/*! lodash/set */ "./node_modules/lodash/set.js"));

var _get2 = _interopRequireDefault(__webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js"));

var _map2 = _interopRequireDefault(__webpack_require__(/*! lodash/map */ "./node_modules/lodash/map.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _recompose = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");

var _styledComponents = _interopRequireDefault(__webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js"));

var _jsxFileName = "/Users/yutin/Studio/tmot/dataopener/components/Sankeys.js",
    _Sankeys;

var replies = ["申請前已對外提供", "同意提供", "不同意提供", "還未回覆"];
var nameColors = ["#aab6fe", "#b2fab4", "#ffa4a2", "#ffe97d"];
var valueColors = ["#49599a", "#519657", "#af4448", "#c88719"];

var Wrapper = _styledComponents["default"].div.withConfig({
  displayName: "Sankeys__Wrapper",
  componentId: "ktwwt9-0"
})(["width:100%;margin:0 auto;flex:1;display:flex;flex-direction:column;"]);

var Item = _styledComponents["default"].div.withConfig({
  displayName: "Sankeys__Item",
  componentId: "ktwwt9-1"
})(["position:relative;flex:1;background-color:rgba(255,255,255,0.6);margin:0 5px;height:", "%;transition-property:height;transition-duration:1s;display:flex;align-items:flex-end;justify-content:center;padding-bottom:20px;font-size:1.2em;color:", ";"], function (_ref) {
  var value = _ref.value;
  return value * 500;
}, function (_ref2) {
  var idx = _ref2.idx;
  return valueColors[idx];
});

var Organizer = _styledComponents["default"].div.withConfig({
  displayName: "Sankeys__Organizer",
  componentId: "ktwwt9-2"
})(["position:absolute;top:-30px;right:0;text-align:right;width:200px;color:#ffffff;"]);

var Sankeys =
/*#__PURE__*/
function (_React$PureComponent) {
  (0, _inherits2["default"])(Sankeys, _React$PureComponent);

  function Sankeys() {
    (0, _classCallCheck2["default"])(this, Sankeys);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Sankeys).apply(this, arguments));
  }

  (0, _createClass2["default"])(Sankeys, [{
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
  return Sankeys;
}(_react["default"].PureComponent);

(0, _defineProperty2["default"])(Sankeys, "propTypes", {
  data: _propTypes["default"].arrayOf(_propTypes["default"].shape({})).isRequired
});

var increase = function increase(result, paths) {
  var value = (0, _get2["default"])(result, paths, 0);
  (0, _set2["default"])(result, paths, value + 1);
};

var schema = {
  column: "0. 政府對民眾申請開放資料的答覆是？",
  value: {
    "申請前已對外提供": {
      children: [{
        column: "A1. 是否為開放資料？",
        value: {
          "開放資料 (跳A3)": {
            display: "是開放資料",
            children: [{
              column: "A3. 是民眾需要的全部還是部分資料？",
              value: {
                "全部資料": {
                  display: "已開放全部"
                },
                "只是部分 (續A4)": {
                  display: "只開放部分",
                  children: [{
                    column: "A4. (續) 目前只提供部分，有說將來要把資料補齊嗎？(填完請填A5)",
                    value: {
                      "將來補齊": {
                        display: "將補齊資料"
                      },
                      "沒說要補齊": {
                        display: "無計劃補齊"
                      }
                    }
                  }, {
                    column: "(續) A5. 目前只提供部分的原因1",
                    value: true
                  }, {
                    column: "(續) A6. 目前只提供部分的原因2",
                    value: true
                  }]
                }
              }
            }]
          },
          "不是開放資料 (續A2)": {
            display: "非開放資料",
            children: [{
              column: "(續) A2. 如果目前非開放資料，有說將來提供開放資料嗎？",
              value: {
                "將來提供": {
                  display: "將改為開放"
                },
                "沒說要提供": {
                  display: "無計劃開放"
                }
              }
            }]
          }
        }
      }]
    },
    "同意提供": {
      children: [{
        column: "B1. 是否有說明具體提供時間，或已回報提供？",
        value: {
          "有說明時間 (續B1a)": {
            display: "提供開放時間表"
          },
          "沒有時間表": {
            display: "沒有開放時間表"
          },
          "已回報提供": {}
        }
      }, {
        column: "B2. 是否提供開放資料？",
        value: {
          "提供開放資料": {
            display: "是開放資料"
          },
          "非提供開放資料": {
            display: "非開放資料"
          }
        }
      }, {
        column: "B3. 是民眾需要的全部還是部分資料？",
        value: {
          "全部資料": {
            display: "已開放全部"
          },
          "只是部分": {
            display: "只開放部分",
            children: [{
              column: "B4. 只提供部分的原因是？",
              value: true
            }]
          }
        }
      }]
    },
    "不同意提供": {
      children: [{
        column: "C1. 不同意開放的原因是1",
        value: true
      }, {
        column: "C2. 不同意開放的原因2",
        value: true
      }, {
        column: "C3. 不同意開放的原因是3",
        value: true
      }]
    }
  }
};

var bind = function bind(item, parent, rule, results) {
  var value = item[rule.column];

  if (rule.value === true) {
    if (value) increase(results, [parent, value]);
    return;
  }

  var target = rule.value[value];
  if (!target) return;
  var display = target.display || value;
  increase(results, [parent, display]);
  (0, _forEach2["default"])(target.children, function (children) {
    bind(item, display, children, results);
  });
};

var _default = (_Sankeys = Sankeys, (0, _recompose.withPropsOnChange)(["data"], function (_ref3) {
  var data = _ref3.data;
  var results = {};
  (0, _forEach2["default"])(data, function (item) {
    var organizer = item["標記用＿派發機關"];
    bind(item, organizer, schema, results);
  });
  console.log(results);
  return {
    data: results
  };
})(_Sankeys));

exports["default"] = _default;

/***/ }),

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

var _Head = _interopRequireDefault(__webpack_require__(/*! ../components/Head */ "./components/Head.js"));

var _Rank = _interopRequireDefault(__webpack_require__(/*! ../components/Rank */ "./components/Rank.js"));

var _Sankeys = _interopRequireDefault(__webpack_require__(/*! ../components/Sankeys */ "./components/Sankeys.js"));

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
      if (!data) return null;
      return _react["default"].createElement(_Sankeys["default"], {
        data: data,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
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
          lineNumber: 95
        },
        __self: this
      }, _react["default"].createElement(_Head["default"], {
        title: "\u8CC7\u6599\u7533\u8ACB\u5C0F\u5E6B\u624B",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }), _react["default"].createElement(Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }, _react["default"].createElement(HeaderBackground, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, _react["default"].createElement(Topbar, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }), _react["default"].createElement("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }, _react["default"].createElement(Title, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, "\u8CC7\u6599\u7533\u8ACB\u5C0F\u5E6B\u624B"), _react["default"].createElement(GithubButton, {
        target: "_blank",
        href: "https://github.com/opengovdatatw/dataopener",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }, "View on GitHub")))), _react["default"].createElement(Container, {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
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
//# sourceMappingURL=list.js.3b1e3ba1857ab94d6a98.hot-update.js.map
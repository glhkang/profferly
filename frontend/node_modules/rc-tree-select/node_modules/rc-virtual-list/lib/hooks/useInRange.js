"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useInRange;

var _react = require("react");

function useInRange(scrollHeight, containerHeight) {
  var scrollHeightRef = (0, _react.useRef)();
  var containerHeightRef = (0, _react.useRef)();
  scrollHeightRef.current = scrollHeight;
  containerHeightRef.current = containerHeight;
  return function (scrollTop) {
    var newTop = Math.max(scrollTop, 0);
    var min = scrollHeightRef.current - containerHeightRef.current;

    if (!Number.isNaN(min)) {
      newTop = Math.min(newTop, min);
    }

    return newTop;
  };
}
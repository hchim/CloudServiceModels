"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Calculate the average value.
 * @param key
 * @param values
 * @returns {number}
 */
var timeMetricReduce = function timeMetricReduce(key, values) {
  var total = Array.sum(values);
  return total / values.length; // average time in ms
};

/**
 * Count the total numbers of values.
 * @param key
 * @param values
 * @returns {*}
 */
var countMetricReduce = function countMetricReduce(key, values) {
  var total = Array.sum(values);
  return total; // times/5m
};

exports.timeMetricReduce = timeMetricReduce;
exports.countMetricReduce = countMetricReduce;
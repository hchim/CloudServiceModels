'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Task = exports.Metric = exports.Monitor = exports.AppInfo = exports.Resource = exports.Suggestion = undefined;

var _AppInfo = require('./AppInfo');

var _AppInfo2 = _interopRequireDefault(_AppInfo);

var _Suggestion = require('./Suggestion');

var _Suggestion2 = _interopRequireDefault(_Suggestion);

var _Resource = require('./Resource');

var _Resource2 = _interopRequireDefault(_Resource);

var _Metric = require('./Metric');

var _Metric2 = _interopRequireDefault(_Metric);

var _Monitor = require('./Monitor');

var _Monitor2 = _interopRequireDefault(_Monitor);

var _Task = require('./Task');

var _Task2 = _interopRequireDefault(_Task);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Suggestion = function Suggestion(conn) {
    return conn.model('Suggestion', _Suggestion2.default);
};

var AppInfo = function AppInfo(conn) {
    return conn.model('AppInfo', _AppInfo2.default);
};

var Resource = function Resource(conn) {
    return conn.model('Resource', _Resource2.default);
};

var Metric = function Metric(conn) {
    return conn.model('Metric', _Metric2.default);
};

var Monitor = function Monitor(conn) {
    return conn.model('Monitor', _Monitor2.default);
};

var Task = function Task(conn) {
    return conn.model('Task', _Task2.default);
};

exports.Suggestion = Suggestion;
exports.Resource = Resource;
exports.AppInfo = AppInfo;
exports.Monitor = Monitor;
exports.Metric = Metric;
exports.Task = Task;
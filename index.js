var appConfigSchema = require('./AppConfig');
var suggSchema = require('./Suggestion');
var appInfoSchema = require('./AppInfo');

exports.AppConfig = function (conn) {
    return conn.model('AppConfig', appConfigSchema);
}

exports.Suggestion = function (conn) {
    return conn.model('Suggestion', suggSchema);
}

exports.AppInfo = function (conn) {
    return conn.model('AppInfo', appInfoSchema);
}
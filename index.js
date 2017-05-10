var appConfigSchema = require('./AppConfig');
var suggSchema = require('./Suggestion');

exports.AppConfig = function (conn) {
    return conn.model('AppConfig', appConfigSchema);
}

exports.Suggestion = function (conn) {
    return conn.model('Suggestion', suggSchema);
}
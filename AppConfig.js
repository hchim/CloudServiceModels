var mongoose = require("mongoose");

var appConfigSchema = mongoose.Schema({
    appName: {
        type: String,
        required: true
    },
    appVersion: {
        type: String,
        required: true
    },
    os: {
        type: String,
        required: true
    },
    createTime: {type: Date, default: Date.now}
});

// indexes
appConfigSchema.index({ appName: 1, appVersion: 1, os: 1});

appConfigSchema.set('autoIndex', true);

// methods

module.exports = appConfigSchema;

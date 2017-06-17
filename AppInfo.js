var mongoose = require("mongoose");

var schema = mongoose.Schema({
    appName: {
        type: String,
        required: true
    },
    platform: {
        type: String,
        required: true
    },
    packageName: String,
    description: String,
    createTime: {type: Date, default: Date.now},
    apiKeys: [{
        sha256Sig: String,
        apiKey: String,
        md5OfAPIKeySig: String
    }]
});

// indexes
schema.index({ appName: 1, packageName: 1});

schema.set('autoIndex', true);

// methods

module.exports = schema;


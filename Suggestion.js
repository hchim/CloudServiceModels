var mongoose = require("mongoose");

var sugSchema = mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    appName: {
        type: String,
        required: true
    },
    appVersion: {
        type: String,
        required: true
    },
    createTime: {type: Date, default: Date.now},
    message: {
        type: String,
        required: true
    },
    device: {
        model: String,
        brand: String,
        serial: String,
    },
    "os": {
        os_name: String,
        sdk_int: Number,
        os_type: String,
        fingerprint: String,
    }
});

// indexes

sugSchema.index({ appName: 1, appVersion: 1, createTime: 1});

sugSchema.set('autoIndex', true);

// methods

module.exports = sugSchema;

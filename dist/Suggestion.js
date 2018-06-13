"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var mongoose = require("mongoose");

var suggestionSchema = mongoose.Schema({
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
    createTime: { type: Date, default: Date.now },
    message: {
        type: String,
        required: true
    },
    device: {
        model: String,
        brand: String,
        serial: String
    },
    "os": {
        os_name: String,
        sdk_int: Number,
        os_type: String,
        fingerprint: String
    }
});

// indexes

suggestionSchema.index({ appName: 1, appVersion: 1, createTime: 1 });

suggestionSchema.set('autoIndex', true);

// methods

exports.default = suggestionSchema;
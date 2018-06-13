"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var mongoose = require("mongoose");

var schema = mongoose.Schema({
    appName: {
        type: String,
        required: true
    },
    resourceName: {
        type: String,
        required: true
    },
    updateTime: {
        type: Date,
        default: Date.now
    },
    resourceType: {
        type: String,
        required: true
    },
    resourceUrl: {
        type: String
    },
    resourceData: {
        type: String
    }
});

// indexes

schema.index({ appName: 1, resourceName: 1, updateTime: 1 });

schema.set('autoIndex', true);

// methods

exports.default = schema;
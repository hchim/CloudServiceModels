'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var mongoose = require("mongoose");
var ObjectId = mongoose.Schema.Types.ObjectId;

var schema = mongoose.Schema({
    _monitor: {
        type: ObjectId,
        ref: 'Monitor'
    },
    scheduledExecuteTime: Date,
    nextExecuteTime: Date,
    status: {
        type: String,
        enum: ['scheduled', 'ready']
    },
    isActive: {
        type: Boolean,
        default: true
    }
});

// indexes

schema.index({ nextExecuteTime: 1 });
schema.set('autoIndex', true);

// methods

exports.default = schema;
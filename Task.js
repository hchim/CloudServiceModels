const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

const schema = mongoose.Schema({
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

schema.index({ nextExecuteTime: 1});
schema.set('autoIndex', true);

// methods

export default schema;
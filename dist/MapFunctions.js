'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * Return the map function that map documents of every 5 minutes to the same key.
 * @param statInterval time in milliseconds
 */
var metric5MMap = function metric5MMap() {
    var key = Math.round(undefined.createTime.getTime() / 300000);
    var val = 1; //error or message
    if (undefined.type === 'time') val = undefined.time;else if (undefined.type === 'count') val = undefined.count;

    emit(key, val);
};

exports.metric5MMap = metric5MMap;
/**
 * Calculate the average value.
 * @param key
 * @param values
 * @returns {number}
 */
const timeMetricReduce = (key, values) => {
    const total = Array.sum(values);
    return total / values.length; // average time in ms
};

/**
 * Count the total numbers of values.
 * @param key
 * @param values
 * @returns {*}
 */
const countMetricReduce = (key, values) => {
    const total = Array.sum(values);
    return total; // times/5m
};

export {timeMetricReduce, countMetricReduce};
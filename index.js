import appInfoSchema from './AppInfo';
import suggestionSchema from './Suggestion';
import resourceSchema from './Resource';
import metricSchema from './Metric';
import monitorSchema from './Monitor';
import taskSchema from './Task';

const Suggestion = (conn) => {
    return conn.model('Suggestion', suggestionSchema);
};

const AppInfo = (conn) => {
    return conn.model('AppInfo', appInfoSchema);
};

const Resource = (conn) => {
    return conn.model('Resource', resourceSchema);
};

const Metric = (conn) => {
    return conn.model('Metric', metricSchema);
};

const Monitor = (conn) => {
    return conn.model('Monitor', monitorSchema);
};

const Task = (conn) => {
    return conn.model('Task', taskSchema);
};

export {Suggestion, Resource, AppInfo, Monitor, Metric, Task};

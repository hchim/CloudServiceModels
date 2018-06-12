import appInfoSchema from './AppInfo';
import suggestionSchema from './Suggestion';
import resourceSchema from './Resource';

const Suggestion = (conn) => {
    return conn.model('Suggestion', suggestionSchema);
};

const AppInfo = (conn) => {
    return conn.model('AppInfo', appInfoSchema);
};

const Resource = (conn) => {
    return conn.model('Resource', resourceSchema);
};

export {Suggestion, Resource, AppInfo};

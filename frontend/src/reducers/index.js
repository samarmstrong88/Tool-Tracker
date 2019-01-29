// import packages to combine reducers
import { combineReducers } from 'redux';

// import reducers to combine
import jobFilters from './jobFilters';
import testFilter from './testFilter';
import jobs from './jobs';

const rootReducer = combineReducers({ jobFilters, testFilter, jobs }); // same as jobFilters: jobFilters...

// export the rootReducer
export default rootReducer;

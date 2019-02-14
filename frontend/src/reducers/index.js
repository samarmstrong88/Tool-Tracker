// import package to combine reducers
import { combineReducers } from 'redux';

// import reducers to combine
import jobFilters from './jobFilters';
import testFilter from './testFilter';
import jobs from './jobs';
import job from './job';
import clients from './clients';

const rootReducer = combineReducers({
  jobFilters,
  testFilter,
  jobs,
  job,
  clients,
}); // same as jobFilters: jobFilters...

// export the rootReducer
export default rootReducer;

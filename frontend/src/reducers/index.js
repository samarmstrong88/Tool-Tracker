// import package to combine reducers
import { combineReducers } from 'redux';

// import reducers to combine
import jobFilters from './jobFilters';
import jobs from './jobs';
import job from './job';
import clients from './clients';
import client from './client';
import userData from './signIn';
import loadingStates from './loadingStates';

const rootReducer = combineReducers({
  jobFilters,
  jobs,
  job,
  clients,
  client,
  userData,
  loadingStates,
});
// export the rootReducer
export default rootReducer;

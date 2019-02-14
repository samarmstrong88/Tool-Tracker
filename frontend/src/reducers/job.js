const initalRequestJobState = {
  jobRequestLoading: false,
  jobRequestError: {},
  jobData: [],
};

const job = (state = initalRequestJobState, action) => {
  switch (action.type) {
    case 'JOB_REQUEST_IN_PROGRESS':
      return { ...state, jobRequestLoading: true };
    case 'JOB_REQUEST_ERROR':
      return {
        ...state,
        jobRequestLoading: false,
        jobRequestError: action.error,
      };
    case 'JOB_REQUEST_SUCCESS':
      return {
        ...state,
        jobRequestLoading: false,
        jobData: action.jobRequestData,
      };
    default:
      return state;
  }
};

export default job;

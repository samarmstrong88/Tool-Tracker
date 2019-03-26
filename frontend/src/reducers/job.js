const initalRequestJobState = {
  jobData: [],
};

const job = (state = initalRequestJobState, action) => {
  switch (action.type) {
    case 'JOB_REQUEST_SUCCESS':
      return {
        ...state,
        jobData: action.jobRequestData,
      };
    default:
      return state;
  }
};

export default job;

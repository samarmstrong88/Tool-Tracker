const initalRequestJobsState = {
  all: [],
};

const jobs = (state = initalRequestJobsState, action) => {
  switch (action.type) {
    case 'JOBS_REQUEST_SUCCESS':
      return {
        ...state,
        all: action.jobs,
      };
    default:
      return state;
  }
};

export default jobs;

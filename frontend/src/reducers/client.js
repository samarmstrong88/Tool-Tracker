const initalRequestClientState = {};

const client = (state = initalRequestClientState, action) => {
  switch (action.type) {
    case 'CLIENT_REQUEST_SUCCESS':
      return {
        ...state,
        ...action.client,
      };
    default:
      return state;
  }
};

export default client;

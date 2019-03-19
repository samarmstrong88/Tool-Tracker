const initalRequestClientState = {
  clientRequestLoading: false,
  clientRequestError: {},
  client: [],
};

const client = (state = initalRequestClientState, action) => {
  switch (action.type) {
    case 'CLIENT_REQUEST_IN_PROGRESS':
      return { ...state, clientRequestLoading: true };
    case 'CLIENT_REQUEST_ERROR':
      return {
        ...state,
        clientRequestLoading: false,
        clientRequestError: action.error,
      };
    case 'CLIENT_REQUEST_SUCCESS':
      return {
        ...state,
        clientRequestLoading: false,
        client: action.client,
      };
    default:
      return state;
  }
};

export default client;

const initalRequestClientsState = {
  clientsRequestLoading: false,
  clientsRequestError: {},
  clients: [],
};

const clients = (state = initalRequestClientsState, action) => {
  switch (action.type) {
    case 'CLIENTS_REQUEST_IN_PROGRESS':
      return { ...state, clientsRequestLoading: true };
    case 'CLIENTS_REQUEST_ERROR':
      return {
        ...state,
        clientsRequestLoading: false,
        clientsRequestError: action.error,
      };
    case 'CLIENTS_REQUEST_SUCCESS':
      return {
        ...state,
        clientsRequestLoading: false,
        clients: action.clients,
      };
    default:
      return state;
  }
};

export default clients;

const initalRequestClientsState = {
  all: [],
};

const clients = (state = initalRequestClientsState, action) => {
  switch (action.type) {
    case 'CLIENTS_REQUEST_SUCCESS':
      return {
        ...state,
        all: action.clients,
      };
    default:
      return state;
  }
};

export default clients;

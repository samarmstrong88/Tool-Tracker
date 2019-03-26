const loadingStates = (state = {}, action) => {
  //split action type into individual words, and take the last one to switch on
  const actionSplit = action.type.split('_');
  const actionType = actionSplit[actionSplit.length - 1];
  //take the first word as the name of the reducer that is being called
  const reducerType = actionSplit[0].toLowerCase();

  switch (actionType) {
    case 'PROGRESS':
      return {
        ...state,
        [reducerType + 'RequestLoading']: true,
      };
    case 'ERROR':
      return {
        ...state,
        [reducerType + 'RequestLoading']: false,
        [reducerType + 'RequestError']: action.error,
      };
    case 'SUCCESS':
      return {
        ...state,
        [reducerType + 'RequestLoading']: false,
      };
    default:
      return state;
  }
};

export default loadingStates;

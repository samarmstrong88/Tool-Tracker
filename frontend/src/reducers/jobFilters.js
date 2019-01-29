// Take in an action from the actionCreator
// Will always fire! Only changes state when type matches the switch statement
const initialJobFilterState = {
  status_filter: [],
  cat_filter: 'all',
};

const jobFilters = (state = initialJobFilterState, action) => {
  switch (action.type) {
    case 'UPDATE_JOB_STATUS_FILTER':
      // if status exists in array, then remove it and return the new state (immutably)
      const index = state.status_filter.indexOf(action.statusFilter);
      if (index > -1) {
        // if status is in status array
        return {
          ...state,
          status_filter: [
            ...state.status_filter.slice(0, index),
            ...state.status_filter.slice(index + 1),
          ],
        };
      }

      // if status doesn't exist, then add it (immutably) and return the new state
      return {
        ...state,
        status_filter: [...state.status_filter, action.statusFilter],
      };

    case 'UPDATE_JOB_CAT_FILTER':
      // updates state to change the category filter (immutably)
      return { ...state, cat_filter: action.catFilter };
    default:
      return state;
  }
};

export default jobFilters;

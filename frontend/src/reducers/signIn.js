import jwt from 'jsonwebtoken';

const initialRequestSignInState = {
  authToken: '',
  userId: '',
  loggedIn: null,
};

const userData = (state = initialRequestSignInState, action) => {
  switch (action.type) {
    case 'SIGNIN_REQUEST_SUCCESS':
      return {
        ...state,
        userId: action.userId,
        username: action.username,
        loggedIn: true,
      };

    case 'SIGNOUT_REQUEST_SUCCESS':
      return {
        ...state,
        userId: null,
        username: null,
        loggedIn: false,
      };
    default:
      return state;
  }
};

export default userData;

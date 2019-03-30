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
    case 'CHECK_LOGIN':
      return {
        ...state,
        loggedIn: action.loggedIn,
        userId: action.userId ? action.userId : '',
        username: action.username ? action.username : '',
      };
    default:
      return state;
  }
};

export default userData;

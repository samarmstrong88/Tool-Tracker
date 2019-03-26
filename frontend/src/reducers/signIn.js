import jwt from 'jsonwebtoken';

const initialRequestSignInState = {
  authToken: '',
  userId: '',
  loggedIn: false,
};

const userData = (state = initialRequestSignInState, action) => {
  switch (action.type) {
    case 'SIGNIN_REQUEST_SUCCESS':
      const decoded = jwt.decode(action.token);
      return {
        ...state,
        authToken: action.token,
        userId: decoded.id,
        loggedIn: true,
      };
    default:
      return state;
  }
};

export default userData;

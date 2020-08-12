import {
  HANDLE_SIGNUP_REQUEST,
  HANDLE_SIGNUP_SUCCESS,
  HANDLE_SIGNUP_ERROR,
} from './ActionTypes';

const initialState = {
  user: {
    username: null,
    given_name: null,
    password: null,
    confirmPassword: null,
    birthdate: null,
    email: null,
    gender: null,
    confirmationCode: null,
    modalVisible: false,
  },
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case HANDLE_SIGNUP_SUCCESS:
      return {
        ...state.user,
        /* username: action.payload.value,
        given_name: action.payload.value,
        password: action.payload,
        confirmPassword: action.payload,
        birthdate: action.payload,
        email: 'test@gmail.com',
        gender: 'male',
         */
      };
    case HANDLE_SIGNUP_ERROR:
      return {
        ...state.user,
        username: null,
        given_name: null,
        password: null,
        confirmPassword: null,
        birthdate: null,
        email: null,
        gender: null,
      };
    case HANDLE_SIGNUP_REQUEST:
      return {
        username: null,
        given_name: null,
        password: null,
        confirmPassword: null,
        birthdate: null,
        email: null,
        gender: null,
        ...state.user,
      };
    default:
      return state.user;
  }
};

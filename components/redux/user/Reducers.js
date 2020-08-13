import {
  HANDLE_SIGNUP_REQUEST,
  HANDLE_SIGNUP_SUCCESS,
  HANDLE_SIGNUP_ERROR,
} from './ActionTypes';

const initialState = {
  username: null,
  given_name: null,
  password: null,
  confirmPassword: null,
  birthdate: null,
  email: null,
  gender: null,
  confirmationCode: null,
};

export const userReducer = (state = initialState, action) => {
  console.log(action.payload);
  switch (action.type) {
    case HANDLE_SIGNUP_SUCCESS:
      return {
        ...state,
        username: action.payload.username,
        given_name: action.payload.given_name,
        password: action.payload.password,
        confirmPassword: action.payload.password,
        birthdate: action.payload.birthdate,
        email: action.payload.email,
        gender: action.payload.gender,
      };

    case HANDLE_SIGNUP_ERROR:
      return {
        ...state,
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
        ...state,
      };
    default:
      return {...state};
  }
};

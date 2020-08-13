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
  switch (action.type) {
    case HANDLE_SIGNUP_SUCCESS:
      return {
        ...state,
        username: action.payload.value,
        given_name: action.payload.value,
        password: action.payload.value,
        confirmPassword: action.payload.value,
        birthdate: action.payload.value,
        email: action.payload.value,
        gender: action.payload.value,
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

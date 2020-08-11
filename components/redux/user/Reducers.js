import {
  HANDLE_SIGNUP_REQUEST,
  HANDLE_SIGNUP_SUCCESS,
  HANDLE_SIGNUP_ERROR,
} from './ActionTypes';

const initialState = {
  username: '',
  given_name: '',
  password: '',
  confirmPassword: '',
  birthdate: '',
  email: '',
  gender: '',
  confirmationCode: '',
  modalVisible: false,
};

export const rootReducer = (state = initialState, action) => {
  console.log(state, action);
  switch (action.type) {
    case HANDLE_SIGNUP_SUCCESS:
      return {
        ...state,
        username: '',
        given_name: '',
        password: '',
        confirmPassword: '',
        birthdate: '',
        email: '',
        gender: '',
        modalVisible: false,
      };
    case HANDLE_SIGNUP_ERROR:
      return {...state};
    case HANDLE_SIGNUP_REQUEST:
      return {...state};
  }
  return state;
};

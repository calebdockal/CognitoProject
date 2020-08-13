import {
  HANDLE_SIGNUP_SUCCESS,
  HANDLE_SIGNUP_ERROR,
  HANDLE_SIGNUP_REQUEST,
} from './ActionTypes';
import 'crypto-js/lib-typedarrays';
import 'amazon-cognito-identity-js';

export const handleSignUpSuccess = (value) => ({
  type: HANDLE_SIGNUP_SUCCESS,
  payload: value,
});

export const handleSignUpRequest = () => ({
  type: HANDLE_SIGNUP_REQUEST,
});

export const handleSignUpError = () => ({
  type: HANDLE_SIGNUP_ERROR,
  // payload: value,
});

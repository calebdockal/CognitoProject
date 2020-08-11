import {
  HANDLE_SIGNUP_SUCCESS,
  HANDLE_SIGNUP_ERROR,
  HANDLE_SIGNUP_REQUEST,
} from '../user/ActionTypes';
import {Auth} from 'aws-amplify';
import 'crypto-js/lib-typedarrays';
import 'amazon-cognito-identity-js';

export const HANDLE_SIGNUP_SUCCESS_Function = () => ({
  type: HANDLE_SIGNUP_SUCCESS,
});
export const HANDLE_SIGNUP_REQUEST_Function = () => ({
  type: HANDLE_SIGNUP_REQUEST,
});
export const HANDLE_SIGNUP_ERROR_Function = () => ({type: HANDLE_SIGNUP_ERROR});

export function handleSignUp() {
  // console.log('what is going on?');
  return (dispatch) => {
    try {
      dispatch({type: 'HANDLE_SIGNUP_REQUEST'});
      if (password === confirmPassword) {
        Auth.signUp({
          username: email,
          password,
          attributes: {
            given_name,
            email,
            birthdate,
            gender,
          },
        }).then((res) => dispatch({type: 'HANDLE_SIGNUP_SUCCESS'}));
        console.log('all good here');
      } else {
        console.log('nope');
        alert('Passwords do not match.');
      }
    } catch (error) {
      dispatch({type: 'HANDLE_SIGNUP_ERROR'});
    }
  };
}

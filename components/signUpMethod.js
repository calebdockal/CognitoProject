import {Auth} from 'aws-amplify';
import {
  handleSignUpSuccess,
  handleSignUpError,
  handleSignUpRequest,
} from './redux/user/Actions';
import configureStore from './redux/user/Store';

signUpMethod = (
  username,
  email,
  password,
  given_name,
  birthdate,
  gender,
  signUpCallbackFunction,
  confirmPassword,
) => {
  try {
    configureStore.dispatch(handleSignUpRequest());
    
    console.log('Username is', username, 'Email', email);
    Auth.signUp({
      username: email,
      password,
      attributes: {
        given_name,
        email,
        birthdate,
        gender,
      },
    })
      .then((result) => {
        let value = {
          username: email,
          given_name: given_name,
          birthdate: birthdate,
          email: email,
          gender: gender,
          password: password,
          confirmPassword: password,
        };

        signUpCallbackFunction(true);

        configureStore.dispatch(handleSignUpSuccess(value));
      })
      .catch((err) => console.log(err));
  } catch (error) {
    configureStore.dispatch(handleSignUpError());
  }
};
export default signUpMethod;

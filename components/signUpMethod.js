import {Auth} from 'aws-amplify';
import {
  handleSignUpSuccess,
  handleSignUpError,
  handleSignUpRequest,
} from './redux/user/Actions';
import configureStore from './redux/user/Store';

signUpMethod = () => {
  handleSignUpRequest();
  const {email, password} = this.state;
  Auth.signUp({
    username: email,
    password: password,
    attributes: {
      given_name,
      email,
      birthdate,
      gender,
    },
  });
};

export default signUpMethod;

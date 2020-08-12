import {Auth} from 'aws-amplify';
import {
  handleSignUpSuccess,
  handleSignUpError,
  handleSignUpRequest,
} from './redux/user/Actions';
import configureStore from './redux/user/Store';

signUpMethod = (username, email, password, given_name, birthdate, gender) => {
  try {
    configureStore.dispatch(handleSignUpRequest());
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
      .then(() => this.setState({modalVisible: true}))
      .catch((err) => console.log(err));
  } finally {
    configureStore.dispatch(handleSignUpSuccess());
  }
};
export default signUpMethod;

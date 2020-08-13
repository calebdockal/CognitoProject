import {createStore} from 'redux';
import {userReducer} from './Reducers';

const configureStore = createStore(userReducer);

export default configureStore;

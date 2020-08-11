import {createStore, combineReducers} from 'redux';

import {userReducer} from './Reducers';
import {useReducer} from 'react';

const rootReducer = combineReducers({
  state: userReducer,
});

const configureStore = () => {
  return createStore(rootReducer);
};

export default configureStore;

//import { persistStore, persistReducer} from 'redux-persist';
//import AsyncStorage from '@react-native-community/async-storage';
//import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

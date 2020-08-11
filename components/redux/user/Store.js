import {createStore, combineReducers} from 'redux';

import {userReducer} from './Reducers';
import {useReducer} from 'react';
import {State} from 'react-native-gesture-handler';

const rootReducer = combineReducers({
  null: userReducer,
});
console.log('use reduce combined');

const configureStore = () => {
  return createStore(rootReducer);
  console.log();
  console.log({createStore});
};

export default configureStore;
console.log('passed');

//import { persistStore, persistReducer} from 'redux-persist';
//import AsyncStorage from '@react-native-community/async-storage';
//import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

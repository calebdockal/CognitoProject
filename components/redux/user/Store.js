import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {rootReducer} from './Reducers';

export const store = createStore(rootReducer, applyMiddleware(thunk));

//import { persistStore, persistReducer} from 'redux-persist';
//import AsyncStorage from '@react-native-community/async-storage';
//import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
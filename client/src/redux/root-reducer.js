import { combinedReducers, combineReducers } from 'redux';

import modalReducer from './Modal/modal.reducer';


export default combineReducers({
    modal : modalReducer
})
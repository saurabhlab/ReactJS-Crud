import {combineReducers} from 'redux';

import GetCustomer from './reducer_get';
import {reducer as formReducer} from 'redux-form';

import GetOneCustomer from './GetOneReducer';

const rootReducer = combineReducers({
    
    getdata: GetCustomer,
    form: formReducer,
    getonecustomer: GetOneCustomer

});

export default rootReducer;  
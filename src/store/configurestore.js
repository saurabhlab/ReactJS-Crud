
import reduximmutablestateinvariant from "redux-immutable-state-invariant";

import { createStore, applyMiddleware } from "redux";

import Reducers from "../reducer";

import promise from 'redux-promise';


export default function ConfigureStore(initialestate){
    return createStore(
    Reducers,
    initialestate,
    applyMiddleware(reduximmutablestateinvariant(),promise)
    );
}




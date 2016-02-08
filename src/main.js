import React from 'react';
import ReactDOM from 'react-dom';
//import {Promise} from 'es6-promise';
import {applyMiddleware, createStore} from 'redux';
import {Provider} from 'react-redux';
import promiseMiddleware from 'redux-promise-middleware';
import MainContainer from './containers/MainContainer';
import ActionTypes from './ActionTypes';
//import Immutable from 'immutable';

const initialState = {name: 'Lucy', age: 30, sex: 'female'};

function deleteData() {
    return {name: 'Bob', age: 20, sex: 'male'};
}

function mainReducer(state = initialState, {type, payload}) {
    switch (type) {
        case ActionTypes.DELETE_DATA:
            return deleteData();
        case ActionTypes.UPDATE_DATA:
            return {name: payload, age: state.age, sex: state.sex};
        default:
            return state;
    }
}

let store = createStore(mainReducer, initialState, applyMiddleware(promiseMiddleware()));

ReactDOM.render(
    <Provider store={store}><MainContainer/></Provider>, document.getElementById('react-app')
);


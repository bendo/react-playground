import './main.css';
import $j from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
// import {Promise} from 'es6-promise';
import {applyMiddleware, createStore} from 'redux';
import {Provider} from 'react-redux';
import promiseMiddleware from 'redux-promise-middleware';
import Hello from './components/Hello';
import ActionTypes from './ActionTypes';
import Immutable from 'immutable';

let mainData = {name: 'alice', age: '33', sex: 'woman'};

const initialState = Immutable.fromJS({
  mainData: []
});

function updateData(data) {
  mainData.name = data.ref.name.value;
  mainData.age = data.ref.age.value;
  mainData.sex = data.ref.sex.value;
}

function deleteData() {
  mainData = Immutable.List();
}

function mainReducer(state, {type, payload}) {
  switch (type) {
    case ActionTypes.UPDATE_DATA:
      return updateData(state);
    case ActionTypes.DELETE_DATA:
      return deleteData(payload);
    default:
      return state;
  }
}

let reduxStore = createStore(mainReducer, initialState, applyMiddleware(promiseMiddleware()));

$j(function () {
  ReactDOM.render(<Provider store={reduxStore}><Hello/></Provider>, $j('#react-app')[0]);
});

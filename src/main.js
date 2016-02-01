import './main.css';
import $j from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './components/Hello';
import ActionTypes from './ActionTypes';
import Immutable from 'immutable';
import f from './util/f';

let mainData = {};

let listeners = Immutable.List();

const store = {
  addListener: (callback) => listeners = listeners.push(callback),

  removeListener: (callback) => listeners = listeners.remove(listeners.indexOf(callback)),

  getState: () => mainData
};

function storeChanged() {
  listeners.map(f.call);
}

function updateData(data) {
  mainData.name = data.ref.name.value;
  mainData.age = data.ref.age.value;
  mainData.sex = data.ref.sex.value;
}

function deleteData() {
  mainData = {};
}

function dispatch({type, data}) {
  switch (type) {
    case ActionTypes.UPDATE_DATA:
      updateData(data);
      storeChanged();
      break;
    case ActionTypes.DELETE_DATA:
      deleteData(data);
      storeChanged();
      break;
  }
}

function load() {
  mainData = {name: 'alice', age: '33', sex: 'woman'};
  ReactDOM.render(<Hello store={store} dispatch={dispatch}/>, $j('#react-app')[0]);
}

$j(function () {
  load();
});

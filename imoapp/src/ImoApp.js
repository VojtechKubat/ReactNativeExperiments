/**
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';          // importing index.js, so it is not necessary to specify the filename

import Router from './Router';
 
import Header from './components/common/Header';
import ThreadList from './components/ThreadList';

export default class ImoApp extends Component<{}> {
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <Router />
      </Provider>
    );
  }
}
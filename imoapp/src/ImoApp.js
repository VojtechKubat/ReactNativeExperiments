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

import Header from './components/common/Header';
import ThreadList from './ThreadList';

const styles = StyleSheet.create({
    container: {
      flex: 1 ,
      // justifyContent: 'center',
      // alignItems: 'center',
      height: '100%',
      width: '100%',
      backgroundColor: '#F5FCFF',  
    }
});

export default class ImoApp extends Component<{}> {
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Header headerTitle="ImoApp" />
          
        </View>
      </Provider>
    );
  }
}
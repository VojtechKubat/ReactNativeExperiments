/**
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import Header from './Base/Header';
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
      <View>
        <Header headerTitle="ImoApp" />
        <ThreadList />
      </View>
    );
  }
}
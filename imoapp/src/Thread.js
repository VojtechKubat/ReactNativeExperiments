/**
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

type ThreadProps = {
    album: any,
};

// type ThreadState = {};

class Thread extends Component<ThreadProps> {
  render() {
    return (
      <View>
          <Text>{this.props.album.title}</Text>
      </View>
    );
  }
}

export default Thread;
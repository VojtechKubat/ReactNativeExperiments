/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import { Thread } from 'react-native-threads';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {

  state = { messages: [], count: 0 }

  threads = [];

  workerThread = null;

  componentDidMount() {
    this.workerThread = new Thread('./worker.thread.js');
    this.workerThread.onmessage = this.handleMessage;
  }

  createThread() {
    var th = new Thread('./worker.thread.js');
    th.onmessage = this.handleMessage;
    this.threads.push(th);

    this.setState(state => {
      return { count: this.state.count+1 };
    });
  }

  componentWillUnmount() {
    this.workerThread.terminate();
    this.workerThread = null;

    for (var i=0; i < this.threads.length; i++) {
      this.threads[i].terminate();
      this.threads[i] = null;
    }
  }

  handleMessage = message => {

    this.setState(state => {
      return { messages: [...state.messages, message] };
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          Count of threads = {this.state.count}
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
        <Button title="Create thread" onPress={() => {
          // this.workerThread.postMessage('Hello')
          this.createThread();
        }} />
        <Button title="Send msg to all" onPress={() => {
          for (var i=0; i < this.threads.length; i++) {
            this.threads[i].postMessage('Hello');
          }
        }} />
        <Button title="Terminate and clear all" onPress={() => {
          for (var i=0; i < this.threads.length; i++) {
            this.threads[i].terminate();
            this.threads[i] = null;
          }
          this.threads = [];
          this.setState(state => {
            return { messages: [], count: 0 };
          });
        }} />

        <View>
          <Text>Messages:</Text>
          {this.state.messages.map((message, i) => <Text key={i}>{message}</Text>)}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

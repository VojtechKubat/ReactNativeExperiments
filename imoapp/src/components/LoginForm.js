/**
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput
} from 'react-native';


const styles = StyleSheet.create({
    container: {
      flex: 1 ,
      padding: 15
    },
    textField: {
      height: 40, 
      borderColor: '#cccccc',
      backgroundColor: '#fff',
      borderWidth: 1,
      borderRadius: 10,
      padding: 10,
      marginBottom: 10,
      marginTop: 10
    }
});

export default class LoginForm extends Component<{}> {

  login() {

  }

  render() {
    return (
        <View style={styles.container}>
            <Text>Login screen</Text>
            <TextInput
              style={styles.textField}
              placeholder="Company password"
            />
            <Button 
            onPress={this.login}
            title="Login"
            />
        </View>
    );
  }
}
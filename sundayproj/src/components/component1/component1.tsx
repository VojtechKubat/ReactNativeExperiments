import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableHighlight
} from 'react-native';

import { AppRegistry } from 'react-native';

export interface MyProps {        // there needs to be defined interface of all properties
                                // it has to be exported, so parent typescript object knows its type
    message: string;
}

export interface MyState {
    name: string;
    description: string;
}

export default class Component1 extends Component<MyProps, MyState> {   // interfaces are passed to the component

    state = { name: 'default state', description: 'n/a' };          // define default state before its first use

    constructor (props: MyProps, state: MyState) {
        super(props, state);
    }

    static defaultProps: MyProps = {
        message : "n/a"
    }

    tapped() {
        console.log("button tapped");
    }

    render() {
        return (
            <View>
                <Text style={styles.welcome}>
                Comp1 prop - {this.props.message}
                </Text>
                
                <Text style={styles.welcome}>
                    Comp1 state - {this.state.name}
                </Text>
                <Button title="Click me" onPress={this.tapped}/>
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
  });
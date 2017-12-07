import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';


export interface MyProps {
}

export interface MyState {
    currentText: string;
}

export default class MyTextfield extends Component<MyProps, MyState> {   // interfaces are passed to the component

    state = {
        currentText : "n/a"
    };          // define default state before its first use

    constructor (props: MyProps, state: MyState) {
        super(props, state);
    }

    static defaultProps: MyProps = {
        // message : "n/a"
    }

    printText(input:string) {
        console.log(input);
        // this.state.currentText = input;          // this won't refresh the bounded text area
        this.setState({
            currentText : input
        });
    }

    render() {
        return (
            <View>
               <TextInput 
                style = {styles.textfield}
                placeholder = "Type in something"
                onSubmitEditing = {(event) => this.printText(event.nativeEvent.text)}
               />

               <Text>{this.state.currentText}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    textfield: {
    //   flex: 1,
    //   justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'skyblue',
      padding : 30
    }
  });

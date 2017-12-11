import React, { Component } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { Card, CardSection, Spinner } from './common';

export default class CreateThread extends Component {

    constructor(props) {
        super(props);

        this.state = {
            showText: true,
            threadTitle: "",
            threadFirstComment: "",
            processing: false
        };

    
        // Toggle the state every second
        setInterval(() => {
          this.setState(previousState => {
            return { showText: !previousState.showText };
          });
        }, 1000);
        
    }

    onButtonPress(){
        const { threadTitle, threadFirstComment } = this.state;
        this.setState({ processing: true });
    }

    renderButton(){
        if (this.state.processing) {
            return ( <Spinner size='small'/> );
        }

        return (
            <Button 
                title="Create"
                onPress={this.onButtonPress.bind(this)}/>
        );
    }

    render () {
        let display = this.state.showText ? "Hello - state is on" : ' ';
        return (       
             <Card>
                <CardSection>
                    <Text style={styles.title}>Thread title</Text>
                    <TextInput
                    style={styles.textField}
                    placeholder="At lest 4 charcters"
                    />
                    <Text>{display}</Text>
                </CardSection>

                <CardSection>
                    <Text style={styles.title}>First comment</Text>
                    <TextInput
                    style={styles.textField}
                    placeholder="At lest 4 charcters"
                    />
                </CardSection>

                {/* <CardSection style={{ height: 50 }}> */}
                    {this.renderButton()}
                        {/* ther is 'bind' because it is called asynchronously, so we pass 'this' and the current state of 'this' to the helper function - the function will get a kind of snapshot of the state in the time, when the button is pressed - atomicity */}
                {/* </CardSection> */}
            </Card>  
        );
    }
}

const styles = {
    title: {
        marginBottom: 5,
        fontSize: 20
    },
    textField: {
        padding: 5,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 5,
        fontSize: 15,
        marginTop: 20,
        marginBottom: 20
    }
  };
import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import { Card, CardSection } from './common';

export default class CreateThread extends Component {
    render () {
        return (
            
             <Card>
                <CardSection>
                    <Text>Thread title</Text>
                    <TextInput
                    placeholder="At lest 4 charcters"
                    />
                </CardSection>

                <CardSection>
                    <Text>Hello</Text>
                </CardSection>

                <CardSection>
                    <Text>Hello</Text>
                </CardSection>
            </Card>  
        );
    }
}
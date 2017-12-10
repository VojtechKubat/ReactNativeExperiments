import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { CardSection } from './common/CardSection';
import { Card } from './common/Card';

class ListItem extends Component {

    render () {
        return (
            <Card>
                <CardSection>
                    <Text style={styles.title}>{this.props.thread.title}</Text>
                </CardSection>
                <CardSection>
                    <Text>{this.props.thread.op}</Text>
                </CardSection>
            </Card>
        );
    }
}

const styles = StyleSheet.create({
    title: {
        fontSize: 30
    }
});

export default ListItem
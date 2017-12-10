import React, { Component } from 'react';
import { 
    View, 
    Text, 
    TouchableWithoutFeedback,
    StyleSheet 
} from 'react-native';
import * as actions from '../actions/index.js';    // import everything from /actions/index.js, and put it into 'actions' variable
import { connect } from 'react-redux';

import { CardSection } from './common/CardSection';
import { Card } from './common/Card';

class ListItem extends Component {

    // threadSelect() {
    //     console.log('Hello world');
    //     this.props.selectThread(1);
    // }

    render () {
        const { id, title } = this.props.thread;

        return (
            <TouchableWithoutFeedback
                onPress={() => {
                    this.props.selectThread(id);
                }}>
                {/* <Card> */}
                <View style={styles.item}>
                    <CardSection>
                        <Text style={styles.title}>{title}</Text>
                    </CardSection>
                    <CardSection>
                        <Text>{this.props.thread.op}</Text>
                    </CardSection>
                </View>
                {/* </Card> */}
            </TouchableWithoutFeedback>
        );
    }
}

const styles = StyleSheet.create({
    title: {
        fontSize: 30
    },
    item: {
        marginTop: 10,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 20,
        paddingBottom: 20,
        // padding: 10,
        backgroundColor: '#ffff'
    }
});

export default connect(null, actions)(ListItem);        // connect binds the actions to the component itself, all actions are available props.selectThread
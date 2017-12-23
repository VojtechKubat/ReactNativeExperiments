import React, { Component } from 'react';
import { 
    View, 
    Text, 
    TouchableWithoutFeedback,
    StyleSheet 
} from 'react-native';
import * as AllActions from '../actions/index.js';    // import everything from /actions/index.js, and put it into 'actions' variable
import { Actions } from 'react-native-router-flux';   // Actions from router
import { connect } from 'react-redux';

import { CardSection } from './common/CardSection';
import { Card } from './common/Card';

class ListItem extends Component {

    // threadSelect() {
    //     console.log('Hello world');
    //     this.props.selectThread(1);
    // }

    selectThread() {
        const { id, title } = this.props.thread;

        console.log(">>> id: " + id);
        console.log(">>> title: " + title);

        this.props.selectThread(id);            // redux action sets selected id

        Actions.screenThread();
        
    }

    render () {
        const { id, title } = this.props.thread;

        return (
            <TouchableWithoutFeedback
                onPress={this.selectThread.bind(this)}>
                {/* <Card> */}
                <View style={styles.item}>
                    <CardSection>
                        <Text style={styles.title}>{title}</Text>
                    </CardSection>
                    <CardSection>
                        <Text>{this.props.thread.op}</Text>
                        {/* it is acessible from props, because of "connect" called on the last line of this file */}
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

export default connect(null, AllActions)(ListItem);        
// 1) connect binds AllActions (all action creators) to the component itself, 
//      because of this, the generated action is passed to all reducers !!!
// 2) all actions (action creators) are available props.selectThread

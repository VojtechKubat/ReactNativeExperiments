import React, { Component } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { connect } from 'react-redux';
import * as AllActions from '../actions/index.js';


// class ListItem extends Component {
class ScreenThread extends Component {

    constructor(props) {
        super(props);
    };

    render () {

        let title = "n/a";
        let id = this.props.selectedId;

        const thread = this.props.allThreads.filter( thread => thread.id === id );

        if (typeof thread !== 'undefined' && thread.constructor === Array) {
            title = thread[0].title;
        }

        return (
            <View>
                <Text>This is screen thread</Text>
                <Text>thread id:    {this.props.selectedId}</Text>
                <Text>thread title: {title}</Text>
            </View>
        );
    }

}

// const styles = StyleSheet.create({
//     title: {
//         fontSize: 30
//     },
//     item: {
//         marginTop: 10,
//         paddingLeft: 10,
//         paddingRight: 10,
//         paddingTop: 20,
//         paddingBottom: 20,
//         // padding: 10,
//         backgroundColor: '#ffff'
//     }
// });

const mapStateToProps = (reduxState) => {
    return {                                               // this object is accessible as property for the component
        allThreads: reduxState.allThreads,
        selectedId: reduxState.selectedThreadId
    };
};

export default connect(mapStateToProps, AllActions)(ScreenThread);    
// export default ScreenThread;
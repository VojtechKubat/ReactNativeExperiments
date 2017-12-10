import React, { Component } from 'react';
import { View, Text, ListView } from 'react-native';
import axios from 'axios';
import { connect } from 'react-redux';

import ListItem from './components/ListItem'

class ThreadList extends Component {

    componentWillMount () {
        // axios.get("https://rallycoding.herokuapp.com/api/music_albums")
        //     .then(response => {
        //         this.setState({ albums: response.data });
        //     }
        // );

        const ds = new ListView.DataSource({ 
            rowHasChanged: (r1, r2)=> r1 !== r2
        });
        this.dataSource = ds.cloneWithRows(this.props.allThreads);
    }

    renderRow(thread) {
        // return (<View>
        //     <Text>{thread.title}</Text>
        // </View>);
        return <ListItem thread={thread} />
    }

    render() {
        console.log(this.props)
        return (
            <View>
                <ListView 
                dataSource={this.dataSource}
                renderRow={this.renderRow}
                />
            </View>
        );
    }

    
};

const mapStateToProps = (reduxState) => {
    return { allThreads: reduxState.allThreads };
};

export default connect(mapStateToProps)(ThreadList);       // connecting redux to this component; mapping state from redux to the state of component
// export default ThreadList;
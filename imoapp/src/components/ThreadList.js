import React, { Component } from 'react';
import { View, Text, ListView, Button } from 'react-native';
import axios from 'axios';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import ListItem from './ListItem'

class ThreadList extends Component {

    componentWillMount () {
        // axios.get("https://rallycoding.herokuapp.com/api/music_albums")
        //     .then(response => {
        //         this.setState({ albums: response.data });
        //     }
        // );

        const ds = new ListView.DataSource({                        // creates data saource for the ListView a.k.a. UITableVie
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

    navigateOnScreenTrending(){
        console.log(">>> Clicked...");
        Actions.screenThread();
    }

    render() {
        console.log(this.props)
        return (
            <View>
                <Button 
                    title="Trending"
                    onPress={this.navigateOnScreenTrending.bind(this)}/>
                <ListView 
                dataSource={this.dataSource}
                renderRow={this.renderRow}
                />
            </View>
        );
    }
};

const mapStateToProps = (reduxState) => {
    return {                                               // this object is accessible as property for the component
        allThreads: reduxState.allThreads                  
    };
};

export default connect(mapStateToProps)(ThreadList);       // connecting redux to this component; this is necessary for mapping state from redux to the state of component
// export default ThreadList;
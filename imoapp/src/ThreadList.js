import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

import Thread from './Thread';

class ThreadList extends Component {

    state = {
        albums: []
        // threads : [];
    };

    componentWillMount () {
        console.log(">>> ThradList - componentWillMount");

        axios.get("https://rallycoding.herokuapp.com/api/music_albums")
        .then(response => {
            // console.log(response);
            // this.state.albums = response.data;
            this.setState({ albums: response.data });
        }
        );
    }

    renderAlbums() {
        return this.state.albums.map(album => {
            return (<Thread key={album.title} album={album} />);
        });
    }

    render() {
        return (
            <View>
                <Text>Thread list component</Text>
                <Text>Count of albums = {this.state.albums.length}</Text>
                {this.renderAlbums()}
            </View>
        );
    }
};

export default ThreadList;
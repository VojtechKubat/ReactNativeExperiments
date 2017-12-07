import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ListView,
  ListViewDataSource
} from 'react-native';

import { Thread } from '../Model/Thread';

const dummyThreads: Thread[] = [
    { title: "First" },
    { title: "Second" },
    { title: "Third" },
    { title: "Fourth" },
    { title: "First" },
    { title: "Second" },
    { title: "Third" },
    { title: "Fourth" },
    { title: "First" },
    { title: "Second" },
    { title: "Third" },
    { title: "Fourth" },
    { title: "First" },
    { title: "Second" },
    { title: "Third" },
    { title: "Fourth" },
    { title: "First" },
    { title: "Second" },
    { title: "Third" },
    { title: "Fourth" },
    { title: "First" },
    { title: "Second" },
    { title: "Third" },
    { title: "Fourth" },
    { title: "First" },
    { title: "Second" },
    { title: "Third" },
    { title: "Fourth" },
    { title: "First" },
    { title: "Second" },
    { title: "Third" },
    { title: "Fourth" },
    { title: "First" },
    { title: "Second" },
    { title: "Third" },
    { title: "Fourth" },
    { title: "First" },
    { title: "Second" },
    { title: "Third" },
    { title: "Fourth" },
    { title: "First" },
    { title: "Second" },
    { title: "Third" },
    { title: "Fourth" },
    { title: "First" },
    { title: "Second" },
    { title: "Third" },
    { title: "Fourth" },            
];

export interface MyProps {        
}

export interface MyState {
    title: string
    dsThreads: ListViewDataSource
}

export default class ThreadList extends Component<MyProps, MyState> {

    // state = {
    //     title : "List of threads",
    //     ds: null
    // };

    constructor (props: MyProps, state: MyState) {
        super(props, state);

        const ds: ListViewDataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            title: "All threads",
            dsThreads: ds.cloneWithRows(dummyThreads)
        };
    }

    static defaultProps: MyProps = {
        
    }

    renderRow(thread: Thread, sectionId: number, highLightRow: number) {
        console.log('>>> thread: '+thread.title+" - rowNumber: "+sectionId+" - highlight row: "+highLightRow);
        return (
            <View style={styles.row}>
                <Text style={styles.threadLabel}>{thread.title}</Text>
            </View>
        );
    }

    render() {
        return (
            <View style ={styles.container}>
                <Text style={styles.title}>{this.state.title}</ Text>
                <ListView 
                    dataSource = {this.state.dsThreads}
                    renderRow = {this.renderRow.bind(this)}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    table:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        margin: 40,
        fontSize: 20
    },
    row: {
        height : 80
    },
    threadLabel: {
        fontSize: 30
    }
  });

import React, { Component } from "react";
import {
    ListView,
    ListViewDataSource,
    StyleSheet,
    Text,
    View,
} from "react-native";

import { Thread } from "../Model/Thread";

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

export interface IMyProps {
    dummyProp: string;
}

export interface IMyState {
    title: string;
    dsThreads: ListViewDataSource;
}

export default class ThreadList extends Component<IMyProps, IMyState> {

    // state = {
    //     title : "List of threads",
    //     ds: null
    // };
    public static defaultProps: IMyProps = {
        dummyProp: "Hello world",
    }

    constructor (props: IMyProps, state: IMyState) {
        super(props, state);

        const ds: ListViewDataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dsThreads: ds.cloneWithRows(dummyThreads),
            title: "All threads",
        };
    }

    public render() {
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

    private renderRow(thread: Thread, sectionId: number, highLightRow: number) {
        // console.log('>>> thread: '+thread.title+" - rowNumber: "+sectionId+" - highlight row: "+highLightRow);
        return (
            <View style={styles.row}>
                <Text style={styles.threadLabel}>{thread.title}</Text>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        backgroundColor: "#F5FCFF",
        flex: 1,
        justifyContent: "center",
    },
    row: {
        height : 80,
    },
    table:{
        alignItems: "center",
        flex: 1,
        justifyContent: "center",
    },
    threadLabel: {
        fontSize: 30,
    },
    title: {
        fontSize: 20,
        margin: 40,
    },
  });

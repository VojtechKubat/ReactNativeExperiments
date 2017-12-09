import React from 'react';
import {  StyleSheet,Text } from 'react-native';

const styles = StyleSheet.create({
    header: {
        fontSize: 40
    }
});

const Header = () => {
    return (
        <Text style={styles.header}>This is header</Text>
    );
}

export default Header;
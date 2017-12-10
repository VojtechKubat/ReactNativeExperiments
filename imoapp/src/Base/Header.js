import React from 'react';
import {  
    StyleSheet,
    Text,
    View,
} from 'react-native';

const styles = StyleSheet.create({
    header: {
        fontSize: 20
    },
    headerContainter: {
        backgroundColor: '#99C0FF',
        paddingTop: 20,
        height: 60,
        justifyContent: 'center',       // this is vertical alignment (Affect the nested components - the content)
        alignItems: 'center',            // this is horizontal alignment
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    }
});

type Props = {
    headerTitle: string
};

const Header = (props: Props) => {
    return (
        <View style={styles.headerContainter}>
            <Text style={styles.header}>{props.headerTitle}</Text>
        </View>
    );
}

export default Header;
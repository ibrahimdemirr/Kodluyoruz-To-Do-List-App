import React, {Component} from 'react';
import {Text, View, Dimensions, StyleSheet} from 'react-native';

const {width, height} = Dimensions.get('window');

class Header extends Component {
    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.title}>To Do List Application</Text>
            </View>

        )
    }
}

const styles = StyleSheet.create( {
    container: {
        justifyContent: "center", 
        alignItems: "center",
        width,
        height : height * 0.08,
        backgroundColor: 'white',
        flexDirection: 'row',
        borderBottomWidth: 2,
    },
    title: {
        fontSize:25,
        color: '#000'
    }

});

export default Header;
//import libraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Home from '../screen/Home'

// create a component
const Main = () => {
    return (
        <View style={styles.container}>
            <Home/>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
});

//make this component available to the app
export default Main;

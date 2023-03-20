//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';

// create a component
const Loading = ( ) => {
    return (
        <View style={styles.container}>
        <Text style={styles.txtStyle}>
            Searching data, a moment please...
        </Text>
        
        <ActivityIndicator
            // style= {{ position: 'absolute', top: '50%', left: '50%' }}
            size= 'large' 
            color='blue' 
            animating={true} 
        />
    </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    txtStyle: {
        fontSize: 20, 
        fontWeight: 'bold', 
        color: 'blue', 
        marginVertical: 50}
});

//make this component available to the app
export default Loading;

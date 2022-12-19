//import libraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import About from '../screen/About';
import UsedTech from '../screen/UsedTech';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

// create a component
const StackAbout = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Author"
                component={About}
                options={{ headerShown: false }}
            />
            <Stack.Screen 
                name="Technology" 
                component={UsedTech}
                options={{ headerShown: true }} 
            />
        </Stack.Navigator>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default StackAbout;

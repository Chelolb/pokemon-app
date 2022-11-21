//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Home from '../screen/Home';
import Detail from '../screen/Detail';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();


// create a component
const Menu = ( {navigation} ) => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Pokemon Gallery"
                component={Home}
                options={{ headerShown: true }}
            />
            <Stack.Screen 
                name="Pokemon Detail" 
                component={Detail} />
        </Stack.Navigator>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

//make this component available to the app
export default Menu;

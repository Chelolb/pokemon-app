//import libraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Home from '../screen/Home';
import About from '../screen/About';
import { NavigationContainer } from '@react-navigation/native';
//import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';


const Drawer = createDrawerNavigator();
//const Stack = createNativeStackNavigator();

// create a component
const Main = () => {
    return (
        <NavigationContainer>
	      {/* <Stack.Navigator>
	        <Stack.Screen name="Home - Pokemon" component={Home} />
	      </Stack.Navigator> */}
            <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen name="Galería - Pokemon" component={Home} />
                <Drawer.Screen name="Acerca de" component={About} />
            </Drawer.Navigator>
	    </NavigationContainer>
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

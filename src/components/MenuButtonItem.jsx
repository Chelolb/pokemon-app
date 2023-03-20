//import liraries
import React, { Component } from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/FontAwesome';

// create a component
const MenuButtonItem = ( { text, onPress, icon, colorTxt, colorButton } ) => {
    return (
        <TouchableOpacity style={ {flexDirection: 'row', backgroundColor: colorButton,
                                    borderRadius: 30, marginBottom: 15, padding: 15} }
            onPress= { onPress }>
            <Ionicons 
                name= {icon}
                size= {30}
                color= {colorTxt}
            />
            <Text style={ { color: colorTxt, fontSize: 20, 
                                fontWeight: 'bold', marginLeft: 15 }}>
                { text }
            </Text>
        </TouchableOpacity>
    );
};

//make this component available to the app
export default MenuButtonItem;

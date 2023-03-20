//import libraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/FontAwesome';

// create a component
const AttackTag = ( { valor } ) => {
    return (
        <View style={styles.container}>
            <View>
                <Text style={{ fontSize: 20, color: 'blue' }}>Attack:</Text>
            </View>
            <View>
                <Ionicons 
                    style= {{ marginLeft: 10}}
                    name= 'flash'
                    size= {90}
                    color= 'red'
                />
                <Text style={{ borderRadius: 50, fontSize: 20, color: 'blue', backgroundColor: 'white', 
                                paddingHorizontal: 5, alignSelf: 'center', borderWidth: 1, borderColor: 'blue',
                                position: 'absolute', top: 33, left: 15 }}>
                    {valor}
                </Text>
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
    },
});

//make this component available to the app
export default AttackTag;

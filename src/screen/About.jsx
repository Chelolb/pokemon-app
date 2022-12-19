//import libraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from '../components/Button';

// create a component
const About = ( { navigation } ) => {
    return (
        <View style={styles.container}>
            <Text style={{fontSize: 35, fontWeight: '600', margin: 20}}>
                PokeApp
            </Text>
            <Text>App developer by:</Text>
            <Text style={{fontSize: 35, fontWeight: '400', margin: 20}}>
                Ing. Marcelo Litwin
            </Text>
            <View style={{borderWidth: 1, borderRadius: 15, padding: 15, margin: 20}}>
                <Text styles={{}}>
                    This application is a "mobile version" of the frontend,
                     that consumes the data from the API backend of my version
                     from the my POKEMON's Project.
                </Text>
            </View>
            <View>
                <Button                    // show Technology button
                    title = 'Show Technology'
                    onPress={() => navigation.navigate('Technology')}>
                </Button>
            </View>
            <View style={{alignItems: 'center', justifyContent: 'center', margin: 25}}>
                <Text style={{color: 'red'}}>Application in continuous updating and improvements</Text>
            </View>
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
export default About;

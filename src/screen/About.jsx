//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
const About = () => {
    return (
        <View style={styles.container}>
            <Text>Aplicación realizada por:</Text>
            <Text style={{fontSize: 35, fontWeight: '400', margin: 20}}>
                Ing. Marcelo Litwin
            </Text>
            <View style={{borderWidth: 1, borderRadius: 15, padding: 15, margin: 20}}>
                <Text styles={{}}>
                    Esta aplicación es una "versión movil" del frontend, 
                    que consume los datos del API backend de mi versión 
                    del Proyecto Individual POKEMON.
                </Text>
            </View>
            <View>
                <Text style={{margin: 10, fontSize: 15, fontWeight: '200'}}>Tecnologías utilizadas</Text>
                <View style={{alignItems: 'center', justifyContent: 'center'}}>
                    <Text>* React Native</Text>
                    <Text>* Redux ToolKit</Text>
                </View>
            </View>
            <View style={{alignItems: 'center', justifyContent: 'center', margin: 25}}>
                <Text style={{color: 'red'}}>Aplicación en continua actualización y mejoras</Text>
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

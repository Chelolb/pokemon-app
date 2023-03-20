//import libraries
import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/FontAwesome';
import BackButton from '../components/BackButton';
import Button from '../components/Button';
import imgRedux from '../../assets/imgTech/redux-toolkit.png';
import imgReact from '../../assets/imgTech/react-native.png'

// create a component
const UsedTech = ( { navigation } ) => {
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 5,
                                height: 50, marginTop: 24 }}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', 
                                backgroundColor: 'blue'}}>
                    <BackButton
                        onPress={() =>
                            navigation.navigate('About')}
                        title= ''
                        color= 'white'
                        icon = 'arrowleft'
                    />
                </View>
                <View style={{ flex: 8, justifyContent: 'center', backgroundColor: 'blue'}}>
                    <Text style={styles.Title}>Technology</Text>
                </View>
            </View>
            <Text style={{ fontSize: 20, fontWeight: '200', marginBottom: 25, padding: 10 }}>
                In this project the following technologies and tools were used...
            </Text>
            <View style={{ width: 300, flexDirection: 'row', justifyContent: 'center', alignItems: 'center',
                        borderColor: 'orange', borderWidth: 2, borderRadius: 10, borderBottomWidth: 5, 
                        borderRightWidth: 5, borderBottomRightRadius: 10, backgroundColor: 'white', 
                        marginVertical: 5}}>
                <Image
                    style={{ width: 80, height: 100, marginBottom: 15, resizeMode: 'contain' }}
                    source={ imgReact }
                />
                <Text style={{ color: '#63dbfb', fontSize: 30, fontWeight: '400', margin: 10}}> React Native</Text>
            </View>
            <View style={{ width: 300, flexDirection: 'row', justifyContent: 'center', alignItems: 'center',
                        borderColor: 'orange', borderWidth: 2, borderRadius: 10, borderBottomWidth: 5, 
                        borderRightWidth: 5, borderBottomRightRadius: 10, backgroundColor: 'white', 
                        marginVertical: 5 }}>
                <Image
                    style={{ width: 80, height: 100, marginBottom: 15, resizeMode: 'contain' }}
                    source={ imgRedux }
                />
                <Text style={{ color: '#643cb4', fontSize: 30, fontWeight: '400', margin: 10}}> Redux ToolKit</Text>
            </View>
            <View style={{ marginTop: 10}}>
                <Button                    // show Backend button
                    title = 'Show Backend Tech'
                    onPress={() => navigation.navigate('ShowBackend')}>
                </Button>
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#EECBEC',
    },
    Title: {
        color: 'blue',
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        textShadowColor: 'rgba(128, 128, 255, 1)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 10,
        alignSelf: 'center',
        backgroundColor: 'blue'
    }
});

//make this component available to the app
export default UsedTech;
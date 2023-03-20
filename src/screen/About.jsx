//import libraries
import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Linking, TouchableOpacity, Pressable, Dimensions} from 'react-native';
import Button from '../components/Button';
import Ionicons from 'react-native-vector-icons/FontAwesome';
import marcelo from '../../assets/imgabout/marcelo.jpg';
import logo from '../../assets/logoPm.png';

const { width } = Dimensions.get('window');

// create a component
const About = ( { navigation } ) => {

    async function goToLinked () {
        const supported = await Linking.canOpenURL('https://www.linkedin.com/in/marcelo-litwin-43398848/');
        if (supported) {
            await Linking.openURL('https://www.linkedin.com/in/marcelo-litwin-43398848/')
        }
        else {
            Alert.alert(`Don't know how to open this URL: https://www.linkedin.com/in/marcelo-litwin-43398848/`)
        }
    }

    async function goToGit () {
        const supported = await Linking.canOpenURL('https://github.com/Chelolb');
        if (supported) {
            await Linking.openURL('https://github.com/Chelolb')
        }
        else {
            Alert.alert(`Don't know how to open this URL: https://github.com/Chelolb`)
        }
    }

    async function goToPorfolio () {
        const supported = await Linking.canOpenURL('https://chelolb.github.io/porfolio/');
        if (supported) {
            await Linking.openURL('https://chelolb.github.io/porfolio/')
        }
        else {
            Alert.alert(`Don't know how to open this URL: https://chelolb.github.io/porfolio/`)
        }
    }

    async function goToCv () {
        const supported = await Linking.canOpenURL('https://drive.google.com/file/d/1eMNP5l0ryVBE-mKTORwis4dFZA3GCRpq/view?usp=sharing');
        if (supported) {
            await Linking.openURL('https://drive.google.com/file/d/1eMNP5l0ryVBE-mKTORwis4dFZA3GCRpq/view?usp=sharing')
        }
        else {
            Alert.alert(`Don't know how to open this URL: https://drive.google.com/file/d/1eMNP5l0ryVBE-mKTORwis4dFZA3GCRpq/view?usp=sharing`)
        }
    }

    async function goToMail () {
        const supported = await Linking.canOpenURL('mailto: marcelolitwin@gmail.com');
        if (supported) {
            await Linking.openURL('mailto: marcelolitwin@gmail.com')
        }
        else {
            Alert.alert(`Don't know how to open email app`)
        }
    }

    return (
        <View style={styles.container}>
            <Pressable onPress={() => navigation.openDrawer()}>
                <View style={{ flexDirection: 'row', height: 60, width: width, marginTop: 23, 
                                backgroundColor: 'blue'}}>
                    <View style={{ flex: 1, marginVertical: 15,
                                    marginLeft: 15, }}>
                        <Ionicons 
                            name= {'navicon'}
                            size= {30}
                            color= {'white'}
                        />
                    </View>
                    <View style= {{ flex: 5, alignItems: 'center' }}>
                        <Image style={styles.logoImage} source={ logo } />
                    </View>    
                </View>
            </Pressable> 
            <View style={{ justifyContent: 'flex-start', alignItems: 'center'}}>

                <View style={{ margin: 10}}>
                    <Text style={{ fontSize: 25}}>Developed by...</Text>
                </View>
            </View>

            <View style={{ width: 310, alignItems: 'center', borderColor: 'orange', borderWidth: 2, 
                            borderRadius: 10, borderBottomWidth: 5, borderRightWidth: 5,
                            borderBottomRightRadius: 10,backgroundColor: '#fff', }}>
                <Text style={{fontSize: 25, fontWeight: '400', paddingHorizontal: 5}}>
                    Ing. Marcelo Litwin
                </Text>
                <View style={{ flexDirection: 'row', marginBottom: 5}} >
                    <View style= {{ flex: 3, height: 160, justifyContent: 'center'}}>
                        <Image style={styles.cardimg} source={ marcelo } />
                        <Text style={{ paddingHorizontal: 5, paddingTop: 5}}>
                            Full Stack Web Devepoper
                        </Text>
                    </View>
                    <View style={{ height: 150, flex: 2}}>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ flex: 1, marginVertical: 10, alignItems: 'center' }}>
                            <TouchableOpacity
                                onPress={() => goToLinked()}>
                                    <Ionicons 
                                        name= {'linkedin-square'}
                                        size= {40}
                                        color= {'black'}   
                                    />
                            </TouchableOpacity>
                            </View>
                            <View style={{ flex: 1, marginVertical: 10, alignItems: 'center' }}>
                            <TouchableOpacity
                                onPress={() => goToGit()}>
                                    <Ionicons 
                                        name= {'github'}
                                        size= {40}
                                        color= {'black'}   
                                    />
                            </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ flex: 1, marginVertical: 10, alignItems: 'center' }}>
                            <TouchableOpacity
                                onPress={() => goToPorfolio()}>
                                    <Ionicons 
                                        name= {'briefcase'}
                                        size= {40}
                                        color= {'black'}   
                                    />
                            </TouchableOpacity>
                            </View>
                            <View style={{ flex: 1, marginVertical: 10, alignItems: 'center' }}>
                            <TouchableOpacity
                                onPress={() => goToCv()}>
                                    <Ionicons 
                                        name= {'id-card'}
                                        size= {40}
                                        color= {'black'}   
                                    />
                            </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{ alignItems: 'center' }}>
                        <TouchableOpacity
                            onPress={() => goToMail()}>
                                <Ionicons 
                                    name= {'envelope'}
                                    size= {40}
                                    color= {'black'}   
                                />
                        </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.notaStyle}>
                <Text style={styles.txtNotaStyle}>
                    This application is a Mobile App that consumes the data 
                    from the API backend of my version Pokemon's Project.
                </Text>
            </View>
            <View style={{ marginTop: 10}}>
                <Button                    // show Technology button
                     title = 'Show Technology'
                     onPress={() => navigation.navigate('UsedTech')}>
                </Button>
            </View>
            <View style={styles.warningContainer}>
                <Text style={{color: 'blue', padding: 5}}>
                     NOTE: This App is in continuous updating and improvements features
                </Text> 
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
    logoImage2: {
        height: 70,
        Width: undefined,
        resizeMode:"contain",
        alignSelf: 'center'
    },
    icoImage: {
        height: 50,
        width: 50,
        resizeMode:"contain",
        alignSelf: 'center',
    },
    logoImage: {
        height: 50,
        Width: undefined,
        resizeMode:"contain",
    },
    cardimg: {
        maxHeight: 130,
        maxWidth: 130,
        resizeMode:"contain",
        borderRadius: 65,
        alignSelf: 'center'
    },
    notaStyle: { 
        width: 310, 
        alignItems: 'center', 
        marginTop: 10, 
        borderColor: 'orange', 
        borderWidth: 2, 
        borderRadius: 10,                    
        borderBottomWidth: 5, 
        borderRightWidth: 5,
        borderBottomRightRadius: 10,
        backgroundColor: '#fff'
    },
    txtNotaStyle: { 
        width: 290, 
        borderColor: 'purple',
        padding: 10, 
        textAlign: 'justify', 
        backgroundColor: 'white'
    },
    warningContainer: {
        alignItems: 'center', 
        justifyContent: 'center', 
        margin: 10, 
        borderColor: 'orange',
        borderWidth: 2, 
        borderRadius: 10,
        borderBottomWidth: 5, 
        borderRightWidth: 5, 
        borderBottomRightRadius: 10, 
        backgroundColor: 'white'
    }
});

//make this component available to the app
export default About;

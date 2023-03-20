//import libraries
import React, { useState, useEffect } from 'react';
import { useDispatch } from "react-redux"
import { View, Text, Image, StyleSheet, Pressable, Dimensions } from 'react-native';
import { getPokemonFilter } from '../../reducers';
import Ionicons from 'react-native-vector-icons/FontAwesome';
import { CheckBox } from '@rneui/themed';
import Button from '../components/Button';
import logo from '../../assets/logoPm.png';

const { width } = Dimensions.get('window');

// create a component
const SourceOption = ( { navigation } ) => {

    const dispatch = useDispatch();

    const [all, setAll] = useState(true);
    const [api, setApi] = useState(false)
    const [db, setDb] = useState(false)
    const [option, setOption] = useState("all")

    const optionAll = () => {
        setAll(true);
        setApi(false);
        setDb(false);
        setOption("all");
    }

    const optionApi = () => {
        setAll(false);
        setApi(true);
        setDb(false);
        setOption("api");
    }

    const optionDb = () => {
        setAll(false);
        setApi(false);
        setDb(true);
        setOption("db");
    }

    function setFilter() {
        dispatch(getPokemonFilter(option));
        navigation.navigate('Principal')
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
            <View style={{ width: '100%', height: 350, alignItems: 'center', marginTop: 5}}>
                <Text style={styles.Title}>
                    Select Pokemon's Source
                </Text>
                <View style={styles.contRadioBtn}>
                    <CheckBox
                        style = {styles.radioButton}
                        title= "All"
                        center
                        checked = {all}
                        checkedIcon = "dot-circle-o"
                        uncheckedIcon='circle-o'
                        onPress={optionAll}
                        />
                    <CheckBox
                        title= "API"
                        center
                        checked = {api}
                        checkedIcon = "dot-circle-o"
                        uncheckedIcon='circle-o'
                        onPress={optionApi}
                    />
                    <CheckBox
                        title= "DB"
                        center
                        checked = {db}
                        checkedIcon = "dot-circle-o"
                        uncheckedIcon='circle-o'
                        onPress={optionDb}
                    />
                </View>
                <Button
                    style={{with: 70, marginVertical: 25 }}
                    title = 'Set'
                    onPress={() => setFilter()}>
                </Button>
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        backgroundColor: '#EECBEC',
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
    Title: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 20,
        padding: 10,
        paddingHorizontal: 15,
        textShadowColor: 'rgba(128, 128, 255, 1)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 10,
        justifyContent: 'center',
        backgroundColor: 'blue',
        borderRadius: 30
    },
    contRadioBtn: {
        flex: 1,
        width: 150,
        height: 100,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: '#fff',
        marginVertical: 25,
        borderColor: 'orange',
        borderWidth: 2,
        borderRadius: 15,
        borderBottomWidth: 5, 
        borderRightWidth: 5, 
        borderBottomRightRadius: 10 
    },
    radioButton: {
        margin: 0
    }
});

//make this component available to the app
export default SourceOption;

//import liraries
import React, { useState, useEffect } from 'react';
import { useDispatch } from "react-redux"
import { View, Text, StyleSheet } from 'react-native';
import { getPokemonFilter } from '../../reducers';
import { CheckBox } from '@rneui/themed';
import Button from '../components/Button';

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
        alert(`Option source: "${option}" activado`)
        navigation.navigate('Principal')
    }

    return (
        <View style={styles.container}>
            <View style={{ width: '100%', height: 500, alignItems: 'center' }}>
                <Text style={{ fontSize: 28, fontWeight: '400', marginVertical: 25 }}>Select Pokemon's Source</Text>
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
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    contRadioBtn: {
        flex: 1,
        width: 150,
        height: 100,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: '#fff',
        margin: 50,
        borderColor: 'green',
        borderWidth: 2,
        borderRadius: 15
    },
    radioButton: {
        margin: 0
    }
});

//make this component available to the app
export default SourceOption;

//import liraries
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import { getAllTypes, getPokemonByType } from "../../reducers";
import Button from '../components/Button';
import { MultipleSelectList, SelectList } from 'react-native-dropdown-select-list'
import { ScrollView } from 'react-native-gesture-handler';

// create a component
const TypeFilter = ( { navigation } ) => {
    
    const dispatch = useDispatch();

    const [selected, setSelected] = useState('all');

    let allTypes = [];

    let data =[];

    // let data = [
    //     {key: '1', value: "all"}    
    //     {key: '2', value: "grass"},
    //     {key: '3', value: "poison"},
    //     {key: '4', value: "fire"},
    //     {key: '5', value: "flying"},
    //     {key: '6', value: "water"},
    //     {key: '7', value: "bug"},
    //     {key: '8', value: "normal"},
    //     {key: '9', value: "electric"},
    //     {key: '10', value: "ground"},
    //     {key: '11', value: "fairy"}
    // ]


    useEffect(() => { dispatch(getAllTypes()) }, [dispatch]);    // call all types
            
    allTypes = useSelector((state) => state.POKEMONS.allTypes);

    if (allTypes.length){ 

        let dataTypes = [ {key: '1', value: "all"} ]; // set first option
        if (allTypes) {                         // transform id --> key & name --> value
        allTypes.map((item) => {
            let obj = {
            key: item.id + 1,
            value: item.name,
            }
            dataTypes.push(obj);
        });
        }

        data = dataTypes
        //console.log(JSON.stringify(dataTypes));
    }

    function setFilter() {
        dispatch(getPokemonByType(selected));
        alert(`filter type: "${selected}" activated`)
        navigation.navigate('Principal')
    }

    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 28, fontWeight: '400', marginVertical: 25 }}>Select Pokemon's Source</Text>
            <View style={{width: 260, alignSelf: 'center', margin: 25}}>
                <SelectList 
                    setSelected={(val) => setSelected(val)} 
                    data={data} 
                    save="value"
                    badgeStyles={{backgroundColor: 'green'}}
                    checkBoxStyles={{backgroundColor: 'lightgreen', borderWidth: 2}}
                    defaultOption={{ key:'1', value:'all' }}  //default selected option
                />
            </View>
            <View style={{paddingHorizontal: 100}}>
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
});

//make this component available to the app
export default TypeFilter;

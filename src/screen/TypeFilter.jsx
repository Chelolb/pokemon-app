//import liraries
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import { getAllTypes, getPokemonByType } from "../../reducers";
import Button from '../components/Button';
import DropDownPicker from 'react-native-dropdown-picker';


// create a component
const TypeFilter = ( { navigation } ) => {
    
    const dispatch = useDispatch();

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    let items = [{label: "all", value:"all"}];

    useEffect(() => { dispatch(getAllTypes()) }, [dispatch]);    // call all types
            
    let allTypes = useSelector((state) => state.POKEMONS.allTypes);
 
    allTypes.length
    ? allTypes.map(c => items.push({ label: c.name, value: c.name }))
    : null;

    function setFilter() {
        dispatch(getPokemonByType(value));
        alert(`filter type: "${value}" activated`)
        navigation.navigate('Principal')
    }

    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 28, fontWeight: '400', marginVertical: 25 }}>Select Pokemon's Type</Text>
            <View style={{width: 260, alignSelf: 'center', margin: 25}}>
                <DropDownPicker
                    open={open}
                    value={value}
                    items={items}
                    setOpen={setOpen}
                    setValue={setValue}
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
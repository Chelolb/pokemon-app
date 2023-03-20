//import libraries
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { View, Text, StyleSheet } from 'react-native';
import { setNewTypes, getAllTypes } from "../../reducers";
import Button from '../components/Button';
import DropDownPicker from 'react-native-dropdown-picker';

// create a component
const SelectTypes = ( { route, navigation } ) => {

    const { typesSelect } = route.params; 

    const dispatch = useDispatch();

    const [openTypes, setOpenTypes] = useState(false);
    const [arrayTypes, setArrayTypes] = useState([]); 
    
          
    useEffect(() => { // if have params => read and create array

        if (typesSelect.length) {
            let Selected = typesSelect.split(', ');
            setArrayTypes(Selected);
        }
        else{ setArrayTypes([])}

    }, [typesSelect]);

    let itemsTypes = [];
    
    let allTypes= [];

    let dataTypes = [            //  alternative itemTypes for Types picker`s items
        {label: 'grass', value: "grass"},
        {label: 'poison', value: "poison"},
        {label: 'fire', value: "fire"},
        {label: 'flying', value: "flying"},
        {label: 'water', value: "water"},
        {label: 'bug', value: "bug"},
        {label: 'normal', value: "normal"},
        {label: 'electric', value: "electric"},
        {label: 'ground', value: "ground"},
        {label: 'fairy', value: "fairy"}
    ]

    useEffect(() => { dispatch(getAllTypes()) }, [dispatch]);    // call all genres
            
    allTypes = useSelector((state) => state.POKEMONS.allTypes);

    allTypes.length     // load types in  Types picker's items
    ? allTypes.map(c => itemsTypes.push({ label: c.name, value: c.name }))
    : itemsTypes = dataTypes;
  

    function setUpTypes() {    // send genres array at store

        let conjuntoTypes = (arrayTypes.join(', '))

        dispatch(setNewTypes(conjuntoTypes));
        
        setArrayTypes([]);

        navigation.navigate('Pokemon Create');

    };

    return (
        <View style={styles.container}>
            <View style={styles.containerAll}>
                <Text style={{fontSize: 20, fontWeight: '100', padding: 10, alignSelf: 'center' }}>
                    Select the Types...
                </Text>

                <View style={{width: 260, alignSelf: 'center', padding: 20}}>
                        <DropDownPicker
                            style={{ borderColor: 'pink'}}
                            multiple={true}
                            min={0}
                            max={4}
                            open={openTypes}
                            value={arrayTypes}
                            items={itemsTypes}
                            setOpen={setOpenTypes}
                            setValue={setArrayTypes}
                            //onChangeValue ={handleType}
                        />
                        <View style={arrayTypes.length ? styles.containerValue : styles.containerValue0}>
                        { arrayTypes.length
                            ? arrayTypes.map((c, index) => {         //  show selected type
                                return (
                                    <View style={styles.valueLabel} key={index} >
                                        <Text style={styles.txtTypes}>{c}</Text>
                                    </View>
                                )
                            })
                            : (null)
                        }
                    </View>
                </View>
                    <View style={{paddingHorizontal: 100, marginVertical: 10}}>
                        <Button
                            enable= {arrayTypes.length ? true : false}
                            style={{with: 70, marginVertical: 15}}
                            title = 'Set Types'
                            onPress={() => setUpTypes()}>
                        </Button>
                </View>
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
        backgroundColor: '#EECBEC',
    },
    containerAll: { 
        borderColor: 'orange',
        borderWidth: 2,
        borderRadius: 10,
        borderBottomWidth: 5, 
        borderRightWidth: 5, 
        borderBottomRightRadius: 10, 
        backgroundColor: 'white',
    },
    containerValue: {
        marginTop: 5,
        flexDirection: 'column',
        borderColor: 'pink',
        borderWidth: 2,
        borderRadius: 10,
        borderBottomWidth: 5, 
        borderRightWidth: 5, 
        borderBottomRightRadius: 10,
    }, 
    containerValue0: {
        borderWidth: 0, 
    },
    txtTypes: { 
        backgroundColor: '#fff', 
        marginVertical: 2,
        marginHorizontal: 10, 
        paddingHorizontal: 10,
    }
});

//make this component available to the app
export default SelectTypes;

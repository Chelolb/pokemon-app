//import libraries
import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, Pressable, Dimensions } from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import { getAllTypes, getPokemonByType } from "../../reducers";
import Ionicons from 'react-native-vector-icons/FontAwesome';
import Button from '../components/Button';
import DropDownPicker from 'react-native-dropdown-picker';
import logo from '../../assets/logoPm.png';

const { width } = Dimensions.get('window');

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
            <Text style= { styles.Title}>
                Select Pokemon's Type
            </Text>
            <View style={{width: 250, alignSelf: 'center', margin: 25, height: 300, 
                            borderColor: 'orange',
                            borderWidth: 2, borderRadius: 15, borderBottomWidth: 5, borderRightWidth: 5, 
                            borderBottomRightRadius: 10, backgroundColor: 'white'
                            }}>
                <DropDownPicker
                    style= {{ width: 180, borderColor: 'orange', borderWidth: 2, marginTop: 5, 
                                alignSelf: 'center' }}
                    open={open}
                    value={value}
                    items={items}
                    setOpen={setOpen}
                    setValue={setValue}
                />
            </View>
            <View style={{paddingHorizontal: 100, marginTop: 10 }}>
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
});

//make this component available to the app
export default TypeFilter;
//import libraries
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { getAllTypes, createPokemon } from "../../reducers";
import Button from '../components/Button';
import DropDownPicker from 'react-native-dropdown-picker';

// create a component
const Create = ( { navigation }) => {   

    const dispatch = useDispatch();

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState([]);
    let items = [];

    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [hp, setHp] = useState('');
    const [attack, setAttack] = useState('');
    const [defense, setDefense] = useState('');
    const [speed, setSpeed] = useState('');
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [types, setTypes] = useState([]);

    let allTypes= [];

    let data = [            //  alternative data for picker`s items
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

    useEffect(() => { clearInputs() }, []);

    function clearInputs(){
        setName('');
        setImage('');
        setHp('');
        setAttack('');
        setDefense('');
        setSpeed('');
        setHeight('')
        setWeight('')
        setTypes([]);
        items = [];
    };

    useEffect(() => { dispatch(getAllTypes()) }, [dispatch]);    // call all types
            
    allTypes = useSelector((state) => state.POKEMONS.allTypes);
 
    allTypes.length     // load types in  picker's items
    ? allTypes.map(c => items.push({ label: c.name, value: c.name }))
    : items = data;


    function handleType(){      // update Types selected
        setTypes(value)
    }

    async function submitForm() {

        //console.log(value, types);

        if (!name) {
            return alert('Empty name`s field')     // if name is empty...
        };

        if (types.length < 1) {
            return alert('Indicate at least one type')     // if types's fiel is empty...
        };

        if (!hp || !attack || !defense || !speed || !height || !weight) {
            return alert(`Empty fields`)     // if any fields is empty...
        };

        if (isNaN(hp) || isNaN(attack) || isNaN(defense) || isNaN(speed) || isNaN(height) || isNaN(weight)) {
            return alert(`Data value isn't number`)     // if any fields is not number...
        };

        if (!image) {   // if not image indicate
            return alert(`Indicate an URL image's field`)
        };

        const newPokemon = {
            name, image, hp, attack, defense, speed, height, weight,
            types
        };
        //setModalVisible(true)
        //await dispatch(createPokemon(newPokemon));
        //setModalVisible(false)
        clearInputs();
            console.log(JSON.stringify(newPokemon))
        alert('The pokemon created successfully');
        
        navigation.navigate('Principal')
    }


    return (
        <View style={styles.container}>
           
            <View style={styles.containerHeader}>
                <Text style={styles.txtStyle}>Name:</Text>
                <TextInput 
                    style={{width: 230, backgroundColor: '#fff', marginHorizontal: 10, 
                        borderRadius: 3, paddingHorizontal: 5}} 
                    value={name}
                    placeholder= 'Insert name'
                    onChangeText={setName} />
                <Text style={styles.txtStyle}>Image:</Text>
                <TextInput
                    style={styles.inputImage} 
                    value={image}
                    placeholder= 'Insert image'
                    onChangeText={setImage} />
            </View>
            <View style={styles.containerItems}>    
                <View style={styles.containerSubItems}>
                    <Text style={styles.txtStyle}>HP:</Text>
                    <TextInput 
                        style={styles.input} 
                        value={hp}
                        placeholder= 'Insert'
                        onChangeText={setHp} />
                </View>
                <View style={styles.containerSubItems}>
                    <Text style={styles.txtStyle}>Attack:</Text>
                    <TextInput 
                        style={styles.input} 
                        value={attack}
                        placeholder= 'Insert'
                        onChangeText={setAttack} />
                </View>
            </View>
            <View style={styles.containerItems}> 
                <View style={styles.containerSubItems}>
                    <Text style={styles.txtStyle}>Defense:</Text>
                    <TextInput 
                        style={styles.input} 
                        value={defense}
                        placeholder= 'Insert'
                        onChangeText={setDefense} />
                </View>
                <View style={styles.containerSubItems}>
                    <Text style={styles.txtStyle}>Speed:</Text>
                    <TextInput 
                        style={styles.input} 
                        value={speed}
                        placeholder= 'Inser'
                        onChangeText={setSpeed} />
                </View>
            </View>
            <View style={styles.containerItems}>
                <View style={styles.containerSubItems}> 
                    <Text style={styles.txtStyle}>Height:</Text>
                    <TextInput 
                        style={styles.input} 
                        value={height}
                        placeholder= 'Insert'
                        onChangeText={setHeight} />
                </View>
                <View style={styles.containerSubItems}>
                    <Text style={styles.txtStyle}>Weight:</Text>
                    <TextInput 
                        style={styles.input} 
                        value={weight}
                        placeholder= 'Insert'
                        onChangeText={setWeight} />
                </View>
            </View>
             <View style={{width: 260, alignSelf: 'center'}}>
                <DropDownPicker
                    style={{backgroundColor: '#dfffdf', borderColor: 'green'}}
                    multiple={true}
                    min={0}
                    max={3}
                    open={open}
                    value={value}
                    items={items}
                    setOpen={setOpen}
                    setValue={setValue}
                    onChangeValue ={handleType}
                />
                <View style={value.length ? styles.containerValue : styles.containerValue0}>
                { value 
                    ? value.map((c, index) => {         //  show selected type
                        return (
                            <View style={styles.valueLabel} key={index} >
                                <Text>{c}</Text>
                            </View>
                        )
                    })
                    : (null)
                }
                </View>
            </View> 
            <View style={{paddingHorizontal: 100, marginVertical: 10}}>
                <Button
                    style={{with: 70, marginVertical: 15}}
                    title = 'Create'
                    onPress={() => submitForm()}>
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
    containerHeader: {
        width: 260,
        borderColor: 'green',
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: '#dfffdf',
        margin: 15,
    },
    inputImage: {
        width: 230, 
        backgroundColor: '#fff', 
        marginHorizontal: 10, 
        marginBottom: 10,
        borderRadius: 3, 
        paddingHorizontal: 5
    },
    containerItems: {
        width:270,
        height:35,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        backgroundColor: '#fff',
        margin: 10,
    },
    containerSubItems: {
        flexDirection: 'row',
        width: 125,
        borderColor: 'green',
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: '#dfffdf',
    },
    txtStyle: {
        marginHorizontal: 5,
        marginVertical: 5,
    },
    input: {
        alignContent: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        width: 50,
        marginVertical: 5,
        backgroundColor: '#fff',
    },
    containerValue: {
        flexDirection: 'row',
        marginTop: 5,
        borderWidth: 1, 
        borderRadius: 5,
        borderColor: 'green',
    }, 
    containerValue0: {
        borderWidth: 0, 
    },
    valueLabel: {
        backgroundColor: '#dfffdf',
        width: '30%',
        height: 25,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginVertical: 2,
        marginHorizontal: 5,
    }
});

//make this component available to the app
export default Create;

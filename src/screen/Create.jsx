//import libraries
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { getAllTypes, createPokemon } from "../../reducers";
import Button from '../components/Button';
import { MultipleSelectList, SelectList } from 'react-native-dropdown-select-list'
import { ScrollView } from 'react-native-gesture-handler';

// create a component
const Create = ( { navigation }) => {   

    const dispatch = useDispatch();

    
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [hp, setHp] = useState('');
    const [attack, setAttack] = useState('');
    const [defense, setDefense] = useState('');
    const [speed, setSpeed] = useState('');
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [selected, setSelected] = useState('NONE');
    const [types, setTypes] = useState([]);

    let allTypes = [];

    let data =[];

    // let data = [
    //     {key: '1', value: "grass"},
    //     {key: '2', value: "poison"},
    //     {key: '3', value: "fire"},
    //     {key: '4', value: "flying"},
    //     {key: '5', value: "water"},
    //     {key: '6', value: "bug"},
    //     {key: '7', value: "normal"},
    //     {key: '8', value: "electric"},
    //     {key: '9', value: "ground"},
    //     {key: '10', value: "fairy"}
    // ]

    function clearInputs(){
        setName('');
        setImage('');
        setHp('');
        setAttack('');
        setDefense('');
        setSpeed('');
        setHeight('')
        setWeight('')
        setSelected('')
        setTypes([]);
    };

    useEffect(() => { dispatch(getAllTypes()) }, [dispatch]);    // call all types
            
    allTypes = useSelector((state) => state.POKEMONS.allTypes);

    if (allTypes.length){ 

        let dataTypes = []; // transform id --> key & name --> value
        if (allTypes) {
        allTypes.map((item) => {
            let obj = {
            key: item.id,
            value: item.name,
            }
            dataTypes.push(obj);
        });
        }

        data = dataTypes
        //console.log(JSON.stringify(dataTypes));
    }


    async function submitForm() {

        if (!name || !hp ||!attack || !defense || !speed || !height || !weight || types.length < 1) {
            return alert('empty fields')     // if any fields is empty...
        };

        if (!image) {   // if not image indicate
            return alert('indicate one URL image')
        };

        const newPokemon = {
            name, image, hp, attack, defense, speed, height, weight,
            types
        };
        //setModalVisible(true)
        await dispatch(createPokemon(newPokemon));
        //setModalVisible(false)
            console.log(JSON.stringify(newPokemon))
        alert('The pokemon created successfully');
        clearInputs();
        navigation.navigate('Principal')
    }


    return (
        <View style={styles.container}>
            <ScrollView>
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
                <MultipleSelectList 
                    setSelected={(val) => setSelected(val)} 
                    data={data} 
                    save="value"
                    onSelect={() => setTypes(selected)}
                    label="Types"
                    badgeStyles={{backgroundColor: 'green'}}
                    checkBoxStyles={{backgroundColor: 'lightgreen', borderWidth: 2}}
                    defaultOption={{ key:'1', value:'grass' }}  //default selected option
                />
            </View> 
            <View style={{paddingHorizontal: 100}}>
                <Button
                    style={{with: 70, marginVertical: 15}}
                    title = 'Create'
                    onPress={() => submitForm()}>
                </Button>
            </View>
            </ScrollView>
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
    }
});

//make this component available to the app
export default Create;

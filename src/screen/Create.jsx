//import libraries
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { View, Text, Image, TextInput, ScrollView, StyleSheet, Pressable, Dimensions } from 'react-native';
import { delNewTypes, createPokemon, getAllPokemons } from "../../reducers";
import Ionicons from 'react-native-vector-icons/FontAwesome';
import Button from '../components/Button';
import logo1 from '../../assets/logo1.png';
import logo from '../../assets/logoPm.png';

const { width } = Dimensions.get('window');

// create a component
const Create = ( { navigation }) => {   


    const dispatch = useDispatch();

    const [valid, setValid] = useState(false)
    
    // const [open, setOpen] = useState(false);
    // const [value, setValue] = useState([]);

    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [hp, setHp] = useState('');
    const [attack, setAttack] = useState('');
    const [defense, setDefense] = useState('');
    const [speed, setSpeed] = useState('');
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');

    useEffect(() => { clearInputs() }, []);

    async function clearInputs(){
        setName('');
        setImage('');
        setHp('');
        setAttack('');
        setDefense('');
        setSpeed('');
        setHeight('')
        setWeight('')
        arrayTypes = []
    };

    let arrayTypes = "";

    let txtArrayTypes = "";

    txtArrayTypes = useSelector((state) => state.POKEMONS.newPokemonTypes);

    txtArrayTypes.length
    ? arrayTypes = txtArrayTypes.split(', ')
    : arrayTypes = "";


    function checkImageURL(URL) {   // check Image's URL
        fetch(URL)
          .then((res) => {
            if (res.status == 404) {
                return (
                    setValid(false)
                )
            } else {
                return (
                    setValid(true)
                )
            }
          })
          .catch((err) => {
            return (
                setValid(false)
            )
          });
    }

    async function submitForm() {

    // this's data validate rutine    
        if (!name) {
            return alert('Empty name`s field')     // if name is empty...
        };

        if (name.match(/[$%&/()=+-@=,.?¿'¡!"]/)) {  // if invalid character...
            return alert('Invalid character in name`s field')
        };

        if (!image) {   // if not image indicate
            return alert(`Indicate an URL image's field`)
        };

        checkImageURL(image)
        if(!valid) {  // Invalid image's URL...
            return alert(`Invalid image's URL!`)
        }

        if (!hp) {
            return alert(`Empty Hp's field`)     // if Hp's field isn`t ...
        };

        if (Math.floor(hp) < hp) {
            return alert(`Hp's value isn't integer`)
        };

        if (!attack) {
            return alert(`Empty Attack's field`)     // if Attack's field isn't ...
        };

        if (Math.floor(attack) < attack) {
            return alert(`Attack's value isn't integer`)
        };

        if (!defense) {
            return alert(`Empty Defense's field`)     // if Defense's field isn't ...
        };

        if (Math.floor(defense) < defense) {
            return alert(`Defense's value isn't integer`)
        };

        if (!speed) {
            return alert(`Empty Speed's field`)     // if Speed's field isn't ...
        };

        if (Math.floor(speed) < speed) {
            return alert(`Speed's value isn't integer`)
        };

        if (!height) {
            return alert(`Empty Height's field`)     // if Height's field isn't ...
        };

        if (Math.floor(height) < height) {
            return alert(`Height's value isn't integer`)
        };

        if (!weight) {
            return alert(`Empty Weight's field`)     // if Weight's field isn't ...
        };

        if (Math.floor(weight) < weight) {
            return alert(`Weight's value isn't integer`)
        };

        if (arrayTypes.length < 1) {
            return alert('Indicate at least one type')     // if types's fiel is empty...
        };



        const newPokemon = {        // object to send
            name: (name.toLowerCase()).trim(), image: image.trim(), hp, attack, defense, speed, height, weight, types: arrayTypes
        };
       
        await dispatch(createPokemon(newPokemon));
       
        await dispatch(getAllPokemons());
        
        clearInputs();
        
        await dispatch(delNewTypes());
        
        alert('The pokemob created successfully');
        
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
            <View style={{ flexDirection: 'row', backgroundColor: 'white', borderRadius: 30, marginTop: 15,
                                marginLeft: 5, borderLeftWidth: 1, borderBottomWidth: 4, borderRightWidth: 4, 
                                borderBottomRightRadius: 30, borderColor: 'lightgrey' }}>
                <View style={{ flex: 4, justifyContent: 'center'}}>
                    <Text style={{ fontSize: 20, justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }}>
                        Create your own poke-mob!!
                    </Text>
                </View>
                <View style={{ flex: 1, justifyContent: 'center'}}>
                    <Image style={styles.icoImage} source={ logo1 } />
                </View>
            </View>
            <ScrollView contentContainerStyle={styles.ScrollViewStyles} showsVerticalScrollIndicator= {false}>
                <View style={styles.containerHeader}>
                    <View>
                        <Text style={styles.txtStyle}>Name:</Text>
                        <TextInput 
                            style={styles.inputName} 
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
                    <View style={{ flexDirection: 'row', marginVertical: 5, marginHorizontal: 10}}>
                        <View style={{ justifyContent: 'center', alignItems: 'center'}}>
                            <Image
                                style={{width: 110, height: 100 }}
                                source={{ uri: image && valid ? `${image}` : 'https://t3.ftcdn.net/jpg/00/71/25/36/360_F_71253677_5TQN4IM0tvaKkHgd7je8iq1ddun2N51J.jpg' }}
                            />
                        </View>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                            <Button
                                style={{with: 70, marginVertical: 15}}
                                title = 'Preview Image'
                                onPress={() => checkImageURL(image)}>
                            </Button>
                        </View>
                    </View>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center'}}>
                    <View style={styles.containerItems}>    
                        <View style={styles.containerSubItems}>
                            <Text style={styles.txtStyle}>HP:</Text>
                            <TextInput 
                                style={styles.input} 
                                value={hp}
                                placeholder= 'Insert'
                                keyboardType="numeric"
                                onChangeText={setHp} />
                        </View>
                        <View style={styles.containerSubItems}>
                            <Text style={styles.txtStyle}>Attack:</Text>
                            <TextInput 
                                style={styles.input} 
                                value={attack}
                                placeholder= 'Insert'
                                keyboardType="numeric"
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
                                keyboardType="numeric"
                                onChangeText={setDefense} />
                        </View>
                        <View style={styles.containerSubItems}>
                            <Text style={styles.txtStyle}>Speed:</Text>
                            <TextInput 
                                style={styles.input} 
                                value={speed}
                                placeholder= 'Insert'
                                keyboardType="numeric"
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
                                keyboardType="numeric"
                                onChangeText={setHeight} />
                        </View>
                        <View style={styles.containerSubItems}>
                            <Text style={styles.txtStyle}>Weight:</Text>
                            <TextInput 
                                style={styles.input} 
                                value={weight}
                                placeholder= 'Insert'
                                keyboardType="numeric"
                                onChangeText={setWeight} />
                        </View>
                    </View>
                </View>
                <View style={styles.viewSelect}>
                    <View style={{paddingHorizontal: 50, marginVertical: 10}}>
                        <Button
                            style={{with: 70, marginVertical: 15}}
                            title = 'Select Types'
                            onPress={() => navigation.navigate('Select Types', {typesSelect: txtArrayTypes})}>
                        </Button>
                    </View>

                    <View style={arrayTypes.length ? styles.containerValue : styles.containerValue0}>
                    { arrayTypes
                        ? arrayTypes.map((c, index) => {         //  show selected type
                            return (
                                <View style={styles.valueLabel} key={index} >
                                    <Text style={styles.txtSelect} key={c}>{c}</Text>
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
            </ScrollView>
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
    ScrollViewStyles: {
        width: '100%',
        backgroundColor: 'transparent',
    },
    containerHeader: {
        width: 320,
        borderColor: 'orange',
        borderWidth: 2,
        borderRadius: 10,
        borderBottomWidth: 5, 
        borderRightWidth: 5, 
        borderBottomRightRadius: 10,
        backgroundColor: '#fff',
        margin: 10,
    },
    inputName: {
        backgroundColor: '#fff', 
        marginHorizontal: 10, 
        borderRadius: 3, 
        paddingHorizontal: 5, 
        borderColor: 'pink', 
        borderWidth: 1
    },
    inputImage: { 
        backgroundColor: '#fff', 
        marginHorizontal: 10, 
        marginBottom: 10,
        borderRadius: 3, 
        paddingHorizontal: 5,
        borderColor: 'pink', 
        borderWidth: 1
    },
    containerItems: {
        width:270,
        height:35,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        backgroundColor: 'transparent',
        margin: 10,
    },
    containerSubItems: {
        flexDirection: 'row',
        width: 125,
        borderColor: 'orange',
        borderWidth: 2,
        borderRadius: 10,
        borderBottomWidth: 5, 
        borderRightWidth: 5, 
        borderBottomRightRadius: 10,
        backgroundColor: '#fff',
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
        paddingLeft: 5,
        backgroundColor: '#fff',
        borderColor: 'pink',
        borderWidth: 1,
        borderRadius: 5,
    },
    viewSelect: {
        width: 320, 
        alignSelf: 'center',
        borderRightWidth: 5,
        borderBottomWidth: 5,
        borderColor: 'orange',
        borderWidth: 2,
        borderRadius: 10, 
        backgroundColor: 'white'
    },
    containerValue: {
        flexDirection: 'row',
        marginVertical: 5,
        marginBottom: 10,
        marginHorizontal: 10,
        borderWidth: 2, 
        borderRadius: 5,
        borderRadius: 10,
        borderBottomWidth: 5, 
        borderRightWidth: 5, 
        borderBottomRightRadius: 10,
        borderColor: 'pink',
        backgroundColor: '#fff'
    }, 
    containerValue0: {
        borderWidth: 0, 
    },
    valueLabel: {
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

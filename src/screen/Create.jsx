//import libraries
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import Button from '../components/Button';

// create a component
const Create = () => {
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [hp, setHp] = useState('');
    const [attack, setAttack] = useState('');
    const [defense, setDefense] = useState('');
    const [speed, setSpeed] = useState('');
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');

    return (
        <View style={styles.container}>
            <View style={styles.containerHeader}>
                <Text style={styles.txtStyle}>Name:</Text>
                <TextInput 
                    style={{width: 230, backgroundColor: '#dfffdf', marginHorizontal: 10, 
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
                        placeholder= '__________'
                        onChangeText={setHp} />
                </View>
                <View style={styles.containerSubItems}>
                    <Text style={styles.txtStyle}>Attack:</Text>
                    <TextInput 
                        style={styles.input} 
                        value={attack}
                        placeholder= ''
                        onChangeText={setAttack} />
                </View>
            </View>
            <View style={styles.containerItems}> 
                <View style={styles.containerSubItems}>
                    <Text style={styles.txtStyle}>Defense:</Text>
                    <TextInput 
                        style={styles.input} 
                        value={defense}
                        placeholder= ''
                        onChangeText={setDefense} />
                </View>
                <View style={styles.containerSubItems}>
                    <Text style={styles.txtStyle}>Speed:</Text>
                    <TextInput 
                        style={styles.input} 
                        value={speed}
                        placeholder= ''
                        onChangeText={setSpeed} />
                </View>
            </View>
            <View style={styles.containerItems}>
                <View style={styles.containerSubItems}> 
                    <Text style={styles.txtStyle}>Height:</Text>
                    <TextInput 
                        style={styles.input} 
                        value={height}
                        placeholder= ''
                        onChangeText={setHeight} />
                </View>
                <View style={styles.containerSubItems}>
                    <Text style={styles.txtStyle}>Weight:</Text>
                    <TextInput 
                        style={styles.input} 
                        value={weight}
                        placeholder= ''
                        onChangeText={setWeight} />
                </View>
            </View>

            <Button
                title = 'Create'
                onPress={(e) => handleCreate(e)}>
            </Button>
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
    },
    inputImage: {
        width: 230, 
        backgroundColor: '#dfffdf', 
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
        margin: 10,
    },
    containerSubItems: {
        flexDirection: 'row',
        width: 125,
        borderColor: 'lightgreen',
        borderWidth: 1,
        borderRadius: 5,
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
        backgroundColor: '#dfffdf',
    }
});

//make this component available to the app
export default Create;

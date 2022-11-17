//import libraries
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { View, Text, Image, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import { getAllPokemons } from "../../reducers";
import Card from '../components/Card'

// create a component
const Home = () => {

    const dispatch = useDispatch();
    useEffect(() => { dispatch(getAllPokemons()) }, [dispatch]);

    let currentPokemon = useSelector((state) => state.POKEMONS.allPokemon);

 
    return (
        <SafeAreaView style={styles.container}>
            {/* <Text style={{fontSize: 20, fontWeight: '200', marginTop: 20}}>Pokemon</Text> */}
            <ScrollView contentContainerStyle={styles.ScrollViewStyles}>
                <View>
                    {currentPokemon.length ?
                    currentPokemon?.map((item) => {    // despliege de Pokemon
                        return(
                        <View key = {item.id}>     
                            <Card  
                                key = {item.id}
                                id = {item.id} 
                                image = {item.image} 
                                name ={item.name}  
                                types = {item.types} 
                            />
                        </View>
                        ); 
                    })
                    :
                    <View style={{alignItems: 'center', justifyContent: 'center'}}>
                        <Text style={{fontSize: 20, fontWeight: '200'}}>
                            Verificando la disponibilidad de los datos...
                        </Text>
                        <Image
                            style={{ width: 200, height: 230}}
                            source={{uri:'https://s3.amazonaws.com/quipslib/load.gif'}}
                        />
                    </View>
                    }
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    ScrollViewStyles: {
        width: '100%',
        backgroundColor: 'white',
    },
});

//make this component available to the app
export default Home;

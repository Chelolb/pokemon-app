//import libraries
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { View, Text, Image, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import { getAllPokemons } from "../../reducers";
import Card from '../components/Card'
import SearchBar from "../components/SearchBar";
import { TouchableOpacity } from "react-native-gesture-handler";

// create a component
const Home = () => {

    const dispatch = useDispatch();     // call all pokemon endpoint
    useEffect(() => { dispatch(getAllPokemons()) }, [dispatch]);

    let currentPokemon = useSelector((state) => state.POKEMONS.allPokemon);

 
    return (
        <SafeAreaView style={styles.container}>
            <SearchBar/>
            <ScrollView contentContainerStyle={styles.ScrollViewStyles}>
                <View>
                {!currentPokemon.length ?    //  if array have not elements
                
                (currentPokemon.msg        
                    ?                       //  if is error menssage
                    <View>
                        <Text>{currentPokemon.msg}</Text>
                    </View>  
                    :                       //  if is searching...                  
                    <View style={{alignItems: 'center', justifyContent: 'center'}}>
                        <Text style={{fontSize: 20, fontWeight: '200'}}>
                            Searching data, a moment please...
                        </Text>
                        <Image
                            style={{ width: 200, height: 230}}
                            source={{uri:'https://s3.amazonaws.com/quipslib/load.gif'}}
                        />
                    </View>
                    )
                    :                       // if have find pokemon
                    currentPokemon?.map((item) => {    // deploy Pokemons
                        return(                      
                        <View key = {item.id}>   
                            <TouchableOpacity
                                onPress={() => alert(`Link to detail pokemon ${item.id}`)}> 
                                <Card  
                                    key = {item.id}
                                    id = {item.id} 
                                    image = {item.image} 
                                    name ={item.name}  
                                    types = {item.types} 
                                />
                            </TouchableOpacity>
                        </View>
                        
                        ); 
                    })
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

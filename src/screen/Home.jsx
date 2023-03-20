//import libraries
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { View, Text, Image, StyleSheet, ScrollView, StatusBar, SafeAreaView, Dimensions,
            Pressable, TouchableOpacity } from 'react-native';
//import { TouchableOpacity } from "react-native-gesture-handler";
import Ionicons from 'react-native-vector-icons/FontAwesome';
import { getAllPokemons } from "../../reducers";
import Card from '../components/Card';
import SearchBar from "../components/SearchBar";
import Button from "../components/Button";
import Loading from '../components/Loading';
import logo from '../../assets/logoPm.png';

const { width } = Dimensions.get('window');

// create a component
const Home = ( {navigation} ) => {

    const dispatch = useDispatch();  
    
    useEffect(() => { dispatch(getAllPokemons()) }, []);    // call all pokemon endpoint
    
    let currentPokemon = useSelector((state) => state.POKEMONS.allPokemonFiltered)

    function handleViewAll(e){       // ViewAll button function                       
        dispatch(getAllPokemons())   // call endpoint AllView;
    }

    return (

        <SafeAreaView style={styles.container}>
            <StatusBar barStyle = "light-content" hidden = {false} backgroundColor = "#372F85" translucent = {true}/>
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
                    <View style= {{ flex: 7, alignItems: 'center' }}>
                        <Image style={styles.logoImage} source={ logo } />
                    </View>    
                </View>
            </Pressable>
            <SearchBar/>
            <ScrollView contentContainerStyle={styles.ScrollViewStyles} showsVerticalScrollIndicator= {false}>
                <View>
                {!currentPokemon.length ?    //  if array have not elements
                
                (currentPokemon.msg        
                    ?                       //  if is error menssage
                    <View>
                        <View style={{ borderColor: 'red', borderWidth: 3, borderRadius: 10, marginVertical: 50}}>
                            <Text style={{ fontSize: 20, color: 'red', padding: 20}}>
                                {currentPokemon.msg}
                            </Text>
                        </View>
                        <View style={{ width: 100, marginBottom: 50, alignSelf: 'center'}}>
                        <Button                         // show ViewAll button
                            title = 'View All'
                            onPress={() => handleViewAll()}>
                        </Button>
                        </View>
                    </View>  
                    :                       //  if is searching...   
                    <View>               
                        <Loading/>
                    </View>
                    )
                    :                       // if have find pokemon
                    currentPokemon?.map((item) => {    // deploy Pokemons
                        return(                      
                        <View key = {item.id}>   
                            <TouchableOpacity
                                onPress={() => // call Detail screen and send ID
                                    navigation.navigate('Detail', {itemId: item.id})}> 
                                <Card  
                                    key = {item.id}
                                    id = {item.id} 
                                    image = {item.image} 
                                    name ={item.name}  
                                    types = {item.types} 
                                    attack = {item.attack}
                                />
                            </TouchableOpacity>
                        </View>
                        
                        ); 
                    })
                    }   
                </View>
               
            </ScrollView> 
            
            { currentPokemon.length === 1  // if have only one card...
                ?
                <View style={{marginBottom: 50}}>
                <Button                         // show ViewAll button
                    title = 'View All'
                    onPress={() => handleViewAll()}>
                </Button>
                </View>
                :
                <View></View>
            }
           
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
});

//make this component available to the app
export default Home;

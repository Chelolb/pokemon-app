//import libraries
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { View, Text, Image, StyleSheet } from 'react-native';
import { getPokemonById } from "../../reducers";
import { ScrollView, FlatList } from "react-native-gesture-handler";

// create a component
const Detail = ( {route, navigation} ) => {

    const { itemId } = route.params;

    const dispatch = useDispatch();     // call all pokemon endpoint
    useEffect(() => { dispatch(getPokemonById(itemId)) }, [dispatch]);

    let detail = useSelector((state) => state.POKEMONS.detailPokemon);

    return (
        <View style={styles.container}> 
        <ScrollView> 
            { detail.id === itemId
            ?           // if data is yet!
            <View>
                <Text style={styles.cardTitle}>{detail.name}</Text>
                <Image
                    style={styles.img}
                    source={{ uri: detail.image }}
                >
                </Image>
                <View style={styles.containerProperties}>
                <Text style={styles.txtProperties}> HP: {detail.hp}    Attack: {detail.attack}</Text>
                </View>
                <View style={styles.containerProperties}>
                <Text style={styles.txtProperties}>Defense: {detail.defense}    Speed: {detail.speed}</Text>
                </View>
                <View style={styles.containerProperties}>
                <Text style={styles.txtProperties}>Height: {detail.height}    Weight: {detail.weight}</Text>
                <Text style={styles.txtProperties}></Text>
                </View>
                <Text style={styles.titleTypes}>Types</Text>
                <View style={styles.typeContainer}>
                {detail.types?.map(index => {
                        return (
                            <Text style = {styles.typeStyle} key={index}>{index}</Text>
                        )
                    })}  
            </View>
            </View>
            :                   // if is searching data...
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{fontSize: 20, fontWeight: '200'}}>
                    Searching data, a moment please...
                </Text>
                <Image
                    style={{ width: 200, height: 230}}
                    source={{uri:'https://s3.amazonaws.com/quipslib/load.gif'}}
                />
            </View>
            }
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
        backgroundColor: '#fff',
    },
    cardTitle: {
        alignSelf: 'center',
        fontSize: 40,
        fontWeight: '400',
    },
    img: {
        width: 250,
        height: 250,
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 10,
        margin: 5,
    },
    containerProperties: {
        flexDirection: 'row',
        alignSelf: 'center',
        margin: 5,
    },
    txtProperties: {
        alignSelf: 'center',
        fontSize: 20,
    },
    titleTypes: {
        alignSelf: 'center',
        fontSize: 25,
        fontWeight: '100',    
    },
    typeContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        margin: 5
    },
    typeStyle:{
        alignSelf: 'center',
        fontSize: 20,
        marginHorizontal: 20,
        paddingHorizontal: 5,
        borderColor: 'green',
        borderWidth: 1,
        borderRadius: 5,

    }
});

//make this component available to the app
export default Detail;

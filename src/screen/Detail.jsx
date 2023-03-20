//import libraries
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import { getPokemonById } from "../../reducers";
import { ScrollView } from "react-native-gesture-handler";
import Loading from "../components/Loading";
import BackButton from '../components/BackButton';
import AttackTag from '../components/AttackTag';
import ProgressBar from '../components/ProgressBar';
import DonutGraph from '../components/DonutGraph';


const { width, height } = Dimensions.get('window');

// create a component
const Detail = ( {route, navigation} ) => {

    const { itemId } = route.params;

    const dispatch = useDispatch();     // call all pokemon endpoint
     useEffect(() => { 
        dispatch(getPokemonById(itemId));
    }, [itemId]);

    let detail = useSelector((state) => state.POKEMONS.detailPokemon);

    var valorDefense;
    var valorSpeed;
    var valorWeight;
    
    valorDefense = Math.floor(detail.defense / 1.1);
    valorSpeed = Math.floor(detail.speed / 1.1);
    valorWeight = Math.floor(detail.weight / 10);

    return (
        <View style={styles.container}> 
        <ScrollView showsVerticalScrollIndicator= {false}>

            { detail.id === itemId
            ?           // if data is yet!
            <View style={{ alignItems: 'center', marginTop: 23}}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 5,
                                height: 50, width: width }}>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', 
                                    backgroundColor: 'blue'}}>
                        <BackButton
                            onPress={() =>
                                navigation.navigate('Principal')}
                            title= ''
                            color= 'white'
                            icon = 'arrowleft'
                        />
                    </View>
                    <View style={{ flex: 10, justifyContent: 'center', alignItems: 'center', backgroundColor: 'blue'}}>
                        <Text style={styles.cardTitle}>{detail.name}</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly'}}>
                    <View style={{borderWidth: 2, borderColor: 'orange', borderRadius: 10,
                                    borderBottomWidth: 5, borderRightWidth: 5, borderBottomRightRadius: 10, 
                                    marginHorizontal: 10}}>
                        <Image
                            style={styles.img}
                            source={{ uri: detail.image }}
                        >
                        </Image>
                    </View>
                    <View style={{ justifyContent: 'space-evenly' , alignItems: 'center',
                                    marginHorizontal: 10}}>
                        
                        <View>
                            <AttackTag
                                valor = {detail.attack}
                            />
                        </View>
                        <View style={{ flexDirection: 'column', alignSelf: 'center', margin: 5 }}>
                            <Text style={styles.txtProperties}> 
                                HP
                            </Text>
                            <View style={{ margin: 5 }}>
                                <DonutGraph
                                    value = {detail.hp}
                                    maxValue = {150}
                                    donutWidth = {7}
                                    radius = {25}
                                    donutColor = {'green'}
                                    txtSize = {20}
                                    txtColor = {'blue'}
                                    inActiveDonutColor = {'#e9e9e9'}
                                    inActiveDonutWidth = {5}
                                />
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{ width: '95%', marginTop: 5 }}>
                    <View>
                        <Text style={styles.txtTitleStats}>
                            Defense: {detail.defense}
                        </Text>
                        <ProgressBar 
                            progress = {valorDefense}                            
                            height = {10} 
                            bargraphColor ="orange" 
                            inActiveColor = '#e9e9e9'
                        />
                    </View>
                    <View>
                        <Text style={styles.txtTitleStats}>
                            Speed: {detail.speed}
                        </Text>
                        <ProgressBar 
                            progress = {valorSpeed} 
                            height = {10} 
                            bargraphColor ="purple" 
                            inActiveColor = '#e9e9e9' 
                        />
                    </View>
                    <View>
                        <Text style={styles.txtTitleStats}>
                            Height: {detail.height}
                        </Text>
                        <ProgressBar 
                            progress = {detail.height}
                            height = {10} 
                            bargraphColor ="yellow" 
                            inActiveColor = '#e9e9e9'
                        />
                    </View>
                    <View>
                        <Text style={styles.txtTitleStats}>
                            Weight: {detail.weight}
                        </Text>
                        <ProgressBar 
                            progress = {valorWeight}                            
                            height = {10} 
                            bargraphColor = "blue" 
                            inActiveColor = '#e9e9e9'
                        />
                    </View>

                </View>
                <View style={{ marginTop: 10}}>
                     <Text style={styles.titleTypes}>Types</Text>
                 </View>
                 <View style={styles.typeContainer}>
                 {detail.types?.map(index => {
                         return (
                             <Text style = {styles.typeStyle} key={index}>{index}</Text>
                         )
                    })}   
                </View>

            </View>
            :                   // if is searching data...
            <View>
                <Loading/>
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
        backgroundColor: '#EECBEC',
    },
    cardTitle: {
        color: 'blue',
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        textShadowColor: 'rgba(128, 128, 255, 1)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 10,
        paddingHorizontal: 5,
        backgroundColor: 'blue'
    },
    img: {
        width: 240,
        height: 240,
        borderRadius: 10,
        backgroundColor: 'white',
        alignSelf: 'center',
    },
    superContaineProperties: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: 320,
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        margin: 3,
        marginBottom: 15,
        borderColor: 'orange',
        borderWidth: 2,
        borderBottomWidth: 5,
        borderRightWidth: 5,
        borderBottomRightRadius: 10,
        backgroundColor: 'white',
        borderRadius: 10
    },
    containerProperties: {
        flexDirection: 'row',
        alignSelf: 'center',
        margin: 5,
    },
    txtProperties: {
        alignSelf: 'center',
        fontSize: 20,
        color: 'blue'
    },
    txtTitleStats: {
        fontSize: 20,
        color: 'blue',
    },
    titleTypes: {
        color: 'blue',
        alignSelf: 'center',
        fontSize: 20,
        fontWeight: 'bold',    
    },
    typeContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: 320,
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        marginBottom: 15,
        borderColor: 'orange',
        borderWidth: 2,
        backgroundColor: 'white',
        borderRadius: 30
    },
    typeStyle:{
        alignSelf: 'center',
        fontSize: 20,
        marginHorizontal: 20,
        marginVertical: 10,
        paddingHorizontal: 5,
        borderColor: 'orange',
        borderWidth: 1,
        borderBottomWidth: 4,
        borderRightWidth: 4,
        borderRadius: 10,
        backgroundColor: '#fff',
    }
});

//make this component available to the app
export default Detail;

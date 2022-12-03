//import liraries
import React, { useState } from 'react';
import { useDispatch } from "react-redux"
import { View, Text, StyleSheet } from 'react-native';
import { getPokemonSortByName, getPokemonSortByAttack } from '../../reducers';
import { CheckBox } from '@rneui/themed';
import Button from '../components/Button';

// create a component
const SortOption = ( { navigation } ) => {

    const dispatch = useDispatch();
    
    const [name, setName] = useState(true);
    const [attack, setAttack] = useState(false)
    const [option, setOption] = useState("name")

    const [sortNameUp, setSortNameUp] = useState(true)
    const [sortNameDown, setSortNameDown] = useState(false)
    const [optionSortName, setOptionSortName] = useState("up")

    const [sortAttackUp, setSortAttackUp] = useState(false)
    const [sortAttackDown, setSortAttackDown] = useState(false)
    const [optionSortAttack, setOptionSortAttack] = useState("up")

    const optionName = () => {
        setName(true);
        setAttack(false);
        setOption("name");

        setSortNameUp(true);
        setSortNameDown(false);
        setOptionSortName("up");
        setSortAttackUp(false);
        setSortAttackDown(false);
    }

    const optionAttack = () => {
        setName(false);
        setAttack(true);
        setOption("attack");

        setSortNameUp(false);
        setSortNameDown(false);
        setOptionSortAttack("up");
        setSortAttackUp(true);
        setSortAttackDown(false);
    }

    const optionNameUp = () => {
        setSortNameUp(true);
        setSortNameDown(false);
        setOptionSortName("up");
    }

    const optionNameDown = () => {
        setSortNameUp(false);
        setSortNameDown(true);
        setOptionSortName("down");
    }

    const optionAttackUp = () => {
        setSortAttackUp(true);
        setSortAttackDown(false);
        setOptionSortAttack("up");
    }

    const optionAttackDown = () => {
        setSortAttackUp(false);
        setSortAttackDown(true);
        setOptionSortAttack("down");
    }




    function setFilter() {
        if (option === "name"){
            dispatch(getPokemonSortByName(optionSortName));
            alert(`Sort by "${option} ${optionSortName}" activate`)
            navigation.navigate('Principal')
        }
        else {
            dispatch(getPokemonSortByAttack(optionSortAttack));
            alert(`Sort by "${option} ${optionSortAttack}" activate`)
            navigation.navigate('Principal')
        }
    }


    return (
        <View style={styles.container}>
            <View style={styles.container}>
            <View style={{ width: '100%', height: 500, alignItems: 'center' }}>
                <Text style={{ fontSize: 28, fontWeight: '400', marginVertical: 15 }}>Select Sort Criteria</Text>
                <View style={styles.contRadioBtnGroup}>
                    <CheckBox
                        style = {styles.radioButton}
                        title= "Sort By Alphabetically Name"
                        center
                        checked = {name}
                        checkedIcon = "dot-circle-o"
                        uncheckedIcon='circle-o'
                        onPress={optionName}
                        />
                        {option === "attack"
                        ?
                        <View style={{ borderWidth: 2, borderColor: 'green', borderRadius: 15, alignItems: 'flex-start',
                                    margin: 10}}>
                            <CheckBox
                                disabled = {true}
                                title= "Up"
                                center
                                checked = {sortNameUp}
                                checkedIcon = "dot-circle-o"
                                uncheckedIcon='circle-o'
                                onPress={optionNameUp}
                            />                             
                            <CheckBox
                                disabled = {true}
                                title= "Down"
                                center
                                checked = {sortNameDown}
                                checkedIcon = "dot-circle-o"
                                uncheckedIcon='circle-o'
                                onPress={optionNameDown}
                            />
                        </View>
                        :
                        <View style={{ borderWidth: 2, borderColor: 'green', borderRadius: 15, alignItems: 'flex-start',
                                    margin: 10}}>
                            <CheckBox
                                title= "Up"
                                center
                                checked = {sortNameUp}
                                checkedIcon = "dot-circle-o"
                                uncheckedIcon='circle-o'
                                onPress={optionNameUp}
                            />
                            <CheckBox
                                title= "Down"
                                center
                                checked = {sortNameDown}
                                checkedIcon = "dot-circle-o"
                                uncheckedIcon='circle-o'
                                onPress={optionNameDown}
                            />
                        </View>    
                        }
                </View>
                <View style={styles.contRadioBtnGroup}>
                    <CheckBox
                        title= "Sort By Attack Level"
                        center
                        checked = {attack}
                        checkedIcon = "dot-circle-o"
                        uncheckedIcon='circle-o'
                        onPress={optionAttack}
                    />
                       {option === "name" 
                       ?
                        <View style={{ borderWidth: 2, borderColor: 'green', borderRadius: 15, alignItems: 'flex-start',
                                    margin: 10 }}>

                            <CheckBox
                                disabled = {true}
                                title= "Up"
                                center
                                checked = {sortAttackUp}
                                checkedIcon = "dot-circle-o"
                                uncheckedIcon='circle-o'
                                onPress={optionAttackUp}
                            />
                            <CheckBox
                                disabled = {true}
                                title= "Down"
                                center
                                checked = {sortAttackDown}
                                checkedIcon = "dot-circle-o"
                                uncheckedIcon='circle-o'
                                onPress={optionAttackDown}
                            />
                        </View>
                        :
                        <View style={{ borderWidth: 2, borderColor: 'green', borderRadius: 15, alignItems: 'flex-start',
                                margin: 10 }}>

                            <CheckBox
                                title= "Up"
                                center
                                checked = {sortAttackUp}
                                checkedIcon = "dot-circle-o"
                                uncheckedIcon='circle-o'
                                onPress={optionAttackUp}
                            />
                            <CheckBox
                                title= "Down"
                                center
                                checked = {sortAttackDown}
                                checkedIcon = "dot-circle-o"
                                uncheckedIcon='circle-o'
                                onPress={optionAttackDown}
                            />    
                        </View>
                        }                   
                </View>
                <Button
                    style={{with: 70, marginVertical: 25 }}
                    title = 'Set'
                    onPress={() => setFilter()}>
                </Button>
            </View>
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
    contRadioBtnGroup: {
        flex: 1,
        width: 250,
        height: 100,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: '#fff',
        margin: 5,
        borderColor: 'green',
        borderWidth: 2,
        borderRadius: 15
    }
});

//make this component available to the app
export default SortOption;

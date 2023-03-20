//import libraries
import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
//import Menu from './Menu';
import Home from '../screen/Home';
import SourceOption from '../screen/SourceOption';
import TypeFilter from '../screen/TypeFilter';
import SortOption from '../screen/SortOption';
import Create from '../screen/Create';
import About from '../screen/About';
import Detail from '../screen/Detail';
import UsedTech from '../screen/UsedTech';
import ShowBackend from '../screen/ShowBackend';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView } from '@react-navigation/drawer';
import MenuButtonItem from '../components/MenuButtonItem';
import logo from '../../assets/logoPm.png';
import SelectTypes from '../screen/SelectTypes';



const Drawer = createDrawerNavigator();

// create a component
const Main = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator 
                screenOptions= {{ headerStyle: { backgroundColor: 'blue', },
                                headerTintColor: 'white' }}
                drawerContent = {(props) => <MenuItems { ...props } />}
            >
                <Drawer.Screen name="Principal" component={Home} options={{headerShown: false}} />
                <Drawer.Screen name="Source Select" component={SourceOption} options={{headerShown: false}} />
                <Drawer.Screen name="Type Filter" component={TypeFilter} options={{headerShown: false}} />
                <Drawer.Screen name="Sort Options" component={SortOption} options={{headerShown: false}} />
                <Drawer.Screen name="Pokemon Create" component={Create} options={{headerShown: false}} /> 
                <Drawer.Screen name="About" component={About} options={{headerShown: false}} />
                <Drawer.Screen name="UsedTech" component={UsedTech} options={{headerShown: false}} />
                <Drawer.Screen name="ShowBackend" component={ShowBackend} options={{headerShown: false}} />
                <Drawer.Screen name="Detail" component={Detail} options={{headerShown: false}} />
                <Drawer.Screen name="Select Types" component={SelectTypes} options={{headerShown: false}} />
            </Drawer.Navigator>
	    </NavigationContainer>
    );
};

// *****  the visual aspect del drawer (customing)
const MenuItems = ( { navigation } ) => {

    return(
        <DrawerContentScrollView    // Menu title 
            style={styles.container}
            >
            <View style= {{ flex: 1, height: 50, justifyContent: 'center', alignItems: 'center', 
                            marginBottom: 10 }}>
                <Image style={styles.logoImage} source={ logo } />
            </View>
                                    {/* items Button  */}
            <MenuButtonItem
                text = 'Principal'
                onPress = {() => navigation.navigate('Principal')}
                icon = 'home'
                colorTxt= 'white'
                colorButton= 'blue'
            />

            <View style={{ marginBottom: 10, borderBottomWidth: 3, borderColor: 'blue'}}>
            <View style={{ flexDirection: 'row', }}>
                <View style={{ flex: 1}}>
                    <Text style={{ color: 'blue', fontSize: 20, fontWeight: 'bold'}}>Filter Option</Text>
                </View>
                <View style={{ flex: 1, justifyContent: 'center'}}>
                    <View style={{ height: 3, backgroundColor: 'blue'}}></View>
                </View>
            </View>
            <MenuButtonItem
                text = 'Source Select'
                onPress = {() => navigation.navigate('Source Select')}
                icon = 'database'
                colorTxt= 'white'
                colorButton= 'blue'
            />
            
            <MenuButtonItem
                text = 'Type Filter'
                onPress = {() => navigation.navigate('Type Filter')}
                icon = 'filter'
                colorTxt= 'white'
                colorButton= 'blue'
            />
            
            <MenuButtonItem
                text = 'Sort Options'
                onPress = {() => navigation.navigate('Sort Options')}
                icon = 'sort-amount-asc'
                colorTxt= 'white'
                colorButton= 'blue'
            />
            </View>

            <MenuButtonItem
                text = 'Pokemon Create'
                onPress = {() => navigation.navigate('Pokemon Create')}
                icon = 'plus-square'
                colorTxt= 'white'
                colorButton= 'blue'
            />
            
            <MenuButtonItem
                text = 'About'
                onPress = {() => navigation.navigate('About')}
                icon = 'drivers-license'
                colorTxt= 'white'
                colorButton= 'blue'
            />

        </DrawerContentScrollView>
    )
}

// define your styles
const styles = StyleSheet.create({
    container: {
        padding: 15,
        backgroundColor: '#EECBEC',
    },
    title: {
        width: 150,
        paddingHorizontal: 20,
        paddingVertical: 10,
        color: 'red',
        borderColor: 'red',
        borderWidth: 2,
        borderRadius: 10,
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 20
    },
    logoImage: {
        height: 50,
        Width: undefined,
        resizeMode:"contain",
        alignSelf: 'center'
    }
});

//make this component available to the app
export default Main;

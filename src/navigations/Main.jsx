//import libraries
import React from 'react';
import { StyleSheet } from 'react-native';
import Menu from './Menu';
import Create from '../screen/Create';
import About from '../screen/About';
import SourceOption from '../screen/SourceOption';
import SortOption from '../screen/SortOption';
import TypeFilter from '../screen/TypeFilter';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import StackAbout from './StackAbout';


const Drawer = createDrawerNavigator();

// create a component
const Main = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Principal" options={{ headerShown: true }}>
                <Drawer.Screen name="Principal" component={Menu} options={{ headerShown: true }} />
                <Drawer.Screen name="Source Filter" component={SourceOption} />
                <Drawer.Screen name="Type Filter" component={TypeFilter} />
                <Drawer.Screen name="Sort Options" component={SortOption} />
                <Drawer.Screen name="Pokemon Create" component={Create} /> 
                <Drawer.Screen name="About" component={StackAbout} options={{title: 'About', headerShown: true }} />
            </Drawer.Navigator>
	    </NavigationContainer>
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
});

//make this component available to the app
export default Main;

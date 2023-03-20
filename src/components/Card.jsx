//import libraries
import { View, Text, Image, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/FontAwesome';

// create a component
const Card = ({id, image, name, types, attack }) => {
    return (
        <View style={styles.container}>
            <Ionicons 
                style= {{ position: 'absolute', top: 5, left: 197}}
                name= 'flash'
                size= {60}
                color= 'red'
            />
            <Text style={{ borderRadius: 50, fontSize: 15, color: 'black', backgroundColor: 'white', 
                paddingLeft: 4, paddingRight: 3, alignSelf: 'center', borderWidth: 1, borderColor: 'blue',
                position: 'absolute', top: 22, left: attack < 100 ? 201 : 193 }}>
                    {attack}
            </Text>
            <Image
                style={styles.img}
                source={{ uri: image }}
            >
            </Image>
            <Text style={styles.cardTitle}>{ name }</Text>
            <View style={styles.typeContainer}>
                <Text style={[styles.typeStyle, {fontWeight: 'bold'}]}>Types: </Text>
                {types?.map(index => {
                        return (
                            <Text style = {styles.typeStyle} key={index}>{index}</Text>
                        )
                    })}         
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
        backgroundColor: '#f0f0f0',
        width: 240,
        height: 250,
        borderRadius: 20,
        borderWidth: 2,
        borderBottomWidth: 7,
        borderBottomRightRadius: 20,
        borderRightWidth: 7,
        borderColor: 'orange',
        margin: 20,
    },
    img: {
        width: '70%',
        height: 150,
        borderRadius: 10,
        marginTop: 10,
    },
    cardTitle: {
        fontSize: 25,
        fontWeight: '200',
    },
    typeContainer: {
        flex: 1,
        justifyContent: 'space-around',
        flexDirection: 'row',
        marginHorizontal: 5
    },
    typeStyle:{
        alignSelf: 'center',
        fontSize: 18,
        marginHorizontal: 10,
        paddingHorizontal: 5,
    },
});

//make this component available to the app
export default Card;

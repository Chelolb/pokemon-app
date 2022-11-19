//import libraries
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

// create a component
const Card = ({id, image, name, types }) => {
    return (
        <View style={styles.container}>    
            <Image
                style={styles.img}
                source={{ uri: image }}
            >
            </Image>
            <Text style={styles.cardTitle}>{ name }</Text>
            <View style={styles.typeContainer}>
                {types?.map(index => {
                        return (
                            <Text style = {styles.typeStyle} key={index}> - {index}</Text>
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
        width: 200,
        height: 230,
        borderRadius: 20,
        borderWidth: 2,
        margin: 20,
    },
    img: {
        width: '70%',
        height: 150,
        borderRadius: 10,
        margin: 5,
    },
    cardTitle: {
        fontSize: 20,
        fontWeight: '200',
    },
    typeContainer: {
        flex: 1,
        flexDirection: 'row',
        margin: 5
    },
});

//make this component available to the app
export default Card;

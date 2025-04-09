import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const AboutScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={{flexDirection: 'row', position: 'absolute', top: 80, alignItems: 'center', width: '100%', justifyContent: 'center'}}>
                <TouchableOpacity onPress={()=>{navigation.goBack()}} style={{position: 'absolute', left: 0}} >
                    <Image source={require('../assets/img/mynaui_arrow-up.png')}/>
                </TouchableOpacity>
                <Text style={{color: '#fff', fontSize: 24,fontWeight: 'bold', alignSelf: 'center'}}>
                    ABOUT
                </Text>
            </View>

            <View style={styles.header}>
                <Image source={require('../assets/img/image2копія.png')} resizeMode={'cover'} />
            </View>

                <Text style={{color: '#fff', fontSize: 20,fontWeight: 'bold'}}>Who this? fan sport duel</Text>

            <Text style={{color: '#fff', fontSize: 17,fontWeight: 'bold', textAlign: 'center', marginTop: 12}}>is an offline quiz for true sports fans. Guess the player by silhouette, description or statistics. Play alone or with a friend on the same device!
                Collect players in the gallery, unlock achievements and train your memory along with the game.</Text>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0554AB', // Синій фон
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    header: {
        alignItems: 'center',
        marginBottom: 40,
    },
    iconShield: {
        backgroundColor: 'white',
        borderRadius: 50,
        padding: 10,
        marginBottom: 10,
    },
    iconText: {
        fontSize: 30,
    },
    title: {
        fontSize: 36,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        lineHeight: 40,
    },
    button: {
        backgroundColor: 'white',
        borderRadius: 10,
        paddingVertical: 35,
        paddingHorizontal: 40,
        marginVertical: 10,
        width: '100%',
        alignItems: 'center',
    },
    buttonText: {
        color: '#000',
        fontSize: 16,
        fontWeight: '600',
    },
    bottomIcon: {
        position: 'absolute',
        bottom: 30,
        backgroundColor: 'white',
        padding: 12,
        borderRadius: 12,
    },
});


export default AboutScreen;

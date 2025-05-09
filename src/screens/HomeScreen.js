import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
               <Image source={require('../assets/img/image2.png')} resizeMode={'cover'} />
            </View>

            <TouchableOpacity style={styles.button} onPress={()=>{navigation.navigate('QuestionScreen')}}>
                <Text style={styles.buttonText}>Solo play</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={()=>{navigation.navigate('VersusStartScreen')}}>
                <Text style={styles.buttonText}>Battle with a friend</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={()=>{navigation.navigate('AchievementsScreen')}}>
                <Text style={styles.buttonText}>Achievements</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={()=>{navigation.navigate('AboutScreen')}}>
                <Text style={styles.buttonText}>About</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.bottomIcon} onPress={()=>{navigation.navigate('PlayWordScreen')}}>
                <Image source={require('../assets/img/proicons_game.png')} resizeMode={'cover'} />
            </TouchableOpacity>
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
        paddingVertical: '5%',
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
        // position: 'absolute',
        // bottom: 30,
        backgroundColor: 'white',
        padding: 12,
        borderRadius: 12,
    },
});


export default HomeScreen;

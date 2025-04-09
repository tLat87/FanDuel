import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

const VersusStartScreen = ({ navigation }) => {
    const [player1, setPlayer1] = useState('');
    const [player2, setPlayer2] = useState('');

    const canStart = player1.trim() && player2.trim();

    return (
        <View style={styles.container}>
            <View style={{flexDirection: 'row', position: 'absolute', top: 80, alignItems: 'center', width: '100%', justifyContent: 'center'}}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={{position: 'absolute', left: 0}}>
                    <Image source={require('../assets/img/mynaui_arrow-up.png')} />
                </TouchableOpacity>

            </View>
            <Image source={require('../assets/img/image2.png')} style={{marginBottom: 50}} />

            <TextInput
                placeholder="Enter Player 1 Name"
                style={styles.input}
                value={player1}
                onChangeText={setPlayer1}
                placeholderTextColor="#ccc"
            />
            <TextInput
                placeholder="Enter Player 2 Name"
                style={styles.input}
                value={player2}
                onChangeText={setPlayer2}
                placeholderTextColor="#ccc"
            />

            <TouchableOpacity
                disabled={!canStart}
                style={[styles.button, { opacity: canStart ? 1 : 0.5 }]}
                onPress={() => navigation.navigate('VersusQuestionScreen', {
                    player1,
                    player2
                })}
            >
                <Text style={styles.buttonText}>Start Game</Text>
            </TouchableOpacity>
        </View>
    );
};

export default VersusStartScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0554AB',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    input: {
        backgroundColor: 'white',
        width: '100%',
        padding: 15,
        marginBottom: 15,
        borderRadius: 10,
        fontSize: 16,
    },
    button: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 10,
        marginTop: 20,
        width: '100%',
        alignItems: 'center',
    },
    buttonText: {
        color: '#0046AD',
        fontWeight: 'bold',
        fontSize: 16,
    },
});

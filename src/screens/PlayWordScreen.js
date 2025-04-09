import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Keyboard } from 'react-native';

const words = [
    { word: "BASKET", letters: ["T", "K", "E", "S", "A", "B"] },
    { word: "GLOVES", letters: ["G", "L", "O", "V", "E", "S"] },
    { word: "KEEPER", letters: ["E", "K", "P", "R", "E", "E"] },
    { word: "SCORE", letters: ["S", "C", "O", "R", "E"] },
    { word: "PUCK", letters: ["P", "U", "C", "K"] },
    { word: "BOXING", letters: ["B", "X", "O", "I", "N", "G"] },
    { word: "STRIKER", letters: ["S", "R", "I", "T", "K", "E", "R"] },
    { word: "HELMET", letters: ["M", "E", "H", "L", "T", "E"] },
    { word: "RUN", letters: ["U", "R", "N"] },
];

const PlayWordScreen = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [input, setInput] = useState('');
    const [correct, setCorrect] = useState(false);

    const currentWord = words[currentIndex];

    const handleSubmit = () => {
        if (input.toUpperCase() === currentWord.word) {
            setCorrect(true);
            setTimeout(() => {
                setCorrect(false);
                setInput('');
                setCurrentIndex((prev) => (prev + 1) % words.length);
            }, 1000);
        } else {
            setInput('');
        }
        Keyboard.dismiss();
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>PLAYWORD</Text>

            <Text style={styles.letters}>{currentWord.letters.join(', ')}</Text>

            <TextInput
                style={styles.input}
                value={input}
                onChangeText={setInput}
                autoCapitalize="characters"
                placeholder="_ _ _ _ _"
                placeholderTextColor="#ccc"
                // onSubmitEditing={handleSubmit}
            />

            <TouchableOpacity style={styles.primaryButton} onPress={() => {handleSubmit()}}>
                <Text style={styles.primaryButtonText}>Confirm</Text>
            </TouchableOpacity>

            {correct && <Text style={styles.correct}>✅ Correct!</Text>}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0554AB',
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 40,
        fontFamily: 'serif',
    },
    primaryButton: {
        backgroundColor: '#1D52B4',
        padding: 15,
        borderRadius: 12,
        marginTop: 20,
        width: '100%',
        alignItems: 'center',
    },
    primaryButtonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
    letters: {
        fontSize: 24,
        color: 'white',
        marginBottom: 30,
        letterSpacing: 2,
    },
    input: {
        backgroundColor: 'white',
        width: '80%',
        padding: 15,
        fontSize: 20,
        borderRadius: 10,
        textAlign: 'center',
        letterSpacing: 5,
    },
    correct: {
        marginTop: 20,
        fontSize: 20,
        color: '#00FFB7',
        fontWeight: 'bold',
    },
});


export default PlayWordScreen;

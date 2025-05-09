import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { questions } from './QuestionScreen'; // или вынеси questions в отдельный файл

const VersusQuestionScreen = ({ navigation, route }) => {
    const { player1, player2 } = route.params;

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [score1, setScore1] = useState(0);
    const [score2, setScore2] = useState(0);

    const isPlayer1Turn = currentQuestion % 2 === 0;
    const currentPlayer = isPlayer1Turn ? player1 : player2;

    const question = questions[currentQuestion];

    const handleNext = () => {
        if (selectedOption === question.correctAnswerIndex) {
            isPlayer1Turn ? setScore1(score1 + 1) : setScore2(score2 + 1);
        }

        if (currentQuestion + 1 < questions.length) {
            setCurrentQuestion(currentQuestion + 1);
            setSelectedOption(null);
        } else {
            navigation.navigate('VersusResultScreen', {
                player1,
                player2,
                score1,
                score2,
            });
        }
    };

    return (
        <View style={styles.container}>
            <Image source={require('../assets/img/image2.png')} style={{marginBottom: 20}}/>
            <Text style={styles.turnText}>{currentPlayer}'s Turn</Text>
            <Text style={styles.counter}>Question {currentQuestion + 1}/{questions.length}</Text>
            <View style={styles.questionBox}>
                <Text style={styles.questionText}>{question.question}</Text>
                {question.options.map((option, index) => (
                    <TouchableOpacity
                        key={index}
                        style={[
                            styles.optionButton,
                            selectedOption === index && styles.selectedOption,
                        ]}
                        onPress={() => setSelectedOption(index)}
                    >
                        <Text style={styles.optionText}>
                            {String.fromCharCode(65 + index)}) {option}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>

            {selectedOption !== null && (
                <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
                    <Text style={styles.nextButtonText}>Next</Text>
                </TouchableOpacity>
            )}
        </View>
    );
};

export default VersusQuestionScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0554AB',
        padding: 20,
        paddingTop: 20,
    },
    turnText: {
        color: 'white',
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
    },
    counter: {
        fontSize: 16,
        color: '#fff',
        textAlign: 'center',
        marginBottom: 10,
    },
    questionBox: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 15,
        marginBottom: 20,
    },
    questionText: {
        color: '#0046AD',
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 20,
    },
    optionButton: {
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 10,
        marginBottom: 10,
        borderColor: '#0046AD',
        borderWidth: 1,
    },
    selectedOption: {
        backgroundColor: '#C6D4EC',
    },
    optionText: {
        color: '#0046AD',
        fontWeight: 'bold',
    },
    nextButton: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 20,
    },
    nextButtonText: {
        color: '#0046AD',
        fontWeight: 'bold',
    },
});

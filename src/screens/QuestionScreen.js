import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';

// questions.js
export const questions = [
    {
        id: 1,
        question: "This Portuguese forward has played for Manchester United, Real Madrid and Juventus.",
        options: ["Nani", "Joao Felix", "Cristiano Ronaldo"],
        correctAnswerIndex: 2,
    },
    {
        id: 2,
        question: "A French striker, the 2018 World Cup winner, known for his speed and play for PSG.",
        options: ["Antoine Griezmann", "Karim Benzema", "Kylian Mbappe"],
        correctAnswerIndex: 2,
    },
    {
        id: 3,
        question: 'This basketball player spent his entire career with the Chicago Bulls and is nicknamed "Air".',
        options: ["Michael Jordan", "Scottie Pippen", "Shaquille O'Neal"],
        correctAnswerIndex: 0,
    },
    {
        id: 4,
        question:
            "This footballer finished the 2020/21 season with 41 goals in the Bundesliga, breaking Gerd Muller's record.",
        options: ["Robert Lewandowski", "Erling Haaland", "Timo Werner"],
        correctAnswerIndex: 0,
    },
    {
        id: 5,
        question: "In 2006, he scored a hat trick in the final of the World Cup of Hockey.",
        options: ["Sidney Crosby", "Evgeni Malkin", "Alexander Ovechkin"],
        correctAnswerIndex: 2,
    },
    {
        id: 6,
        question: "Basketball player who spent more than 20 seasons in the NBA, all for one team - the Lakers.",
        options: ["Kobe Bryant", "Tim Duncan", "Kevin Garnett"],
        correctAnswerIndex: 0,
    },
    {
        id: 7,
        question:
            "Silhouette of a player with number 10, curly hair, short stature, famous dribbling.",
        options: ["Lionel Messi", "Ronaldinho", "Luka Modric"],
        correctAnswerIndex: 0,
    },
    {
        id: 8,
        question: "Silhouette of a tall basketball player with a beard and a headband.",
        options: ["James Harden", "Kevin Durant", "Kyrie Irving"],
        correctAnswerIndex: 0,
    },
    {
        id: 9,
        question: "A hockey player in the uniform of the Canadian national team, number 87, captain.",
        options: ["Conor McDavid", "Sidney Crosby", "John Tavares"],
        correctAnswerIndex: 1,
    },
    {
        id: 10,
        question:
            "A silhouette of a player with big shoulders, an afro, often in advertising for sports shoes.",
        options: ["LeBron James", "Stephen Curry", "Derrick Rose"],
        correctAnswerIndex: 0,
    },
];

const QuestionScreen = ({navigation}) => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [score, setScore] = useState(0);

    const question = questions[currentQuestion];

    const handleNext = () => {
        if (selectedOption === question.correctAnswerIndex) {
            setScore(score + 1);
        }

        if (currentQuestion + 1 < questions.length) {
            setCurrentQuestion(currentQuestion + 1);
            setSelectedOption(null);
        } else {
            navigation.navigate('ResultScreen', { score, total: questions.length });
        }
    };

    return (
        <View style={styles.container}>
            <View style={{flexDirection: 'row', position: 'absolute', top: 80, alignItems: 'center', width: '100%', justifyContent: 'center'}}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={{position: 'absolute', left: 0}}>
                    <Image source={require('../assets/img/mynaui_arrow-up.png')} />
                </TouchableOpacity>

            </View>
            <View style={{marginTop: 70}}>
                <Image source={require('../assets/img/image2.png')} resizeMode={'cover'} />
            </View>

            <View style={styles.questionBox}>
                <Text style={styles.questionCounter}>
                    Question {currentQuestion + 1}/{questions.length}
                </Text>
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

export default QuestionScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0554AB',
        padding: 20,
        paddingTop: 60,
    },
    questionCounter: {
        fontSize: 18,
        color: '#000',
        alignSelf: 'center',
        fontWeight: 'bold',
        marginBottom: 20,
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
        backgroundColor: '#004EA245',
        padding: 20,
        borderRadius: 15,
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
        marginTop: 20,
        alignItems: 'center',
    },
    nextButtonText: {
        color: '#0046AD',
        fontWeight: 'bold',
    },
});

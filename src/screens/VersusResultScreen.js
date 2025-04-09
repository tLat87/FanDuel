import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Share from 'react-native-share';

const VersusResultScreen = ({ route, navigation }) => {
    const { player1, player2, score1, score2 } = route.params;

    let winnerText;
    if (score1 > score2) winnerText = `${player1} wins! 🏆`;
    else if (score2 > score1) winnerText = `${player2} wins! 🏆`;
    else winnerText = "It's a draw! 🤝";

    const handleShare = async () => {
        try {
            const shareOptions = {
                title: 'My Quiz Results',
                message: `${player1} just scored ${score1} and ${player2} just scored ${score2} in "Who this?" quiz! ⚽🏀🏒 Try to beat me!`,
            };
            await Share.open(shareOptions);
        } catch (err) {
            console.log('Sharing error:', err);
        }
    };

    return (
        <View style={styles.container}>
            <Image source={require('../assets/img/image2.png')} style={{marginBottom: 30}} />


            <View style={styles.resultBox}>
                <Text style={styles.answersTitle}>Answers:</Text>

                <View style={styles.resultRow}>
                    <View style={[styles.iconBox, { backgroundColor: '#1D52B4' }]}>
                        <Text style={styles.iconText}>{score1}</Text>
                    </View>
                    <Text style={styles.answerText}>{player1}</Text>
                </View>

                <View style={styles.resultRow}>
                    <View style={[styles.iconBox, { backgroundColor: '#1D52B4' }]}>
                        <Text style={styles.iconText}>{score2}</Text>
                    </View>
                    <Text style={styles.answerText}>{player2}</Text>
                </View>

                <TouchableOpacity style={styles.primaryButton} onPress={() => navigation.replace('QuestionScreen')}>
                    <Text style={styles.primaryButtonText}>Try again</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.secondaryButton} onPress={handleShare}>
                    <Text style={styles.secondaryButtonText}>Share result</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity onPress={() => navigation.pop(3)}>
                <Text style={styles.backHome}>Back home</Text>
            </TouchableOpacity>

        </View>
    );
};

export default VersusResultScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0554AB',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    resultBox: {
        backgroundColor: 'white',
        width: '100%',
        borderRadius: 20,
        marginTop: '20%',
        padding: 20,
        alignItems: 'center',
        marginBottom: 30,
    },
    answersTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        alignSelf: 'flex-start',
        marginBottom: 20,
        color: '#333',
    },
    resultRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
        alignSelf: 'flex-start',
    },
    iconBox: {
        width: 30,
        height: 30,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    },
    iconText: {
        color: 'white',
        fontWeight: 'bold',
    },
    answerText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#444',
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
    secondaryButton: {
        borderColor: '#1D52B4',
        borderWidth: 2,
        padding: 15,
        borderRadius: 12,
        marginTop: 15,
        width: '100%',
        alignItems: 'center',
    },
    secondaryButtonText: {
        color: '#1D52B4',
        fontWeight: 'bold',
        fontSize: 16,
    },
    backHome: {
        marginTop: 20,
        color: 'white',
        fontWeight: '600',
        fontSize: 16,
    },


});

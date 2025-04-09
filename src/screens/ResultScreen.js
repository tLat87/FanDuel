import React, {useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image, Dimensions} from 'react-native';
import Share from 'react-native-share';
import {useDispatch, useSelector} from 'react-redux';
import {addAchievement} from '../redux/slices/achievementsSlice';

const achievements = [
    {
        id: 1,
        title: 'First Player',
        description: '1 correct answer',
        image: require('../assets/img/solar_cup-first-outline.png'),
    },
    {
        id: 2,
        title: 'Sports Analyst',
        description: '10 correct answers in a row',
        image: require('../assets/img/icon-park-outline_sport.png'),
    }
]

const ResultScreen = ({ route, navigation }) => {
    const { score, total } = route.params;
    const incorrect = total - score;

    const dispatch = useDispatch();
    const userAchievements = useSelector(state => state.achievements.achievements);


    useEffect(() => {
        if (score >= 1) {
            const alreadyHasFirst = userAchievements.some(a => a.id === 1);
            if (!alreadyHasFirst) {
                dispatch(addAchievement({
                    id: 1,
                    title: '“First Player”',
                    description: '1 correct answer',
                    image: require('../assets/img/solar_cup-first-outline.png'),
                }));
            }
        }

        if (score === total) {
            const alreadyHasSecond = userAchievements.some(a => a.id === 2);
            if (!alreadyHasSecond) {
                dispatch(addAchievement({
                    id: 2,
                    title: '“Sports Analyst” ',
                    description: '10 correct answers in a row',
                    image: require('../assets/img/icon-park-outline_sport.png'),
                }));
            }
        }
    }, [score, total, dispatch]);

    const handleShare = async () => {
        try {
            const shareOptions = {
                title: 'My Quiz Results',
                message: `I just scored ${score} out of ${total} in "Who this?" quiz! ⚽🏀🏒 Try to beat me!`,
            };
            await Share.open(shareOptions);
        } catch (err) {
            console.log('Sharing error:', err);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={require('../assets/img/image2.png')} resizeMode={'cover'} />
            </View>

            <View style={styles.resultBox}>
                <Text style={styles.answersTitle}>Answers:</Text>

                <View style={styles.resultRow}>
                    <View style={[styles.iconBox, { backgroundColor: '#B71C1C' }]}>
                        <Text style={styles.iconText}>✓</Text>
                    </View>
                    <Text style={styles.answerText}>Incorrect: {incorrect}</Text>
                </View>

                <View style={styles.resultRow}>
                    <View style={[styles.iconBox, { backgroundColor: '#4CAF50' }]}>
                        <Text style={styles.iconText}>✓</Text>
                    </View>
                    <Text style={styles.answerText}>Correct: {score}</Text>
                </View>

                <TouchableOpacity style={styles.primaryButton} onPress={() => navigation.replace('QuestionScreen')}>
                    <Text style={styles.primaryButtonText}>Try again</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.secondaryButton} onPress={handleShare}>
                    <Text style={styles.secondaryButtonText}>Share result</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity onPress={() => navigation.pop(2)}>
                <Text style={styles.backHome}>Back home</Text>
            </TouchableOpacity>
        </View>
    );
};

export default ResultScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1D52B4',
        alignItems: 'center',
        padding: 20,
        paddingTop: 60,
    },
    logo: {
        color: 'white',
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        lineHeight: 40,
        marginBottom: 20,
    },
    title: {
        fontSize: 28,
        color: 'white',
        fontWeight: 'bold',
        marginBottom: 20,
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

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';

const AchievementsScreen = ({ navigation }) => {
    const achievements = useSelector(state => state.achievements.achievements);
    console.log(achievements);
    return (
        <View style={styles.container}>
            <View style={{flexDirection: 'row', position: 'absolute', top: 80, alignItems: 'center', width: '100%', justifyContent: 'center'}}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={{position: 'absolute', left: 0}}>
                    <Image source={require('../assets/img/mynaui_arrow-up.png')} />
                </TouchableOpacity>
                <Text style={{color: '#fff', fontSize: 24, fontWeight: 'bold'}}>
                    Achievements
                </Text>
            </View>

            <View style={styles.header}>
                <Image source={require('../assets/img/image2.png')} resizeMode={'cover'} />
            </View>

            {achievements.length === 0 ? (
                <Text style={styles.emptyText}>
                    You don't have any achievements yet!
                    {'\n'}Play and get them!
                </Text>
            ) : (
                <View contentContainerStyle={styles.list} showsVerticalScrollIndicator={false}>
                    {achievements.map((ach) => (
                        <View key={ach.id} style={styles.card}>
                            <Image source={ach.image} style={styles.achImage} />
                            <View style={styles.achContent}>
                                <Text style={styles.achTitle}>{ach.title}</Text>
                                <Text style={styles.achDescription}>{ach.description}</Text>
                            </View>
                        </View>
                    ))}
                </View>
            )}
        </View>
    );
};

export default AchievementsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0554AB',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 60,
    },
    header: {
        alignItems: 'center',
        marginBottom: 20,
        marginTop: 100,
    },
    emptyText: {
        color: '#fff',
        fontSize: 17,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 12,
    },
    list: {
        paddingBottom: 40,
        width: '100%',
    },
    card: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderRadius: 12,
        width: '100%',
        padding: 15,
        marginBottom: 15,
        alignItems: 'center',
    },
    achImage: {
        width: 50,
        height: 50,
        marginRight: 15,
        resizeMode: 'contain',
    },
    achContent: {
        flex: 1,
    },
    achTitle: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#333',
    },
    achDescription: {
        fontSize: 14,
        color: '#666',
        marginTop: 4,
    },
});

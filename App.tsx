import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";
import {persistor, store} from "./src/redux/store";
import HomeScreen from "./src/screens/HomeScreen";
import QuestionScreen from "./src/screens/QuestionScreen";
import ResultScreen from "./src/screens/ResultScreen";
import AboutScreen from "./src/screens/AboutScreen";
import AchievementsScreen from "./src/screens/AchievementsScreen";
import VersusQuestionScreen from "./src/screens/VersusQuestionScreen";
import VersusStartScreen from "./src/screens/VersusStartScreen";
import VersusResultScreen from "./src/screens/VersusResultScreen";
import PlayWordScreen from "./src/screens/PlayWordScreen";

const Stack = createStackNavigator();

const leftCu = () => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={() => {navigation.goBack()}} style={{marginLeft: 16, transform: [{scaleX: -1}]}}>

        </TouchableOpacity>
        )
    }

export default function App() {

    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <NavigationContainer>
                    {/*<BackgroundMusic />*/}
                    <Stack.Navigator screenOptions={{
                        headerStyle: { backgroundColor: '#000000', },
                        headerLeft: leftCu,
                        headerTitle: () => (
                            <View style={{flexDirection: 'row', alignItems: 'center', alignSelf: 'flex-end', width: '100%'}}>
                            {/*<Text>*/}
                            {/*    Wonders of Holland*/}
                            {/*</Text>*/}
                            </View>
                        ),
                        headerShadowVisible: false,
                    }}>

                        {/*<Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />*/}
                        {/*<Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />*/}
                        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
                        <Stack.Screen name="QuestionScreen" component={QuestionScreen} options={{ headerShown: false }} />
                        <Stack.Screen name="ResultScreen" component={ResultScreen} options={{ headerShown: false }} />
                        <Stack.Screen name="AboutScreen" component={AboutScreen} options={{ headerShown: false }} />
                        <Stack.Screen name="AchievementsScreen" component={AchievementsScreen} options={{ headerShown: false }} />

                        <Stack.Screen name="VersusQuestionScreen" component={VersusQuestionScreen} options={{ headerShown: false }} />
                        <Stack.Screen name="VersusStartScreen" component={VersusStartScreen} options={{ headerShown: false }} />
                        <Stack.Screen name="VersusResultScreen" component={VersusResultScreen} options={{ headerShown: false }} />

                        <Stack.Screen name="PlayWordScreen" component={PlayWordScreen} options={{ headerShown: false }} />
                    </Stack.Navigator>
                </NavigationContainer>
          </PersistGate>
         </Provider>
    );
}

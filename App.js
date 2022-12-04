import React from "react";
import CustomButton from "./components/customButton";
import Intro from "./screens/intro";
import Places from "./screens/places";
import City from "./screens/city";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
    StyleSheet,
    Text,
    View,
    StatusBar,
    ImageBackground,
    Image,
    useWindowDimensions,
} from "react-native";
function App() {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Intro"
                screenOptions={{
                    headerShown: true,
                    title: "",
                    headerTransparent: true,
                    headerTintColor: "white",
                }}
            >
                <Stack.Screen name="Intro" component={Intro} />
                <Stack.Screen name="Places" component={Places} />
                <Stack.Screen name="City" component={City} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default App;

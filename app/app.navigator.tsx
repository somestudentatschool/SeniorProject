import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "./screens/login/login.screen";
import HomeScreen from "./screens/home/home.screen";
import { RegisterScreen } from "./screens/register/register.screen";
import { EventCreationScreen } from "./screens/eventCreation/eventCreation.screen";

const { Navigator, Screen } = createStackNavigator();

const LateLessNavigator = () => (
    <NavigationContainer>
        <Navigator screenOptions={{
            headerShown: false
        }} initialRouteName="Login">
            <Screen name = "Login" component = {LoginScreen}></Screen>
            <Screen name = "Home" component = {HomeScreen}></Screen>
            <Screen name = "Register" component = {RegisterScreen}></Screen>
            <Screen name = "Event" component = {EventCreationScreen}></Screen>
        </Navigator>
    </NavigationContainer>
)

export default LateLessNavigator;
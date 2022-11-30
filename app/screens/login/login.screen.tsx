import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { Card, TextInput, Button } from 'react-native-paper';
import { loginStyle } from './login.style';

export const LoginScreen = () => {
    //I WAS HERE AND GIT WORKS

    return (
        <SafeAreaView style = {loginStyle.content}>
            <View style = {loginStyle.view}>
                <Card>
                    <Card.Title title="Delivery app" titleStyle={loginStyle.cardTitle}></Card.Title>
                    <Card.Content>
                        <TextInput label = "Email" keyboardType = "email-address"></TextInput>
                        <TextInput label = "Password" secureTextEntry = {true}></TextInput>
                        <Button uppercase = {false} style = {loginStyle.cardButton}>Forgot email/password</Button>
                        <Button mode="contained" style = {loginStyle.cardButton}>Login</Button>
                        <Button style = {loginStyle.cardButton}>Register</Button>
                    </Card.Content>
                </Card>
            </View>
        </SafeAreaView>
    );
}

export default LoginScreen;
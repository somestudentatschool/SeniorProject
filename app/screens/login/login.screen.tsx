import React, {useState} from 'react';
import { SafeAreaView, View, Alert } from 'react-native';
import { Card, TextInput, Button, Text } from 'react-native-paper';
import { validatePassword, validateEmail } from '../../logic/validators';
import { loginStyle } from './login.style';

interface LoginScreenProps {
    navigation: any;
}


export const LoginScreen = (props: LoginScreenProps) => {
    //STATES
    const [state, setState] = useState(1)
    const [email, setEmail] = useState('XXX');
    const [password, setPassword] = useState('XXX'); 


    //EVENT HANDLERS
    const loginClickHandler = () => {
        let resultEmail = validateEmail(email);
        if(resultEmail.length!=0){
            Alert.alert(`Invalid Entry: ${resultEmail}`);
            setState(2)
            return;
        }
        let resultPass = validatePassword(email);
        if(resultPass.length!=0){
            Alert.alert(`Invalid Entry: ${resultPass}`);
            setState(2)
            return;
        }
        //TODO: DB CODER
        console.log(email);
        console.log(password);
        login();
        
    };
    //NAVIGATION
    const login = () => props.navigation.navigate("Home");
    const register = () => props.navigation.navigate("Register");

    return (
        <SafeAreaView style = {loginStyle.content}>
            <View style = {loginStyle.view}>
                <Card>
                    <Card.Title title="LateLess" titleStyle={loginStyle.cardTitle}></Card.Title>
                    <Card.Content>
                        { state == 2 ?
                            <Text style = {loginStyle.warningText}> Incorrect Username or Password</Text>
                        : null}
                        <TextInput label = "Email" keyboardType = "email-address" onChangeText={(val)=>setEmail(val)}></TextInput>
                        <TextInput label = "Password" secureTextEntry = {true} onChangeText={(val)=>setPassword(val)}></TextInput>
                        <Button uppercase = {false} style = {loginStyle.cardButton}>
                            <Text style={loginStyle.text}>Forgot Email/Password</Text>
                        </Button>
                        <Button onPress = {loginClickHandler} mode="contained" style = {loginStyle.cardButton}>Login</Button>
                        <Button onPress = {register} style = {loginStyle.cardButton}>Register</Button>
                    </Card.Content>
                </Card>
            </View>
        </SafeAreaView>
    );
}

export default LoginScreen;
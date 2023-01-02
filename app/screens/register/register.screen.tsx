import React, {useState} from "react";
import { SafeAreaView, ScrollView, View} from "react-native";
import { Appbar, Button, TextInput} from "react-native-paper";
import { Header } from "react-native/Libraries/NewAppScreen";
import { registerStyle } from "./register.style";

interface RegisterScreenProps {
    navigation: any;
}

export const RegisterScreen = (props: RegisterScreenProps) => {

    //STATES:
    const [email, setEmail] = useState('XXX');
    const [phone, setPhone] = useState('XXX-XXX-XXXX');
    const [name, setName] = useState('XXX');
    const [password, setPassword] = useState('XXX'); 
    const [password2, setPassword2] = useState('XXX'); 

    //EVENT Handlers
    const registerClickHandler = () => {
        console.log(email);
        console.log(name);
        console.log(phone);
        console.log(password);
        console.log(password2);
        register();
    };

    //NAVIGATION

    const register = () => props.navigation.navigate("Home")
    return(
        <SafeAreaView>
            <ScrollView>
                <Appbar>
                    <Appbar.Content title ="Register" />
                </Appbar>
                    <TextInput label="Name" onChangeText={(val)=>setName(val)}/>
                    <TextInput label="Email" keyboardType="email-address" onChangeText={(val)=>setEmail(val)}/>
                    <TextInput label="Password" secureTextEntry={true} right = {<TextInput.Icon icon="eye-off-outline" color = {registerStyle.icon.color}/> } onChangeText={(val)=>setPassword(val)}/>
                    <TextInput label="Confirm Password" secureTextEntry={true} right = {<TextInput.Icon icon="eye-off-outline" color = {registerStyle.icon.color}/> } onChangeText={(val)=>setPassword2(val)}/>
                    <TextInput label="Phone Number" keyboardType="phone-pad" onChangeText={(val)=>setPhone(val)}/>
                    <Button onPress = {registerClickHandler} mode = "contained" style = {registerStyle.button}>Register</Button>
            </ScrollView>
        </SafeAreaView>
    );

} 
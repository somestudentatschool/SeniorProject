import React, {useState} from "react";
import { Alert, SafeAreaView, ScrollView, View} from "react-native";
import { Appbar, Button, TextInput} from "react-native-paper";
import { Header } from "react-native/Libraries/NewAppScreen";
import { validateEmail, validatePassword, validatePhoneNumber, validateUserName } from "../../logic/validators";
import { registerStyle } from "./updateProfile.screen";

interface UpdateProfileScreenProps {
    navigation: any;
}

export const UpdateProfileScreen = (props: UpdateProfileScreenProps) => {

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
        let resultEmail = validateEmail(email);
        if(resultEmail.length!=0){
            Alert.alert(`Invalid Entry: ${resultEmail}`);
            return;
        }
        let resultName = validateUserName(name);
        if(resultName.length!=0){
            Alert.alert(`Invalid Entry: ${resultName }`);
            return;
        }
        let resultPhone = validatePhoneNumber(phone);
        if(resultPhone.length!=0){
            Alert.alert(`Invalid Entry: ${resultPhone }`);
            return;
        }
        let resultPass = validatePassword(password);
        if(resultPass.length!=0){
            Alert.alert(`Invalid Entry: ${resultPass }`);
            return;
        }
        if(!(password.trim()===password2.trim())){
            Alert.alert('Passwords do not match');
            return;
        }
        update();
    };

    //NAVIGATION

    const update = () => props.navigation.navigate("Home")
    return(
        <SafeAreaView>
            <ScrollView>
                <Appbar>
                    <Appbar.Content title ="Update Information" />
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
import React from "react";
import { SafeAreaView, ScrollView, View} from "react-native";
import { Appbar, Button, TextInput} from "react-native-paper";
import { Header } from "react-native/Libraries/NewAppScreen";
import { registerStyle } from "./register.style";

interface RegisterScreenProps {
    navigation: any;
}

export const RegisterScreen = (props: RegisterScreenProps) => {

    const register = () => props.navigation.navigate("Home")

    return(
        <SafeAreaView>
            <ScrollView>
                <Appbar>
                    <Appbar.BackAction />
                    <Appbar.Content title ="Register" />
                </Appbar>
                    <TextInput label="Name"/>
                    <TextInput label="Email" keyboardType="email-address"/>
                    <TextInput label="Password" secureTextEntry={true} right = {<TextInput.Icon icon="eye-off-outline" color = {registerStyle.icon.color}/> }/>
                    <TextInput label="Confirm Password" secureTextEntry={true} right = {<TextInput.Icon icon="eye-off-outline" color = {registerStyle.icon.color}/> }/>
                    <TextInput label="Phone Number" keyboardType="phone-pad"/>
                    <Button onPress = {register} mode = "contained" style = {registerStyle.button}>Register</Button>
            </ScrollView>
        </SafeAreaView>
    );

} 
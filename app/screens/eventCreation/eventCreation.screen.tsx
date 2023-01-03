import React, {useState} from 'react';
import { SafeAreaView, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Card, TextInput, Button, Text, Appbar } from 'react-native-paper';
import App from '../../../App';
import { eventCreationStyle } from './eventCreation.style';


interface EventScreenProps {
    navigation: any;
}

export const EventCreationScreen =  (props: EventScreenProps) => {
    const [name, setName] = useState('XXX');
    const [address, setAddress] = useState('XXX');

    const EventCreationClickHandler = () => {
        console.log(name);
        console.log(address);
        eventCreation();
    };

    const eventCreation = () => props.navigation.navigate("Home")

    return(
        <SafeAreaView>
            <ScrollView>
                <Appbar>
                    <Appbar.Content title = "Event Creation"/>
                </Appbar>
                    <TextInput label="Name" onChangeText={(val)=>setName}/>
                    <TextInput label="Address" onChangeText={(val)=>setAddress}/>
                    <Button onPress = {EventCreationClickHandler} mode = "contained" style = {eventCreationStyle.button}>Creat Event</Button>
            </ScrollView>
        </SafeAreaView>
    );


    
}

//export default EventCreationScreen;
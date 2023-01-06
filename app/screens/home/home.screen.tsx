import React, { Component, useEffect, useState } from "react";
import { StyleSheet, View, SafeAreaView, PermissionsAndroid, Text } from "react-native";
import MapboxGL from "@rnmapbox/maps";
import { styleExtras } from "@rnmapbox/maps/javascript/utils/styleMap";
import { homeStyle } from "./home.style";
import { Appbar, Button} from "react-native-paper";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { EventCreationScreen } from "../eventCreation/eventCreation.screen";
import ListFriends from "../friendList/showFriends";
import AttendeePopupCard from "../../components/attendee-popup";
import { Item } from "react-native-paper/lib/typescript/components/Drawer/Drawer";


MapboxGL.setWellKnownTileServer("Mapbox");
MapboxGL.setAccessToken("sk.eyJ1IjoiZGVyYW5nZWQwMSIsImEiOiJjbDkzemtjOWQxeTBrM3Vuemx1NHIzdjA4In0.SovOvhWdZ79MsJ7dHcjXtA");

// Interface for home screen props

interface HomeScreenProps {
  navigation: any;
}

// Drawer navigator for the side menu

const Drawer = createDrawerNavigator();

// Permission request

const requestLocationPermission = async () => {
  try {
    await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION && PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION
    )
    const granted = await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION && PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION);
    if (granted) {
      console.log("You can use the location");
    } else {
      console.log("location permission denied");
    }
  } catch (err) {
    console.warn(err)
  }
};

const HomeMenu=()=>{
  useEffect(() =>{requestLocationPermission()},[]);
  //these are the coordinates to display. Its array form so pay 
  //attention to the {[]} sytax
  //ALSO: please remember, coordinates are in format LONGITUDE,LATITUDE in Mapbox
  const [coordinates] = useState([-97.2, 32.8]);
  const [state, setState] = useState(2);

  //dummy data
  const[attendee, setAttendee] = useState([
    {text: 'Matthew', description: 'on the way'},
  ]);



  //MapView is the map BUT Camera is the 
  //visual MAP. YOU CANNOT CHANGE THE MAPVIEW, modify by altering camera settings
  //the pointAnnotation is what adds markers. 
  return (
      <SafeAreaView style = {homeStyle.page}>
          <View style={homeStyle.container}>
          <MapboxGL.MapView style={homeStyle.map}>
              <MapboxGL.Camera
              zoomLevel={7}
              centerCoordinate={coordinates}
              />
              <MapboxGL.UserLocation visible={true} />
          <MapboxGL.PointAnnotation coordinate={coordinates} />
          <MapboxGL.PointAnnotation coordinate={[-97, 32]} />
          <MapboxGL.PointAnnotation coordinate={[-98, 32.5]} />
        </MapboxGL.MapView>
            {
                state == 2 ?
                <AttendeePopupCard name = {attendee[0].text} description = {attendee[0].description}/>
                :null
            }
          </View>
      </SafeAreaView>
  )
}

// This is where the drawer content goes

const HomeScreen=()=>{
  return(
    <Drawer.Navigator initialRouteName="Home Menu" screenOptions={{
      drawerStyle: {
        backgroundColor: 'rgb(154,42,42)',
        width: 240,
      },}}>
      <Drawer.Screen name="Home Menu" component={HomeMenu} options = {{ title: 'Home Menu', headerStyle: {backgroundColor: "rgb(154,42,42)"}}}/>
      <Drawer.Screen name= "Event Menu" component={EventCreationScreen} options = {{ title: 'Event Menu', headerStyle: {backgroundColor: "rgb(154,42,42)"}}}></Drawer.Screen>
      <Drawer.Screen name= "Friend List" component={ListFriends} options = {{ title: 'Friends List', headerStyle: {backgroundColor: "rgb(154,42,42)"}}}></Drawer.Screen>  
    </Drawer.Navigator>
  )
}

export default HomeScreen;

import React from "react";
import { View, StyleSheet } from "react-native";
import {  Button, Card, IconButton, List} from "react-native-paper"; 
import { Item } from "react-native-paper/lib/typescript/components/Drawer/Drawer";

export default function AttendeePopupCard(props: any){
    return(
            <Card>
                    <Card.Content>
                        <List.Item
                            title = {props.name}
                            description = {props.description}
                            left = {()=> 
                                <IconButton
                                    icon = "account-clock"
                                    size = {30}
                                    style = {styles.icon}
                                />


                            }
                            right = {()=> 
                                <View>
                                    <Button mode = "contained">Back</Button>
                                </View>
                            }/>
                    </Card.Content> 
                </Card>
    )
}

const styles = StyleSheet.create({
    icon:{
        color: 'rgb(154,42,42)',
        marginTop: 20
      },
      cancelButton:{
        marginBottom:10
  
      },  

  })
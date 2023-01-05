
import React from "react";
import { View, StyleSheet } from "react-native";
import {  Button, Card, IconButton, List} from "react-native-paper"; 

export const AttendeePopupCard=(props: any) => {
    return(
            <Card>
                    <Card.Content>
                        <List.Item
                            title = "test"
                            description = "test description"
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
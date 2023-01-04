import React, { useState } from 'react';
import {SafeAreaView, Text, ScrollView, FlatList, TouchableOpacity, View, Alert} from 'react-native';
import MapboxGL from '@rnmapbox/maps';
import styles from './showFriendsStyle';

const ListFriends = () => {

    // Data from the database used id for identifying records
    const [people, setPeople] = useState([
      { name: 'Matthew McNatt', id: '1'},
      { name: 'Nghia Lam', id: '2'},
      { name: 'Trieu Nguyen', id: '3'},
      { name: 'Colby Wylrick', id: '4'},
      { name: 'Gia Dao', id: '5'},
      { name: 'Ethan Hunt', id: '6'},
      { name: 'John Doe', id: '7'},
      { name: 'Mark Antony', id: '8'},
    ]);
  
    const pressHandler = (id: string) => {
      Alert.alert('You pressed on friend ' + id)
    }
  
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Friends</Text>
        </View>
  
        <FlatList 
          keyExtractor={(item) => (item.id)} // use keyExtractor to iterate through the list with id as key
          data={people}
          renderItem = { ({item}) => (
            <TouchableOpacity onPress={() => pressHandler(item.id)}>
              <Text style={styles.text}> {item.name} </Text>
            </TouchableOpacity>
          )}
        />
      {/* <ScrollView>
        { people.map(item => ( 
              <View key={item.key}>
                <Text style={styles.text}>{item.name}</Text>
              </View>
            ))
        }
      </ScrollView> */}
  
      </SafeAreaView>
    );
  }
  
  export default ListFriends;
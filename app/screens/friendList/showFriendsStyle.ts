import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: 'black',
        flexDirection: 'column'
    },
  
    header: {
        height: 80,
        paddingTop: 20,
        backgroundColor: '#fff8dc'
    },
  
    text:{
        marginTop: 24,
        padding: 30, 
        color: 'black',
        backgroundColor: 'white',
        borderRadius: 10,
        fontSize: 24
    },

    title:{
        color: 'black',
        fontSize: 30,
        fontWeight: 'bold',
        fontFamily: 'Calibri',
    }
  });

export default styles;
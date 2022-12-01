import { StyleSheet } from "react-native"
import { theme } from "../../../App.style"

export const registerStyle = StyleSheet.create({
    content : {
        padding: 15,
        paddingTop: 0
    },
    icon: {
        color: theme.colors.primary
    },
    button:{
        margin: 15,
        marginRight:0,
        marginLeft:0
    },
    background:{
        backgroundColor: "rgb(154,42,42)"
    },
    Title: {
        fontWeight: "bold",
        color: "rgb(64,64,64)",
        fontSize: 24,
        
    },
})
import { StyleSheet} from "react-native";

export const loginStyle = StyleSheet.create({
    content: {
        display: "flex",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        backgroundColor: "rgb(154,42,42)"
    },
    view: {
        width: "80%"
    },
    cardTitle: {
        fontWeight: "bold",
        color: "rgb(64,64,64)",
        fontSize: 24,
        
    },
    cardButton: {
        margin: 2,
        marginLeft: 0,
        marginRight: 0,
    },
    text: {
        color: "rgb(0,71,100)"
    }
})
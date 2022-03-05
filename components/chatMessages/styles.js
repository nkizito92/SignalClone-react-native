import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        zIndex: 20 ,
        flexDirection: 'row',
        padding: 10,
        backgroundColor: "#2f285f",
        borderBottomWidth: 1,
        borderColor: '#0a052a',
    },
    rightContainer: {
        flex: 1,
        justifyContent: 'center'
    },
    name: {
        fontSize: 18,
        color: '#ffff',
        fontWeight: 'bold'
    },
    text: {
        color: "#fffa",
        fontSize: 16
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    image: {
        height: 50,
        width: 50,
        borderRadius: 20,
        marginRight: 10
    },
    badgeContainer: {
        position: 'absolute',
        left: 50,
        top: 10,
        backgroundColor: "#00a0ff",
        borderWidth: 1,
        borderColor: '#000000',
        width: 20,
        height: 20,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    badgeText: {
        color: '#ffff',
        fontWeight: '800',
        fontSize: 12
    }
})

export default styles
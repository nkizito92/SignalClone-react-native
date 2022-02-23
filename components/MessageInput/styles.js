import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    root: {
        position: 'absolute',
        zIndex: 100,
        width: '90%',
        flexDireaction: 'row',
        padding: 10,
        bottom: 0
    },

    buttonContainer: {
        position: 'absolute',
        right: -35,
        bottom: 10,
        width: 50,
        height: 50,
        backgroundColor: '#33777f',
        borderRadius: 25,
        justityContent: 'center',
        alignItems: 'center'
    },

    buttonText: {
        color: 'white',
        fontSize: 35,
    },

    inputContainer: {
        flex: 1,
        marginRight: 10,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: 'lightgrey',
        backgroundColor: '#eeeeee',
        justifyContent: 'center'
    },

    textInput: {
        padding: 10,
        height: 50,
        fontSize: 18,
        color: 'black',
        textDecorationLine: 'none'
    }
})

export default styles
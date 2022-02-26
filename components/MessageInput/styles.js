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
        right: -30,
        bottom: 10,
        width: 45,
        height: 45,
        backgroundColor: '#33777f',
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },

    inputContainer: {
        flex: 1,
        marginRight: 10,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: 'lightgrey',
        backgroundColor: '#eeeeee',
        alignItems: 'center',
        flexDirection: 'row'
    },
    icon: {
        marginHorizontal: 5
    },
    textInput: {
        flex: 1,
        marginHorizontal: 5,
        color: 'black',
        textDecorationLine: 'none'
    }
})

export default styles
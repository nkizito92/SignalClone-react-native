import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#11aaff',
        padding: 10,
        maxWidth: '75%',
        margin: 10,
        borderRadius: 10,
    },
    text: {
        color: '#ffffff'
    },

    leftMessage: {
        backgroundColor: '#11aaff',
        marginLeft: 10,
        marginRight: 'auto'
    },
    rightMessage: {
        backgroundColor: '#444444',
        marginLeft: 'auto',
        marginRight: 10
    }
});

export default styles
import React from 'react'
import { View, Text, TextInput } from 'react-native'
import styles from './styles'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import Feather from 'react-native-vector-icons/Feather'
import AntDesign from 'react-native-vector-icons/AntDesign'
const MessageInput = () => {
    return (
        <View style={styles.root}>
            <View style={styles.inputContainer}>
                <SimpleLineIcons name="emotsmile" size={24} color="grey" style={styles.icon} />
                <TextInput style={styles.textInput}
                placeholder="Signal Message..." />
                <Feather name="camera" size={24} color="grey" style={styles.icon} />
                <MaterialCommunityIcons name="microphone-outline" size={24} color="grey" style={styles.icon} />
            </View>
            <View style={styles.buttonContainer}>
                <AntDesign name="plus" size={24} color="white" style={styles.icon} />
            </View>
        </View>
    )
}

export default MessageInput
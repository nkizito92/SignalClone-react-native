import React, { useState } from 'react'
import { View, Text, TextInput, Pressable, KeyboardAvoidingView, Platform } from 'react-native'
import styles from './styles'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import Feather from 'react-native-vector-icons/Feather'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
const MessageInput = () => {

    const [message, setMesssage] = useState('');

    const onPlusClicked = () => {
        console.warn("You click a plus click")
    }

    const sendMessage = () => {
        console.warn(message)
        setMesssage('');
    }
    const onPress = () => {
        if (message) {
            sendMessage();
        } else {
            onPlusClicked();
        }
    }
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "android" ? "padding" : "height"} style={styles.root}
            keyboardVerticalOffset={100}
        >
            <View style={styles.inputContainer}>
                <SimpleLineIcons name="emotsmile" size={24} color="grey" style={styles.icon} />
                <TextInput style={styles.textInput}
                    placeholder="Signal Message..." value={message}
                    onChangeText={setMesssage} />

                <Feather name="camera" size={24} color="grey" style={styles.icon} />
                <MaterialCommunityIcons name="microphone-outline" size={24} color="grey" style={styles.icon} />
            </View>
            {/* Pressable is the same as view except it's ment for buttons */}
            <Pressable onPress={onPress} style={styles.buttonContainer}>
                {message ? <Ionicons name="send" size={20} color="white" style={styles.icon} />
                    : <AntDesign name="plus" size={24} color="white" style={styles.icon} />}
            </Pressable>
        </KeyboardAvoidingView>
    )
}

export default MessageInput
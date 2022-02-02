import React from 'react'
import { View, Text, Image, FlatList } from 'react-native'
import styles from './styles'

const ChatRoom = () => {
    return (
        //  Use flatlist to take an array of chats to display 
        // a list of chats for chatMessages
        <View style={styles.container}>
            <Text style={styles.text}>This is ChatRoom!!</Text>
        </View>
    )
}

export default ChatRoom
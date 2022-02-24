import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles'
const Message = ({ message }) => {
    const isMyId = message.user.id === 'u1'

    return (
        <View style={[
            styles.container,
            isMyId ? styles.leftMessage : styles.rightMessage
        ]}>
            <Text style={styles.text}>{message.content} </Text>
        </View>
    )
}

export default Message
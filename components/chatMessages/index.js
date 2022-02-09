import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from './styles'
const ChatMessages = ({ usersData }) => {
    const user = usersData.users[1]
    const lastMessage = usersData.lastMessage
    return (
        <View style={styles.container}>
            <Image source={{ uri: user.imageUri }} style={styles.image} />
            <View style={styles.badgeContainer}>
                <Text style={styles.badgeText}>{user.id.slice(1)}</Text>
            </View>
            <View style={styles.rightContainer}>
                <View style={styles.row}>
                    <Text style={styles.text, styles.name}>{user.name}</Text>
                    <Text style={styles.text}>{lastMessage.createdAt}</Text>
                </View>
                {/* the numberOfLines property will only display one line of text */}
                <Text numberOfLines={1}
                    ellipsizeMode='tail'
                    style={styles.text}>{lastMessage.content}
                </Text>
            </View>
        </View>
    )
}

export default ChatMessages
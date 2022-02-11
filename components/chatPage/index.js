import React from "react";
import { View, FlatList } from 'react-native'
import Message from '../message'
import chats from '../../assets/dummy-data/Chats'

const ChatPage = () => {
    return (
        <View>
            <FlatList
                data={chats.messages}
                renderItem={({ item }) =>
                    <Message message={item} testing="hello" />
                }
                inverted
                style={{
                    backgroundColor: '#0f063f',
                    weight: '100%',
                    height: '100%'
                }}
            />
        </View>
    )
}

export default ChatPage
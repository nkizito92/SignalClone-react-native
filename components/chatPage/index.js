import React from "react";
import { View, FlatList, SafeAreaView } from 'react-native'
import Message from '../message'
import chats from '../../assets/dummy-data/Chats'
import MessageInput from '../MessageInput'

const ChatPage = () => {
    return (
        <View>
            <FlatList
                data={chats.messages}
                renderItem={({ item }) =>
                    <Message message={item} />
                }
                
                style={{
                    backgroundColor: '#0f063f',
                    width: '100%',
                    height: '100%'
                }}
            />
             <MessageInput />
        </View>
    )
}

export default ChatPage
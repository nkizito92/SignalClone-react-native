import React from 'react'
import { View, Text, Image, FlatList } from 'react-native'
import usersData from '../../assets/dummy-data/ChatRooms'
import ChatMessages from '../chatMessages/index'

const ChatRoom = () => {
    return (
        //  Use flatlist to take an array of chats to display 
        // a list of chats for chatMessages
        <View>
            <FlatList
                data={usersData}
                renderItem={({ item }) => <ChatMessages usersData={item} />}
                showvVerticalScrollIndicator={false}
            />
        </View>

    )
}
export default ChatRoom
import React from 'react'
import { View, Text, Image, FlatList } from 'react-native'
import usersData from '../../assets/dummy-data/Users'
import ChatMessages from '../chatMessages/index'

const ChatRoom = () => {
    const chatlistings = usersData.map(user => {
        return (
            <View>
                <ChatMessages
                    key={user.id}
                    name={user.name}
                    id={user.id}
                    imageUri={user.imageUri}
                    status={user.status}
                />
            </View>
        )
    })
    return (
        //  Use flatlist to take an array of chats to display 
        // a list of chats for chatMessages
        <View>

            {/* <FlatList data={usersData}
                renderItem={({ user }) => <ChatMessages usersData={user} />} /> */}
            {chatlistings}
        </View>
        // <View style={styles.container}>
        //     <Image source={require('../../assets/images/photo.jpg')} style={styles.image} />
        //     <View style={styles.badgeContainer}>
        //         <Text style={styles.badgeText}>2</Text>
        //     </View>
        //     <View style={styles.rightContainer}>
        //         <View style={styles.row}>
        //             <Text style={styles.text, styles.name}>Name</Text>
        //             <Text style={styles.text}>11:00am</Text>
        //         </View>
        //         {/* the numberOfLines property will only display one line of text */}
        //         <Text numberOfLines={1} ellipsizeMode='tail' style={styles.text}>This is ChatRoom to here will be the place to display all the chats ever created on this mobile app!!</Text>
        //     </View>
        // </View>
    )
}
export default ChatRoom
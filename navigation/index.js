import React from "react";
// installed react-navigation/stack and react-navigation-native
import { createStackNavigator } from "@react-navigation/stack";
import ChatRoom from '../components/chatRoom'
import ChatPage from "../components/chatPage";


const Navigation = () => {
    const Stack = createStackNavigator()
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} >
            <Stack.Screen name="Home" component={ChatPage} options={{ headerShown: true }} />
            <Stack.Screen name="Room" component={ChatRoom} options={{ headerShown: true }} />
        </Stack.Navigator>
    )
}

export default Navigation
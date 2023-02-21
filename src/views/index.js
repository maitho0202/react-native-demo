import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './login';
import Home from './home';
import Setting from './setting';
import PushNotification from './notification';

const Stack = createNativeStackNavigator();

export default Root = () => {
    return (
        // <Login />
        // <Home />
        // <Setting />
        // <NavigationContainer>
        //     {/* Rest of your app code */}
        //     <Stack.Navigator initialRouteName='Login' screenOptions={{headerShown: false}} >
        //         <Stack.Screen name='Login' component={Login} />
        //         <Stack.Screen name='Home' component={Home} />
        //         <Stack.Screen name='Setting' component={Setting} />
        //     </Stack.Navigator>
        // </NavigationContainer>
        <PushNotification />
    );
}
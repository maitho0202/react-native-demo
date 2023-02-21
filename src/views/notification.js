import { StyleSheet, Text, View, Alert } from 'react-native'
import React, { useEffect } from 'react'
import messaging from '@react-native-firebase/messaging';
import AsyncStorage from '@react-native-community/async-storage';


const PushNotification = () => {
    const  requestUserPermission = async () => {
        const authStatus = await messaging().requestPermission();
        const enabled =
            authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
            authStatus === messaging.AuthorizationStatus.PROVISIONAL;
        
        if (enabled) {
            console.log('Authorization status:', authStatus);
        }
    }

    useEffect(() => {
        if (requestUserPermission()) {
            //return fcm token for the devices
            messaging().getToken().then((token) => {
                console.log(token);
            })
        } else {
            return;
        }

        // Check whether an initial notification is available
        messaging()
            .getInitialNotification()
            .then(async (remoteMessage) => {
            if (remoteMessage) {
                console.log(
                'Notification caused app to open from quit state: ',
                remoteMessage.notification,
                );
            }
        });

        // Assume a message-notification contains a "type" property in the data payload of the screen to open
        messaging().onNotificationOpenedApp(async (remoteMessage) => {
            console.log(
            'Notification caused app to open from background state: ',
            remoteMessage.notification,
            );
        });

        // Register background handler
        messaging().setBackgroundMessageHandler(async (remoteMessage) => {
            console.log('Message handled in the background!', remoteMessage);
        });

        const unsubscribe = messaging().onMessage(async (remoteMessage) => {
            Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
        });
      
        return unsubscribe;

    }, [])
    
    return (
        <View style={styles.container}>
            <Text style={{fontWeight: '700'}}>FCM Tutorial Using React Native</Text>
        </View>
    )
}

export default PushNotification;

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#fff', 
        justifyContent: 'center', 
        alignItems: 'center',
    },
})
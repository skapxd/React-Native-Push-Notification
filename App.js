import React, {useEffect, useState} from 'react';
import {
  Alert,
  Text,
  TextInput,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import {NotificationService} from './src/PushNotifications/NotificationService';

export default function App() {
  const [register, setRegister] = useState({token: ''});

  const [serverToken, setServerToken] = useState('');

  /**@type {import('./src/PushNotifications/types').onRegister}*/
  const onRegister = _register => {
    setRegister({token: _register.token});
  };

  /**@type {import('./src/PushNotifications/types').onNotification}*/
  const onNotification = notification => {
    // @ts-ignore
    // Alert.alert(notification.title, String(notification.message));
    notificationService.localNotif(notification.title, notification.message);
  };

  const notificationService = new NotificationService(
    onRegister,
    onNotification,
  );

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
      }}>
      <View
        style={{
          paddingHorizontal: 10,
          alignItems: 'center',
        }}>
        <Text>Device Token:</Text>
        <TextInput
          style={{backgroundColor: '#f00', width: '100%'}}
          defaultValue={register.token}
        />
      </View>

      <View
        style={{
          paddingHorizontal: 10,
          alignItems: 'center',
        }}>
        <Text>Server Token:</Text>
        <TextInput
          style={{backgroundColor: '#f00', width: '100%'}}
          onChangeText={e => {
            console.log('🚀 ~ file: App.js ~ line 62 ~ App ~ e', e);
            setServerToken(e);
          }}
        />
      </View>

      <TouchableOpacity
        style={{
          alignSelf: 'center',
          marginTop: 20,
          backgroundColor: '#0ff',
          paddingHorizontal: 18,
          paddingVertical: 8,
          borderRadius: 4,
        }}
        onPress={() => {
          notificationService.createRemoteNotification(
            register.token,
            serverToken,
          );
        }}>
        <Text>Send notification</Text>
      </TouchableOpacity>
    </View>
  );
}

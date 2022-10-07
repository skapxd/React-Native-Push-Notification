# Configurar notificaciones en React Native

## Añadir `Notificaciones Push` en su aplicación

Debido a que es necesario modificar varios archivos de la carpeta `android`, creo que es mejor revisar las diferencias que existen entre el commit `chore: init` y `chore: finished settings` los archivos de la carpeta android

La carpeta `PushNotification` tiene toda la configuración para integrar correctamente la api de Notificaciones

`new NotificationService()` es usado para obtener el token de identificación del dispositivo y es usado para reaccionar al momento de recibir una notificación

```jsx
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
```

---

## El ambiente utilizado para realizar configuración es

    npm: 8.11.0
    node: 16.15.1
    react: 16.13.1
    react-native: 0.63.3
    react-native-push-notification: 8.1.1

## Importante!!

Para que el proyecto funcione, `es obligatorio añadir el google-service.json al proyecto y que la aplicación se instale en un dispositivo físico`, para configurar el proyecto, por favor siga los pasos

Después de haber configurado los pasos correctamente, ejecute

```bash
yarn

yarn android
```

---

## Paso 1. Crear cuenta en Firebase y añádele una aplicación de android, debería verse asi

![img](./doc/Screenshot_16.png)
![img](./doc/Screenshot_13.png)
![img](./doc/Screenshot_14.png)
![img](./doc/Screenshot_15.png)
![img](./doc/Screenshot_5.png)

## Paso 2. Obtén el google-service.json

![img](./doc/Screenshot_9.png)
![img](./doc/Screenshot_10.png)
![img](./doc/Screenshot_11.png)

## Paso 3. Añade el google-service.json al proyecto

![img](./doc/Screenshot_12.png)

## Paso 4. Obtén el token del servidor, se utiliza para enviar notificaciones push

![img](./doc/Screenshot_6.png)
![img](./doc/Screenshot_7.png)
![img](./doc/Screenshot_8.png)

## Enviando notificaciones

![img](doc/2022-10-06-13-37-07.gif)
![img](doc/2022-10-06%2013-41-51.gif)

## cURL para enviar `Notificaciones Push`

Datos necesarios para que la petición funcione

1. Header: Authorization: key=`Firebase-Server-Token` // -> Se obtiene en la configuración de Firebase
2. Body: to: `Device-Token` // -> Se obtiene al momento de integrar el paquete `react-native-push-notification` en la aplicación

Puede importar este cURL en su cliente REST de confianza (Postman, Rapid API ...) para tener una idea de como enviar notificaciones

```bash
curl --location --request POST 'https://fcm.googleapis.com/fcm/send' \
--header 'Authorization: key=Firebase-Server-Token' \
--header 'Content-Type: application/json' \
--data-raw '{
    "notification": {
        "body": "this is a body",
        "title": "this is a title"
    },
    "priority": "high",
    "data": {
        "click_action": "FLUTTER_NOTIFICATION_CLICK",
        "id": "1",
        "status": "done",
        "uid": "encanta eso"
    },
    "to": "Device-Token"
}'
```

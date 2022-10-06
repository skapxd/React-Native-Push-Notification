# Configurar notificaciones en React Native

## El ambiente utilizado para realizar configuración es

    npm: 8.11.0
    node: 16.15.1
    react: 16.13.1
    react-native: 0.63.3
    react-native-push-notification: 8.1.1

## Importante!!

Para que el proyecto funcione, es obligatorio añadir el google-service.json al proyecto, para configurar el proyecto, por favor siga los pasos

Después de haber configurado los pasos correctamente, ejecute

```bash
yarn

yarn android
```

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

![img](doc/2022-10-06%2011-46-04.gif)
![img](doc/2022-10-06%2013-41-51.gif)
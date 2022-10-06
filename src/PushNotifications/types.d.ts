import { ReceivedNotification } from "react-native-push-notification";

export interface Register {
    os: string;
    token: string;
}
export type onRegister = (register: Register) => void

export type onNotification = (notification: Omit<ReceivedNotification, "userInfo">) => void
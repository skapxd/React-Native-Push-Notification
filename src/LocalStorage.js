import AsyncStorage from '@react-native-community/async-storage';

export const LocalStorage = {
  /**@param {string} key */
  get: async key => {
    if (typeof key !== 'string') {
      throw new Error('Param should to be string');
    }

    const data = (await AsyncStorage.getItem(key)) ?? '""';
    return JSON.parse(data);
  },
  /**@param {string} key */
  set: async (key, value) => {
    if (typeof key !== 'string') {
      throw new Error('First param should to be string');
    }

    const data = JSON.stringify(value);
    await AsyncStorage.setItem(key, data);
  },
};

import AsyncStorage from '@react-native-async-storage/async-storage';
import { FormValues } from '../types/form';

const STORAGE_KEY = '@dynamic-json-form:data';

export const saveFormData = async (data: FormValues): Promise<void> => {
  await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(data));
};

export const getFormData = async (): Promise<FormValues | null> => {
  const storedData = await AsyncStorage.getItem(STORAGE_KEY);

  if (!storedData) {
    return null;
  }

  return JSON.parse(storedData) as FormValues;
};

export const clearFormData = async (): Promise<void> => {
  await AsyncStorage.removeItem(STORAGE_KEY);
};

import * as SecureStore from 'expo-secure-store';
import { Alert } from 'react-native';

export function save(key: string, value: string) {
  SecureStore.setItem(key, value);
}

export function getValueFor(key: string) {
 try {
  return SecureStore.getItem(key);
 } catch (error: unknown) {
  console.error(error);
  Alert.alert('Error', 'Failed to get value for key');
  return null;
 }
}

export async function remove(key: string) {
  try {
    await SecureStore.deleteItemAsync(key);
  } catch (error: unknown) {
    console.error(error);
    Alert.alert('Error', 'Failed to remove value for key');
  }
}
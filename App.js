import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Register from './components/Register/Register';
export default function App() {
  return (
    <View>
      <Register></Register>
      <StatusBar style="auto" />
    </View>
  );
}

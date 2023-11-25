import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import Register from './components/Register/Register';
export default function App() {
  return (
    <View>
      <Register></Register>
      <StatusBar style="auto" />
    </View>
  );
}

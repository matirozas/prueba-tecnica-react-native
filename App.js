import { StatusBar } from 'expo-status-bar';
import { Dimensions, View } from 'react-native';
import Register from './components/Register/Register';
import { useEffect, useState } from 'react';
export default function App() {

  const [w, setW] = useState(Dimensions.get('window').width);

  useEffect(() => {
    const handleDimensionsChange = () => {
      setW(Dimensions.get('window').width);
    };

    // Suscribirse al evento de cambio de dimensiones
    Dimensions.addEventListener('change', handleDimensionsChange);

    // Limpiar el suscriptor en el desmontaje del componente
    return () => {
      Dimensions.removeEventListener('change', handleDimensionsChange);
    };
  }, []);

  return (
    <View>
      <Register/>
      <StatusBar style="auto" />
    </View>
  );
}

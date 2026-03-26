import Perfil from './src/screens/Perfil';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider>
      <Perfil />
    </SafeAreaProvider>
  );
}

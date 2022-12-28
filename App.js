import { StatusBar, SafeAreaView } from 'react-native';
import Cesta from './src/telas/Cesta';
import mock from './src/mocks/cesta'


/**VIZUALIZAÇÃO DO MEU APP COMPLETO*/
export default function App() {
  return (
    <SafeAreaView>
      <StatusBar/>
      <Cesta {...mock} />
    </SafeAreaView>
  );
};
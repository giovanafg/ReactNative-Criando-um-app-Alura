import { StatusBar, SafeAreaView } from 'react-native';
import Cesta from './src/telas/Cesta';


/**PARA EU CONSEGUIR VIZUALIZAR A PAGINA CESTA EU PRECISEI IMPORTA-LA NA MINHA FUNÇÃO APP*/
export default function App() {
  return (
    <SafeAreaView>
      <StatusBar/>
      <Cesta/>
    </SafeAreaView>
  );
};
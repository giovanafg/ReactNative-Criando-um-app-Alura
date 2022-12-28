/*IMPORT PARA CONSEGUIR RODAR AS FUNÇÕES*/
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Topo from './componentes/Topo';
import Detalhes from './componentes/Detalhes';

/*É PRECISO EXPORTAR O COMPONETE PARA QUE CONSIGAMOS USÁ-LO*/
/*DEFAULT É O EXPORT PADRÃO DO ARQUIVO,ENTÃO SÓ PODE TER UM*/

/*FUNÇÃO*/
export default function Cesta() {
    return <>
        <Topo />

        <View style={estilos.cesta}>
            <Detalhes />
        </View>

    </>
}

/*ESTILO*/
const estilos = StyleSheet.create({
     /*VIEW (CESTA)*/
     cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16,
    }

})



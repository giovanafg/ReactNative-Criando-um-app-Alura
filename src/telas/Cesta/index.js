/*IMPORT PARA CONSEGUIR RODAR AS FUNÇÕES*/
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Topo from './componentes/Topo';
import Detalhes from './componentes/Detalhes';

/*É PRECISO EXPORTAR O COMPONETE PARA QUE CONSIGAMOS USÁ-LO*/
/*DEFAULT É O EXPORT PADRÃO DO ARQUIVO,ENTÃO SÓ PODE TER UM*/

/*VIZUALIZAÇÃO DA MINHA PÁGINA CESTA*/

/*FUNÇÃO - FOI NECESSÁRIO CHAMAR OS PARÂMETROS DENTRO DE CADA OBJETO, PARA ASSIM CONSEGUIR UTILIZAR*/
export default function Cesta({ topo, detalhes}) {
    return <>
        <Topo {...topo} />

        <View style={estilos.cesta}>
            <Detalhes {...detalhes} />
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



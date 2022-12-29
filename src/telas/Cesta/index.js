/*IMPORT PARA CONSEGUIR RODAR AS FUNÇÕES*/
import React from 'react';
import { FlatList, StyleSheet, View, Text } from 'react-native';
import Topo from './componentes/Topo';
import Detalhes from './componentes/Detalhes';
import Item from './componentes/Item';

/*É PRECISO EXPORTAR O COMPONETE PARA QUE CONSIGAMOS USÁ-LO*/
/*DEFAULT É O EXPORT PADRÃO DO ARQUIVO,ENTÃO SÓ PODE TER UM*/

/*VIZUALIZAÇÃO DA MINHA PÁGINA CESTA*/

/*FUNÇÃO - FOI NECESSÁRIO CHAMAR OS PARÂMETROS DENTRO DE CADA OBJETO, PARA ASSIM CONSEGUIR UTILIZAR*/
export default function Cesta({ topo, detalhes, itens}) {
    return <>
            <FlatList data={itens.lista} 
                        renderItem={Item} 
                            keyExtractor={({nome}) => nome} 
                                ListHeaderComponent={() => {
            return <>
                <Topo {...topo} />
                    <View style={estilos.cesta}>
                        <Detalhes {...detalhes} />
                        <Text style={estilos.titulo}>{itens.titulo}</Text>
                    </View>
            </> 
         }}
        />
    </>
}

/*ESTILO*/
const estilos = StyleSheet.create({
    titulo: {
        color: "#464646",
        fontWeight: "bold",
        marginTop: 32,
        marginBottom: 8,
        fontSize: 20,
        lineHeight: 32,
    },
     /*VIEW (CESTA)*/
     cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16,
    }

})



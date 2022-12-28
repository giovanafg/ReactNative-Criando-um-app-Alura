/*IMPORT PARA CONSEGUIR RODAR AS FUNÇÕES*/
import React from 'react';
import { StyleSheet, Image, Dimensions, Text } from 'react-native';

/*IMPORT DA IMAGEM TOPO*/
import topo from '../../assets/topo.png/'

/*DIMENSIONS FAZ COM QUE A IMAGEM FIQUE DO TAMANHO PRoPORCIONAL DE QUALQUER TELA DE CELULAR*/
const width = Dimensions.get('screen').width;

/*É PRECISO EXPORTAR O COMPONETE PARA QUE CONSIGAMOS USÁ-LO*/
/*DEFAULT É O EXPORT PADRÃO DO ARQUIVO,ENTÃO SÓ PODE TER UM*/

export default function Cesta() {
    return <>
        <Image source={topo} style={estilos.topo} />
        <Text style={estilos.titulo}>Detalhes da cesta</Text>
    </>
}

const estilos = StyleSheet.create({
    /*ESTILO DA IMAGEM: TOPO*/
    topo: {
        width: "100%",
        /**NO HEIGHT FOI PEGO A ALTURA DA IMAGEM DIVIDO PELA LARGURA DA IMAGEM E MULTIPLICADO PELO WIDTH */
        height: 578 / 768 * width,
    },

    /*ESTILO DO TITULO*/
    titulo: {
        width: "100%",
        position: "absolute",
        textAlign: "center",
        fontSize: 16,
        lineHeight: 26,
        color: "white",
        fontWeight: "bold",
        padding: 16
    }
});


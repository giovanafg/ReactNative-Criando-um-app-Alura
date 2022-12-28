/*IMPORT PARA CONSEGUIR RODAR AS FUNÇÕES*/
import React from 'react';
import { Image, Text, StyleSheet, Dimensions } from 'react-native';

/*IMPORT DA IMAGEM*/
import topo from '../../../../assets/topo.png/';

/*DIMENSIONS FAZ COM QUE A IMAGEM FIQUE DO TAMANHO PRoPORCIONAL DE QUALQUER TELA DE CELULAR*/
const width = Dimensions.get('screen').width;

/*FUNÇÃO - PARA CONSEGUIR PUXAR O TEXTO DO ARQUIVO MOCKS/CESTA, FOI NECESSÁRIO CHAMAR DENTRO DA FUNÇÃO O PARÂMETRO*/
export default function Topo({ titulo }){
    return <>
        {/*IMAGEM E TEXTO INCIAL*/}
        <Image source={topo} style={estilos.topo} />
        <Text style={estilos.titulo}>{titulo}</Text>
    </>
}

/*ESTILO*/
const estilos = StyleSheet.create({
     /*IMAGEM PRINCIPAL*/
     topo: {
        width: "100%",
        /**NO HEIGHT FOI PEGO A ALTURA DA IMAGEM DIVIDO PELA LARGURA DA IMAGEM E MULTIPLICADO PELO WIDTH */
        height: 578 / 768 * width,
    },

    /*TITULO*/
    titulo: {
        width: "100%",
        position: "absolute",
        textAlign: "center",
        fontSize: 16,
        lineHeight: 26,
        color: "white",
        fontWeight: "bold",
        padding: 16,
    }
});
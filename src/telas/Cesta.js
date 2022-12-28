/*IMPORT PARA CONSEGUIR RODAR AS FUNÇÕES*/
import React from 'react';
import { StyleSheet, Image, Dimensions, Text, View } from 'react-native';

/*IMPORT DAS IMAGENS QUE ESTÃO SENDO USADAS NA PÁGINA*/
import topo from '../../assets/topo.png/';
import logo from '../../assets/logo.png'

/*DIMENSIONS FAZ COM QUE A IMAGEM FIQUE DO TAMANHO PRoPORCIONAL DE QUALQUER TELA DE CELULAR*/
const width = Dimensions.get('screen').width;

/*É PRECISO EXPORTAR O COMPONETE PARA QUE CONSIGAMOS USÁ-LO*/
/*DEFAULT É O EXPORT PADRÃO DO ARQUIVO,ENTÃO SÓ PODE TER UM*/

export default function Cesta() {
    return <>
        {/*IMAGEM E TEXTO INCIAL*/}
        <Image source={topo} style={estilos.topo} />
        <Text style={estilos.titulo}>Detalhes da cesta</Text>

        {/*DESCRIÇÃO DO PRODUTO*/}
        <View style={estilos.cesta}>
            <Text style={estilos.nome} >Cesta de verduras</Text>

            {/*VIEW PARA ARMAZENAR COTEÚDO COM NOME DA FAZENDA E ICONE*/}
            <View style={estilos.fazenda}>
                <Image source={logo} style={estilos.imagemFazenda} />
                <Text style={estilos.nomeFazenda}>Jenny Jack Farm</Text>
            </View>
            
            <Text style={estilos.descricao}>Uma cesta com produtos selecionados 
                cuidadosamente da fazenda para sua cozinha
            </Text>
            <Text style={estilos.preco}>R$40,00</Text>
        </View>
    </>
}

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
    },

    /*VIEW (CESTA)*/
    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16,
    },

    /*NOME*/
    nome: {
        lineHeight: 42,
        fontSize: 26,
        color: "#464646",
        fontWeight: "bold",
    },

    /*VIEW FAZENDA*/
    fazenda: {
        /*NÃO É PRECISO DEFINIR DISPLAY FLEX POIS NO REACT NATIVE JÁ VEM POR PADRÃO*/
        flexDirection: "row",
        paddingVertical: 12,
    },

    /*IMAGEM FAZENDA*/
    imagemFazenda: {
        width: 32,
        height: 32
    },

    /*NOME FAZENDA*/
    nomeFazenda: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 12,
    },

    /*DESCRIÇÃO*/
    descricao: {
        color: "#A3A3A3",
        fontSize: 16,
        lineHeight: 26,
    },

    /*PREÇO*/
    preco: {
        color: "#2A9F85",
        fontWeight: "bold",
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8,
    },

});


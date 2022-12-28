/*IMPORT PARA CONSEGUIR RODAR AS FUNÇÕES*/
import React from 'react';
import { View, Image, StyleSheet, Text} from 'react-native';

/*FUNÇÃO - PARA CONSEGUIR PUXAR O TEXTO/IMG DO ARQUIVO MOCKS/CESTA, FOI NECESSÁRIO CHAMAR DENTRO DA FUNÇÃO OS PARÂMETROS*/
export default function Detalhes({ nome, logoFazenda, nomeFazenda, descricao, preco }){
    return <>
          {/*DESCRIÇÃO DO PRODUTO*/}
            <Text style={estilos.nome}>{nome}</Text>

            {/*VIEW PARA ARMAZENAR COTEÚDO COM NOME DA FAZENDA E ICONE*/}
            <View style={estilos.fazenda}>
                <Image source={logoFazenda} style={estilos.imagemFazenda} />
                <Text style={estilos.nomeFazenda}>{nomeFazenda}</Text>
            </View>
            
            <Text style={estilos.descricao}>{descricao}</Text>
            <Text style={estilos.preco}>{preco}</Text>    
    </>
}

/*ESTILO*/
const estilos = StyleSheet.create({
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
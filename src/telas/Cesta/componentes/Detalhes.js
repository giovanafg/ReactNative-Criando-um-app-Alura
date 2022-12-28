/*IMPORT PARA CONSEGUIR RODAR AS FUNÇÕES*/
import React from 'react';
import { View, Image, StyleSheet, Text} from 'react-native';

/*IMPORT DA IMAGEM*/
import logo from '../../../../assets/logo.png';

/*FUNÇÃO*/
export default function Detalhes(){
    return <>
          {/*DESCRIÇÃO DO PRODUTO*/}
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
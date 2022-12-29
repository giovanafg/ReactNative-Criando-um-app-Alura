import { StyleSheet } from 'react-native';

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

    /*BOTÃO*/
    botao: {
        marginTop: 16,
        backgroundColor: "#2A9F85",
        padding: 16,
        borderRadius: 6,
    },

    textBotao: {
        textAlign: "center",
        color: "#FFFFFF",
        fontWeight: "bold",
        fontSize: 16,
        lineHeight: 26,
    }
});

export default estilos;
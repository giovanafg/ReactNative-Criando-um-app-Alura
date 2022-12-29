import React from "react";

import {Text, View, Image, StyleSheet, FlatList} from 'react-native';

export default function Item({item: {nome, imagem}}){
    return <View style={estilos.item}>
    <Image source={imagem} style={estilos.imagem} />
    <Text style={estilos.nome}>{nome}</Text>
</View>

}

const estilos = StyleSheet.create({
   
    item: {
        flexDirection: "row",
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: "#ECECEC",
        paddingVertical: 16,
        marginHorizontal: 16,
    },
    imagem: {
        width: 46,
        height: 46
    },
    nome:{
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 12,
        color: "#464646"
    }
});
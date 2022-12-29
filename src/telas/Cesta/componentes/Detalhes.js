/*IMPORT PARA CONSEGUIR RODAR AS FUNÇÕES*/
import React from 'react';
import { View, Image, Text} from 'react-native';

import estilos from './StylesDetalhes.js';


/*FUNÇÃO*/
export default function Detalhes({nome, logoFazenda, nomeFazenda, descricao, preco }){
    return <>
          {/*DESCRIÇÃO DO PRODUTO*/}
            <Text style={estilos.nome} >{nome}</Text>

            {/*VIEW PARA ARMAZENAR COTEÚDO COM NOME DA FAZENDA E ICONE*/}
            <View style={estilos.fazenda}>
                <Image source={logoFazenda} style={estilos.imagemFazenda} />
                <Text style={estilos.nomeFazenda}>{nomeFazenda}</Text>
            </View>
            
            <Text style={estilos.descricao}>{descricao}</Text>
            <Text style={estilos.preco}>{preco}</Text>    
    </>
};
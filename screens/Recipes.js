import { useState } from "react";
import { TouchableOpacity, View, Text } from "react-native";
import { StyleSheet } from "react-native";

const dados_fake = [
    {
        id: 1,
        nome: 'Bolo de cenoura', 
        modo_preparo: 'Mistura', 
        ingredientes: 'Cenoura, ovo e trigo',
        usuario_id: 1,
        categoria_id: 1
    },
    {
        id: 2,
        nome: 'Bolo de Milho', 
        modo_preparo: 'Mistura', 
        ingredientes: 'Milho, ovo e trigo',
        usuario_id: 1,
        categoria_id: 1
    },
]


export default function Recipes({navigation}) {
    const [view, setView] = useState('list')

    return (
        <View>
            <Text style={style.title}>
                Receitas
            </Text>

            <TouchableOpacity style={style.button} onPress={() => navigation.goBack()}>
                <Text style={style.textButton}>Voltar</Text>
            </TouchableOpacity>


            {(view === 'list') ? (
                <View>
                    <TouchableOpacity style={style.button} onPress={() => setView('form')}>
                        <Text style={style.textButton}>Adicionar Receita</Text>
                    </TouchableOpacity>
                </View>
            ) : (
                <View>
                    <TouchableOpacity style={style.button} onPress={() => setView('list')}>
                        <Text style={style.textButton}>VER Receitas</Text>
                    </TouchableOpacity>
                </View>
            )}
        </View>
    )
}


const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#FF0000',
        textAlign: 'center'
    },
    button: {
        backgroundColor: '#000',
        color: '#FFF',
        padding: 15,
        borderRadius: 10
    },
    textButton: {
        color: '#fff',
        fontWeight: 'bold'
    }
})
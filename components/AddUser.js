import { useEffect, useState } from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { Picker, TextInput } from "react-native";
import { createUser, updateUser } from "../services/Users.service";

export default function AddUser({ userToEdit }) {
    const [nome, setNome] = useState('')
    const [telefone, setTelefone] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [editingId, setEditingId] = useState()

    useEffect(() => {
        console.log('userToEdit', userToEdit);
        if (userToEdit) {
            setNome(userToEdit.nome)
            setTelefone(userToEdit.telefone)
            setSenha(userToEdit.senha)
            setEmail(userToEdit.email)
            setEditingId(userToEdit.id)
        } else {
            clearForm()
        }
        
    }, [userToEdit])

    async function save() {
        const obj = {
            nome,
            telefone,
            email,
            senha,
            ativo: true
        }

        try {
            clearForm()

            if (editingId) {
                const response = await updateUser(editingId, obj)
            } else {
                const response = await createUser(obj)
            }
            
        } catch {
            
        }
    }

    function clearForm() {
        setNome('')
        setTelefone('')
        setSenha('')
        setEmail('')
        setEditingId('')
    }

    return (
        <View style={style.container}>
            <Text style={style.title}>
                Adicionar novo Usuário
            </Text>
            <TextInput
                value={nome}
                onChangeText={setNome}
                placeholder="Digite o Nome.."
            />
            <TextInput
                value={telefone}
                onChangeText={setTelefone}
                placeholder="Digite o Telefone.."
            />
            <TextInput
                value={email}
                onChangeText={setEmail}
                placeholder="Digite o E-mail.."
            />
            <TextInput
                value={senha}
                onChangeText={setSenha}
                placeholder="Digite a Senha.."
            />

            <TouchableOpacity 
                style={style.button}
                onPress={save}>
                <Text style={style.textButton}>
                    Salvar
                </Text>
            </TouchableOpacity>
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
import { TouchableOpacity, View, Text } from "react-native";

export default function Recipes({navigation}) {
    return (
        <View>
            <Text>
                Receitas
            </Text>

            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text>Voltar</Text>
            </TouchableOpacity>
        </View>
    )
}
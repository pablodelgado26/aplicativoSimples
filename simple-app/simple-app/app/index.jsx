import { View, Text } from "react-native";

export default function Home() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'black', padding: 20 }}>
            <Text style={{ color: 'white', fontSize: 24, marginBottom: 20 }}>Bem-vindo ao Red Dead Info</Text>
            <Text style={{ color: 'white', fontSize: 16, textAlign: 'center' }}>
                Explore o vasto mundo de Red Dead Redemption. Descubra histórias, personagens e aventuras épicas no Velho Oeste.
            </Text>
        </View>
    );
}
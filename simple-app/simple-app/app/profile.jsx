import { View, Text, Image, ScrollView } from "react-native";

export default function Profile() {
    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'black', padding: 20 }}>
            <Image
                source={{ uri: 'https://mfiles.alphacoders.com/828/828135.jpg' }}
                style={{ width: 200, height: 300, marginBottom: 20 }}
            />
            <Text style={{ color: 'white', fontSize: 30, fontWeight: 'bold', marginBottom: 10 }}>Arthur Morgan</Text>
            <Text style={{ color: 'white', fontSize: 18, textAlign: 'center', marginBottom: 20 }}>
                Arthur Morgan é um dos principais personagens de Red Dead Redemption 2. Ele é um membro veterano da gangue Van der Linde, conhecido por sua lealdade e habilidades de sobrevivência.
            </Text>
            <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>Informações Adicionais</Text>
            <Text style={{ color: 'white', fontSize: 16, textAlign: 'center', marginBottom: 5 }}>
                - Idade: 36 anos
            </Text>
            <Text style={{ color: 'white', fontSize: 16, textAlign: 'center', marginBottom: 5 }}>
                - Nacionalidade: Americana
            </Text>
            <Text style={{ color: 'white', fontSize: 16, textAlign: 'center', marginBottom: 5 }}>
                - Ocupação: Fora-da-lei
            </Text>
        </ScrollView>
    );
}
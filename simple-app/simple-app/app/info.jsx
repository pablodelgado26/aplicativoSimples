import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function Info() {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Red Dead Redemption</Text>
            <Text style={styles.paragraph}>
                Red Dead Redemption é um jogo eletrônico de ação-aventura desenvolvido pela Rockstar San Diego e publicado pela Rockstar Games. 
                É o segundo título da série Red Dead e foi lançado para PlayStation 3 e Xbox 360 em maio de 2010.
            </Text>
            <Text style={styles.paragraph}>
                O jogo é ambientado no ano de 1911, durante o declínio do Velho Oeste americano. 
                Os jogadores controlam John Marston, um ex-fora-da-lei cuja esposa e filho foram feitos reféns pelo governo em troca de seus serviços como caçador de recompensas. 
                Não tendo outra escolha, Marston parte para capturar três membros de sua antiga gangue.
            </Text>
            <Text style={styles.paragraph}>
                Red Dead Redemption é jogado a partir de uma perspectiva de terceira pessoa em um mundo aberto, permitindo ao jogador interagir com o ambiente e se envolver em combates com inimigos usando várias armas.
            </Text>
            <Text style={styles.paragraph}>
                O jogo foi aclamado pela crítica, com elogios direcionados à sua história, jogabilidade, trilha sonora e mundo aberto. 
                Ele ganhou vários prêmios de Jogo do Ano e é frequentemente citado como um dos melhores jogos de todos os tempos.
            </Text>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#000000', // Preto
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#39FF14', // Verde neon
        marginBottom: 20,
        textAlign: 'center',
    },
    paragraph: {
        fontSize: 16,
        color: '#FFFFFF', // Branco
        marginBottom: 15,
        textAlign: 'justify',
    },
});
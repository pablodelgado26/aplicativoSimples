import React, { useState } from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import { IconButton } from 'react-native-paper';

export default function Profile() {
    const [liked, setLiked] = useState(false);

    const handleLikePress = () => {
        setLiked(!liked);
        console.log('Liked state:', !liked);
    };

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollView}>
                <Image
                    source={{ uri: 'https://mfiles.alphacoders.com/828/828135.jpg' }}
                    style={styles.image}
                />
                <Text style={styles.name}>Arthur Morgan</Text>
                <Text style={styles.description}>
                    Arthur Morgan é um dos principais personagens de Red Dead Redemption 2. Ele é um membro veterano da gangue Van der Linde, conhecido por sua lealdade e habilidades de sobrevivência.
                </Text>
                <Text style={styles.additionalInfoTitle}>Informações Adicionais</Text>
                <Text style={styles.additionalInfo}>- Idade: 36 anos</Text>
                <Text style={styles.additionalInfo}>- Nacionalidade: Americana</Text>
                <Text style={styles.additionalInfo}>- Ocupação: Fora-da-lei</Text>
            </ScrollView>
            <IconButton
                icon="heart"
                iconColor={liked ? "#39FF14" : "white"} // Alterado de color para iconColor
                size={30}
                style={styles.likeButton}
                onPress={handleLikePress}
            />
            <IconButton
                icon={liked ? "heart" : "heart-outline"} // Alterna entre preenchido e contorno
                iconColor={liked ? "#39FF14" : "white"}
                size={30}
                style={styles.likeButton}
                onPress={handleLikePress}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    },
    scrollView: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    image: {
        width: 200,
        height: 300,
        marginBottom: 20,
    },
    name: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
    },
    description: {
        color: 'white',
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 20,
    },
    additionalInfoTitle: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
    },
    additionalInfo: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 5,
    },
    likeButton: {
        position: 'absolute',
        bottom: 20,
        right: 20,
    },
});
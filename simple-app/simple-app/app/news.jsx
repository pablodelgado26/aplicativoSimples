import { View, Text, StyleSheet, Image } from "react-native";

export default function News() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Revolução Gráfica</Text>
            <Image 
                source={{ uri: 'https://wallpapercat.com/w/full/4/f/4/70401-2560x1440-desktop-hd-red-dead-redemption-wallpaper-image.jpg' }} 
                style={styles.image} 
            />
            <Text style={styles.content}>
                Novo jogo reinventado de mundo aberto da Rockstar Games, Red Dead Redemption 2, agora para PC. Com novos conteúdos para a história, melhorias visuais e técnicas, além de novas atualizações de recursos para o modo de história e o Red Dead Online, Red Dead Redemption 2 para PC inclui também todo o conteúdo já lançado anteriormente para as versões de console.
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        padding: 20,
    },
    title: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    image: {
        width: '80%',
        height: '50%',
    },
    content: {
        color: 'white',
        fontSize: 16,
        textAlign: 'justify',
        width: '80%',
    },
});
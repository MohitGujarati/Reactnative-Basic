import { Platform, StyleSheet, Text, View, Image, ScrollView, StatusBar, FlatList } from 'react-native';


const getTypeDetails = (type) => {
    switch (type.toLowerCase()) {
        case "electric":
            return { borderColor: "#FFD700", emoji: "⚡" };
        case "water":
            return { borderColor: "#6493EA", emoji: "💧" };
        case "fire":
            return { borderColor: "#FF5733", emoji: "🔥" };
        case "grass":
            return { borderColor: "#66CC66", emoji: "🌿" };
        default:
            return { borderColor: "#A0A0A0", emoji: "❓" };
    }
};





export default function PokemonCard({
    pokemonID, name, image, type, hp, moves, weaknesses
}) {

    const { borderColor, emoji } = getTypeDetails(type);

    return (
        <View style={styles.card}>
            <View style={[styles.header]}>
                <Text style={styles.headerText}>{name}</Text>
                <Text style={styles.headerText}>❤️ {hp}</Text>
            </View>
            <Text>{"#" + pokemonID}</Text>
            <Image source={{ uri: image }} style={styles.image} />
            <View style={[styles.info, { borderColor }]} >
                <Text style={[styles.typeText, { emoji }]}>{emoji}</Text>
                <Text style={[styles.typeText,]}>{type}</Text>
            </View>
            <View >
                <Text style={styles.description}>Moves: {moves.join(", ")}</Text>
                <Text style={styles.description}>Weaknesses: {weaknesses.join(", ")}</Text>
            </View>

        </View>

    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        borderRadius: 16,
        borderColor: "#000",
        borderWidth: 2,
        marginTop: StatusBar.currentHeight,
        margin: 6,

        padding: 12,
        ...Platform.select({
            ios: {
                shadowColor: '#000',
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                elevation: 5,
            },
            android: {
                shadowColor: '#000',
                elevation: 5,
            },
        }),
    },

    header: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',
        marginBottom: 16

    },

    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        fontFamily: Platform.OS === 'ios' ? 'Courier' : 'monospace',
    },
    image: {
        width: "100%",
        height: 200,
        resizeMode: 'contain',
        marginBottom: 16
    },
    info: {
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: 'center',
        marginVertical: 6,
        marginHorizontal: 12,
        borderWidth: 4,
        borderRadius: 16,
        padding: 8,
        marginBottom: 30,

    },
    typeText: { // Moved text styles here
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: Platform.OS === 'ios' ? 'Courier' : 'monospace',
    },

    description: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginBottom: 16,
        fontSize: 18,
        fontWeight: 'bold',
    },
    descriptionText: { // Moved text styles here
        fontSize: 26, // Adjusted from 24 for better fit
        fontFamily: Platform.OS === 'ios' ? 'Courier' : 'monospace',
        fontWeight: '500',
        marginBottom: 4,
    }

})
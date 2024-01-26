import
{
    View,
    Platform,
    TouchableOpacity,
    Text,
    Image,
    ActivityIndicator,
    StyleSheet
} from 'react-native';

import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Ionicons } from '@expo/vector-icons';

import FadeInImage from '../components/FadeInImage';
import PokemonDetail from '../components/PokemonDetail';

import usePokemon from '../hooks/usePokemon';

const PokemonScreen = ({ navigation, route }) =>
{
    const { color } = route.params;

    const { id, name, picture } = route.params.pokemon;

    const { top } = useSafeAreaInsets();

    const { loading, pokemon } = usePokemon(id);

    return (
        <View style={{ flex: 1, marginBottom: (Platform.OS === 'ios') ? 100 : 75 }}>
            <View style={{ ...styles.container, backgroundColor: color }}>
                <TouchableOpacity
                    activeOpacity={0.75}
                    onPress={() => navigation.pop()}
                    style={{ ...styles.button, top: top + 10 }}
                >
                    <Ionicons
                        name="arrow-back-outline"
                        color="white"
                        size={35}
                    />
                </TouchableOpacity>

                <Text style={{ ...styles.pokemon, top: top + 40 }}>
                    {name}
                    {`\n#${id}`}
                </Text>

                <Image source={require('../../assets/pokeball-white.png')} style={styles.pokeball} />

                <FadeInImage uri={picture} style={styles.image} />
            </View>

            {
                loading ?
                (
                    <View style={styles.loading}>
                        <ActivityIndicator color={color} size={50} />
                    </View>
                ) : <PokemonDetail pokemon={pokemon} />
            }

        </View>
    );
}

const styles = StyleSheet.create(
{
    container:
    {
        height: 370,
        zIndex: 999,
        alignItems: 'center',
        borderBottomLeftRadius: 1000,
        borderBottomRightRadius: 1000
    },
    button:
    {
        position: 'absolute',
        left: 20
    },
    pokemon:
    {
        color: 'white',
        fontSize: 40,
        alignSelf: 'flex-start',
        left: 20
    },
    pokeball:
    {
        width: 250,
        height: 250,
        bottom: -25,
        opacity: 0.75
    },
    image:
    {
        width: 250,
        height: 250,
        position: 'absolute',
        bottom: -25
    },
    loading:
    {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default PokemonScreen;

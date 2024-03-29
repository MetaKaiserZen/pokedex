import
{
    Image,
    View,
    Platform,
    FlatList,
    Text,
    ActivityIndicator
} from 'react-native';

import { useSafeAreaInsets } from 'react-native-safe-area-context';

import PokemonCard from '../components/PokemonCard';

import usePokemonPaginated from '../hooks/usePokemonPaginated';

import styles from '../theme/Theme';

const HomeScreen = () =>
{
    const { top } = useSafeAreaInsets();

    const { pokemon, listarPokemon } = usePokemonPaginated();

    return (
        <>
            <Image source={require('../../assets/pokeball.png')} style={styles.pokeball} />

            <View style={{ alignItems: 'center', marginBottom: (Platform.OS === 'ios') ? 75 : 50 }}>
                <FlatList
                    data={pokemon}
                    keyExtractor={(pokemon) => pokemon.id}
                    showsVerticalScrollIndicator={false}
                    numColumns={2}
                    ListHeaderComponent={
                    (
                        !pokemon.length == 0 &&
                            <Text
                                style={
                                {
                                    ...styles.title,
                                    ...styles.globalMargin,
                                    top: top + 25,
                                    marginBottom: top + 25,
                                    paddingBottom: 10
                                }}
                            >
                                {'Pokédex'}
                            </Text>
                    )}
                    renderItem={({ item: pokemon }) => (<PokemonCard pokemon={pokemon} />)}
                    onEndReached={listarPokemon}
                    onEndReachedThreshold={0.5}
                    ListFooterComponent={
                    (
                        <ActivityIndicator
                            style={{ height: 100 }}
                            size={25}
                            color={!pokemon.length == 0 ? 'gray' : 'transparent'}
                        />
                    )}
                />
            </View>
        </>
    );
}

export default HomeScreen;

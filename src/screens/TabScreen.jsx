import { useState, useEffect } from 'react';

import { Dimensions, View, Platform, FlatList, Text } from 'react-native';

import { useSafeAreaInsets } from 'react-native-safe-area-context';

import Loading from '../components/Loading';
import SearchInput from '../components/SearchInput';
import PokemonCard from '../components/PokemonCard';

import usePokemonSearch from '../hooks/usePokemonSearch';

import styles from '../theme/Theme';


const width = Dimensions.get('window').width;

const TabScreen = () =>
{
    const [search, setSearch] = useState('')
    const [filter, setFilter] = useState([]);

    const { top } = useSafeAreaInsets();

    const { fetching, pokemon } = usePokemonSearch();

    useEffect(() =>
    {
        if (search.length === 0)
        {
            return setFilter([]);
        }

        if (isNaN(Number(search)))
        {
            setFilter(pokemon.filter((pokemon) =>
                pokemon.name.toLocaleLowerCase()
                    .includes(search.toLocaleLowerCase())
            ));
        }
        else
        {
            const id = pokemon.find((pokemon) => pokemon.id === search);

            setFilter((id) ? [id] : []);
        }

    }, [search]);

    switch (fetching)
    {
        case true:
            return (
                <Loading />
            );
        case false:
            return (
                <View
                    style={
                    {
                        flex: 1,
                        marginHorizontal: 17.5,
                        marginBottom: (Platform.OS === 'ios') ? 75 : 50
                    }}
                >
                    <SearchInput
                        onDebounce={setSearch}
                        style={
                        {
                            position: 'absolute',
                            zIndex: 999,
                            width: width - 40,
                            top: (Platform.OS === 'ios') ? top : top + 25
                        }}
                    />
                    <FlatList
                        data={filter}
                        keyExtractor={(pokemon) => pokemon.id}
                        showsVerticalScrollIndicator={false}
                        numColumns={2}
                        ListHeaderComponent={
                        (
                            <Text
                                style={
                                {
                                    ...styles.title,
                                    ...styles.globalMargin,
                                    paddingBottom: 10,
                                    marginTop: (Platform.OS === 'ios') ? top + 50 : top + 75
                                }}
                            >
                                {search}
                            </Text>
                        )}
                        renderItem={({ item: pokemon }) => (<PokemonCard pokemon={pokemon} />)}
                    />
                </View>
            );
    }
}

export default TabScreen;

import { ScrollView, StyleSheet, View, Text } from 'react-native';

import FadeInImage from './FadeInImage';

const PokemonDetail = ({ pokemon }) =>
{
    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            style={{ ...StyleSheet.absoluteFillObject }}
        >

            {/* Types */}
            <View
                style={
                {
                    ...styles.container,
                    marginTop: 350
                }}
            >
                <Text style={styles.title}>Types</Text>
                <View style={{ flexDirection: 'row' }}>

                    {
                        pokemon.types.map(({ type }) =>
                        (
                            <Text
                                key={type.name}
                                style={
                                {
                                    ...styles.text,
                                    marginRight: 10
                                }}
                            >
                                {type.name}
                            </Text>
                        ))
                    }

                </View>
                <Text style={styles.title}>Weight</Text>
                <Text style={styles.text}>{pokemon.weight}kg</Text>
            </View>

            {/* Sprites */}
            <View style={styles.container}>
                <Text style={styles.title}>Sprites</Text>
            </View>
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={{ marginBottom: -25 }}
            >
                <FadeInImage
                    uri={pokemon.sprites.front_default}
                    style={styles.sprite}
                />
                <FadeInImage
                    uri={pokemon.sprites.back_default}
                    style={styles.sprite}
                />
                <FadeInImage
                    uri={pokemon.sprites.front_shiny}
                    style={styles.sprite}
                />
                <FadeInImage
                    uri={pokemon.sprites.back_shiny}
                    style={styles.sprite}
                />
            </ScrollView>

            {/* Abilities */}
            <View style={styles.container}>
                <Text style={styles.title}>Abilities</Text>
                <View style={{ flexDirection: 'row' }}>

                    {
                        pokemon.abilities.map(({ ability }) =>
                        (
                            <Text
                                key={ability.name}
                                style={
                                {
                                    ...styles.text,
                                    marginRight: 10
                                }}
                            >
                                {ability.name}
                            </Text>
                        ))
                    }

                </View>
            </View>

            {/* Movesets */}
            <View style={styles.container}>
                <Text style={styles.title}>Movesets</Text>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>

                    {
                        pokemon.moves.map(({ move }) =>
                        (
                            <Text
                                key={move.name}
                                style={
                                {
                                    ...styles.text,
                                    marginRight: 10
                                }}
                            >
                                {move.name}
                            </Text>
                        ))
                    }

                </View>
            </View>

            {/* Stats */}
            <View style={styles.container}>
                <Text style={styles.title}>Stats</Text>
                <View>

                    {
                        pokemon.stats.map((stat, index) =>
                        (
                            <View
                                key={index}
                                style={{ flexDirection: 'row' }}
                            >
                                <Text
                                    style={
                                    {
                                        ...styles.text,
                                        marginRight: 15,
                                        width: '50%',
                                    }}
                                >
                                    {stat.stat.name}
                                </Text>
                                <Text
                                    style={
                                    {
                                        ...styles.text,
                                        fontWeight: 'bold',
                                        width: '50%',
                                    }}
                                >
                                    {stat.base_stat}
                                </Text>
                            </View>
                        ))
                    }

                </View>
            </View>

            {/* Sprites */}
            <View
                style={
                {
                    marginBottom: 25,
                    alignItems: 'center'
                }}
            >
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                >
                    <FadeInImage
                        uri={pokemon.sprites.other.home.front_default}
                        style={
                        {
                            ...styles.sprite,
                            marginHorizontal: 25
                        }}
                    />
                    <FadeInImage
                        uri={pokemon.sprites.other.home.front_shiny}
                        style={
                        {
                            ...styles.sprite,
                            marginHorizontal: 25
                        }}
                    />
                </ScrollView>
            </View>

        </ScrollView>
    );
}

const styles = StyleSheet.create(
{
    container:
    {
        marginHorizontal: 25
    },
    title:
    {
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 25
    },
    text:
    {
        fontSize: 20
    },
    sprite:
    {
        width: 100,
        height: 100
    }
});

export default PokemonDetail;

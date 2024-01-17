import { useState, useEffect, useRef } from 'react';

import { Dimensions, StyleSheet, TouchableOpacity, View, Text, Image } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import FadeInImage from './FadeInImage';

import { PokemonAPI } from '../api/PokemonAPI';

const width = Dimensions.get('window').width;

const PokemonCard = ({ pokemon }) =>
{
    const [color, setColor] = useState('#9FA19F');

    const mounted = useRef(true);

    const navigation = useNavigation();

    const listarTipo = async (id) =>
    {
        const { data } = await PokemonAPI.get(`https://pokeapi.co/api/v2/pokemon/${id}`);

        const type = data.types[0].type.name;

        switch (type)
        {
            case 'steel': setColor('#8CACB8'); break;
            case 'water': setColor('#8DB8F0'); break;
            case 'bug': setColor('#99A15D'); break;
            case 'dragon': setColor('#99A1E0'); break;
            case 'electric': setColor('#FADD7D'); break;
            case 'ghost': setColor('#705970'); break;
            case 'fire': setColor('#E58787'); break;
            case 'fairy': setColor('#F2B1F2'); break;
            case 'ice': setColor('#A1ECFF'); break;
            case 'fighting': setColor('#FFBF80'); break;
            case 'normal': setColor('#9FA19F'); break;
            case 'grass': setColor('#70A165'); break;
            case 'psychic': setColor('#F29BB7'); break;
            case 'rock': setColor('#B0AD99'); break;
            case 'dark': setColor('#4F4847'); break;
            case 'ground': setColor('#91725A'); break
            case 'poison': setColor('#AF87CC'); break
            case 'flying': setColor('#B9D5F0'); break;
            default: setColor('#85A199'); break;
        }
    }

    useEffect(() =>
    {
        listarTipo(pokemon.id);

        return () => { mounted.current = false; }
    }, []);

    return (
        <TouchableOpacity
            activeOpacity={0.75}
            onPress={() => navigation.navigate('PokemonScreen', { pokemon, color })}
        >
            <View
                style={
                {
                    ...styles.container,
                    width: width * 0.4,
                    backgroundColor: color
                }}
            >
                <View>
                    <Text style={styles.name}>
                        {pokemon.name}
                        {`\n#${pokemon.id}`}
                    </Text>
                </View>
                <View
                    style={styles.pokeballContainer}
                >
                    <Image
                        source={require('../../assets/pokeball-white.png')}
                        style={styles.pokeball}
                    />
                </View>
                <FadeInImage
                    uri={pokemon.picture}
                    style={{ ...styles.pokemon }}
                />
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create(
{
    container:
    {
        marginHorizontal: 10,
        width: 160,
        height: 120,
        marginBottom: 25,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset:
        {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    name:
    {
        marginHorizontal: 10,
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold',
        top: 20
    },
    pokeballContainer:
    {
        width: 100,
        height: 100,
        position: 'absolute',
        bottom: 0,
        right: 0,
        opacity: 0.5,
        overflow: 'hidden'
    },
    pokeball:
    {
        width: 100,
        height: 100,
        position: 'absolute',
        bottom: -25,
        right: -25
    },
    pokemon:
    {
        width: 120,
        height: 120,
        position: 'absolute',
        bottom: -5,
        right: -5
    }
});

export default PokemonCard;

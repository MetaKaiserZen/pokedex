import { useState, useEffect, useRef } from 'react';

import { PokemonAPI } from '../api/PokemonAPI';

const usePokemonSearch = () =>
{
    const [fetching, setFetching] = useState(true);
    const [pokemon, setPokemon] = useState([]);

    const mapPokemon = (pokemonResult) =>
    {
        const newPokemon = pokemonResult.map(({ name, url }) =>
        {
            const urlArray = url.split('/');

            const id = urlArray[urlArray.length - 2];
            const picture = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

            return { id, name, picture }
        });

        setPokemon(newPokemon);
        setFetching(false);
    }

    const listarPokemon = async () =>
    {
        const { data } = await PokemonAPI.get('https://pokeapi.co/api/v2/pokemon?limit=12000');

        mapPokemon(data.results);
    }

    useEffect(() =>
    {
        setTimeout(() =>
        {
            listarPokemon();
        }, 2000);
    }, []);

    return {
        fetching,
        pokemon
    }
}

export default usePokemonSearch;

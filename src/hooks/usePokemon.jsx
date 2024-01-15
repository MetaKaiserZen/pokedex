import { useState, useEffect } from 'react';

import { PokemonAPI } from '../api/PokemonAPI';

const usePokemon = (id) =>
{
    const [loading, setLoading] = useState(true);
    const [pokemon, setPokemon] = useState({});

    const listarPokemon = async () =>
    {
        const { data } = await PokemonAPI.get(`https://pokeapi.co/api/v2/pokemon/${id}`);

        setPokemon(data);
        setLoading(false);
    }

    useEffect(() =>
    {
        listarPokemon();
    }, []);

    return {
        loading,
        pokemon
    }
}

export default usePokemon;

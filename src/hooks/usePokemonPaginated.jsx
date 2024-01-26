import
{
    useState,
    useEffect,
    useRef
} from 'react';

import { PokemonAPI } from '../api/PokemonAPI';

const usePokemonPaginated = () =>
{
    const [loading, setLoading] = useState(true);
    const [pokemon, setPokemon] = useState([]);
    const [pokemonNull, setPokemonNull] = useState(false);

    const nextPageURL = useRef('https://pokeapi.co/api/v2/pokemon?limit=20');

    const mapPokemon = (pokemonResult) =>
    {
        const newPokemon = pokemonResult.map(({ name, url }) =>
        {
            const urlArray = url.split('/');

            const id = urlArray[urlArray.length - 2];
            const picture = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

            return { id, name, picture }
        });

        setPokemon([ ...pokemon, ...newPokemon ]);
        setLoading(false);
    }

    const listarPokemon = async () =>
    {
        if (pokemonNull === false)
        {
            setLoading(true);

            const { data } = await PokemonAPI.get(nextPageURL.current);

            data.next === null ? setPokemonNull(true) : (nextPageURL.current = data.next);

            mapPokemon(data.results);
        }
        else
        {
            setLoading(false);
        }
    }

    useEffect(() =>
    {
        return () => { listarPokemon(); }
    }, []);

    return {
        loading,
        pokemon,
        listarPokemon
    }
}

export default usePokemonPaginated;

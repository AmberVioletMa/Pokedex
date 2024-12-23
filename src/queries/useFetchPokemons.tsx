import { PokemonBaseInfoType } from "@/components/interfaces";
import { useQuery } from "@tanstack/react-query";

const fetchPokemon = async () => {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0');
    const data = await res.json();
    const sortedData = data.results.sort((a: PokemonBaseInfoType, b: PokemonBaseInfoType) => {
        return a.name.localeCompare(b.name);
    });
    return sortedData;
};

export const useFetchPokemons = () => {
    return useQuery({
        queryKey: ['fetchPokemon'],
        queryFn: fetchPokemon,
    });
};
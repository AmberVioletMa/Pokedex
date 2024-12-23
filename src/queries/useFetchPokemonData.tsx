import { useQuery } from "@tanstack/react-query";

const fetchPokemonData = async (names: string[]) => {
    const fetchPromises = names.map(name => 
        fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`).then(res => res.json())
    );
    const results = await Promise.all(fetchPromises);
    const resultsObject: { [key: string]: any } = {};
    results.forEach((result) => {
        resultsObject[result.name] = result;
    });
    return resultsObject;
};

export const useFetchPokemonsData = (names: string[]) => {
    return useQuery({
        queryKey: ['fetchPokemonData', names.join('-')],
        queryFn:  () =>  fetchPokemonData(names),
    });
};

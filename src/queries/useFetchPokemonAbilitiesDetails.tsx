import { useQuery } from "@tanstack/react-query";

const fetchPokemonAbilitiesDetails = async (ids: string[]) => {
    const fetchPromises = ids.map(id => 
        fetch(`https://pokeapi.co/api/v2/ability/${id}/`).then(res => res.json())
    );
    const results = await Promise.all(fetchPromises);
    const resultsObject: { [key: string]: any } = {};
    results.forEach((result) => {
        resultsObject[result.name] = result;
    });
    return resultsObject;
};

export const useFetchPokemonsAbilitiesDetails = (ids: string[], nameId: string) => {
    if (!ids || !nameId) {
        return { data: null, error: null, isLoading: false };
    }
    const sortedIds = [...ids]?.sort();
    return useQuery({
        queryKey: ['fetchPokemonAbilitiesDetails', nameId, sortedIds],
        queryFn:  () =>  fetchPokemonAbilitiesDetails(sortedIds),
        staleTime: 1000 * 60 * 5, // Cache for 5 minutes
    });
};

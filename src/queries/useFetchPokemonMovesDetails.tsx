import { useQuery } from "@tanstack/react-query";

const fetchPokemonMovesDetails = async (ids: string[]) => {
    const fetchPromises = ids.map(id => 
        fetch(`https://pokeapi.co/api/v2/move/${id}/`).then(res => res.json())
    );
    const results = await Promise.all(fetchPromises);
    const resultsObject: { [key: string]: any } = {};
    results.forEach((result) => {
        resultsObject[result.name] = result;
    });
    return resultsObject;
};

export const useFetchPokemonsMovesDetails = (ids: string[], nameId: string) => {
    if (!ids || !nameId) {
        return { data: null, error: null, isLoading: false };
    }

    const sortedIds = [...ids].sort();
    return useQuery({
        queryKey: ['fetchPokemonMovesDetails', nameId, sortedIds],
        queryFn: () => fetchPokemonMovesDetails(ids),
    });
};

import { useQuery } from "@tanstack/react-query";

const fetchPokemonFormsDetails = async (ids: string[]) => {
    const fetchPromises = ids.map(id => 
        fetch(`https://pokeapi.co/api/v2/pokemon-form/${id}/`).then(res => res.json())
    );
    const results = await Promise.all(fetchPromises);
    const resultsObject: { [key: string]: any } = {};
    results.forEach((result) => {
        resultsObject[result.name] = result;
    });
    return resultsObject;
};

export const useFetchPokemonFormsDetails = (ids: string[], nameId: string) => {
    if (!ids || !nameId) {
        return { data: null, error: null, isLoading: false };
    }
    const sortedIds = [...ids]?.sort();
    return useQuery({
        queryKey: ['fetchPokemonFormsDetails', nameId, sortedIds],
        queryFn:  () =>  fetchPokemonFormsDetails(ids),
        staleTime: 1000 * 60 * 5, // Cache for 5 minutes
    });
};

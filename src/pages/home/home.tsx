import { useFetchPokemonsData, useFetchPokemons } from "@/queries";
import loadingAnimation from '@/assets/loading_pokeball.gif';
import { AnimationContainer, DropdownContainer, HomeContainer, LoadingImageDiv, PokemonCardContainer } from "./home.styled";
import { useEffect, useState, useMemo } from "react";
import { Dropdown, PokemonCard, Modal } from "@/components";
import { PokemonBaseInfoType } from "@/components/interfaces";
import { PokemonModal } from "./partials/pokemonModal";

export const Home = () => {
    const { isPending, data } = useFetchPokemons();
    const [isLoading, setIsLoading] = useState(true);
    const [visiblePokemons, setVisiblePokemons] = useState<Set<string>>(new Set());
    const memoizedData = useMemo(() => data, [data]);
    const [arrayToFetch, setArrayToFetch] = useState<Array<string>>([]);
    const { data: visiblePokemonData }: { data: Record<string, any> | undefined } = useFetchPokemonsData(arrayToFetch);
    const [visiblePokemonDataCopy, setVisiblePokemonDataCopy] = useState<Record<string, any>>({});
    const [typeheadValue, setTypeheadValue] = useState<string>("");
    const [memorizedDataCopy, setMemorizedDataCopy] = useState<Array<PokemonBaseInfoType>>([]);
    const [selectedPokemonIndex, setSelectedPokemonIndex] = useState<number>(-1);


    useEffect(() => {
        if (!isPending) {
            setIsLoading(false);
        }
    }, [isPending]);

    useEffect(() => {
        if (memoizedData) {
            setMemorizedDataCopy(memoizedData);
        }
    }, [memoizedData]);

    useEffect(() => {
        if (memoizedData) {
            setMemorizedDataCopy(typeheadValue !== "" ? memoizedData.filter((pokemon: PokemonBaseInfoType) => pokemon.name.includes(typeheadValue)) : memoizedData);
        }
    }, [typeheadValue, memoizedData]);

    const handleIntersection = (name: string, isIntersecting: boolean) => {
        if (isIntersecting && !visiblePokemons.has(name)) {
            setVisiblePokemons(prev => {
                const newSet = new Set(prev);
                newSet.add(name);
                return newSet;
            });
        }
    };

    useEffect(() => {
        setArrayToFetch(Array.from(visiblePokemons));
    }, [visiblePokemons]);

    useEffect(() => {
        if (selectedPokemonIndex && memorizedDataCopy[selectedPokemonIndex]) {
            if (!visiblePokemons.has(memorizedDataCopy[selectedPokemonIndex].name)) {
                setVisiblePokemons(prev => {
                    const newSet = new Set(prev);
                    newSet.add(memorizedDataCopy[selectedPokemonIndex].name);
                    return newSet;
                });
            }
        }
    }, [selectedPokemonIndex]);

    useEffect(() => {
        if (visiblePokemonData) {
            setVisiblePokemonDataCopy(visiblePokemonData);
        }
    }, [visiblePokemonData]);

    return (
        <HomeContainer>
            <DropdownContainer>
                <Dropdown
                    onChange={(value) => setTypeheadValue(value)}
                    onChangeValue={(value) => setTypeheadValue(value)}
                    options={memorizedDataCopy}
                    displayValue="name"
                    value={typeheadValue}
                    isTypeahead
                    placeholder="Search for a pokemon..."
                />
            </DropdownContainer>
            {(isPending || isLoading) ? (
                <AnimationContainer>
                    <LoadingImageDiv $src={loadingAnimation} />
                </AnimationContainer>
            ) : (<PokemonCardContainer>
                {memorizedDataCopy?.map((pokemon: PokemonBaseInfoType, index: number) => (
                    <div key={pokemon.name}>
                        <PokemonCard
                            name={pokemon.name}
                            onIntersection={handleIntersection}
                            data={visiblePokemonDataCopy?.[pokemon.name]}
                            onClick={() => setSelectedPokemonIndex(index)}
                        />
                    </div>
                ))}
            </PokemonCardContainer>)}
            <Modal
                title={selectedPokemonIndex ? memorizedDataCopy[selectedPokemonIndex]?.name.toUpperCase() : ""}
                handleClose={() => setSelectedPokemonIndex(-1)}
                show={selectedPokemonIndex !== -1}
                modalFitContent
            >
                {selectedPokemonIndex !== -1 && <PokemonModal
                    pokemon={visiblePokemonDataCopy?.[memorizedDataCopy[selectedPokemonIndex]?.name]}
                    goToPrevPokemon={() => setSelectedPokemonIndex((prev) => prev - 1 < 0 ? memorizedDataCopy.length - 1 : prev - 1)}
                    goToNextPokemon={() => setSelectedPokemonIndex((prev) => prev + 1 > memorizedDataCopy.length - 1 ? 0 : prev + 1)}
                />}
            </Modal>
        </HomeContainer>
    );
};

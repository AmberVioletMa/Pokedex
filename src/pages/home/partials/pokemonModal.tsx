import { PokemonType, SpritesType } from "@/components/interfaces";
import { AnimationContainer, ArrowLeft, ArrowRight, ArrowsContainer, ButtonsContainer, DivContainer, DivLeft, DivRight, ImageDiv, ImageDivSmall, LoadingImageDiv, OtherFormContainer, OtherFormsContainer, OtherFormTitle, RightInnerContainer, StadsNumber, StadsRow, StadsTitle } from "./pokemonModal.styled";
import { Chevronrow, Icon, ProgressBar, Titlespill } from "@/components";
import { useState } from "react";
import { useFetchPokemonFormsDetails, useFetchPokemonsAbilitiesDetails, useFetchPokemonsMovesDetails } from "@/queries";
import loadingAnimation from '@/assets/loading_pokeball.gif';

export const PokemonModal = (props: PokemonType) => {
    return (
        <>
            {props.pokemon ? <PokemonModalWithData
                pokemon={props.pokemon}
                goToPrevPokemon={props.goToPrevPokemon}
                goToNextPokemon={props.goToNextPokemon}
            /> : <AnimationContainer>
                <LoadingImageDiv $src={loadingAnimation} />
            </AnimationContainer>}
        </>
    );
};

export const PokemonModalWithData = ({ pokemon, goToPrevPokemon, goToNextPokemon }: PokemonType) => {
    const detailsID = pokemon?.abilities?.map((ability) => ability?.ability?.url.split('/').slice(-2)[0]);
    const { data: abilitiesDetails } = useFetchPokemonsAbilitiesDetails(detailsID, pokemon?.name);
    const movesID = pokemon?.moves?.map((move) => move?.move?.url.split('/').slice(-2)[0]);
    const { data: movesDetails } = useFetchPokemonsMovesDetails(movesID, pokemon?.name);
    const formID = pokemon?.forms?.map((form) => form.url.split('/').slice(-2)[0]);
    const { data: formsDetails } = useFetchPokemonFormsDetails(formID, pokemon?.name);
    const [currentImageSide, setCurrentImageSide] = useState<keyof SpritesType>("front_default");
    const [selectedPill, setSelectedPill] = useState<string>("Abilities");
    return (
        <>
            {pokemon ? <DivContainer>
                <DivLeft>
                    <ButtonsContainer>
                        <Titlespill titles={['Front', 'Back']} onTitleClick={(title: string) => setCurrentImageSide(title === 'Front' ? "front_default" : "back_default")} activeTitle={currentImageSide === 'front_default' ? 'Front' : 'Back'} />
                    </ButtonsContainer>
                    <ArrowsContainer>
                        <ArrowLeft onClick={goToPrevPokemon}>
                            <Icon icon={"ChevronLeftIcon"} type={"outline"} />
                        </ArrowLeft>
                        <ImageDiv $src={typeof pokemon.sprites?.[currentImageSide] === 'string' ? pokemon.sprites[currentImageSide] : null} />
                        <ArrowRight onClick={goToNextPokemon}>
                            <Icon icon={"ChevronRightIcon"} type={"outline"} />
                        </ArrowRight>
                    </ArrowsContainer>
                </DivLeft>
                <DivRight>
                    <Titlespill titles={['Abilities', 'Moves', 'Forms']} onTitleClick={setSelectedPill} activeTitle={selectedPill} />
                    <RightInnerContainer>
                        {selectedPill === 'Abilities' && pokemon?.abilities?.map((ability, index) => (
                            <Chevronrow key={ability?.ability?.name} title={ability?.ability?.name}>
                                {abilitiesDetails && abilitiesDetails[ability?.ability?.name] ? <div>{abilitiesDetails[ability?.ability?.name].effect_entries.find((entry: any) => entry.language.name === 'en')?.effect}</div> : null}
                            </Chevronrow>
                        ))}
                        {selectedPill === 'Moves' && pokemon?.moves?.map((move, index) => (
                            <Chevronrow key={move?.move?.name} title={move?.move?.name}>
                                {movesDetails && movesDetails[move?.move?.name] ? <div>{movesDetails[move?.move?.name].effect_entries.find((entry: any) => entry.language.name === 'en')?.effect}</div> : null}
                                <StadsRow>
                                    <StadsTitle>Acc</StadsTitle>
                                    <ProgressBar percentage={movesDetails?.[move?.move?.name].accuracy || 0} />
                                    <StadsNumber>{movesDetails?.[move?.move?.name].accuracy || 0}</StadsNumber>
                                </StadsRow>
                                <StadsRow>
                                    <StadsTitle>PP</StadsTitle>
                                    <ProgressBar percentage={movesDetails?.[move?.move?.name].pp || 0} />
                                    <StadsNumber>{movesDetails?.[move?.move?.name].pp || 0}</StadsNumber>
                                </StadsRow>
                                <StadsRow>
                                    <StadsTitle>Power</StadsTitle>
                                    <ProgressBar percentage={movesDetails?.[move?.move?.name].power || 0} />
                                    <StadsNumber>{movesDetails?.[move?.move?.name].power || 0}</StadsNumber>
                                </StadsRow>
                            </Chevronrow>
                        ))}
                        <OtherFormsContainer>
                            {selectedPill === 'Forms' && pokemon?.forms?.map((form) => (
                                <OtherFormContainer key={form?.name}>
                                    <OtherFormTitle>{form?.name}</OtherFormTitle>
                                    <ImageDivSmall $src={formsDetails?.[form?.name].sprites?.front_default} />
                                </OtherFormContainer>
                            ))}
                        </OtherFormsContainer>
                    </RightInnerContainer>
                </DivRight>
            </DivContainer> : <AnimationContainer>
                <LoadingImageDiv $src={loadingAnimation} />
            </AnimationContainer>}
        </>
    );
};
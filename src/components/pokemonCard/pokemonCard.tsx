
import { useEffect, useRef } from "react";
import { PokemonCardInterface } from "./pokemonCard.model";
import { CardContainer, CardContainerOut, CardTitle, ImageDiv } from "./pokemonCard.styled";
import loadingAnimation from '@/assets/loading_pokeball.gif';

export const PokemonCard: React.FC<PokemonCardInterface> = ({ name, onIntersection, data, onClick }) => {
    const ref = useRef<HTMLHeadingElement | null>(null);
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            onIntersection(name, entry.isIntersecting);
        }, {
            threshold: 0.5, // 50% visibility before loading
        });

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.disconnect();
            }
        };
    }, [name, onIntersection]);

    return (
        <CardContainerOut key={name} onClick={() => onClick()}>
            <CardContainer ref={ref}>
                <CardTitle>{name}</CardTitle>
                <ImageDiv data-testid='cardImage' $src={data ? data.sprites.front_default : loadingAnimation} $isLoading={ !data } />
            </CardContainer>
        </CardContainerOut>
    );
};

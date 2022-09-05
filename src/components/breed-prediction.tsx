
import React from 'react';
import styled from 'styled-components';

const StyledPredictionContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const BREED_QUESTION_TEXT = "¿What breed is this dog?";
const GUESS_BREED_TEXT = "Our guess: ";


const BreedPrediction = ({ breed }: { breed: string | undefined }) => {

    return (
        <StyledPredictionContainer>
            <div>{BREED_QUESTION_TEXT}</div>
            <div>{breed ? GUESS_BREED_TEXT + breed.toUpperCase() : 'No prediction'}</div>
        </StyledPredictionContainer>
    )
}

export default BreedPrediction;
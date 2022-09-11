
import { CircularProgress } from '@mui/material';
import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { classify } from '../helpers';

const StyledPredictionContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const StyledDivWithMargin = styled.div`
    margin: 0.5rem;
`;

const BREED_QUESTION_TEXT = "Dog's breed guess: ";


const BreedPrediction = ({ breed, imgData, setBreed }: { breed: string | undefined, imgData: any, setBreed: any }) => {
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const getClassification = useCallback(async () => {
        setIsLoading(true);

        const classification = await classify();
        setIsLoading(false);
        if (classification) {
            setBreed(classification);

        }
    }, [setBreed]);

    useEffect(() => {
        console.log('useEffect imgData');
        if (imgData) {
            getClassification();
        }
    }, [imgData, getClassification]);

    return (
        <StyledPredictionContainer>
            <StyledDivWithMargin>{BREED_QUESTION_TEXT}</StyledDivWithMargin>
            <div>{isLoading ? <CircularProgress /> : (breed ? breed.toUpperCase() : 'No prediction')}</div>
        </StyledPredictionContainer>
    )
}

export default BreedPrediction;
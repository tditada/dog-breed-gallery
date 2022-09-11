import React from 'react';
import styled from 'styled-components';

const StyledEmptyDiv = styled.div`
    text-align: center;
    padding: 1em;
    margin: 2em;
`;

const StyledImage = styled.img`
    width: 10rem;
    display: inline-block;
`
const StyledEmptyText = styled.div`
    margin: 1rem;
`;

export const EMPTY_TEXT = 'No similar dogs photos found yet';

const EmptyGallery = () => (
    <StyledEmptyDiv>
        <StyledEmptyText>{EMPTY_TEXT} </StyledEmptyText>
        <StyledImage src="/black-dog.png" alt="" />
    </StyledEmptyDiv>
);

export default EmptyGallery;
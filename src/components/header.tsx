import React from 'react';
import styled from 'styled-components';

const HEADER_TEXT = 'Dog Breed Gallery';

const StyledHeader = styled.header`
    text-align: center;
`;

const Header = () => {
    return (
        <StyledHeader>_
            <h1>{HEADER_TEXT}</h1>
        </StyledHeader>
    );
};

export default Header;

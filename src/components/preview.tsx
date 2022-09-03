import React from 'react';
import styled from 'styled-components';

import ImageIcon from '@mui/icons-material/Image';

const StyledImage = styled.img`
    width: 15rem;
    height: 15rem;
`;

const StyledPreviewContainer = styled.div`
    width: 15rem;
    height: 15rem;
    border: dotted 1px gray;
`;

const StyledImageIcon = styled(ImageIcon)`
    margin: 1rem;
`;

const PREVIEW_TEXT = "Photo preview";

const Preview = ({ imgData }: { imgData: string | ArrayBuffer | null }) => {
    return (<StyledPreviewContainer className="previewPic">
        {imgData ? <StyledImage className="uploaded-dog" src={imgData as string} alt="preview" /> : <div>{PREVIEW_TEXT} <StyledImageIcon /> </div>}
    </StyledPreviewContainer>)
}

export default Preview;
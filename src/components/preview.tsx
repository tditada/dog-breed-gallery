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
    background-color: rgb(113 105 105 / 11%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const StyledImageIcon = styled(ImageIcon)`
    margin: 1rem;
`;

const StyledEmptyPreview = styled.div`
    text-align: center;
`;

const PREVIEW_TEXT = "Photo preview";

const Preview = ({ imgData, isFileImage }: { imgData: string | ArrayBuffer | null, isFileImage: boolean }) => {
    return (
        <StyledPreviewContainer className="previewPic">
            {imgData ?
                <StyledImage className="uploaded-dog" src={imgData as string} alt="preview" /> :
                <StyledEmptyPreview>
                    {isFileImage ?
                        <>
                            <div>{PREVIEW_TEXT} </div>
                            <StyledImageIcon />
                        </> :
                        'File is not an image'
                    }
                </StyledEmptyPreview>
            }
        </StyledPreviewContainer>)
}

export default Preview;
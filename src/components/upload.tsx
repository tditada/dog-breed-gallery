import React, { useState } from 'react';
import styled from 'styled-components';

import Button from '@mui/material/Button';
import PhotoCamera from '@mui/icons-material/PhotoCamera';

import Preview from './preview';

const StyledUpload = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    // border: solid 1px black;
    margin: auto;
    width: fit-content;
`;

const StyledButtonContainer = styled.div`
    margin: 1rem;
    display: flex;
    flex-direction: column;
    text-align: center;
`;

const StyledInput = styled.label`
    margin: 1rem;
`;

const boxSX = {
    backgroundColor: "burlywood",
    "&:hover": {
        backgroundColor: '#c4a276'
    },
};

const StyledExplanationText = styled.div`
    width: 10rem;
    padding-bottom: 1rem;
}`;

const EXPLANATION_TEXT = 'Want to know what breed a dog is and find similar photos?';
const UPLOAD_BUTTON_TEXT = "upload dog";


const Upload = ({ imgData, setBreed, setImgData }: {
    imgData: string | ArrayBuffer | null,
    setBreed: React.Dispatch<React.SetStateAction<string | undefined>>,
    setImgData: React.Dispatch<React.SetStateAction<string | ArrayBuffer | null>>,
}) => {
    const [isFileImage, setIsFileImage] = useState<boolean>(true);

    const onChangePicture = (e: any) => {
        const { files } = e.target;
        const isImage = files.length && files[0].type && files[0].type.split("/")[0] === "image";

        if (files[0] && isImage) {
            setIsFileImage(true);
            const reader = new FileReader();
            reader.addEventListener("load", () => {
                setImgData(reader.result);
            });
            reader.readAsDataURL(e.target.files[0]);
        } else if (files[0] && !isImage) {
            setIsFileImage(false);
            setBreed("");
        }
    };


    return (
        <StyledUpload>
            <StyledButtonContainer>
                <StyledInput htmlFor="contained-button-file">
                    <StyledExplanationText>{EXPLANATION_TEXT}</StyledExplanationText>
                    <input hidden accept="image/*" id="contained-button-file" type="file" onChange={onChangePicture} />
                    <Button sx={boxSX} variant="contained" component="span">
                        <PhotoCamera />
                        {UPLOAD_BUTTON_TEXT}
                    </Button>
                </StyledInput>

            </StyledButtonContainer>
            <Preview imgData={imgData} isFileImage={isFileImage} />
        </StyledUpload>
    );
};

export default Upload;

import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';

import Button from '@mui/material/Button';
import PhotoCamera from '@mui/icons-material/PhotoCamera';

import Preview from './preview';
import BreedPrediction from './breed-prediction';
import { classify } from '../helpers';

const StyledUpload = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    border: solid 1px black;
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

const UPLOAD_BUTTON_TEXT = "upload dog";

const Upload = ({ breed, setBreed }: { breed: string | undefined, setBreed: React.Dispatch<React.SetStateAction<string | undefined>> }) => {
    const [imgData, setImgData] = useState<string | ArrayBuffer | null>(null);
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

    const getClassification = useCallback(async () => {
        const classification = await classify();
        if (classification) {
            setBreed(classification);

        }
    }, [setBreed]);

    useEffect(() => {
        if (imgData) {
            getClassification();
        }
    }, [imgData, getClassification]);

    return (
        <StyledUpload>
            <StyledButtonContainer>
                <StyledInput htmlFor="contained-button-file">
                    <input hidden accept="image/*" id="contained-button-file" type="file" onChange={onChangePicture} />
                    <Button sx={boxSX} variant="contained" component="span">
                        <PhotoCamera />
                        {UPLOAD_BUTTON_TEXT}
                    </Button>
                </StyledInput>
                <BreedPrediction breed={breed} />
            </StyledButtonContainer>
            <Preview imgData={imgData} isFileImage={isFileImage} />
        </StyledUpload>
    );
};

export default Upload;

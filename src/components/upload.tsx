import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';

import Button from '@mui/material/Button';
import PhotoCamera from '@mui/icons-material/PhotoCamera';

import Preview from './preview';
import { classify } from '../helpers';

const StyledUpload = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 1rem 3rem;
`;

const StyledButtonContainer = styled.div`
    margin: 1rem;
`;

const UPLOAD_BUTTON_TEXT = "upload dog photo";

//TODO: loading, errors
const Upload = ({ breed, onBreedPrediction }: { breed: string | undefined, onBreedPrediction: React.Dispatch<React.SetStateAction<string | undefined>> }) => {
    const [imgData, setImgData] = useState<string | ArrayBuffer | null>(null);

    const onChangePicture = (e: any) => {
        if (e.target.files[0]) {
            const reader = new FileReader();
            reader.addEventListener("load", () => {
                setImgData(reader.result);
            });
            reader.readAsDataURL(e.target.files[0]);
        }
    };

    const getClassification = useCallback(async () => {
        const classification = await classify();
        onBreedPrediction(classification);
    }, [onBreedPrediction]);

    useEffect(() => {
        if (imgData) {
            getClassification();
        }
    }, [imgData, getClassification]); //TODO getClassification callback

    return (
        <StyledUpload>
            <StyledButtonContainer>
                <label htmlFor="contained-button-file">
                    <input hidden accept="image/*" id="contained-button-file" type="file" onChange={onChangePicture} />
                    <Button sx={{ 'backgroundColor': 'burlywood' }} variant="contained" component="span">
                        <PhotoCamera />
                        {UPLOAD_BUTTON_TEXT}
                    </Button>
                </label>
                <div>
                    ¿What breed is this dog?
                    {breed ? breed : ''}
                </div>
            </StyledButtonContainer>
            <Preview imgData={imgData} />
        </StyledUpload>
    );
};

export default Upload;

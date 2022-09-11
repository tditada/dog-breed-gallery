import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import InfiniteScroll from "react-infinite-scroll-component";

import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import CircularProgress from '@mui/material/CircularProgress';

const StyledBox = styled(Box)`
  margin: 3em;
`

const StyledError = styled.div`
  text-align: center;
`
const TRY_AGAIN_ERROR = "There was an error, please try again or choose a different image";

const SCROLL_DATA_SIZE = 12;

const BREED_IMAGES_API = (breed: string): string => `https://dog.ceo/api/breed/${breed}/images`

enum SuccessOptions {
  SUCCESS = "success",
  ERROR = "error",
}

type GetBreedType = {
  message: Array<string> | String,
  success: SuccessOptions,
  code?: number,
}

function BreedGallery({ breed }: { breed: string | undefined }) {
  const [images, setImages] = useState<Array<string>>([]);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>();

  const [scrollData, setScrollData] = useState<Array<string>>([]);
  const [hasMoreValue, setHasMoreValue] = useState<boolean>(true);

  const loadScrollData = async () => {
    try {
      setScrollData(images.slice(0, scrollData.length + SCROLL_DATA_SIZE));
    } catch (err) {
      console.log(err);
    }
  };

  const handleOnRowsScrollEnd = () => {
    if (scrollData.length < images.length) {
      setHasMoreValue(true);
      loadScrollData();
    } else {
      setHasMoreValue(false);
    }
  };

  const getData = useCallback(async () => {
    try {
      setLoading(true);

      if (breed) {
        const { data } = await axios.get<GetBreedType>(BREED_IMAGES_API(breed));
        if (Array.isArray(data.message)) {
          setImages(data.message);
          setScrollData(data.message.slice(0, SCROLL_DATA_SIZE));
          setHasMoreValue(data.message.length > SCROLL_DATA_SIZE);
          setError(null);
        }
      }
    } catch (err: any) {
      setImages([]);
      setScrollData([]);
      setHasMoreValue(false);
      setError(err?.response?.data?.message || TRY_AGAIN_ERROR);
    } finally {
      setLoading(false);
    }
  }, [breed]);


  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <div>
      <StyledBox>
        <InfiniteScroll
          dataLength={scrollData.length}
          next={handleOnRowsScrollEnd}
          hasMore={hasMoreValue}
          scrollThreshold={1}
          loader={<CircularProgress />}
          style={{ overflow: "unset" }}
        >
          {isLoading ?
            <CircularProgress data-testid="circular-progress" /> :
            (error ?
              <StyledError>{error}</StyledError> :
              (<ImageList>
                {scrollData.map((dogUrl: string) => (
                  <ImageListItem key={dogUrl}>
                    <img
                      src={`${dogUrl}?w=124&fit=crop&auto=format`}
                      srcSet={`${dogUrl}?w=124&fit=crop&auto=format&dpr=2 2x`}
                      alt={'dog'}
                      loading="lazy"
                    />
                  </ImageListItem>
                ))}
              </ImageList>)
            )
          }
        </InfiniteScroll>
      </StyledBox>

    </div>
  );
}

export default BreedGallery;

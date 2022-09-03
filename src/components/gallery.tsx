import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';

// import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
// import InfiniteScroll from "react-infinite-scroll-component";

const BREED_IMAGES_API = (breed: string): string => `https://dog.ceo/api/breed/${breed}/images`

type GetBreedType = {
  message: Array<string>,
  success: string,
}

function BreedGallery() {
  const [images, setImages] = useState<Array<string>>([]);
  const [currImgs, setCurrImgs] = useState<Array<string>>([]);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>();

  const getData = useCallback(async () => {
    try {
      setLoading(true);
      const { data } = await axios.get<GetBreedType>(BREED_IMAGES_API('hound'));
      setImages(() => data.message);
      setError(null);
    } catch (err: any) {
      setError(err.message);
      setImages([]);
    } finally {
      setLoading(false);
    }
  }, []);


  useEffect(() => {
    getData();
    setCurrImgs(images.slice(0,10));
 }, [getData, images]);

  return (
      <div>
        {/* <Box sx={{ width: 500, height: 450, overflowY: 'scroll' }}> */}
          <ImageList sx={{ width: 500, height: 450 }} rowHeight={164}>
            {/* <InfiniteScroll
              dataLength={currImgs.length}
              next={() => {}}
              hasMore={true}
              loader={<h4>Loading...</h4>}
              scrollableTarget= "scrolableDiv"
            > */}
              {currImgs.map((dogUrl: string) => (
                <ImageListItem key={dogUrl}>
                  <img
                    src={`${dogUrl}?w=248&fit=crop&auto=format`}
                    srcSet={`${dogUrl}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    alt={'dog'}
                    loading="lazy"
                    // style={{ minHeight: 10 }}
                  />
                </ImageListItem>
              ))}
            {/* </InfiniteScroll> */}
          </ImageList>
        {/* </Box> */}
        {error}
        {isLoading}
      </div>
  );
}

export default BreedGallery;

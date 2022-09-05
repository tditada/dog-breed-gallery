import React, { useState } from 'react';
import styled from 'styled-components';
import EmptyGallery from './components/empty-gallery';

import BreedGallery from './components/gallery';
import Header from './components/header';
import Upload from './components/upload';

const StyledAppSection = styled.section`
  background: papayawhip;
`;

const StyledMain = styled.main`
  width: fit-content;
  margin: auto;
`;

const StyledCenteredContainer = styled.div`
  width: fit-content;
  margin: auto;
  padding: 0.5rem;
`;


function App() {
  const [breed, setBreed] = useState<string>();

  return (
    <StyledAppSection>
      <StyledCenteredContainer>
        <Header />
        <StyledMain>
          <Upload breed={breed} setBreed={setBreed} />
          {breed ? <BreedGallery breed={breed} /> : <EmptyGallery />}
        </StyledMain>
      </StyledCenteredContainer>
    </StyledAppSection>
  );
}

export default App;
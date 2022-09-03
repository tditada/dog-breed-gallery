import React, { useState } from 'react';
import styled from 'styled-components';

import BreedGallery from './components/gallery';
import Header from './components/header';
import Upload from './components/upload';

const StyledApp = styled.section`
  padding: 4em;
  background: papayawhip;
`;

function App() {
  const [breed, setBreed] = useState<string>();

  return (
    <StyledApp>
      <Header />
      <main>
        <Upload breed={breed} onBreedPrediction={setBreed} />
        {breed ? <BreedGallery breed={breed} /> : <span> Empty list</span>}
      </main>
    </StyledApp>
  );
}

export default App;

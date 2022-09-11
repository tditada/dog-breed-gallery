import React from 'react';
import { render, screen } from '@testing-library/react';

import App from './app';
import { EMPTY_TEXT } from './components/empty-gallery';
import { HEADER_TEXT } from './components/header';
import { PREVIEW_TEXT_EMPTY } from './components/preview';
import { EMPTY_BREED } from './components/breed-prediction';

describe('happy path', () => {

  test('empty state', () => {
    render(<App />);
    const title = screen.getByText(HEADER_TEXT);
    const input = screen.getByRole('button', { name: "upload dog" });
    const emptyPreview = screen.getByText(PREVIEW_TEXT_EMPTY);
    const emptyBreed = screen.getByText(EMPTY_BREED);
    const emptyGallery = screen.getByText(EMPTY_TEXT);

    expect(title).toBeInTheDocument();
    expect(emptyGallery).toBeInTheDocument();
    expect(emptyPreview).toBeInTheDocument();
    expect(emptyBreed).toBeInTheDocument();
    expect(input).toBeInTheDocument();
  });

  test('users uploads a valid photo', async () => { });
});

describe('errors', () => {
  test('error no breed found', () => { });

  test('error no gallery for breed', () => { });

  test('error invalid upload', () => { });
})

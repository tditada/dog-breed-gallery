# Dog Breed Gallery

App that let's you upload a dog photo, see a preview, classify it's breed and
see a gallery of photos from the same breed. See list of requirements in
[requirements.md](requirements.md)

## Getting Started (How to Launch)

### Deployed

You can access the deployed app in:
[Dog Breed Gallery Vercel](https://dog-breed-gallery.vercel.app/)

### Available Scripts

In the project directory, you can run, after running `yarn` or `npm install`:

#### `yarn start` or `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

#### `yarn test` or `npm test`

Launches the test runner in the interactive watch mode.

## Design Choices

### UX/UI design (Mobile & Web)

I consider a few different design layouts and ended up using the third. The app
is responsive with flex design.

1. _Horizontal_ : Having the screen splitted in two, with upload and preview on
   the left and gallery on the right. This was not good for mobile (it would end
   vertically anyway) and it would scroll only half the screen which was odd.
2. _Vertical but combining upload and classify_: This was mixing concerns about
   uploading and classifying for the user
3. _Vertical with 3 different parts for upload, classification and gallery_: it
   made more moche sense to separate concerns, and the vertical layout would
   work for both mobile and web mainteining the same style. I did try to use the
   horizontal space a bit for browsers with the upload botton on the left of the
   preview, but it is full vertical on mobile.

### Components design

Each component (except `<App>`) is inside `src/components` and has a single file
with styles, constants, types and the react component. I also created a
`helpers.ts` file with the classify functionality, it could be also called just
`classify` or something less generic. Other option could be for each component
to have it's own component folder with different files for constants, helpers,
styles and function component.

#### Hierarchy

1. App
   1. Header
   2. Upload
      1. Preview
   3. Breed Prediction
   4. Empty Gallery
   5. Gallery

#### States

Stateless: Header, Preview and EmptyGallery

1. App: _breed_ and _img_. Passes fn to set them and values.
   1. Upload: error file type
   2. Breed Prediction: is loading prediction
   3. Gallery: images, is loading, error from api, scrollData, hasMore

I moved shared states up to `App`.I used `React Hooks` for state management as
it's a small app and it can be managed just with hooks. I also only use
`useState` and `useEffect` but for a more complex state there's `useReducer`
also or even `useContext`. Other option if it was a bit bigger and complex or
with login would have been `redux`.

### Decisions about setup, libraries and state

1. This project was bootstrapped with
   [Create React App](https://github.com/facebook/create-react-app) with `React`
   and `Typescript`. I choose it because it's a well known library with good
   documentation and works well for small single page apps. Also I feel
   confortable with it and with React.
2. `Styled components` as the styling framework
3. `Jest` and `React testing library` for testing
4. `NaterialUI`. I needed something quick for styling lists and upload buttons.
   Its a good UI library with clear documentation.
5. `Infinite Scroll`:
   [npm package](https://www.npmjs.com/package/react-infinite-scroll-component).
   I searched and this package already handled a lot of inner functionality
   about infinite scroll so it was really useful.

## What I would like to do different

- More testing: I usually try to test more integration of components than units,
  and always have tests looking like the feature requests from the user
  perspective. I left some empty tests in `app.test.tsx`
- Setup: Clean a bit more the prettier, eslint, formatters files and
  functionalities
- Aesthetic design

# Requirements

## Description

Your task is to develop a single-page application using typescript where users
can upload a picture of a dog and see a gallery of pictures of dogs of the same
breed. More specifically, the application should allow users to upload a picture
and see it in a preview. The app should classify a dog present in the image
based on its breed and display the result. Further, the application should
showcase pictures of dogs of the same breed in a gallery below. The gallery
should take all the available screen space and consist of lazy-loaded images.
The images that don’t fit the current screen should be accessible with an
“infinite scroll”-approach.

We will judge the assignment mainly based on completion of scope and code
quality with an emphasis on the latter. Focus on supporting the latest browsers
(we will test it in the latest version of chrome). An aesthetic design can help
differentiate you from other candidates, but it is not a requirement. Our
current tech stacks are based on either React or WebComponents which is why we
expect the assignment to be delivered using either of the two technologies. If
you choose to do it using WebComponents, feel free to use a small library to
help you write the components (we use lit-element ourselves).

- Please spend up to 5 days completing your solution.
- We expect you to write a testable code and some unit tests.
- We would like it to be a clearly documented and readable solution.

## List of requirements

### Functional

1. _Upload_: User should be able to upload a picture of a dog and see a preview
2. _Classification_: User should see the dog breed
3. _Gallery_: User should see a gallery of pictures of dogs of the same breed
   with infinite scroll

### Technical

1. Single-page application
2. Typescript
3. Lazy loading for the gallery
4. React or WebComponents
5. Support latest browsers
6. Documentation
7. Unit tests

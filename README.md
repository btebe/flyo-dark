# Frontend Mentor - Fylo dark theme landing page solution

This is a solution to the [Fylo dark theme landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/fylo-dark-theme-landing-page-5ca5f2d21e82137ec91a50fd). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![desktop](./src/screenshots/desktop.png)
![tablet](./src/screenshots/tablet.png)
![mobile](./src/screenshots/mobile.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- [React](https://reactjs.org/) - JS library

### What I learned

This project was not any different from other projects i have done. They are all the same concept. but what i found abit challenging in this project was how to make the svg background look the same as the picture given in the challenge. I tried many approaches and failed which led me to try a very inefficient way to achieve that. The solution could be seen my css. Also what i found a bit tricky was the overlapping aspect of the grid row sections which in my previous solution would lead to the inability of either one's events-pointer. I have found that there are other ways of overlapping grids that is by using the absolute positioning of one grid section relative to the parent grid and position it appropiately.

To see how you can add code snippets, see below:

```css
.email {
  position: absolute;
  grid-column: 1 / span 2;
  grid-row: 4 / span 3;
  justify-self: center;
}
footer {
  grid-column: 1;
  grid-row: 5;
}
```

### Continued development

I wish to be better at handling svgs and getting the right color linear gradients.

### Useful resources

- [Example resource 1](https://youtu.be/Hf_dDLLmPK8) - This helped with idea of overlaping my grid sections by using absolute positioning

## Author

- Website - [Basma Tebe](https://basma94tebe.wixsite.com/my-site)
- Frontend Mentor - [@btebe](https://www.frontendmentor.io/profile/btebe)

## Acknowledgments

I would like to give my gratitude to Kevin Powel for posting a video on Youtube about absolute positioning in a css grid. Also i would acknowledge the stackoverFlow community for their helpful solutions and tips on various topics on css.

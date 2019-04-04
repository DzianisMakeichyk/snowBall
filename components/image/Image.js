import React from 'react';

import { ImageContainer } from './imageStyles';

const Image = ({ src, srcMobile }) => (
  <ImageContainer>
    <picture>
      <source media="(max-width: 375px)"
        srcSet={`${srcMobile} 1x,
        ${srcMobile} 2x`} />
      <source media="(max-width: 1023px) and (min-width: 376px)"
        srcSet={`${srcMobile} 1x,
        ${srcMobile} 2x`} />
      <source media="(min-width: 1024px) and (max-width: 1280px)"
        srcSet={`${src} 1x,
        ${src} 2x`} />
      <source media="(min-width: 1281px) and (max-width: 1600px)"
        srcSet={`${src} 1x,
        ${src} 2x`} />
      <source media="(min-width: 1601px)"
        srcSet={`${src} 1x,
        ${src} 2x`} />
      <img src={src} alt="" />
    </picture>
  </ImageContainer>
);

export default Image;

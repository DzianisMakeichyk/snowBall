import React from 'react';
import Link from 'next/link';

import { Image } from 'components';

import {
  DescriptionWrapper,
  ItemWrapper,
  Price,
  PriceName
} from './ItemStyles';

class Item extends React.Component {
  render() {
    const { data } = this.props;
    const { name, link, product } = data;

    if (!product) {
      return null;
    }

    const { price, product_image, product_image_resized } = product;
    return (
      <Link as={link} href="/product" passHref prefetch>
        <ItemWrapper>
          <Image src={product_image} srcMobile={product_image_resized} />
          <DescriptionWrapper>
            <PriceName>{name}</PriceName>
            <Price>
              {price ? price + ' kr' : <em>soon</em>}
            </Price>
          </DescriptionWrapper>
        </ItemWrapper>
      </Link>
    );
  }
}

export default Item;

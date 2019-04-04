import styled from 'styled-components';

import { styles } from 'ui/constant/style';

export const ItemWrapper = styled.a`
  border-radius: 5px;
  display: block;
  overflow: hidden;
  position: relative;
  width: 100%;

  @media screen and (min-width: ${styles.mediaQueries.mobile + 1}px) {
    transition: box-shadow .4s ease, transform .4s ease;
  }

  &:hover {
    @media screen and (min-width: ${styles.mediaQueries.mobile + 1}px) {
      box-shadow: 0 4px 0 0 ${styles.colors.yellow};
      transform: translateY(-3px)
    }
  }
`;

export const DescriptionWrapper = styled.div`
  background: ${styles.colors.white};
  display: flex;
  justify-content: space-between;
  padding: 20px;
`;

export const Price = styled.span`
  color: ${styles.colors.grayMiddle};
  background: ${styles.colors.white};
  border-radius: 0 0 0 5px;
  font-size: 15px;
  font-weight: 600;
  letter-spacing: .4px;
  padding: 17px;
  position: absolute;
  right: 0;
  top: 0;
`;

export const PriceName = styled.p`
  color: ${styles.colors.grayMiddle};
  font-size 17px;
  font-weight: 100;
`;

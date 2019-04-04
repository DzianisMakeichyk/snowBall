import styled from 'styled-components';

import { styles } from 'ui/constant/style';

export const Product = styled.div`
  max-width: 1200px;
  margin: 0 auto 150px;

  @media screen and (max-width: ${styles.mediaQueries.mobile - 1}px) {
    margin: 0 auto 50px;
  }
`;
export const ProductWrapper = styled.div`
  align-items: center;
  background: ${styles.colors.white};
  border-radius: 5px;
  box-shadow: 0 4px 10px 0 ${styles.colors.gray};
  display: flex;
  justify-content: center;
  margin: 0 15px;

  @media screen and (max-width: ${styles.mediaQueries.hd - 1}px) {
    flex-wrap: wrap;
  }
`;

export const ProductImageWrapper = styled.div`
  border-radius: 5px;
  box-shadow: 0 4px 10px 0 ${styles.colors.gray};
  max-width: 650px;
  overflow: hidden;
  width: 100%;
`;

export const Loader = styled.div`
  font-size: 2rem;
  margin: 50px;
  text-align: center;
`;

export const ProductInfo = styled.div`
  flex: 1 1 auto;
  padding: 60px;
  
  @media screen and (max-width: ${styles.mediaQueries.hd - 1}px) {
    text-align: center;
  }
`;

export const Heading = styled.h1`
  color: ${styles.colors.text};
  display: inline-block;
  font-size: 54px;
  position: relative;
  z-index: 5;

  @media screen and (max-width: ${styles.mediaQueries.mobile - 1}px) {
  font-size: 42px;
  }
  
  &::after {
    background: ${styles.colors.yellow};
    bottom: 7px;
    content: '';
    height: 15px;
    position: absolute;
    right: -15px;
    width: 90%;
    z-index: -1;
    
    @media screen and (max-width: ${styles.mediaQueries.mobile - 1}px) {
      height: 10px;
    }
  }
`;

export const Price = styled.div`
  text-align: center;
  color: ${styles.colors.black};
  font-size: 44px;
  font-weight: 100;
  strong {
    display: inline-block;
    margin-left: 5px;
  }
`;

export const ProductFooter = styled.div`
  display: flex;
  border-top: 1px solid #dfdfdf;
  padding: 15px 0;
  justify-content: space-between;
  align-items: center;
`;

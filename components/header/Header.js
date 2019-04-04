import React from 'react';
import Link from 'next/link';
import { IconLogo } from 'ui';

import { HeaderContainer } from './HeaderStyles';

class Header extends React.Component {
  render() {
    return (
      <HeaderContainer>
        <Link href="/">
          <a>
            <IconLogo />
          </a>
        </Link>
      </HeaderContainer>
    );
  }
}

export default Header;

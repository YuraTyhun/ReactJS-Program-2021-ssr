import React from 'react';

import HeaderTop from '../HeaderTop';
import HeaderMain from '../../components/HeaderMain';

const Header = () => (
  <header className='header-container'>
    <div className='blur-filter'>
      <HeaderTop />
      <HeaderMain />
    </div>
  </header>
);

export default Header;
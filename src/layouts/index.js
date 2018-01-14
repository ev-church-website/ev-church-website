import React from 'react';
import { containerStyle } from '../styles/base';
import { Helmet } from 'react-helmet';

export default ({ children }) =>
<div css={{ margin: '0 auto'}}>

  <Helmet>

    <title>Eagle Valley Church of Christ</title>

  </Helmet>

  <div css={{backgroundColor: '#8a9eab'}}>

    <header css={[{padding: '1rem', color: 'white', fontSize: '1.5rem'}, containerStyle]}>

      Eagle Valley
      Church of Christ

    </header>

  </div>

  <div>

    {children()}

  </div>

  <div css={{
    backgroundColor: '#8a9eab',
    padding: '.5rem'
  }}>

    <header css={[{color: 'white'}, containerStyle]}>

      © {(new Date()).getFullYear()} Eagle Valley Church of Christ

    </header>

  </div>

</div>
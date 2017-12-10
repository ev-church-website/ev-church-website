import React from 'react';
import { containerStyle } from '../styles/base';

export default ({ children }) =>
<div css={{ margin: '0 auto'}}>

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
    marginTop: '2rem',
    padding: '.5rem'
  }}>

    <header css={[{color: 'white'}, containerStyle]}>

      © 2017 Eagle Valley Church of Christ

    </header>

  </div>

</div>
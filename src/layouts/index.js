import React from 'react';
import { containerStyle } from '../styles/base';

export default ({ children }) =>
<div style={{ margin: '0 auto'}}>

  <div style={{backgroundColor: 'green'}}>

    <header css={[{padding: '1rem', color: 'white', fontSize: '1.5rem'}, containerStyle]}>

      Eagle Valley
      Church of Christ

    </header>

  </div>

  <div>

    {children()}

  </div>

</div>
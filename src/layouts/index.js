import React from 'react';
import * as BaseClasses from '../styles/BaseClasses';
import { Helmet } from 'react-helmet';

export default ({ children }) =>
<div css={{ margin: '0 auto'}}>

  <Helmet>

    <title>Eagle Valley Church of Christ</title>

  </Helmet>

  <div css={{backgroundColor: '#8a9eab'}}>

    <header className={`${BaseClasses.container}`} css={{
      padding: '1rem',
      color: 'white',
      fontSize: '1.5rem'
    }}>

      <div>

        Eagle Valley
        Church of Christ

      </div>

      <div>



      </div>

    </header>

  </div>

  <div>

    {children()}

  </div>

  <div css={{
    backgroundColor: '#8a9eab',
    padding: '.5rem'
  }}>

    <header className={`${BaseClasses.container}`} css={{color: 'white'}}>

      © {(new Date()).getFullYear()} Eagle Valley Church of Christ

    </header>

  </div>

</div>
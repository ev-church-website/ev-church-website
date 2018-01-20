import React from 'react';
import * as BaseClasses from '../styles/BaseClasses';
import { Helmet } from 'react-helmet';
import HeaderLink from '../shared/HeaderLink';
import Colors from '../styles/Colors';

export default ({ children }) =>
<div css={{ margin: '0 auto'}}>

  <Helmet>

    <title>Eagle Valley Church of Christ</title>

  </Helmet>

  <div css={{backgroundColor: Colors.primaryBackground}}>

    <header className={`${BaseClasses.container}`} css={{
      padding: '1rem',
      color: 'white',
      display: 'flex',
      justifyContent: 'space-between',
    }}>

      <div css={{fontSize: '1.5rem'}}>

        Eagle Valley
        Church of Christ

      </div>

      <div css={{display: 'flex'}}>

        <HeaderLink to="/events">
          EVENTS
        </HeaderLink>

        <HeaderLink to="/contact">
          CONTACT
        </HeaderLink>

      </div>

    </header>

  </div>

  <div>

    {children()}

  </div>

  <div css={{
    backgroundColor: Colors.primaryBackground,
    padding: '.5rem'
  }}>

    <header className={`${BaseClasses.container}`} css={{color: 'white'}}>

      © {(new Date()).getFullYear()} Eagle Valley Church of Christ

    </header>

  </div>

</div>
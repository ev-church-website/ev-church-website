import React from 'react';
import * as BaseClasses from '../styles/BaseClasses';
import { Helmet } from 'react-helmet';
import HeaderLink from '../shared/HeaderLink';
import Colors from '../styles/Colors';
import Media from '../styles/Media';
import Headroom from 'react-headroom';

if (typeof window !== 'undefined') {
  // Make scroll behavior of internal links smooth
  require('smooth-scroll')('a[href*="#"]');
}

export default ({ children }) =>
<div css={{ margin: '0 auto'}}>

  <Helmet>

    <title>Eagle Valley Church of Christ</title>

  </Helmet>

  <Headroom>

    <div css={{
      backgroundColor: Colors.primaryBackground,
      boxShadow: '0 0 4px rgba(0,0,0,.14), 0 4px 8px rgba(0,0,0,.28)',
    }}>

      <header className={`${BaseClasses.container}`} css={{
        padding: '1.25rem',
        color: 'white',
        display: 'flex',
        justifyContent: 'space-between',
      }}>

        <div css={{
          fontSize: '1.5rem',
          [Media.phone]: {
            textAlign: 'center',
            width: '100%',
          }
        }}>

          Eagle Valley
          Church of Christ

        </div>

        <div css={{
          display: 'flex',
          alignItems: 'center',
          [Media.phone]: {
            display: 'none',
          }
        }}>

          <HeaderLink to="#about">
            ABOUT
          </HeaderLink>

          <HeaderLink to="#classes">
            CLASSES
          </HeaderLink>

          <HeaderLink to="#missions">
            MISSIONS
          </HeaderLink>

          <HeaderLink to="#events">
            EVENTS
          </HeaderLink>

          <HeaderLink to="#contact">
            CONTACT
          </HeaderLink>

          <HeaderLink to="/focus-in">
            FOCUS-IN
          </HeaderLink>

        </div>

      </header>

    </div>

  </Headroom>

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
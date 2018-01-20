import React from 'react';
import Link from 'gatsby-link';
import * as BaseClasses from '../styles/BaseClasses';

export default () =>
<div className={`${BaseClasses.container}`}>
  <h1>Second Page</h1>
  <Link to="/">back home</Link>
</div>

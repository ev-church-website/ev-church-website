import React from 'react';
import Link from 'gatsby-link';
import { containerStyle } from "../styles/base";

export default () =>
<div css={containerStyle}>
  <h1>Second Page</h1>
  <Link to="/">back home</Link>
</div>

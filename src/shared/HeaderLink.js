import Link from 'gatsby-link';
import Colors from '../styles/Colors';

export default (props) =>
<div css={{
  fontSize: '1rem',
  textAlign: 'center',
  padding: '0 0 0 1.9rem',
  ' a': {
    color: Colors.white,
    textDecoration: 'none'
  }
}}>
  <a href={props.to}>
    {props.children}
  </a>
</div>
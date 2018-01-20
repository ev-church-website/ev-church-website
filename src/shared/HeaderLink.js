import Link from 'gatsby-link';
import Colors from '../styles/Colors';

export default (props) =>
<div css={{
  fontSize: '1rem',
  textAlign: 'center',
  padding: '0 1.5rem 0',
  ' a': {
    color: Colors.white,
    textDecoration: 'none'
  }
}}>
  <Link to={props.to}>
    {props.children}
  </Link>
</div>
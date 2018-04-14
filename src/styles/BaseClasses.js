import { css } from 'glamor';
import Colors from './Colors';

export const container = css({
  maxWidth: 940,
  margin: '0 auto',
});

export const primaryButton = css({

  backgroundColor: Colors.primaryBackground,
  border: 'none',
  color: Colors.white,
  padding: '.5rem 1.5rem',
  textAlign: 'center',
  cursor: 'pointer',
  borderRadius: '5px',

  ':hover': {

    boxShadow: '0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19)'
  }

});

export const inputStyle = css({

  padding: '0 8px'

});

export const link = css({

  color: Colors.linkBlue,
  textDecoration: 'none',

  ':hover': {
    textDecoration: 'underline',
  }

});
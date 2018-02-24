import PropTypes from 'prop-types';
import Media from '../styles/Media';
import { css } from 'glamor';

MessageCard.propTypes = {
  justification: PropTypes.oneOf(['center','right','left']),
  image: PropTypes.string,
};

MessageCard.defaultProps = {
  justification: 'center',
};

const centerPaddingStyle = css({
  width: '70%',
  margin: '0 auto',
  [Media.phone] : {
    width: '100%',
  }
});

function MessageCard(props) {
  return (

    <div css={{
      padding: '2rem 1rem 2rem',
      textAlign: props.justification,
      display: 'flex',
      [Media.phone]: {
        flexFlow: 'column',
        textAlign: 'center',
      }
    }}>

      {(() => {
        if (props.justification === 'left') {
          return buildImage(props);
        }
      })()}

      <div css={{
        width: (props.image ? '70%' : '100%'),
        [Media.phone]: {
          width: '100%'
        }
      }}>


        <div className={`${props.justification === 'center' ? centerPaddingStyle: ''}`}>

          {props.children}

        </div>

      </div>

      {(() => {
        if (props.justification === 'right') {
          return buildImage(props);
        }
      })()}

    </div>

  );
}


function buildImage(props) {

  if (props.image) {

    var padding = {};
    if (props.justification === 'right') {
      padding = {
        paddingLeft: '2rem'
      };
    } else if (props.justification === 'left') {
      padding = {
        paddingRight: '2rem'
      };
    }

    return (

      <div css={[{
        width: '30%',
        [Media.phone]: {
          width: '100%',
          padding: '0 0 1rem',
          order: '-1'
        }
      }, padding]}>

        <img src={props.image} />

      </div>

    );
  }

}

export default MessageCard;


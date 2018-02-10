import PropTypes from 'prop-types';
import ScriptureLink from "./ScriptureLink";

const propTypes = {
  label: PropTypes.string.isRequired,
  width: PropTypes.string,
};

const FormElement = (props) =>
<div css={{
  width: props.width || '100%',
  paddingBottom: '1.5rem',
}}>

  <div>{props.label}</div>

  {props.children}

</div>

FormElement.propTypes = propTypes;

export default FormElement;
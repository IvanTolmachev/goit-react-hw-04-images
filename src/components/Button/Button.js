import PropTypes from 'prop-types';
import { Btn } from './Button.styled';

export function Button({ onClick }) {
  return <Btn onClick={() => onClick()}>Load more</Btn>;
}

Button.propTypes = {
  onClick: PropTypes.func,
};

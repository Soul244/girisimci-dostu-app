import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './HeaderFilterItem.style';

function HeaderFilterItem({ isActive, ...rest }) {
  return (
    <Container isActive={isActive} {...rest} />
  );
}

HeaderFilterItem.defaultProps = {
  isActive: false,
};

HeaderFilterItem.propTypes = {
  isActive: PropTypes.bool,
};

export default HeaderFilterItem;

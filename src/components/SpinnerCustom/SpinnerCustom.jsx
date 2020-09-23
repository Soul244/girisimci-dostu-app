import React from 'react';
import { Spinner } from 'reactstrap';
import { Container } from './SpinnerCustom.style';

function SpinnerCustom({ ...rest }) {
  return (
    <Container>
      <Spinner {...rest} />
    </Container>
  );
}

SpinnerCustom.propTypes = {

};

export default SpinnerCustom;

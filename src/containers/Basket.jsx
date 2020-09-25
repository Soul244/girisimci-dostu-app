import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Button, Popover, PopoverHeader, PopoverBody
} from 'reactstrap';
import { Container } from './Basket.style';

function Basket(props) {
  const [popoverOpen, setPopoverOpen] = useState(false);
  const popoverToggle = () => setPopoverOpen(!popoverOpen);
  return (
    <Container>
      <Button id="basket" type="button" color="success">
        🛒
      </Button>
      <Popover placement="bottom" isOpen={popoverOpen} target="basket" toggle={popoverToggle}>
        <PopoverHeader>Popover Title</PopoverHeader>
        <PopoverBody>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</PopoverBody>
      </Popover>
    </Container>
  );
}

Basket.propTypes = {

};

export default Basket;

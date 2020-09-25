import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import {
  CardBody,
  CardHeader,
  Input,
  Form,
  FormGroup,
  Label,
  Button,
  Row,
  Col,
} from 'reactstrap';

import { CardStyled } from './Sidebar.style';

function Sidebar({
  onSidebarSubmit, setSidebarFilters, sidebarFilters, clearFilters,
}) {
  const [brands, setBrands] = useState([]);

  const onChangeInputs = (event) => {
    const { name, value } = event.target;
    setSidebarFilters({
      ...sidebarFilters,
      [name]: value,
    });
  };

  const onChangeBrand = (event) => {
    const { value } = event.target;
    const index = sidebarFilters.brands.findIndex((brand) => brand === value);
    // if added before, remove element from array
    if (index > -1) {
      setSidebarFilters({
        ...sidebarFilters,
        brands: [...sidebarFilters.brands.slice(0, index), ...sidebarFilters.brands.slice(index + 1)],
      });
    } else {
      setSidebarFilters({
        ...sidebarFilters,
        brands: [...sidebarFilters.brands, event.target.value],
      });
    }
  };

  useEffect(() => {
    async function getBrands() {
      const config = {
        method: 'get',
        url: 'brands',
      };
      const result = await axios(config);
      setBrands(result.data);
    }
    getBrands();
  }, []);

  return (
    <Form onSubmit={onSidebarSubmit}>
      <CardStyled>
        <CardHeader>Price</CardHeader>
        <CardBody>
          <Row>
            <Col>
              <Input type="number" name="minPrice" placeholder="Min" min="0" max={sidebarFilters.maxPrice} onChange={onChangeInputs} value={sidebarFilters.minPrice} />
            </Col>
            <Col>
              <Input type="number" name="maxPrice" placeholder="Max" min={sidebarFilters.minPrice || '0'} onChange={onChangeInputs} value={sidebarFilters.maxPrice} />
            </Col>
          </Row>
        </CardBody>
      </CardStyled>
      <CardStyled>
        <CardHeader>Brands</CardHeader>
        <CardBody>
          {brands.map((brand) => (
            <FormGroup key={brand._id} check>
              <Label check>
                <Input
                  type="checkbox"
                  checked={sidebarFilters.brands.includes(brand.name)}
                  name={brand.name}
                  onChange={onChangeBrand}
                  value={brand.name}
                />
                {brand.name}
              </Label>
            </FormGroup>
          ))}
        </CardBody>
      </CardStyled>
      <CardStyled>
        <CardHeader>Reviews</CardHeader>
        <CardBody>
          {['1', '2', '3', '4', '5'].map((review) => (
            <FormGroup key={`${review} - review`} check>
              <Label check>
                <Input
                  type="radio"
                  name="review"
                  checked={sidebarFilters.review === review}
                  onChange={onChangeInputs}
                  value={review}
                />
                {`${review} stars and up`}
              </Label>
            </FormGroup>
          ))}
        </CardBody>
      </CardStyled>
      <Button>Submit</Button>
      {' '}
      <Button color="danger" onClick={clearFilters}>Clear Filters</Button>
    </Form>
  );
}

Sidebar.propTypes = {
  onSidebarSubmit: PropTypes.func.isRequired,
  setSidebarFilters: PropTypes.func.isRequired,
  sidebarFilters: PropTypes.shape({
    minPrice: PropTypes.string.isRequired,
    maxPrice: PropTypes.string.isRequired,
    review: PropTypes.string.isRequired,
    brands: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  clearFilters: PropTypes.func.isRequired,
};

export default Sidebar;

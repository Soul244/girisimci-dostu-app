import React, { useState, useEffect, useRef } from 'react';
import {
  Container, Row, Col, Badge
} from 'reactstrap';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroller';

import HeaderFilterContainer from './containers/HeaderFilterContainer';
import ProductItem from './components/ProductItem';
import Sidebar from './containers/Sidebar';
import ProductModal from './components/ProductModal';
import SpinnerCustom from './components/SpinnerCustom';

const defaultHeaderFilters = {
  sales: null,
  date: null,
  price: null,
};

const defaultSidebarFilters = {
  minPrice: '',
  maxPrice: '',
  review: '',
  brands: [],
};

Object.filter = (obj, cb) => Object.keys(obj)
  .filter((key) => cb(obj[key]))
  .reduce((res, key) => {
    res[key] = obj[key];
    return res;
  }, {});

function handleFilters(params) {
  const filteredParams = Object.filter(params, (param) => {
    if (Array.isArray(param) && param.length > 0) {
      return param;
    }
    if (!Array.isArray(param) && param) {
      return param;
    }
    return null;
  });
  return filteredParams;
}

function App() {
  const [products, setProducts] = useState([]);
  const [productCount, setProductCount] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [headerFilters, setHeaderFilters] = useState(defaultHeaderFilters);
  const [sidebarFilters, setSidebarFilters] = useState(defaultSidebarFilters);
  const [clickedProductId, setClickedProductId] = useState(null);
  const [modal, setModal] = useState(false);

  const scroll = useRef();

  const modalToggle = () => setModal(!modal);

  const handleInfiniteScroll = async (page) => {
    const params = {
      page,
      ...handleFilters({ ...headerFilters, ...sidebarFilters }),
    };
    const config = {
      method: 'get',
      url: 'products',
      params,
    };
    const result = await axios(config);
    setProducts((oldProducts) => [...oldProducts, ...result.data.products]);
    setHasMore(result.data.hasMore);
    setProductCount(result.data.count);
  };

  const handleHeaderFilter = async ({ filter, sort = 'desc' }) => {
    setHeaderFilters({
      ...defaultHeaderFilters,
      [filter]: sort,
    });
  };

  const clearFilters = () => {
    setSidebarFilters(defaultSidebarFilters);
    setHeaderFilters(defaultHeaderFilters);
  };

  const reset = () => {
    setProducts([]);
    setHasMore(true);
    scroll.current.pageLoaded = 0;
  };

  const onSidebarSubmit = (event) => {
    event.preventDefault();
    reset();
  };

  const handleClickedProduct = (productId) => {
    setClickedProductId(productId);
    modalToggle();
  };

  // clear products when headerFilters changes
  useEffect(() => {
    Object.filter(headerFilters, (headerFilter) => {
      if (headerFilter) {
        reset();
      }
    });
  }, [headerFilters]);

  return (
    <Container fluid="md">
      <Row noGutters>
        <Col lg="3">
          <Sidebar
            onSidebarSubmit={onSidebarSubmit}
            setSidebarFilters={setSidebarFilters}
            sidebarFilters={sidebarFilters}
            clearFilters={clearFilters}
          />
        </Col>
        <Col lg="9">
          <HeaderFilterContainer
            handleHeaderFilter={handleHeaderFilter}
            headerFilters={headerFilters}
          />
          <Badge
            color="success"
            style={{
              borderRadius: '16px',
              padding: '0.375rem 0.875rem',
              marginBottom: '1rem',
            }}
          >
            Found Products Count:
            {' '}
            {productCount}
          </Badge>
          <InfiniteScroll
            loadMore={handleInfiniteScroll}
            hasMore={hasMore}
            loader={<SpinnerCustom type="grow" color="primary" key={0} />}
            ref={scroll}
          >
            <Row noGutters>
              {products.map((product, index) => (
                <Col xs="12" sm="4" key={product._id}>
                  <ProductItem
                    isBiggerWhenMobile={index % 5 === 0}
                    onClick={() => handleClickedProduct(product._id)}
                    {...product}
                  />
                </Col>
              ))}
            </Row>
          </InfiniteScroll>
        </Col>
      </Row>
      <ProductModal
        isOpen={modal}
        toggle={modalToggle}
        productId={clickedProductId}
      />
    </Container>
  );
}

export default App;

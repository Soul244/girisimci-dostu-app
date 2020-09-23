import React from 'react';
import PropTypes from 'prop-types';
import HeaderFilter from '../components/HeaderFilter/HeaderFilter';
import HeaderFilterItem from '../components/HeaderFilter/HeaderFilterItem';

function HeaderFilterContainer({ handleHeaderFilter, headerFilters }) {
  return (
    <HeaderFilter>
      <HeaderFilterItem onClick={() => handleHeaderFilter({ filter: 'sales' })} isActive={!!headerFilters.sales}>Most sales</HeaderFilterItem>
      <HeaderFilterItem onClick={() => handleHeaderFilter({ filter: 'date' })} isActive={!!headerFilters.date}>New</HeaderFilterItem>
      <HeaderFilterItem onClick={() => handleHeaderFilter({ filter: 'price', sort: 'asc' })} isActive={headerFilters.price === 'asc'}>Lowest price</HeaderFilterItem>
      <HeaderFilterItem onClick={() => handleHeaderFilter({ filter: 'price' })} isActive={headerFilters.price === 'desc'}>Highest price</HeaderFilterItem>
    </HeaderFilter>
  );
}

HeaderFilterContainer.propTypes = {
  handleHeaderFilter: PropTypes.func.isRequired,
  headerFilters: PropTypes.shape({
    sales: PropTypes.oneOf(['asc', 'desc']),
    date: PropTypes.oneOf(['asc', 'desc']),
    price: PropTypes.oneOf(['asc', 'desc']),
  }).isRequired,
};

export default HeaderFilterContainer;

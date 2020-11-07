import React from 'react';
import PropTypes from 'prop-types';
import StarRatings from 'react-star-ratings';

import {
  Container, ContainerInner, ImageContainer, Image, Name, RatingContainer, OldPrice, Price, Sales, ReviewCount, Button, PriceContainer
} from './ProductItem.style';

function ProductItem({
  name, image, price, reviewCount, reviewAvarage, sales, ...rest
}) {
  return (
    <Container {...rest}>
      <ImageContainer>
        <Image src={image} alt={name} />
      </ImageContainer>
      <ContainerInner>
        <Name>{name}</Name>
        <Sales>{`Sales: ${sales}`}</Sales>
        <RatingContainer>
          <StarRatings
            starDimension="20px"
            starSpacing="2px"
            rating={reviewAvarage}
            starRatedColor="#FFA900"
            numberOfStars={5}
            name="rating"
          />
          <ReviewCount>
            {reviewCount}
          </ReviewCount>
        </RatingContainer>
        <PriceContainer>
          <OldPrice>{`${Math.ceil(price * 1.10)} $`}</OldPrice>
          <Price>{`${price} $`}</Price>
        </PriceContainer>
        <Button>Details</Button>
      </ContainerInner>
    </Container>
  );
}

ProductItem.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  reviewCount: PropTypes.number.isRequired,
  reviewAvarage: PropTypes.number.isRequired,
  sales: PropTypes.number.isRequired
};

export default ProductItem;

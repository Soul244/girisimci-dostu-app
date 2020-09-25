import React from 'react';
import PropTypes from 'prop-types';
import StarRatings from 'react-star-ratings';

import {
  Container, ContainerInner, Image, FlexRow, Name, RatingContainer, OldPrice, Price, Sales, ReviewCount,
} from './ProductItem.style';

function ProductItem({
  name, image, price, reviewCount, reviewAvarage, sales, ...rest
}) {
  const imageString = image.split('/');
  imageString[3] = '32';
  imageString[4] = '24';
  const thumbImage = imageString.reduce((acc, text, index) => {
    if (index === 0) {
      return text;
    }
    return `${acc}/${text}`;
  }, '');

  return (
    <Container {...rest}>
      <Image src={image} thumbImage={thumbImage} alt={name} />
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
        <FlexRow>
          <OldPrice>{`${Math.ceil(price * 1.10)} $`}</OldPrice>
          <Price>{`${price} $`}</Price>
        </FlexRow>
      </ContainerInner>
    </Container>
  );
}

ProductItem.defaultProps = {
  reviewAvg: null,
};

ProductItem.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  review: PropTypes.number,
  reviewAvg: PropTypes.number,
};

export default ProductItem;

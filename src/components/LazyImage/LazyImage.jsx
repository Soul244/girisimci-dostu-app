import React from 'react';
import PropTypes from 'prop-types';

import { Image, ThumbImage } from './LazyImage.style';

const LazyImage = ({ thumbImage, src, ...rest }) => {
  const [isLoaded, setIsLoaded] = React.useState(false);

  return (
    <div style={{ position: 'relative' }}>
      <ThumbImage
        src="/thumb.png"
        alt={rest.alt}
        style={{ visibility: isLoaded ? 'hidden' : 'visible' }}
        {...rest}
      />
      <Image
        onLoad={() => {
          setIsLoaded(true);
        }}
        style={{ opacity: isLoaded ? 1 : 0 }}
        src={src}
        {...rest}
      />
    </div>
  );
};

LazyImage.propTypes = {
  thumbImage: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
};

export default LazyImage;

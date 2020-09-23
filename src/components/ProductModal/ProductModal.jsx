import React, { useEffect, useState } from 'react';
import {
  Modal, ModalHeader, ModalBody, ModalFooter, Button,
} from 'reactstrap';
import axios from 'axios';
import { Image } from './ProductModal.style';

function ProductModal({ isOpen, toggle, productId }) {
  const [product, setProduct] = useState(null);
  useEffect(() => {
    const getProduct = async () => {
      const config = {
        method: 'get',
        url: `products/${productId}`,
      };
      const result = await axios(config);
      setProduct(result.data);
    };
    if (isOpen && productId) {
      getProduct();
    }
  }, [isOpen, productId]);

  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      {product && (
      <>
        <ModalHeader toggle={toggle}>{product.name}</ModalHeader>
        <Image src={product.image} />
        <ModalBody>
          {product.details}
        </ModalBody>
        <ModalFooter>
          <Button>
            Add to basket
          </Button>
        </ModalFooter>
      </>
      )}
    </Modal>
  );
}

ProductModal.defaultProps = {
  productId: null,
};

ProductModal.propTypes = {

};

export default ProductModal;

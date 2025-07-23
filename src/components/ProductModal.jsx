import React, { useState } from 'react';
import { Modal, Button, Carousel } from 'react-bootstrap';
import { FaWhatsapp, FaDollarSign } from 'react-icons/fa';
import imageLoader from '../imageLoader';
import '../styles/ProductModal.css';

const ProductModal = ({ product, show, onHide }) => {
  if (!product) return null;

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const whatsappNumber = '5491160399835';
  const message = `Hola, me gustaría consultar por ${product.name}.`;
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(message)}`;

  return (
    <Modal show={show} onHide={onHide} centered size="lg" contentClassName="modal-content">
      <Modal.Header closeButton>
        <Modal.Title>{product.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="modal-body">
              <Carousel interval={null} indicators={false}>
                {product.images.map((image, index) => (
                  <Carousel.Item key={index}>
                    <img
                      className="d-block w-100 modal-image"
                      src={imageLoader[image]}
                      alt={`Product image ${index + 1}`}
                    />
                  </Carousel.Item>
                ))}
              </Carousel>
        <div className="mt-3">
          <p>{product.description}</p>
        </div>
        </div>
      </Modal.Body>
      <Modal.Footer className="d-flex justify-content-between align-items-center">
        <div className="product-modal-price">
          <FaDollarSign className="me-1" />
          {product.price}
        </div>
        <Button href={whatsappUrl} target="_blank" className="product-modal-button">
          <FaWhatsapp className="me-2" />
          Consultar por WhatsApp
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ProductModal;

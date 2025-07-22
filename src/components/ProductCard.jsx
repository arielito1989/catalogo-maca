
import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import '../styles/ProductCard.css';

const ProductCard = ({ name, description, price, image }) => {
  const whatsappNumber = '5491160399835';
  const message = `Hola, me gustaría pedir ${name}.`;
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(message)}`;

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -10, scale: 1.03 }}
      className="h-100"
    >
      <Card className="product-card h-100">
        <Card.Img variant="top" src={image} className="product-card-img" />
        <Card.Body className="d-flex flex-column">
          <Card.Title className="product-card-title">{name}</Card.Title>
          <Card.Text className="product-card-description">{description}</Card.Text>
          <div className="d-flex justify-content-between align-items-center mt-auto">
            <Card.Text className="product-card-price mb-0">{price}</Card.Text>
            <Button 
              href={whatsappUrl} 
              target="_blank" 
              className="product-card-button"
            >
              <FaWhatsapp className="me-2" />
              Pedir por WhatsApp
            </Button>
          </div>
        </Card.Body>
      </Card>
    </motion.div>
  );
};

export default ProductCard;

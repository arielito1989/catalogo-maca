
import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaDollarSign } from 'react-icons/fa';
import '../styles/ProductCard.css';
import imageLoader from '../imageLoader'; // Importa el cargador de imágenes

const ProductCard = ({ name, description, price, image }) => {
  const whatsappNumber = '5491160399835';
  const message = `Hola, me gustaría pedir ${name}.`;
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(message)}`;

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const imageUrl = imageLoader[image]; // Obtiene la URL de la imagen del cargador

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -10, scale: 1.03 }}
      className="h-100"
    >
      <Card className="product-card h-100">
        <Card.Img variant="top" src={imageUrl} className="product-card-img" />
        <Card.Body className="d-flex flex-column">
          <Card.Title className="product-card-title">{name}</Card.Title>
          <Card.Text className="product-card-description">{description}</Card.Text>
          <div className="d-flex justify-content-between align-items-center mt-auto">
            <div className="product-card-price">
              <FaDollarSign className="me-1" />
              {price}
            </div>
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


import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaDollarSign } from 'react-icons/fa';
import '../styles/ProductCard.css';
import imageLoader from '../imageLoader'; // Importa el cargador de imágenes

const ProductCard = ({ product, onShowModal }) => {
  const whatsappNumber = '5491160399835';
  const message = `Hola, me gustaría pedir ${product.name}.`;
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(message)}`;

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  // Obtiene la URL de la primera imagen del producto para la tarjeta
  const imageUrl = imageLoader[product.images[0]]; 

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -8 }}
      className="h-100 product-card-wrapper"
      onClick={() => onShowModal(product)}
    >
      <div className="product-card">
        <div className="product-card-img-container">
          <img src={imageUrl} alt={product.name} className="product-card-img" />
          <div className="product-card-overlay">
            <span className="view-details">Ver Detalles</span>
          </div>
        </div>
        <div className="product-card-body">
          <h3 className="product-card-title">{product.name}</h3>
          <p className="product-card-description">{product.description}</p>
          <div className="product-card-footer">
            <span className="product-card-price">
              <FaDollarSign className="me-1" size={14} />
              {product.price}
            </span>
            <Button 
              href={whatsappUrl} 
              target="_blank" 
              className="product-card-button"
              onClick={(e) => e.stopPropagation()}
            >
              <FaWhatsapp className="me-2" />
              Pedir
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;

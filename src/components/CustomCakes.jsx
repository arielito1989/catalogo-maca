import React, { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { Modal, Carousel } from 'react-bootstrap'; // Importa Modal y Carousel
import '../styles/CustomCakes.css';
import imageLoader from '../imageLoader'; // Importa el cargador de imágenes

const CustomCakes = () => {
  const whatsappNumber = '5491160399835'; // Reemplaza con tu número de WhatsApp
  const message = 'Hola, me gustaría cotizar una torta personalizada.'; // Mensaje predeterminado
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(message)}`;

  // Array de imágenes para la galería de tortas personalizadas
  const customCakeImages = [
    'assets/images/tortas/torta3.jpg',
    'assets/images/tortas/torta4.webp',
    'assets/images/tortas/torta5.webp',
    'assets/images/tortas/torta6.jpg',
    'assets/images/tortas/torta7.webp',
    'assets/images/tortas/torta9.webp',
    'assets/images/tortas/torta11.jpg',
    'assets/images/tortas/torta12.jpg',
    'assets/images/tortas/torta13.jpg',
  ];

  const [showModal, setShowModal] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleImageClick = (index) => {
    setCurrentImageIndex(index);
    setShowModal(true);
  };

  const handleCloseModal = () => setShowModal(false);

  return (
    <section className="custom-cakes-section">
      <div className="custom-cakes-content">
        <h2 className="custom-cakes-title">Crea la Torta de Tus Sueños</h2>
        <p className="custom-cakes-description">
          ¿Tienes una idea para una torta de cumpleaños o un evento especial? ¡Cuéntanos tu sueño y lo haremos realidad! Me especializo en tortas personalizadas, diseñadas a tu gusto y para cualquier ocasión.
        </p>
        <a href={whatsappUrl} className="custom-cakes-cta" target="_blank" rel="noopener noreferrer">
          Contáctanos y pide tu diseño
          <FaWhatsapp className="ms-2" />
        </a>
      </div>
      <div className="custom-cakes-gallery">
        {customCakeImages.map((imagePath, index) => (
          <img
            key={index}
            src={imageLoader[imagePath]}
            alt={`Torta personalizada ${index + 1}`}
            className="gallery-image"
            onClick={() => handleImageClick(index)}
          />
        ))}
      </div>

      {/* Modal para la vista de pantalla completa de las imágenes */}
      <Modal show={showModal} onHide={handleCloseModal} centered size="xl" contentClassName="modal-content">
        <Modal.Header closeButton>
          <Modal.Title>Torta Personalizada</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Carousel activeIndex={currentImageIndex} onSelect={(selectedIndex) => setCurrentImageIndex(selectedIndex)} interval={null} indicators={false}>
            {customCakeImages.map((imagePath, index) => (
              <Carousel.Item key={index}>
                <img
                  className="d-block w-100"
                  src={imageLoader[imagePath]}
                  alt={`Torta personalizada ${index + 1}`}
                  style={{ maxHeight: '80vh', objectFit: 'contain' }}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </Modal.Body>
      </Modal>
    </section>
  );
};

export default CustomCakes;

import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import '../styles/CustomCakes.css';
import imageLoader from '../imageLoader'; // Importa el cargador de imágenes

const CustomCakes = () => {
  const whatsappNumber = '5491160399835'; // Reemplaza con tu número de WhatsApp
  const message = 'Hola, me gustaría cotizar una torta personalizada.'; // Mensaje predeterminado
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(message)}`;

  return (
    <section className="custom-cakes-section">
      <div className="custom-cakes-content">
        <h2 className="custom-cakes-title">Crea la Torta de Tus Sueños</h2>
        <p className="custom-cakes-description">
          ¿Tienes una idea para una torta de cumpleaños o un evento especial? ¡Cuéntanos tu sueño y lo haremos realidad! Nos especializamos en tortas personalizadas, diseñadas a tu gusto y para cualquier ocasión.
        </p>
        <a href={whatsappUrl} className="custom-cakes-cta" target="_blank" rel="noopener noreferrer">
          Contáctanos y pide tu diseño
          <FaWhatsapp className="ms-2" />
        </a>
      </div>
      <div className="custom-cakes-gallery">
        <img src={imageLoader['assets/images/tortas/torta1.jpg']} alt="Torta de ensueño 1" className="gallery-image" />
        <img src={imageLoader['assets/images/tortas/torta2.webp']} alt="Torta de ensueño 2" className="gallery-image" />
        <img src={imageLoader['assets/images/tortas/torta3.jpg']} alt="Torta de ensueño 3" className="gallery-image" />
        <img src={imageLoader['assets/images/tortas/torta4.webp']} alt="Torta de ensueño 4" className="gallery-image" />
      </div>
    </section>
  );
};

export default CustomCakes;

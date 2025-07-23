import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import '../styles/WhatsAppButton.css';

const WhatsAppButton = () => {
  const whatsappNumber = '5491160399835'; // Reemplaza con tu número de WhatsApp
  const message = 'Hola, me gustaría hacer una consulta sobre sus productos.'; // Mensaje predeterminado
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      className="whatsapp-flotante"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
    >
      <FaWhatsapp className="whatsapp-icon" />
    </a>
  );
};

export default WhatsAppButton;

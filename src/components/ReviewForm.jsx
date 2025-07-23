
import React, { useState } from 'react';
import { Form, Button, Card, Modal } from 'react-bootstrap'; // Importar Modal
import { FaStar, FaCheckCircle } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/ReviewForm.css';

const ReviewForm = ({ addReview }) => {
  const [name, setName] = useState('');
  const [review, setReview] = useState('');
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [showSuccessModal, setShowSuccessModal] = useState(false); // Nuevo estado para el modal de éxito

  // TODO: Reemplaza este número con tu número de WhatsApp de negocio, incluyendo el código de país.
  const businessPhoneNumber = '5491122334455'; 

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === '' || review.trim() === '' || rating === 0) {
      alert('Por favor, completa todos los campos y selecciona una calificación.');
      return;
    }

    addReview({ name, review, stars: rating });

    // Limpiar el formulario
    setName('');
    setReview('');
    setRating(0);
    setHover(0);

    // Mostrar el modal de éxito
    setShowSuccessModal(true);

    // Recargar la página y desplazar a la sección de reseñas después de un breve retraso
    setTimeout(() => {
      window.location.reload();
      window.location.hash = 'reviews'; // Desplazar a la sección de reseñas
    }, 2000); // 2 segundos para que el usuario vea el mensaje
  };

  return (
    <Card className="review-form-card mt-5">
      <Card.Body>
        <Card.Title className="text-center mb-4">¡Deja tu propia reseña!</Card.Title>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formReviewName">
            <Form.Label>Tu Nombre</Form.Label>
            <Form.Control 
              type="text" 
              placeholder="Escribe tu nombre" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formReviewRating">
            <Form.Label>Tu Calificación</Form.Label>
            <div className="star-rating">
              {[...Array(5)].map((star, index) => {
                const ratingValue = index + 1;
                return (
                  <label key={index}>
                    <input 
                      type="radio" 
                      name="rating" 
                      value={ratingValue} 
                      onClick={() => setRating(ratingValue)}
                      style={{ display: 'none' }}
                    />
                    <FaStar 
                      className="star"
                      color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                      size={30}
                      onMouseEnter={() => setHover(ratingValue)}
                      onMouseLeave={() => setHover(0)}
                    />
                  </label>
                );
              })}
            </div>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formReviewText">
            <Form.Label>Tu Reseña</Form.Label>
            <Form.Control 
              as="textarea" 
              rows={4} 
              placeholder="Cuéntanos tu experiencia..."
              value={review}
              onChange={(e) => setReview(e.target.value)}
              required
            />
          </Form.Group>

          <div className="d-grid">
            <Button variant="primary" type="submit" className="submit-review-btn">
              Enviar Reseña
            </Button>
          </div>
        </Form>
      </Card.Body>

      {/* Modal de éxito personalizado */}
      <Modal show={showSuccessModal} onHide={() => setShowSuccessModal(false)} centered>
        <Modal.Body className="text-center success-modal-body">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          >
            <FaCheckCircle className="success-icon" />
            <h3>¡Reseña Enviada con Éxito!</h3>
            <p>¡Gracias por compartir tu experiencia!</p>
          </motion.div>
        </Modal.Body>
      </Modal>
    </Card>
  );
};

export default ReviewForm;

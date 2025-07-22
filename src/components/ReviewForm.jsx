
import React, { useState } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import { FaStar, FaCheckCircle } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/ReviewForm.css';

const ReviewForm = ({ addReview }) => {
  const [name, setName] = useState('');
  const [review, setReview] = useState('');
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  // TODO: Reemplaza este número con tu número de WhatsApp de negocio, incluyendo el código de país.
  const businessPhoneNumber = '5491122334455'; 

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === '' || review.trim() === '' || rating === 0) {
      alert('Por favor, completa todos los campos y selecciona una calificación.');
      return;
    }

    addReview({ name, review, stars: rating });

    // Limpiar el formulario y mostrar mensaje de éxito
    setName('');
    setReview('');
    setRating(0);
    setSubmitted(true);

    // Ocultar el mensaje después de 4 segundos
    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
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
        <AnimatePresence>
          {submitted && (
            <motion.div
              className="submission-success-message"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20, transition: { duration: 0.4 } }}
            >
              <FaCheckCircle />
              <span>¡Gracias por tu reseña!</span>
            </motion.div>
          )}
        </AnimatePresence>
      </Card.Body>
    </Card>
  );
};

export default ReviewForm;

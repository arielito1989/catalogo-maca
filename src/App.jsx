import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import ProductCard from './components/ProductCard';
import Reviews from './components/Reviews';
import Footer from './components/Footer';
import ScrollArrows from './components/ScrollArrows';
import ScrollAnimation from './components/ScrollAnimation';
import CustomCakes from './components/CustomCakes';
import WhatsAppButton from './components/WhatsAppButton';
import ProductModal from './components/ProductModal'; // Importar el modal
import InstagramFeed from './components/InstagramFeed';
import './styles/App.css';
import { Container, Row, Col } from 'react-bootstrap';

import productsData from './products.json';

const initialReviews = [
  {
    id: 1,
    name: "Zulma C.",
    review: "¡Todo muy rico, mi hijita siempre complaciendo a su mami jaj",
    stars: 5
  },
  {
    id: 2,
    name: "Kevin N.",
    review: "Que genia maky!!! re rico todo, a mis hijas les encantan tus tortas.",
    stars: 5
  },
  {
    id: 3,
    name: "Yesica",
    review: "Aguanten tus lemon pieeeee!!",
    stars: 5
  }
];

const sectionAnimation = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

function App() {
  const [reviews, setReviews] = useState(() => {
    const savedReviews = localStorage.getItem('reviews');
    let loadedReviews = [];
    if (savedReviews) {
      try {
        loadedReviews = JSON.parse(savedReviews);
        // Asegurarse de que todas las reseñas cargadas tengan un ID
        loadedReviews = loadedReviews.map(review => {
          if (!review.id) {
            return { ...review, id: crypto.randomUUID() }; // Asignar un nuevo ID único
          }
          return review;
        });
      } catch (e) {
        console.error("Error al parsear reseñas de localStorage:", e);
        // Si hay un error al parsear, usar las reseñas iniciales y asegurar IDs
        loadedReviews = initialReviews.map(review => ({ ...review, id: review.id || crypto.randomUUID() }));
      }
    } else {
      // Si no hay reseñas guardadas, usar las iniciales y asegurar IDs
      loadedReviews = initialReviews.map(review => ({ ...review, id: review.id || crypto.randomUUID() }));
    }
    return loadedReviews;
  });
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Guardar reseñas en localStorage cada vez que cambian
  useEffect(() => {
    localStorage.setItem('reviews', JSON.stringify(reviews));
  }, [reviews]);

  const addReview = (newReview) => {
    setReviews((prevReviews) => {
      const reviewWithId = { ...newReview, id: Date.now() }; // Añadir un ID único
      const updatedReviews = [reviewWithId, ...prevReviews];
      // Limitar a 20 reseñas, eliminando las más antiguas
      if (updatedReviews.length > 20) {
        return updatedReviews.slice(0, 20);
      }
      return updatedReviews;
    });
  };

  const handleShowModal = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedProduct(null);
  };

  return (
    <div className="App">
      <Header />
      <Hero />

      <ScrollAnimation animation={sectionAnimation}>
        <About />
      </ScrollAnimation>

      <Container id="catalog" className="my-5">
        <h2 className="text-center display-4 font-weight-bold">Nuestro Catálogo</h2>
        <p className="text-center text-muted mb-5">Hecho con amor, directo a tu mesa.</p>

        {Object.entries(productsData).map(([category, products]) => (
          <ScrollAnimation key={category} animation={sectionAnimation}>
            <div className="mb-5">
              <h3 className="text-capitalize font-weight-bold mb-4">{category.replace(/_/g, ' ')}</h3>
              <Row>
                {products.map((product) => (
                  <Col key={product.id} sm={12} md={6} lg={4} className="mb-4">
                    <ProductCard product={product} onShowModal={handleShowModal} />
                  </Col>
                ))}
              </Row>
            </div>
          </ScrollAnimation>
        ))}
      </Container>

      <ScrollAnimation animation={sectionAnimation}>
        <CustomCakes />
      </ScrollAnimation>

      <ScrollAnimation animation={sectionAnimation}>
        <Reviews reviews={reviews} addReview={addReview} />
      </ScrollAnimation>

      <ScrollAnimation animation={sectionAnimation}>
        <InstagramFeed />
      </ScrollAnimation>

      <ScrollAnimation animation={sectionAnimation}>
        <Footer />
      </ScrollAnimation>

      <WhatsAppButton />
      <ScrollArrows />

      <ProductModal product={selectedProduct} show={showModal} onHide={handleCloseModal} />
    </div>
  );
}

export default App;


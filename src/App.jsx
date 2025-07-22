import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import Reviews from './components/Reviews';
import Footer from './components/Footer';
import ScrollArrows from './components/ScrollArrows';
import ScrollAnimation from './components/ScrollAnimation'; // Importar
import './styles/App.css';
import { Container, Row, Col } from 'react-bootstrap';

import products from './products.json';
import torta1 from './assets/images/tortas/torta1.jpg';
import torta2 from './assets/images/tortas/torta2.webp';
import cookies1 from './assets/images/galletas/cookies1.jpg';
import budin1 from './assets/images/budin/budin1.jpg';
import pandulce1 from './assets/images/pandulce/pandulce1.jpg';
import tarta1 from './assets/images/tartas/tarta1.jpg';

const images = {
  "torta1.jpg": torta1,
  "torta2.webp": torta2,
  "cookies1.jpg": cookies1,
  "budin1.jpg": budin1,
  "pandulce1.jpg": pandulce1,
  "tarta1.jpg": tarta1
};

const initialReviews = [
  {
    name: "Ana Pérez",
    review: "¡Las tortas más ricas que he probado! El bizcocho de chocolate es increíblemente húmedo y el relleno de manjar es perfecto. ¡Súper recomendados!",
    stars: 5
  },
  {
    name: "Carlos Gómez",
    review: "Los cupcakes son una delicia, muy esponjosos y con el dulzor justo. La presentación es impecable. Ideal para regalar (¡o para uno mismo!).",
    stars: 5
  },
  {
    name: "Laura Fernandez",
    review: "Las galletas de avena son mis favoritas. Crujientes, sabrosas y se nota que están hechas con ingredientes de calidad. ¡No puedo parar de comerlas!",
    stars: 5
  }
];

// Definir variantes de animación
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
  const [reviews, setReviews] = useState(initialReviews);

  const addReview = (newReview) => {
    setReviews([newReview, ...reviews]);
  };

  return (
    <div className="App">
      <Header />
      <Hero />
      <ScrollAnimation animation={sectionAnimation}>
        <Container id="catalog">
          <h2 className="text-center my-4">Nuestro Catálogo</h2>
          <p className="text-center text-muted mb-4">Todos los pedidos se coordinan y personalizan a través de WhatsApp para asegurarte el mejor servicio.</p>
          <Row>
            {products.map((product, index) => (
              <Col key={index} sm={12} md={6} lg={4} className="mb-4">
                <ProductCard {...product} image={images[product.image]} />
              </Col>
            ))}
          </Row>
        </Container>
      </ScrollAnimation>
      <ScrollAnimation animation={sectionAnimation}>
        <Reviews reviews={reviews} addReview={addReview} />
      </ScrollAnimation>
      <ScrollAnimation animation={sectionAnimation}>
        <Footer />
      </ScrollAnimation>
      <ScrollArrows />
    </div>
  );
}

export default App;

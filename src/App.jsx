import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import Reviews from './components/Reviews';
import Footer from './components/Footer';
import ScrollArrows from './components/ScrollArrows';
import ScrollAnimation from './components/ScrollAnimation'; // Importar
import CustomCakes from './components/CustomCakes'; // Importar
import WhatsAppButton from './components/WhatsAppButton'; // Importar
import './styles/App.css';
import { Container, Row, Col } from 'react-bootstrap';

import productsData from './products.json';

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
                    <ProductCard {...product} />
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
        <Footer />
      </ScrollAnimation>
      
      <WhatsAppButton />
      <ScrollArrows />
    </div>
  );
}

export default App;


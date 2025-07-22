import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import Reviews from './components/Reviews';
import Footer from './components/Footer';
import ScrollArrows from './components/ScrollArrows';
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

function App() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  return (
    <div className="App">
      <Header />
      <Hero />
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
      <Reviews />
      <Footer />
      <ScrollArrows />
    </div>
  );
}

export default App;

import React from 'react';
import { Container } from 'react-bootstrap';
import { FaInstagram } from 'react-icons/fa';
import '../styles/InstagramFeed.css';

// Import images directly
import img1 from '../assets/images/tortas/torta1.jpg';
import img2 from '../assets/images/tartas/tarta1.jpg';
import img3 from '../assets/images/tortas/brownie1.jpg';
import img4 from '../assets/images/tortas/torta10.jpg';
import img5 from '../assets/images/tartas/tarta3.jpg';
import img6 from '../assets/images/tortas/torta15.jpg';

const InstagramFeed = () => {
    const feedImages = [
        { id: 1, src: img1, alt: "Torta decorada" },
        { id: 2, src: img2, alt: "Tarta frutal" },
        { id: 3, src: img3, alt: "Brownie con dulce de leche" },
        { id: 4, src: img4, alt: "Torta de chocolate" },
        { id: 5, src: img5, alt: "Tarta de frutillas" },
        { id: 6, src: img6, alt: "Torta especial" },
    ];

    const instagramUrl = "https://www.instagram.com/dulces_maquialex/"; // Updated with correct username

    return (
        <section className="instagram-feed-section">
            <Container fluid>
                <h2 className="instagram-title">Síguenos en Instagram</h2>
                <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="instagram-handle">
                    @dulcesmaquialex
                </a>

                <div className="instagram-grid">
                    {feedImages.map((image) => (
                        <a
                            key={image.id}
                            href={instagramUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="instagram-item"
                        >
                            <img src={image.src} alt={image.alt} className="instagram-image" />
                            <div className="instagram-overlay">
                                <FaInstagram className="instagram-icon" />
                            </div>
                        </a>
                    ))}
                </div>

                <div className="instagram-btn-container">
                    <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="instagram-btn">
                        Ver Perfil Completo
                    </a>
                </div>
            </Container>
        </section>
    );
};

export default InstagramFeed;

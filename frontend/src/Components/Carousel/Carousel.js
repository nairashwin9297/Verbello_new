import React, { useState, useEffect } from 'react';
import './Carousel.css'; 

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      image: './images/testimonials/testimonials-1.jpg',
      text: '"Verbello has helped me to get a good grasp of the language in a fun and challenging way. I enjoy the dialogues and scenarios."',
    },
    {
      image: './images/testimonials/testimonials-2.jpg',
      text: '"Great way to learn a language. Fun, interactive, and engaging. Almost like real immersion. I recommened it."',
    },
    {
      image: './images/testimonials/testimonials-3.jpg',
      text: '"An addictively fun and easy way to learn a new language or brush up on language skills! I love it very much."',
    },
    {
      image: './images/testimonials/testimonials-4.jpg',
      text: '"I have really enjoyed learning a new language with Verbello, it made it accessible and fun and fit into my busy time table."',
    },
    {
      image: './images/testimonials/testimonials-5.jpg',
      text: '"With unique features and a clear structure, Verbello is the best free app for learning a new language or sharpening your skills."',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="carousel p-3">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={index === currentSlide ? 'slide active' : 'slide'}
        >
          <img src={slide.image} alt={`Testimonial ${index + 1}`} className="slide-image" />
          <div className="slide-text text-center">
          <p className="slide-description">{slide.text}</p>
            <a href="/signup" className="cta-button">Start Learning Now</a>
          </div>
        </div>
      ))}
      <div className="dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={index === currentSlide ? 'dot active' : 'dot'}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;

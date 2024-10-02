import React, { useState } from 'react';

const Carousel = () => {
  const slides = [
    { id: 1, img: 'https://via.placeholder.com/400x300/1', alt: 'Slide 1' },
    { id: 2, img: 'https://via.placeholder.com/400x300/2', alt: 'Slide 2' },
    { id: 3, img: 'https://via.placeholder.com/400x300/3', alt: 'Slide 3' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full max-w-lg mx-auto">
      <div className="overflow-hidden">
        <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {slides.map((slide) => (
            <div key={slide.id} className="flex-shrink-0 w-full">
              <img src={slide.img} alt={slide.alt} className="w-full" />
            </div>
          ))}
        </div>
      </div>
      <button onClick={prevSlide} className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow">
        ◀
      </button>
      <button onClick={nextSlide} className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow">
        ▶
      </button>
    </div>
  );
};

export default Carousel;
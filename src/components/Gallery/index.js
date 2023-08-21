import React from 'react';
import './style.scss';
import { motion } from 'framer-motion';

function Gallery() {
  const gridVariants = {
    hover: {
      scale: 1.1,
      transition: { duration: 0.3 }
    }
  };

  const imageUrls = [
    'img/base.jpg',
    'img/base_havaDurumu.jpg',
    'img/ekranliversion.jpg',
    'img/hava_istasyonu.jpg',
    'img/kablosuz_kontrol.jpg',
    'img/toprak_nem_sensor.png',
  ];

  return (
    <div id='gallery' className='gallery-container'>

        <div className="gallery-content">
          {imageUrls.map((imageUrl, index) => (
            <div key={index} className="gallery-item">
              <motion.img
                  key={index}
                  src={imageUrl}
                  alt={`Image ${index + 1}`}
                  variants={gridVariants}
                  whileHover="hover"
                />
            </div>
          ))}
        </div>
      
    </div>
  );
}

export default Gallery;

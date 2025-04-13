import React, { useState } from 'react';
import './Main.css'; // Import your CSS file for styling

//Import local images
import andal from '../images/Andal.jpg'
import antiqueKrisha from '../images/Antique-krishna.jpg'
import balatripu from '../images/BalaTSundari.jpg'
import ganapathi from '../images/Ganapathi.jpg'
import grihalakshmi from '../images/Grihalakshmi.jpg'
import mahalakshmi from '../images/Mahalakshmi.jpg'
import murugan from '../images/Murugan.jpg'
import vinayagar from '../images/VINAYAGAR.jpg'
import antiqbtsundari from '../images/AntiBTSundari.jpg'
import mahalakshmig from '../images/Mahalakshmig.jpg'
import radhakrishna from '../images/RadhaKrishna.jpg'
import saraswathy from '../images/Saraswathy.jpg'
import murugang from '../images/Murugan-GP.jpg'

function Main() {
// Sample image data (you can replace with your own image URLs)
  
const [images] = useState([
  { id: 1, url: ganapathi, title: 'Ganapathy' },
  { id: 2, url: murugan, title: 'Murugan' },
  { id: 3, url: saraswathy, title: 'Saraswathi' },
  { id: 4, url: mahalakshmi, title: 'Mahalakshmi' },
  { id: 5, url: grihalakshmi, title: 'Grihalakshmi' },
  { id: 6, url: balatripu, title: 'Bala Thiripura Sundari' },
  { id: 7, url: antiqbtsundari, title: 'Antique Bala Thripura Sundari' },
  { id: 8, url: andal, title: 'Andal' },
  { id: 9, url: antiqueKrisha, title: 'Krishna' },
  { id: 10, url: vinayagar, title: 'Vinayagar' },
  { id: 11, url: mahalakshmig, title: 'Mahalakshmi' },
  { id: 12, url: radhakrishna, title: 'RadhaKrishna - GP' },
  { id: 13, url: murugang, title: 'Murugan - GP' }

]);

const [selectedImage, setSelectedImage] = useState(null);

// Handle image click to show full size
const handleImageClick = (image) => {
  setSelectedImage(image);
};

// Close modal
const closeModal = () => {
  setSelectedImage(null);
};

  return (
    <section>
      <h2>Tanjore Painting</h2>
      <p>Our Tanjore Paintings for your experience.</p>

      <div>
           
      {/* Gallery Grid */}
      <div className="gallery">
        {images.map((image) => (
          <div
            key={image.id}
            className="gallery-item"
            onClick={() => handleImageClick(image)}
          >
            <img src={image.url} alt={image.title} />
            <div className="image-title">{image.title}</div>
          </div>
        ))}
      </div>

      {/* Modal for full-size image */}
      {selectedImage && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content">
            <span className="close">&times;</span>
            <img src={selectedImage.url} alt={selectedImage.title} />
            <p>{selectedImage.title}</p>
          </div>
        </div>
      )}
    </div>    
    </section>
  );
}

export default Main;
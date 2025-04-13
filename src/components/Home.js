import React, {useState,useEffect} from 'react';
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
import deer from '../images/madhubani/Deer.jpg'
import elephant from '../images/madhubani/Elephant.jpg'
import parrot from '../images/madhubani/Parrot.jpg'
import radhaKrishnamb from '../images/madhubani/RadhaKrishna.jpg'
import murugang from '../images/Murugan-GP.jpg'

function Home() {
//Array of images
const images = [
  ganapathi,
  radhaKrishnamb,
  murugan,
  saraswathy,
  parrot,
  mahalakshmi,
  elephant,
  vinayagar,
  antiqbtsundari,
  andal,
  antiqueKrisha,
  balatripu,
  grihalakshmi,
  deer,
  mahalakshmig,
  radhakrishna,
  murugang
];

// State to track current image index
const [currentIndex, setCurrentIndex] = useState(0);

// Delay in milliseconds (e.g., 2000ms = 2 seconds)
const delay = 2000;

// Effect to handle image switching
useEffect(() => {
  const timer = setInterval(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, delay);

  // Cleanup interval on component unmount
  return () => clearInterval(timer);
}, [images.length]);

  return (
    <section>
      <h2>Home</h2>
      <p>Welcome to Meenakshi Art Gallery! Here is a glimpse of our paintings.</p>

      <div style={{ textAlign: 'center' }}>
      <h2>Our Art Works</h2>
      <img
        src={images[currentIndex]}
        alt="Slideshow"
        style={{ width: '275px', height: '275px', borderRadius: '50%', objectFit: 'cover' }}
      />
    </div>
    
    </section>
  );
}

export default Home;
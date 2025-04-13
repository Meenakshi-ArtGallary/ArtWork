import React,{useState} from 'react';
import './Tool.css'; // Import your CSS file for styling

//Import local images
import deer from '../images/madhubani/Deer.jpg'
import elephant from '../images/madhubani/Elephant.jpg'
import parrot from '../images/madhubani/Parrot.jpg'
import radhaKrishna from '../images/madhubani/RadhaKrishna.jpg'

function Tool() {
  // Sample image data (you can replace with your own image URLs)
    
  const [images] = useState([
    { id: 1, url: deer, title: 'Deer' },
    { id: 2, url: elephant, title: 'Elephant' },
    { id: 3, url: parrot, title: 'Parrot' },
    { id: 4, url: radhaKrishna, title: 'RadhaKrishna' }
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
      <h2>Madhubani Painting</h2>
      <p>Our Madhubani Painting for your experience.</p>
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

export default Tool;
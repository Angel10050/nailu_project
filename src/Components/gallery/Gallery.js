import React from 'react'
import '../gallery/StyleGallery.css'

const Gallery = () => {
  return (
    <>
      <h2 className="titles" id="gallery">
        Galería
      </h2>

        <div className="galleryContainer">
                <div className="box a"><img src={require('./img/1.jpeg')} alt="imagen de uñas"></img></div>
                <div className="box b"><img src={require('./img/2.jpeg')} alt="imagen de uñas"></img></div>
                <div className="box c"><img src={require('./img/3.jpg')} alt="imagen de uñas"></img></div>
                <div className="box d"><img src={require('./img/4.jpeg')} alt="imagen de uñas"></img></div>
                <div className="box e"><img src={require('./img/5.jpg')} alt="imagen de uñas"></img></div>
                <div className="box f"><img src={require('./img/6.jpeg')} alt="imagen de uñas"></img></div>
                <div className="box g"><img src={require('./img/7.jpg')} alt="imagen de uñas"></img></div>
                <div className="box h"><img src={require('./img/8.jpeg')} alt="imagen de uñas"></img></div>
                <div className="box i"><img src={require('./img/9.jpg')} alt="imagen de uñas"></img></div>
                <div className="box j"><img src={require('./img/10.jpeg')} alt="imagen de uñas"></img></div>
            </div>
       </>
     );
}

export default Gallery

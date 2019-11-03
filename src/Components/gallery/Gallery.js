import React, {Component } from 'react';
import '../gallery/StyleGallery.css'

const Gallery = () => {
    return ( 
        <div className="galleryContainer">
                <div className="box a"><img src={require('./img/1.jpg')} alt="imagen de uñas"></img></div>
                <div className="box b"><img src={require('./img/2.jpg')} alt="imagen de uñas"></img></div>
                <div className="box c"><img src={require('./img/3.jpg')} alt="imagen de uñas"></img></div>
                <div className="box d"><img src={require('./img/4.jpg')} alt="imagen de uñas"></img></div>
                <div className="box e"><img src={require('./img/5.jpg')} alt="imagen de uñas"></img></div>
                <div className="box f"><img src={require('./img/6.jpg')} alt="imagen de uñas"></img></div>
                <div className="box g"><img src={require('./img/7.jpg')} alt="imagen de uñas"></img></div>
                <div className="box h"><img src={require('./img/8.jpg')} alt="imagen de uñas"></img></div>
                <div className="box i"><img src={require('./img/9.jpg')} alt="imagen de uñas"></img></div>
                <div className="box j"><img src={require('./img/10.jpg')} alt="imagen de uñas"></img></div>
            </div>
     );
}
 

export default Gallery;

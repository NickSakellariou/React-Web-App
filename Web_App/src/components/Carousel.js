import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import img1 from './images/image1.png';
import img2 from './images/image2.jpg';
import img3 from './images/image3.png';
import img4 from './images/image4.jpg';
import img5 from './images/image5.png';
import './App.css';

class ResponsiveCarousel extends Component {
  render() {
    const imageStyle = {
        height: '80vh',
      };
    return (
    <Carousel autoPlay>
        <div>
            <img alt="img1" src={img1} style={imageStyle} />
            <p className="legend"><b>Εθνική Εκστρατεία Εμβολιασμού</b></p>
        </div>
        <div>
            <img alt="img2" src={img2} style={imageStyle} />
            <p className="legend"><b>Εθνικό Επιχειρησιακό Σχέδιο Εμβολιασμού</b></p>
        </div>
        <div>
            <img alt="img3" src={img3} style={imageStyle} />
            <p className="legend"><b>Κλείστε ραντεβού</b></p>
        </div>
        <div>
            <img alt="img4" src={img4} style={imageStyle} />
            <p className="legend"><b>Πως κλείνονται τα ραντεβού;</b></p>
        </div>
        <div>
            <img alt="img5" src={img5} style={imageStyle} />
            <p className="legend"><b>ΜΕΝΟΥΜΕ ΑΣΦΑΛΕΙΣ</b></p>
        </div>
    </Carousel>
  );
}
}

export default ResponsiveCarousel

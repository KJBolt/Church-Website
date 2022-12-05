import React from 'react';
import { Link } from 'react-router-dom';
import FooterExtra from '../components/FooterExtra';
import Navbar from '../components/Navbar';


function About() {
  return (
    <div>
        <Navbar />

        <div className="container shadow-sm" style={{ marginBottom:'20px' }}>
          <div className="about-wrapper">
            <div className="row">
              <div className="ab-left col-md-6 col-sm-12 col-12">
                <div className="ab-content">
                  <h2>Who we are</h2>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                    Eos officiis amet cum quas eum tempora. Asperiores in assumenda consectetur consequuntur 
                    laudantium nobis. Dolores voluptatum quia itaque error quaerat impedit earum nemo dolorem 
                    assumenda quas minima eveniet deserunt eius delectus, nobis quasi blanditiis accusamus? 
                    Laudantium deserunt fuga adipisci cupiditate quo. Quibusdam!
                  </p>

                  <Link to='/teachings'>
                    <button>Study with us</button>
                  </Link>
                  
                </div>
              </div>
              <div className="ab-right col-md-6 col-sm-12 col-12">
                <div className="ab-image">
                  <img src={require('../assets/pastor1.jpg')} alt="" />
                </div>
              </div>
            </div>
          </div>

          <div className="ab-location">
            <div className="row">
              <div className="left col-md-6 col-sm-12 col-12">
                <img src={require('../assets/location.jpg')} alt="" />
              </div>
              <div className="right col-md-6 col-sm-12 col-12">
                <div className="title">
                  <h3>Location</h3>
                  <p>The Christians Main-Branch</p>
                  <p>Otisahele-Street, Accra</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <FooterExtra />
    </div>
  )
}

export default About
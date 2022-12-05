import React from 'react';
import { Link } from 'react-router-dom';

function Featured() {
  return (
    <div className="container">
        <div className="featured-wrapper">
            <div className="title">Hot Topics</div>
        </div>

        <div className="f-content">
            <div className="row">
                <div className="left col-md-6 col-sm-12 col-12">
                    <Link to='/post' style={{ textDecoration:'none', color:'black' }}>
                        <div className="image">
                            <img src={require('../../assets/bible2.jpg')} alt="Network Error" />
                        </div>
                        <div className="date">
                            <h4>January 20, 2022</h4>
                        </div>
                        <div className="desc-title">
                            <p>
                                Jesus Christ is God
                            </p>
                        </div>

                        <div className="desc">
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                                Consequuntur ab ad incidunt minima eos id aliquid laboriosam iste optio delectus!
                            </p>
                        </div>
                    </Link>
                </div>
                <div className="right col-md-6 col-sm-12 col-12">

                    <Link to='/post' style={{ textDecoration:'none', color:'black' }}>
                        <div className="first">
                            <div className="image">
                                <img src={require('../../assets/bible1.jpg')} alt="Network Error" />
                            </div>

                            <div>
                                <div className="date">
                                    <h4>June 20, 2022</h4>
                                </div>
                                <div className="desc-title">
                                    <p>Woman Preaching</p>
                                </div>
                                <div className="desc">
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit Consequuntur ab ad incidunt</p>
                                </div>
                            </div>
                        </div>
                    </Link>

                    <Link to='/post' style={{ textDecoration:'none', color:'black' }}>
                        <div className="first">
                            <div className="image">
                                <img src={require('../../assets/bible3.jpg')} alt="Network Error" />
                            </div>

                            <div>
                                <div className="date">
                                    <h4>October 20, 2022</h4>
                                </div>
                                <div className="desc-title">
                                    <p>Tithes</p>
                                </div>
                                <div className="desc">
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit Consequuntur ab ad incidunt</p>
                                </div>
                            </div>
                        </div>
                    </Link>

                    <Link to='/post' style={{ textDecoration:'none', color:'black' }}>
                        <div className="first">
                            <div className="image">
                                <img src={require('../../assets/bible4.jpg')} alt="Network Error" />
                            </div>

                            <div>
                                <div className="date">
                                    <h4>July 20, 2022</h4>
                                </div>
                                <div className="desc-title">
                                    <p>Tongues</p>
                                </div>
                                <div className="desc">
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit Consequuntur ab ad incidunt</p>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Featured
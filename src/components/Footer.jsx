import React from 'react';

function Footer(props) {
    return (
        <div style={{height:'auto'}}>
            <div className="container">
                <div className="footer-content">
                    <div className="row">
                        <div className="one col-md-4 col-sm-6 col-12">
                            <div className="header">
                                <p>The Christians</p>
                                <p className='first-detail'>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Beatae earum inventore ipsa iusto labore maxime obcaecati,
                                    officiis repellat tempore velit.
                                </p>
                            </div>
                            <div className="icons">
                                <div>
                                    <i className="fa fa-facebook" aria-hidden="true"></i>
                                    <i className="fa fa-youtube-play" aria-hidden="true"></i>
                                </div>
                            </div>
                        </div>

                        <div className="one col-md-4 col-sm-6 col-12">
                            <div className="header">
                                <p>Location</p>
                                <p>
                                    Bubiashie-Otisahele Rd
                                </p>
                                <p>
                                    Greater-Accra
                                </p>
                            </div>
                        </div>
                        <div className="one col-md-4 col-sm-6 col-12">
                            <div className="header">
                                <p>Contact</p>
                                <p>0265896387</p>
                                <p>johnbolt@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Footer;
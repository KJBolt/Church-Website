import React from 'react';
import {Link} from 'react-router-dom';

function SinglePost() {
  return (
    <div className="sp">
        <div className='container'>
                <div className="sp-header">
                    <div className="header-content">
                        <Link to='/' style={{ textDecoration: 'none', color:'black' }}>
                            <div className="left">
                                <h4>Christians</h4>
                            </div>
                        </Link>
                        
                        <Link to='/teachings' style={{ textDecoration: 'none', color:'black' }}>
                            <div className="right">
                                <h5>Return</h5>
                            </div>
                        </Link>
                        
                    </div>
                </div>


                <div className="sp-body">
                    <div className="sp-body-wrapper">
                        <div className="sp-title">
                            <h3>Woman Preaching</h3>
                        </div>
                        <div className="sp-image">
                            <img src={require('../assets/bible1.jpg')} alt="" />
                        </div>
                        <div className="sp-icons">
                            <div className="left">
                                <p>Author: <span>John bolt</span></p>
                            </div>
                            <div className="right">
                                <div className="like">
                                    <i className="fa fa-thumbs-o-up" aria-hidden="true"></i>
                                    <p>20</p>
                                </div>
                                <div className="views">
                                    <i className="fa fa-eye" aria-hidden="true"></i>
                                    <p>10k</p>
                                </div>
                            </div>
                        </div>
                        <div className="sp-desc">
                            <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus, 
                                et inventore voluptatum nemo quisquam amet minima aperiam cupiditate qui 
                                exercitationem eius impedit ipsam culpa! Omnis aspernatur perspiciatis 
                                veritatis distinctio at ut, molestias consectetur, quas, modi fugiat beatae 
                                hic provident asperiores error earum magnam cumque nesciunt illum eos explicabo? 
                                Minus, ad?
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                                Adipisci dolores quidem esse in id amet sed. Quasi dolores ipsam fuga, 
                                ad vero animi, beatae blanditiis, quas rem excepturi ipsa sed quia dolorem? 
                                Veritatis quos provident magni soluta magnam fugiat quis similique, suscipit odit? 
                                Mollitia placeat natus fugit architecto modi suscipit.
                            </p>
                        </div>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default SinglePost